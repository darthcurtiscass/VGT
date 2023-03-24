import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="main-header-menu">
          <section className='nav'>
            <div style={App.css}>
              <a href="#">Home</a>
            </div>
            <div style={App.css}>
              <a href="#">Leaderboard</a>
            </div>
            <div style={App.css}>
              <a href="#">Quiz</a>
            </div>
            <div style={App.css}>
              <a href="#">Signup</a>
            </div>
            <div style={App.css}>
              <a href="#">Login</a>
            </div>
          </section>
        </nav>
      </header>
    </div>
  );
}

export default App;
