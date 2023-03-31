import React from 'react';
import { Link } from 'react-router-dom';

const QuizList = ({
    quizzes,
  showTitle = true,
  showUsername = true,
}) => {
    if (!quizzes.length) {
        return <h3>No quizzes Yet</h3>;
      }
return (
    
    <div>
        <Link>
            {quizzes.map((quiz) => (
            <div className="card-body bg-light p-2">
              <p>{quiz.quizName}</p>
            </div>
            ))}
         </Link>
    </div>
  );
            }

            export default QuizList;