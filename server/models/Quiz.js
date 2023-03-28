// scoreboard has a reference to quiz
const mongoose = require('mongoose');
const userSchema = require('./User')
const { Schema } = mongoose;

const quizSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    questions: [
        {
            type: String,
            required: true
        }
    ],
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
    scores: [ userSchema ]
})


module.exports = quizSchema;