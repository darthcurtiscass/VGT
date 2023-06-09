const { AuthenticationError } = require('apollo-server-express');
const { User, Quiz } = require('../models');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
      user: async (parent, { userId }) => {
        return User.findOne({ _id: userId }).populate('friends', 'quizes');
      },
      users: async () => {
        return User.find().populate('friends', 'quizes');
      },
      me: async (parent, args, context) => {
        if(context.user){
            return User.findOne({ _id: context.user._id }).populate('friends', 'quizes')
        }
      }  ,
      quiz: async (parent, {quizId}) => {
        return Quiz.findOne( {_id: quizId} ).populate('questions', 'scores')
      },
      quizzes: async () => {
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
    addResult: async (parent, { score, quiz }, context) => {
      try {
        if(context.user) { 
          return User.findOneAndUpdate(
          {_id: context.user._id},
            {
              $addToSet: {
                scores: { score, quiz }
              }
            }
          )
        }
      } catch(err) {
        console.log(err)
        throw new AuthenticationError("couldn't save your score. Your knowledge is lacking. Learn to read.")
      }
    },
    addFriend: async (parent, { friendId }, context) => {
      try {
        if(context.user) {
          return User.findOneAndUpdate(
            { _id: context.user._id },
            {
              $addToSet: {
                friends: { _id: friendId }
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
    // saveQuiz: async (parent, { quizData }, context) => {
    //   try {
    //     if(context.user) {
    //       return User.findOneAndUpdate(
    //         { _id: context.user._id },
    //         {
    //           $addToSet: {
    //             quizes: { quizData }
    //           }
    //         },
    //         {
    //           new: true,
    //           validators: true
    //         }
    //       )
    //     }
    //   } catch(err) {
    //     console.log(err)
    //     throw new AuthenticationError("Not smart enough to save a quiz")
    //   }

    // }
  }
};

module.exports = resolvers;
