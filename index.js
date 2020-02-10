require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())
app.use( morgan(function (tokens, req, res) {
    return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'), '-',
        tokens['response-time'](req, res), 'ms',
        Object.keys(req.body).length > 0 ? JSON.stringify(req.body) : ""
    ].join(' ')
}))

const PORT = process.env.PORT
const Person = require("./models/person")

app.get('/api/persons', (req, res) => {
    Person.find({}).then( result => {
        res.json(result.map( person => person.toJSON() ))
    })
})

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
        .then( person => {
            if (person) res.json(person.toJSON())
            else res.status(404).end()
    }).catch( error => next(error))
})

app.delete('/api/persons/:id', (req, res, next) => {
    const id = req.params.id
    Person.findByIdAndRemove(id).then(() => {
        res.status(204).end()
    }).catch( error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
    const person = req.body
    Person.findByIdAndUpdate(req.params.id, person, { new: true })
        .then(updatedPerson => {
            res.json(updatedPerson.toJSON())
        })
        .catch(error => next(error))
})

app.post('/api/persons', (req, res, next) => {
    const newPerson = req.body
    if (!newPerson.name || !newPerson.number ) {
        return res.status(400).json({
            error: 'name or number missing'
        })
    }

    const person = new Person(newPerson)
    person.save()
        .then(response => {
        res.status(201).json(response)
    })
        .catch(error => next(error))
})

app.get('/info', (req, res) => {
    Person.find({}).then( result => {
        const msg = "<p>Phonebook has info for " + result.length + " people<br/>" + new Date() + "</p>"
        res.send(msg)
    })

})

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError' && error.kind === 'ObjectId') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }

    next(error)
}

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})