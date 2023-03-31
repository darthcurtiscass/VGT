import React from 'react';
import ReactDOM from 'react';
import {Layout, theme} from 'antd';
import Leaderboard from '../components/Leaderboard';

import GameSelection from '../components/GameSelection'

import '../App.css';
import { useQuery }  from '@apollo/client';
import { GET_ALL_QUIZZES } from '../utils/queries'

const Home = () => {
    const { loading, data } = useQuery(GET_ALL_QUIZZES);
    const quizzes = data?.quizzes || []

    console.log(data)

    if (!data) return <div>Loading...</div>;

    
    return (
        <main>
          <div className="flex-row justify-center">
            <div className="col-12 col-md-10 mb-3 p-3" style={{  }}>
                 <div>
                   <div><h3>Welcome to our website! This is a videogame trivia website made in React and utilizing MongoDB as our database!</h3></div>
                    <p className='container'>
                   Sign up for an account and answer trivia to your heart's desire! Make friends and foes in your journey 
                       to the top of the leader boards!
                   </p>
                </div>
                <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <GameSelection
              quizzes={quizzes}
            />
          )}
        </div>
            </div>
          </div>
        </main>
      );

}


export default Home;


// const { loading, userData } = useQuery(GET_ALL_USERS);
    // return (
    //       <Layout 
    //         style={{fontFamily:"DM Serif Display", background: 'gray'}} className='body-container'>
    //             <Sider className='side-leaderboard' max-width={300} style={{ background: 'gold' }}>

    //         <h1>Leaderboard here</h1>
    //         <Leaderboard/>
    //         </Sider>

    //             <div>
    //                 <div><h3>Welcome to our website! This is a videogame trivia website made in React and utilizing MongoDB as our database!</h3></div>
    //                 <p className='container'>
    //                     Sign up for an account and answer trivia to your heart's desire! Make friends and foes in your journey 
    //                     to the top of the leader boards!
    //                 </p>
    //             </div>
    //             <div
    //             className=""
    //             style={{}}
    //             >
    //             <GameSelection />
    //             </div>
    //             <div className="">
    //             {loading ? (
    //                 <div>Loading...</div>
    //             ) : (
    //                 <GameSelection
    //                 quizzes={quizzes}
    //                 title="Pick a quiz of your liking"
    //                 />
    //             )}
    //             </div>
    //         </Layout>
    //   );
