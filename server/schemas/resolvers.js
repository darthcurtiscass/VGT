const { AuthenticationError } = require('apollo-server-express');
const { User, Quiz, } = require('../models');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
      leaderboard: async () => {
        return User.find().populate('quizes');
      },
      user: async (parent, { username }) => {
        return User.findOne({ username }).populate('friends', 'quizes');
      },
      me: async (parent, args, context) => {
        if(context.user){
            return User.findOne({ _id: context.user._id }).populate('friends', 'quizes')
        }
      },
      quiz: async (parent, {name}) => {
        return Quiz.findOne( {name} ).populate('scores')
      },
      quizes: async () => {
        return Quiz.find().populate('scores');
      }

  }
};

module.exports = resolvers;
