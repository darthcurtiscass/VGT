import { React, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Layout } from 'antd';
import 'antd/dist/reset.css';
import './App.css';

import Home from '../src/pages/Home';
import Leaderboard from './pages/Leaderboard';
import Quiz from './pages/Questionnaire';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {

  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.


  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Leaderboard') {
      return <Leaderboard />;
    }
    if (currentPage === 'Quiz') {
      return <Quiz />;
    }
    if (currentPage === 'Profile') {
      return <Profile />
    }
    if (currentPage === 'Signup') {
      return <Signup />
    }
    return <Login />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (

    <Layout style={{ fontFamily: "DM Serif Display" }} className="App">
      <BrowserRouter>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      </BrowserRouter>
      <Footer />
    </Layout>

  );
}

export default App;
