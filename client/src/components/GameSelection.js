import React from 'react';

const ThoughtList = ({ quizzes, title }) => {
  if (!quizzes.length) {
    return <h3>No Thoughts Yet</h3>;
  }

  return (
    <div>
      {quizzes &&
        quizzes.map((quiz) => (
          <div key={quiz._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {quiz.quizName} <br />
            </h4>
          </div>
        ))}
    </div>
  );
};

export default ThoughtList;