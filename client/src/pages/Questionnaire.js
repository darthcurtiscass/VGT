import React from 'react';
import ReactDOM from 'react';
import {Layout, theme} from 'antd';
import Leaderboard from '../components/Leaderboard';

import Question from '../components/Question'

import '../App.css';
import { useQuery }  from '@apollo/client';
import { GET_SPECIFIC_QUIZ } from '../utils/queries'

const Home = () => {
    const { loading, data } = useQuery(GET_SPECIFIC_QUIZ);
    const quiz = data?.quizzes || []

    console.log(data)

    if (!data) return <div>Loading...</div>;

    
    return (
        <main>
          <div className="flex-row justify-center ">
            <div className=" col-md-10 mb-3 p-3 " style={{  }}>
                 <div>
                   <div><h3>Welcome to our website! This is a videogame trivia website made in React and utilizing MongoDB as our database!</h3></div>
                    <p className='container'>
                   Sign up for an account and answer trivia to your heart's desire! Make friends and foes in your journey 
                       to the top of the leader boards!
                   </p>
                </div>
                <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Question
              quiz={quiz}
            />
          )}
        </div>
            </div>
          </div>
        </main>
      );

}


export default Home;