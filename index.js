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

const PORT = process.env.PORT || 3001

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "050-123456",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "045-123456",
        id: 3
    },
    {
        name: "Mary Poppendieck",
        number: "046-123456",
        id: 4
    },
]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if (person) res.json(person)
    else res.status(404).end()
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
    res.status(204).end()
})

app.post('/api/persons', (req, res) => {
    const newPerson = req.body
    if (!newPerson.name || !newPerson.number ) {
        return res.status(400).json({
            error: 'name or number missing'
        })
    }

    if (persons.filter(person => person.name === newPerson.name).length !== 0) {
        return res.status(400).json({
            error: 'name must be unique'
        })
    }

    newPerson.id = Math.floor(Math.random() * Math.floor(10000))
    persons = [ ...persons, newPerson ]
    res.status(201).json(newPerson)
})

app.get('/info', (req, res) => {
    const msg = "<p>Phonebook has info for " + persons.length + " people<br/>" + new Date() + "</p>"
    res.send(msg)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})