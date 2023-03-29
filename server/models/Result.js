const mongoose = require('mongoose');
const { Schema } = mongoose;

const resultSchema = new Schema({
    score: {
        type: Number,
        required: true,
    },
    quiz: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
})

module.exports = resultSchema;