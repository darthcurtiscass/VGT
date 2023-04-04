import { gql } from '@apollo/client';

export const GET_ME = gql`
    query me {
        me {
            _id
            username
            email
            friends {
                _id
                # username
                # email
            }
            scores {
                _id
                score
                quiz
            }
        }
    }`

export const GET_ALL_USERS = gql`
    query users {
        users {
            _id
            username
            scores {
                _id
                score
                quiz
            }
        }
    }`

export const GET_SPECIFIC_USER = gql`
    query user($userId: ID!) {
        user(userId: $userId) {
            _id
            username
            email
            friends {
                _id
                username
                email
            }
            scores {
                _id
                score
                quiz
            }
        }
    }`

export const GET_SPECIFIC_QUIZ = gql`
    query quiz($quizId: ID!) {
        quiz(quizId: $quizId) {
            _id
            quizName
            image
            questions {
                _id
                question
                options
                answer
            }
        }
    }`

export const GET_ALL_QUIZZES = gql`
    query quizzes {
        quizzes {
            _id
            quizName
            image
        }
    }`