const questionSchema = require('./Question');
const mongoose = require('mongoose');
const { Schema, model } = mongoose;



const quizSchema = new Schema({
    quizName: {
        type: String,
        required: true,
        unique: true
        },
    questions: [questionSchema],
    scores: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        }
    ]
});

const Quiz = mongoose.model('quiz', quizSchema);

module.exports = Quiz;
