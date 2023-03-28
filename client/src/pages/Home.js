import React from 'react';
import {Layout, theme} from 'antd';
import '../App.css';



import Header from '../components/Header';
import Footer from '../components/Footer';

const {Sider} = Layout;

const Home = () => {
    return(
        <Layout 
        style={{background: 'gray'}}>
            <Sider className='side-leaderboard' max-width={300} style={{ background: 'gold' }}>

           <h1>Leaderboard goes here...... Scroll function yet to be implemented</h1>
           
          </Sider>
            <div>
                <div><h3>Welcome to our website! This is a videogame trivia website made in React and utilizing MongoDB as our database!</h3></div>
                <p className='container'>
                    Sign up for an account and answer trivia to your heart's desire! Make friends and foes in your journey 
                    to the top of the leader boards!
                </p>
            </div>
        </Layout>
    )
}

export default Home;