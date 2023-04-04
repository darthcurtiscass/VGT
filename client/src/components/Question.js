import React, {useState} from 'react';
import { useMutation } from '@apollo/client';

import { Route, NavLink, Link, Routes } from 'react-router-dom';
import { ADD_RESULT } from '../utils/mutations';


//use state variable for i, instead of defining it as a specific index number.

const QuizList = ({ quiz, score, setScore }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [quizName, setQuizName] = useState({})
    const [addResult, { error, data }] = useMutation(ADD_RESULT);

    

    console.log(quiz)

    const handleSaveScore = async (event) => {
      event.preventDefault();
      console.log("Save score");
      console.log(data)
      const { name, value } = event.target;
      setQuizName({ quizName, [name]: value })
      

      try {
        await addResult({
          variables: { score, quiz: quiz.quizName },
        });
        console.log("Result added successfully");
      } catch (err) {
        console.error(err);
      }
    };

    const handleSelection = async (event) => {
        // console.log(event.target.textContent)
        console.log(quiz.questions)
        if (event.target.textContent === quiz.questions[currentQuestion].answer) {
            console.log("correct!")
            setCurrentQuestion(currentQuestion+1)
            setScore(score+1)
            } else if(event.target.textContent != quiz.questions[currentQuestion].answer) {
                setCurrentQuestion(currentQuestion+1)
                console.log(quiz.questions[currentQuestion])
            } 
            
            
      };

    if (currentQuestion === quiz.questions.length) {
    console.log("No More Questions");
    return (
      <div>

    <div class="card" >
        <img src={quiz.image} className="card-img-top" alt="quiz name" />
        <div class="card-body">
          <h2 class="card-title">{quiz.name}</h2>
          <h6 class="card-text">{score}</h6>
          <a name= "quizName" onClick={handleSaveScore} href="#" class="btn btn-primary">Save Score</a>
        </div>
        </div>
        {/* <button name= "quizName" onClick={handleSaveScore}>SAVE {quiz.quizName}</button> */}
      </div>
    ); 
  }

  return (
    <div key={quiz.id} >

          <div className="card mb-3 ">
            <h4 className="card-header bg-primary text-light p-2 m-0 bg-dark" >
              {quiz.quizName} <br />
            </h4>
            {quiz.questions[currentQuestion].question}
            {quiz.questions[currentQuestion].options.map((options) => (

              <div onClick={handleSelection} key={options}>
                
                  {options}
              <br />
              </div>
            ) )}
          </div>

    </div>
  );

};

export default QuizList;