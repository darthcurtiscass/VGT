const mongoose = require('mongoose');

const { Schema } = mongoose;

const leaderboardSchema = new Schema({
    scores: [ userSchema ],
})

const Leaderboard = mongoose.model('leaderboard', leaderboardSchema);

module.exports = Leaderboard;