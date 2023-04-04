import React from 'react';
import ReactDOM from 'react';
import {Layout, theme} from 'antd';
import { useParams } from 'react-router-dom';
import Leaderboard from '../components/Leaderboard';

import Scoreboard from '../components/Leaderboard'

import '../App.css';
import { useQuery }  from '@apollo/client';
import { GET_ALL_USERS } from '../utils/queries'


const LeaderBoard = () => {
    const {  loading, data } = useQuery(GET_ALL_USERS);
  
    const quiz = data?.quiz || []


    if (!data) return <div>Loading...</div>;

    
    return (
        <main>
          <div>
            <div>
                <div>
          {/* {loading ? (
            <div>Loading...</div>
          ) : ( */}
            <Scoreboard
              users={data}
            />
          {/* )} */}
        </div>
            </div>
          </div>
        </main>
      );

}


export default LeaderBoard;