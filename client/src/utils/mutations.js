import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login ($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                email
                username
            }
        }
    }`

export const CREATE_USER = gql`
    mutation addUser ($username: String!, $email: String!, $password: String!) {
        addUser (username: $username, email: $email, password: $password) {
            token
            user {
                _id
                email
                username
            }
        }
    }`

export const ADD_RESULT = gql`
    mutation addResult ($score: Int!, $quiz: String) {
        addResult (score: $score, quiz: $quiz) {
            _id
            scores {
                _id
                score
                quiz
            }
        }
    }`

export const ADD_FRIEND = gql`
    mutation addFriend ($friendId: ID!) {
        addFriend (friendId: $friendId) {
            _id
            friends {
                _id
                username
                email
            }
        }
    }`

export const REMOVE_FRIEND = gql`
    mutation removeFriend ($friendId: ID!) {
        removeFriend (friendId: $friendId) {
            _id
            friends {
                _id
                username
                email
            }
        }
    }`