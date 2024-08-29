import { useState } from "react";

function TicTacToe() {
  // eslint-disable-next-line no-unused-vars
  //const [board, setBoard] = useState(initialBoard);

  console.log(board);
  return (
    <>
      <div className="game">
        <div className="status">
          Player X turn
          <button className="reset-button">Reset</button>
        </div>

        <div className="board">
          {board.map((_, i) => {
            return (
              <button className="cell" key={i}>
                X
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default TicTacToe;
