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
          <div className="flex-row justify-center ">
            <div className=" col-md-10 mb-3 p-3 " style={{  }}>
 
                 
                <div className="col-12 col-md-8 mb-3">
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