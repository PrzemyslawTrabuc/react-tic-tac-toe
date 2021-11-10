import Square from "./Square.js";
import React from "react";

class Board extends React.Component {
  renderSquare(i) {
    var flag;
    this.stored_slots = JSON.parse(window.localStorage.getItem("table"));

    if (
      this.win_slots &&
      (this.win_slots[0] === i ||
        this.win_slots[1] === i ||
        this.win_slots[2] === i)
    ) {
      flag = "win";
    } else {
      flag = "neutral";
    }

    return (
      <Square
        className={"bob"}
        slot_flag={flag}
        symbol={this.stored_slots[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    this.win_slots = Find_win_slots(this.stored_slots);
    return (
      <div id="board">
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
    );
  }
}

function Find_win_slots(stored_slots) {
  stored_slots = JSON.parse(window.localStorage.getItem("table"));
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
    if (
      stored_slots[a] &&
      stored_slots[a] === stored_slots[b] &&
      stored_slots[a] === stored_slots[c]
    ) {
      var line_to_return = lines[i];
      //var slot_symbol_to_return = stored_slots[i]
    }
  }
  //this.setState({win_slots: line_to_return})
  return line_to_return;
  //return null;
}

export default Board;
