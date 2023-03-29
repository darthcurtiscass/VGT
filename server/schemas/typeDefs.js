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

  type Result {
    _id: ID
    score: Int!
    quiz: String!
    userId: ID
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
    scores: [ Result ]
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
    quizzes: [Quiz]
    me: User
    leaderboard: [User]
    users: [User]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addResult(score: Int!, quiz: String!, userId: ID): User
    login(email: String!, password: String!): Auth
    addFriend(friendId: ID!): User
    removeFriend(friendId: ID!): User
  }
`;

module.exports = typeDefs;
