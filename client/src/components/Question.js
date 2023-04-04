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
      setScore(score=0)
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
          <h6 class="card-text">{score/quiz.questions.length * 100}%</h6>
          <a name= "quizName" onClick={handleSaveScore} href="#" class="btn btn-primary">Save Score</a>
        </div>
        </div>
        
      </div>
    ); 
  }

  return (
    <div key={quiz.id} >

          <div className="card mb-3 bg-secondary">
            <h2 className="card-header bg-primary text-light p-2 m-0 bg-dark" >
              {quiz.quizName} <br />
            </h2>
            <h3>{quiz.questions[currentQuestion].question}</h3>
            {quiz.questions[currentQuestion].options.map((options) => (

              <div onClick={handleSelection} key={options}>
                
                <button type="button" className="btn btn-success w-100">{options}</button>
              <br />
              </div>
            ) )}
          </div>
    </div>
  );

};

export default QuizList;