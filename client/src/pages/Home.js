import React from 'react';
import ReactDOM from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Carousel, theme } from 'antd';
import Leaderboard from '../components/Leaderboard';

import ImgCarousel from '../components/ImgCarousel'
import GameSelection from '../components/GameSelection'

import '../App.css';
import { useQuery } from '@apollo/client';
import { GET_ALL_QUIZZES } from '../utils/queries'

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};



for (var i; i < 3; i++) {

}

const Home = ({ image, setImage }) => {
    const { loading, data } = useQuery(GET_ALL_QUIZZES);
    const quizzes = data?.quizzes || []

    console.log(data)

    if (!data) return <div>Loading...</div>;



    return (
        <main>
            <div className="flex-row justify-center">
                <div className=" col-md-10 mb-3 p-3 mx-auto" style={{}}>

                    <Layout className='bg-secondary'>
                        <ImgCarousel quizzes={quizzes} image={image} setImage={setImage} />

                    </Layout>
                </div>
            </div>
            <div className="">
                {loading ? (
                    <div>Loading...</div>) : 
                    (<GameSelection
                        quizzes={quizzes}
                    />
                )}
            </div>
        </main>
    );

}


export default Home;

