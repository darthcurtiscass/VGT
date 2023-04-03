import React from 'react';
import '../index.css';
import { Pagination } from 'antd';
const Leaderboard = () => <Pagination defaultCurrent={1} total={50}/>


//use state variable for i, instead of defining it as a specific index number.

const Scores = ({ users }) => {
  return (
    <div>

          <div className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0 bg-dark">
            </h4>
            {users.users.map((user) => (
                <div style={{border: "1px solid black"}}>
                    {user.username}{user.score}
                </div>
            ))}
          </div>

    </div>
  );
};

export default Scores;
