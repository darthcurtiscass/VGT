import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from '../src/pages/Home';
import {Layout} from 'antd';
import 'antd/dist/reset.css';

function App() {
  return (
    <Layout style={{fontFamily:"DM Serif Display"}} className="App">
      <Header/>
      <div>
        <Home/>
      </div>
      <Footer/>
    </Layout>
  );
}

export default App;
