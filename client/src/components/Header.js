import { React } from 'react';
import { Route, NavLink, Link, Routes } from 'react-router-dom';
import '../../src/App.css';
import { Layout, Menu, theme } from 'antd';


function Header() {
  return (

      <header style={{ position: 'sticky', top: 0, zIndex: 1, width: "auto" }} className="navbar bg-body-tertiary">

        <div className='bg-warning' style={{
          float: 'left',
          width: 120,
          height: 40,
          margin: '8px 8px 8px 8px',
          background: 'gold',
          fontFamily: '',
        }}>
          <h1>VGT</h1>
        </div>

        <Menu
        style={{ display:'block' }}
          mode='horizontal'
          className = "btn btn-warning"
          >

          <Menu.Item key="home" className='menuNav' style={{ float: 'left'}}>
            <NavLink to="/">Home</NavLink>
          </Menu.Item>

          <Menu.Item key="leaderboard" className='menuNav' style={{ float: 'left'}}>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </Menu.Item>

          <Menu.Item key="profile" className='menuNav' style={{ float: 'left'}}>
            <NavLink to="/profile">Profile</NavLink>
          </Menu.Item>
          </Menu>
        
          <Menu
          style={{ display: 'block'}}
          mode='horizontal'
          className='btn btn-warning'
          >
          <Menu.Item key="signup" className='menuNav' style={{ float: 'right'}}>
            <NavLink to="/signup">Signup</NavLink>
          </Menu.Item>

          <Menu.Item key="login" className='menuNav' style={{ float: 'right'}}>
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
      

  );
}


export default Header;