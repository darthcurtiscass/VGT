const mongoose = require('mongoose');
const quizSchema = require('./Quiz')
const { Schema, model } = mongoose;
const bcrypt = require('bcrypt');


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 1
  },
  scores: [
    {
      type: Number,
    }
  ],
  friends: [
    {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
  ],
  quizes: [ 
    {
      type: Schema.Types.ObjectId,
      ref: 'quiz'
    },
   ]
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

// add virtual to calculate average score.

const User = mongoose.model('user', userSchema);

module.exports = User;
