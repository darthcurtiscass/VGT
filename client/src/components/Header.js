import { React } from 'react';
import Auth from "../utils/auth";
import { Route, NavLink, Link, Routes } from 'react-router-dom';
import '../../src/App.css';
import { Layout, Menu, theme } from 'antd';



function Header() {
  function showNav() {
    if (Auth.loggedIn()) {
      return(
        <header style={{ position: 'sticky', top: 0, zIndex: 1, width: "auto" }} className="navbar bg-body-tertiary bg-success">

        <div className='bg-success' style={{
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
          className = "btn btn-success text-decoration-none"
          >

          <Menu.Item key="home" className='menuNav text-decoration-none' style={{ float: 'left'}}>
            <NavLink className="text-black text-decoration-none" to="/">Home</NavLink>
          </Menu.Item>

          <Menu.Item key="leaderboard" className='menuNav' style={{ float: 'left'}}>
            <NavLink className="text-black text-decoration-none" to="/leaderboard">Leaderboard</NavLink>
          </Menu.Item>

          <Menu.Item key="profile" className='menuNav' style={{ float: 'left'}}>
            <NavLink className="text-black text-decoration-none" to="/profile">Profile</NavLink>
          </Menu.Item>

          <Menu.Item className='menuNav' style={{ float: 'left'}}>
            <NavLink onClick={() => Auth.logout()} className="text-black text-decoration-none" href="/">Logout</NavLink>
          </Menu.Item>
          </Menu>


          </header>
          
      )
    } else {
      return (
        <header style={{ position: 'sticky', top: 0, zIndex: 1, width: "auto" }} className="navbar bg-body-tertiary bg-success">

        <div className='bg-success' style={{
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
        style={{ display: 'block'}}
        mode='horizontal'
        className='btn btn-success'
        >
        <Menu.Item key="signup" className='menuNav' style={{ float: 'right'}}>
          <NavLink className="text-black text-decoration-none" to="/signup">Signup</NavLink>
        </Menu.Item>

        <Menu.Item key="login" className='menuNav' style={{ float: 'right'}}>
          <NavLink className="text-black text-decoration-none" to="/login">Login</NavLink>
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
    )}
  }
  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
        </Link>
      </h1>

      <nav>
        {showNav()}
      </nav>
    </header>
  );
      

  ;
}


export default Header;