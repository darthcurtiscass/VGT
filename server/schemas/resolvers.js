const { AuthenticationError } = require('apollo-server-express');
const { User, Quiz } = require('../models');
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
      users: async () => {
        return User.find().populate('friends', 'quizes');
      },
      me: async (parent, args, context) => {
        if(context.user){
            return User.findOne({ _id: context.user._id }).populate('friends', 'quizes')
        }
      },
      quiz: async (parent, {quizId}) => {
        return Quiz.findOne( {quizId} ).populate('questions', 'scores')
      },
      quizes: async () => {
        return Quiz.find().populate('questions', 'scores');
      }
  },
  Mutation: {
    addUser: async (parent, {username, email, password}) => {
      const user = await User.create({ username, email, password});
      const token = signToken(user);
      return { token, user }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Email or password incorrect");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addScore: async (parent, { score }, context) => {
      try {
        if(context.user) { 
          return User.findOneAndUpdate(
          {_id: context.user._id},
            {
              $addToSet: {
                scores: { score }
              }
            }
          )
        }
      } catch(err) {
        console.log(err)
        throw new AuthenticationError("couldn't save your score. You know nothing.")
      }
    },
    addFriend: async (parent, { friendId }, context) => {
      try {
        if(context.user) {
          return User.findOneAndUpdate(
            { _id: context.user._id },
            {
              $addToSet: {
                friends: { friendId }
              }
            },
            {
              new: true,
              validators: true
            }
          )
        }
      } catch(err) {
        console.log(err)
        throw new AuthenticationError("nobody wants to be your friend")
      }
    },
    removeFriend: async (parent, { friendId }, context) => {
      try {
        if(context.user) {
          return User.findOneAndUpdate(
            { _id: context.user._id },
            {
              $pull: {
                friends: { friendId }
              },
            },
          )
        }
      } catch(err) {
        console.log(err)
        throw new AuthenticationError("you have a clinger")
      }
    },
    saveQuiz: async (parent, { quizData }, context) => {
      try {
        if(context.user) {
          return User.findOneAndUpdate(
            { _id: context.user._id },
            {
              $addToSet: {
                quizes: { quizData }
              }
            },
            {
              new: true,
              validators: true
            }
          )
        }
      } catch(err) {
        console.log(err)
        throw new AuthenticationError("Not smart enough to save a quiz")
      }

    }
  }
};

module.exports = resolvers;
