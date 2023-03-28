const mongoose = require('mongoose');
const userSchema = require('./User')
const { Schema, model } = mongoose;

const leaderboardSchema = new Schema({
    scores: [
        {
            type: Schema.Types.ObjectId,
            ref: 'user'
        },
      ],
})

const Leaderboard = mongoose.model('leaderboard', leaderboardSchema);

module.exports = Leaderboard;