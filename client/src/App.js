import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from '../src/pages/Home';
import {Layout} from 'antd';
import 'antd/dist/reset.css';
import './App.css';

function App() {
  return (
    
    <Layout style={{fontFamily:"DM Serif Display"}} className="App">
      <BrowserRouter><Header/></BrowserRouter>
      <div className='body-container'>
        <Home/>
      </div>
      <Footer/>
    </Layout>
    
  );
}

export default App;
