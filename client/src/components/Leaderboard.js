import React from 'react';
import { Route, NavLink, Link, Routes } from 'react-router-dom';
import '../index.css';
import { Pagination } from 'antd';
const Leaderboard = () => <Pagination defaultCurrent={1} total={50}/>



//use state variable for i, instead of defining it as a specific index number.

const Scores = ({ users }) => {
  // const scores = users.map((score) => score.score);
  // const total = scores.reduce((a, b) => a + b, 0);
  // const average = total / scores.length;


  return (
    <div className='mx-auto justify-center w-75'>
        <div className='container-fluid bg-dark '>
          <table class="table table-dark table-striped fs-2 text">
          <thead className=''>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Average Score</th>
              </tr>
            </thead>
            {users.users.map((user) => (
            <tbody>
              <tr>
                <NavLink className="fs-4 text" to={`/users/${user._id}`}><td>{user.username}</td></NavLink> 
                <td>
                  {(user.scores.reduce((acc, curr) => acc + curr.score, 0) / user.scores.length).toFixed(2)}
                </td>
                </tr>
            </tbody>
            ))}
          </table>

          </div>
          </div>
  );
};

export default Scores;
