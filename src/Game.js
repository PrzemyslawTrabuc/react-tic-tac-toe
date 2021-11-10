import React from "react";
import Board from "./Board.js";

class Game extends React.Component {
  constructor(props) {
    var table = [];
    if (localStorage.length !== 0) {
      var stored_slots = JSON.parse(window.localStorage.getItem("table"));
      for (let i = 0; i < 9; i++) {
        table[i] = stored_slots[i];
      }
    } else {
      for (let i = 0; i < 9; i++) {
        table[i] = null;
      }
    }
    var nextPlayer = true;
    if (window.localStorage.getItem("nextPlayer") === "false") {
      nextPlayer = false;
    }
    super(props);
    this.state = { slots: table, Player_X_is_next: nextPlayer };
    this.isMovePossible = true;
  }

  handleResetButton() {
    const slots = this.state.slots.slice();
    //const Next_player = true;
    Clear_Board(slots);
    this.setState({ slots: slots /* Player_X_is_next: Next_player */ });
    this.isMovePossible = true;
  }

  handleClick(i) {
    const slots = this.state.slots.slice();
    if (this.isMovePossible === false) {
      return;
    }
    if (this.state.Player_X_is_next === true && slots[i] === null) {
      slots[i] = "X";
      this.setState({ slots: slots, Player_X_is_next: false });
    } else if (this.state.Player_X_is_next === false && slots[i] === null) {
      slots[i] = "O";
      this.setState({ slots: slots, Player_X_is_next: true });
    }
  }

  renderResetButton() {
    if (this.isMovePossible === false || !this.state.slots.includes(null)) {
      return (
        <ResetButton
          className="resetButton"
          onClick={() => this.handleResetButton()}
        ></ResetButton>
      );
    } else {
      return;
    }
  }

  renderWinnerText() {
    window.localStorage.setItem("table", JSON.stringify(this.state.slots));
    const winner = Find_Winner(this.state.slots);
  
    if (winner || !this.state.slots.includes(null)) {
      this.isMovePossible = false;
      let winner_message = "Draw";
      if(winner){
        winner_message = "The Winner is: Player " + winner;
      }
      return <Winner className="winner" winnerPlayer={winner_message}></Winner>;
    } else {
      return;
    }
  }
  //localStorage.setItem("table", '["X","O","X","O","X","O","X","O","X"]')
  render() {
    window.localStorage.setItem("table", JSON.stringify(this.state.slots));
    let Next_player = "Next player: X";
    if (this.state.Player_X_is_next === true) {
      Next_player = "Next Player: X";
    } else {
      Next_player = "Next Player: O";
    }
    window.localStorage.setItem("nextPlayer", this.state.Player_X_is_next);
    var fullBoardFlag = true;
    for (let i = 0; i < 9; i++) {
      if (this.state.slots[i] === null) {
        fullBoardFlag = false;
      }
    }
    if (this.isMovePossible === false || fullBoardFlag === true) {
      Next_player = "GAME OVER!";
    }

    return (
      <div id="main">
        <div className="status">{Next_player}</div>
        <Board symbol={this.props.slots} onClick={(i) => this.handleClick(i)} />
        <div className="winner">{this.renderWinnerText()}</div>
        <div id="reset_button_div">{this.renderResetButton()}</div>
      </div>
    );
  }
}

function Find_Winner(slots) {
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

function Clear_Board(slots) {
  for (let i = 0; i < 9; i++) {
    slots[i] = null;
  }
  //console.log("Board now is clean");
  return slots;
}

function Winner(props) {
  return <div className="winner">{props.winnerPlayer}</div>;
}

function ResetButton(props) {
  return (
    <button className="resetButton" onClick={props.onClick}>
      RESTART
    </button>
  );
}

export default Game;
