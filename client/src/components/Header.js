import { React } from 'react';
import { Route, NavLink, Link, Routes } from 'react-router-dom';
import '../../src/App.css';
import { Layout, Menu, theme } from 'antd';
import Home from '../pages/Home';
import Leaderboard from '../pages/Leaderboard';
import Questionnaire from '../pages/Questionnaire';
import Profile from '../pages/Profile';
import Signup from '../pages/Signup';
import Login from '../pages/Login';


function Header() {
  return (
    <div>
      <header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }} className="App-header">

        <div style={{
          float: 'left',
          width: 120,
          height: 31,
          margin: '8px 8px 8px 8px',
          padding: '8px 0px 8px 0px',
          background: 'gold',
          fontFamily: '',
        }}>
          <h1>VGT</h1>
        </div>

        {/* <nav mode="horizontal" theme="dark" className="main-header-menu">
          <section className='nav'>
            <div>
              <a href="#">Home</a>
            </div>
            <div>
              <a href="#">Leaderboard</a>
            </div>
            <div>
              <a href="#">Quiz</a>
            </div>
            <div>
              <a href="#">Signup</a>
            </div>
            <div>
              <a href="#">Login</a>
            </div>
          </section>
        </nav> */}

        <Menu
          mode='horizontal' className = "btn btn-warning"
          >

          <Menu.Item key="home">
            <NavLink to="/">Home</NavLink>
          </Menu.Item>

          <Menu.Item key="leaderboard">
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </Menu.Item>

          <Menu.Item key="quiz">
            <NavLink to="/quiz">Quiz</NavLink>
          </Menu.Item>

          <Menu.Item key="profile">
            <NavLink to="/profile">Profile</NavLink>
          </Menu.Item>

          <Menu.Item key="signup" element={<Signup />}>
            <NavLink to="/signup">Signup</NavLink>
          </Menu.Item>

          <Menu.Item key="login">
            <NavLink to="/login">Login</NavLink>
          </Menu.Item>
        </Menu>

        {/* <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/leaderboard" element={<Leaderboard />} />
          <Route exact path="/quiz" element={<Questionnaire />} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
        </Routes> */}

      </header>
    </div>
  );
}


export default Header;