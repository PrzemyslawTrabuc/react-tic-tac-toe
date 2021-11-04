import Square from './Square.js'
import React from 'react';

class Board extends React.Component {    
    var 
    constructor(props)
    {   
      var table = [];
      if(sessionStorage.length !== 0)
      {
      var stored_slots = JSON.parse(window.sessionStorage.getItem("table"));       
      for(let i =0; i < 9; i++)
      {
        table[i]= stored_slots[i];
      }     
    }else
    {
      for(let i =0; i < 9; i++)
      {
      table[i]= null;
      }
    }    
      var nextPlayer = true;
      if(window.sessionStorage.getItem("nextPlayer") === 'false')
      {
      nextPlayer = false;
      }     
      super(props);
      this.state=
      {slots: table,
       Player_X_is_next: nextPlayer,                
      };         
    }  
 
    handleResetButton()
    {
      const slots = this.state.slots.slice();
      //const Next_player = true;      
      Clear_Board(slots); 
      this.setState({slots: slots, /* Player_X_is_next: Next_player */});
    } 
    handleClick(i) {    
      const slots = this.state.slots.slice();  
      if(Find_Winner(slots) !==null)
      {        
        return;           
      }   
      if(this.state.Player_X_is_next === true && slots[i]===null)
      {
        slots[i] = 'X';
        this.setState({slots: slots,
          Player_X_is_next: false     
          });            
          
      }else if(this.state.Player_X_is_next === false && slots[i]===null)
      {
        slots[i] = 'O';
        this.setState({slots: slots,
          Player_X_is_next: true  
          });   
      }       
    }
    renderSquare(i) { 
      var flag=""; 
      var win_slots = Show_win_slots(this.state.slots);      
      var stored_slots = JSON.parse(window.sessionStorage.getItem("table")); 
      if(win_slots!==null){
      if(i===win_slots[0] || i=== win_slots[1] ||i=== win_slots[2])
      {
        flag='win';      
      }else
      {
        flag='neutral';
      }  
    }      
      return(        
      <Square className={'bob'}
      slot_flag={flag}
      symbol={stored_slots[i]}
      onClick={() => this.handleClick(i)}      
      />
      );
      
    }

    renderResetButton() {
      if(Find_Winner(this.state.slots) !== null || !this.state.slots.includes(null))
      {         
      return( 
      <ResetButton className='resetButton'   
      onClick={() => this.handleResetButton()}
      ></ResetButton>
      );
      }
      else{return;}
    }

    renderWinnerText() {
      window.sessionStorage.setItem('table',JSON.stringify(this.state.slots));    
      if(Find_Winner(this.state.slots) !== null || !this.state.slots.includes(null))
      {   
        const winner = Find_Winner(this.state.slots);       
        let winner_message = "Draw";    
        if(winner)
        winner_message = 'The Winner is: Player ' + winner;    
      return( 
      <Winner className='winner'   
      winnerPlayer = {winner_message}
      ></Winner>
      );
      }
      else{return;}
    }
  
    render() 
    {      
      window.sessionStorage.setItem('table',JSON.stringify(this.state.slots));     
      let Next_player = 'Next player: X';
      if(this.state.Player_X_is_next===true)
      {
      Next_player = 'Next Player: X';    
      }else
      {
      Next_player = 'Next Player: O'; 
      } 
      let winner = Find_Winner(this.state.slots)
      window.sessionStorage.setItem('nextPlayer',this.state.Player_X_is_next); 
      var fullBoardFlag=true;  
      for(let i=0;i<9;i++)
      {
        if(this.state.slots[i] === null)
        {
          fullBoardFlag=false;
        }
      }
      if(winner !== null || fullBoardFlag === true)
      {
        Next_player="GAME OVER!"
      }
      return (
        <div id="main">
          <div className="status">{Next_player}</div>
          <div id='board'>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          </div>          
          <div className="winner">{this.renderWinnerText()}</div>         
          <div id="reset_button_div">{this.renderResetButton()}</div>
        </div>
      );
    }
  }

  function Find_Winner(slots)
    {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (slots[a] && slots[a] === slots[b] && slots[a] === slots[c]) {   
          return slots[a];
        }
      }
      return null;
    }
    function Show_win_slots(slots)
    {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (slots[a] && slots[a] === slots[b] && slots[a] === slots[c]) {           
          return lines[i];
        }
      }
      return null;
    }
    function Clear_Board(slots)
    {
     for(let i =0; i < 9; i++)
     {
       slots[i] = null;           
     }
     //console.log("Board now is clean");     
     return slots;  
    }

    function Winner(props) {   
        return (        
          <div className="winner">
            {props.winnerPlayer}
          </div>
        );
      
      }

    
  function ResetButton(props) {   
    return (        
      <button className="resetButton" onClick={props.onClick}>
        RESTART
      </button>
    );
    
 
}

export default Board;