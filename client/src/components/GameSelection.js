import { Space } from 'antd';
import React from 'react';

import { Route, NavLink, Link, Routes } from 'react-router-dom';

const QuizList = ({ quizzes, title }) => {
  if (!quizzes.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      {
        quizzes.map((quiz) => (
            <h4 className="btn btn-success bg-gradient border-warning flex-column">
              <NavLink className="text-black text-decoration-none" to={`/quiz/${quiz._id}`} style={{color:'yellow'}}>{quiz.quizName}</NavLink> 
            </h4>
        ))}
    </div>
  );
};

export default QuizList;