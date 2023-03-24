// scoreboard has a reference to quiz

const mongoose = require('mongoose');

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
    }
    
})

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;