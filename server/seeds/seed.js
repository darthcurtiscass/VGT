const db = require('../config/connection');
const {Quiz} = require('../models');
const quizSeeds = require('./quizSeeds.json');


db.once('open', async () => {
    await Quiz.deleteMany({});
    await Quiz.create(quizSeeds);
    console.log('seed success');
    process.exit(0);
});

