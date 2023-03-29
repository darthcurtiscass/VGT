const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Question {
    _id: ID
    name: String!
    question: String!
    options:[ String ]!
    answer: String!
    scores: [ User ]
  }

  type Quiz {
    _id: ID
    quizName: String!
    questions: [ Question ]
  }

  type User {
    _id: ID
    username: String!
    email: String!
    scores: [ Int ]
    friends: [ User ]
    quizes: [ Quiz ]
  }

  type Leaderboard {
    _id: ID
    scores: [User]
  }

  input QuestionInfo {
    name: String!
    question: String!
    options:[ String ]!
    answer: String!
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user(username: String!): User
    quiz(quizId: ID): Quiz
    quizes: [Quiz]
    me: User
    leaderboard: [User]
    users: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addScore(score: Int): User
    # addLeaderboard(scores: ): Scoreboard
    login(email: String!, password: String!): Auth
    addFriend(friendId: ID!): User
    removeFriend(friendId: ID!): User
    # saveQuiz(quizData: QuizInfo!): User
  }
`;

module.exports = typeDefs;
