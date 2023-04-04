import { React, useState } from 'react';
import '../App.css';
import { GET_ME, GET_SPECIFIC_USER } from '../utils/queries';
import { useQuery }  from '@apollo/client';
import { useParams } from 'react-router-dom';
import AddFriend from '../components/AddFriend';

const User = () => {
const { userId } = useParams();
const { loading, data } = useQuery(GET_SPECIFIC_USER, {
    variables: { userId: userId },
  });
const user = data?.user || []

console.log(data)

if (!data) return <div>Loading...</div>;

return (

<div class="container-fluid">

<div class="card bg-dark text-white">
  <div class="card-body">
    <h1>{user.username}</h1>
    <AddFriend />
  </div>
</div>

<table class="table table-dark table-striped w-50 mx-auto">
<thead>
    <tr>
      <th scope="col">Quiz</th>
      <th scope="col">Score</th>
    </tr>
  </thead>
{user.scores.map((score) => 
  <tbody>
  <tr>
    <td>{score.quiz}</td>
    <td>{score.score}</td>
  </tr>
</tbody>
)}
</table>
<br />

{/* {me.friends.map ((friend) =>  */}
<div class="container-fluid bg-secondary mx-auto w-50">
  <div class="list-group">
    <button type="button" class="list-group-item list-group-item-action text-white bg-dark">
      The current button
    </button>
  </div>
</div>
{/* )} */}
  
</div>

)
}

export default User;