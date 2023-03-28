import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from '../src/pages/Home';
import {Layout} from 'antd';
import 'antd/dist/reset.css';

function App() {
  return (
    <Layout className="App">
      <Header/>
      <div>
        <Home/>
      </div>
      <Footer/>
    </Layout>
  );
}

export default App;
