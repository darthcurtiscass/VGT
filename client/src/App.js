import { React, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Layout } from 'antd';
// import 'antd/dist/reset.css';
import './App.css';

import { 
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from '@apollo/client';
import { setContext }  from '@apollo/client/link/context'

import Home from './pages/Home';
import Leaderboard from './pages/ScoresPage';
import Quiz from './pages/Questionnaire';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import LoginForm from './pages/Login';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  const [image, setImage] = useState(0)
  const [score, setScore] = useState(0);
  console.log(score)
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <Layout style={{ fontFamily: "DM Serif Display" }} className="App bg-secondary">
          <Header />
          <div className='body-container bg-secondary'>
            <Routes>
              <Route 
                path="/"
                element={<Home 
                image={image}
                setImage={setImage}/>}
              />
              <Route 
                path="/login" 
                element={<LoginForm />}
              />
              <Route 
                path="/signup" 
                element={<Signup />}
              />
              <Route 
                path="/profile" 
                element={<Profile />}
              />
              {/* <Route 
                path="/profiles/:username" 
                element={<Profile />}
              /> */}
              <Route 
                path="/quiz/:quizId" 
                element={<Quiz 
                score={score}
                setScore={setScore}/>}
              />
            </Routes>
          </div>
          <Footer />
        </Layout>
      </Router>
    </ApolloProvider>
  );
  // const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.


  // const renderPage = () => {
  //   if (currentPage === 'Home') {
  //     return <Home />;
  //   }
  //   if (currentPage === 'Leaderboard') {
  //     return <Leaderboard />;
  //   }
  //   if (currentPage === 'Quiz') {
  //     return <Quiz />;
  //   }
  //   if (currentPage === 'Profile') {
  //     return <Profile />
  //   }
  //   if (currentPage === 'Signup') {
  //     return <Signup />
  //   }
  //   return <Login />;
  // };

  // const handlePageChange = (page) => setCurrentPage(page);
  // return (

  //   <Layout style={{ fontFamily: "DM Serif Display" }} className="App">
  //     <BrowserRouter>
  //     <div className='body-container'>
  //       <Header currentPage={currentPage} handlePageChange={handlePageChange} />
  //     </div>
  //     </BrowserRouter>
  //     <div className='container'>

  //     </div>
  //     <Footer />
  //   </Layout>

  // );
}

export default App;
