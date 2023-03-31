import React from 'react';
import { Route, NavLink, Link, Routes } from 'react-router-dom';
let i = 1;

const QuizList = ({ quiz }) => {
  // if (!quiz.length) {
  //   return <h3>No Thoughts Yet</h3>;
  // }  
  // document.getElementById("next").addEventListener("click", i++)
  return (
    <div key={quiz.id}>

          <div className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0 bg-dark">
              {quiz.quizName} <br />
            </h4>
            {quiz.questions[i].question}
            {quiz.questions[i].options.map((options) => (

              <div key={options}>
                  {options}
              <br />
              </div>
            ) )}
          </div>

    </div>
  );

};

export default QuizList;