import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Clicky Game</a>
            <h3 className="navbar-text">
              Click an image to being
            </h3>
          </nav>
        </div>
    );
  };
}

export default App;
