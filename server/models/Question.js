// scoreboard has a reference to question
const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    question: 
        {
            type: String,
            required: true
        },

    options: [
        {
            type: String,
            required: true
        }
    ],
    answer: {
        type: String,
        required: true
    },
})

module.exports = questionSchema;