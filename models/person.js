const mongoose = require('mongoose')
const url = process.env.MONGO_URL
const uniqueValidator = require('mongoose-unique-validator');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
const personSchema = new mongoose.Schema({
    name: { type: String, minlength: 3, required: true, unique: true },
    number: { type: String, minlength: 8, required: true }
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

personSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Person', personSchema)