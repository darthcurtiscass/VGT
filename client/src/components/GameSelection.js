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

            <h4 className="">
              <NavLink to={`/quiz/${quiz._id}`}>{quiz.quizName}</NavLink> <br />
            </h4>

        ))}
    </div>
  );
};

export default QuizList;