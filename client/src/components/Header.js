import React from 'react';
import '../../src/App.css';
import { Breadcrumb, Layout, Menu, theme } from 'antd';

 function Header() {
    return(
      <div>
      <header style={{position:'sticky', top: 0, zIndex: 1, width: '100%'}} className="App-header">

        <div style={{
            float: 'left',
            width: 120,
            height: 31,
            margin: '8px 8px 8px 8px',
            padding: '8px 0px 8px 0px',
            background: 'gold',
          }}>
            ICON HERE
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
        mode='horizontal'
        style={{
            backgroundColor:'gold'
        }}
        
        items={[
            {
                label: 'Home',
                key: 'Home',
            },
            {
                label: 'Leaderboard',
                key: 'Leaderboard',
            },
            {
                label: 'Quiz',
                key: 'Quiz',
            },
            {
                label: 'Signup',
                key: 'Signup',
            },
            {
                label: 'Login',
                key: 'Login',
            },
            ]}>

        </Menu>
        
      </header>
     </div>
    );
}

export default Header;