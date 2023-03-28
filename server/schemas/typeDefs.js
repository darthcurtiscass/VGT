const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Quiz {
    _id: ID
    name: String!
    questions:[ String ]!
    options:[ String ]!
    answer: String!
    scores: [ User ]
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

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user(username: String!): User
    quiz(name: String!): Quiz
    quizes: [Quiz]
    me: User
    leaderboard: [User]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addScore(scores: Int): User
    # addLeaderboard(scores: ): Scoreboard
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
