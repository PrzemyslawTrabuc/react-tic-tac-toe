import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game.js';


  class App extends React.Component {  
    render() {         
      return (
        <div className="game">
          <div className="game-board">
            <Game />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
    