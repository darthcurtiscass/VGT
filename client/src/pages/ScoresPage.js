import React from 'react';
import ReactDOM from 'react';
import {Layout, theme} from 'antd';
import { useParams } from 'react-router-dom';
import Leaderboard from '../components/Leaderboard';

import Question from '../components/Question'

import '../App.css';
import { useQuery }  from '@apollo/client';
import { GET_SPECIFIC_QUIZ } from '../utils/queries'




const ScoresPage = ({score, setScore}) => {
   <div>
    <Leaderboard />
   </div>

}


export default ScoresPage;