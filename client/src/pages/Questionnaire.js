import React from 'react';
import ReactDOM from 'react';
import {Layout, theme} from 'antd';
import { useParams } from 'react-router-dom';
import Leaderboard from '../components/Leaderboard';

import Question from '../components/Question'

import '../App.css';
import { useQuery }  from '@apollo/client';
import { GET_SPECIFIC_QUIZ } from '../utils/queries'


const Quiz = ({score, setScore}) => {
    const { quizId } = useParams();
    const {  loading, data } = useQuery(GET_SPECIFIC_QUIZ, {
        variables: { quizId: quizId},
      });
  
    const quiz = data?.quiz || []

    console.log(data)
    if (!data) return <div>Loading...</div>;

    
    return (
        <main>
          <div className="flex-row justify-center ">
            <div className=" col-md-10 mb-3 p-3 " style={{  }}>
 
                 
                <div className="col-12 col-md-8 mb-3">
          {/* {loading ? (
            <div>Loading...</div>
          ) : ( */}
            <Question
              quiz={quiz}
                score={score}
                setScore={setScore}
            />
          {/* )} */}
        </div>
            </div>
          </div>
        </main>
      );

}


export default Quiz;