import Square from "./Square";
import { useState } from "react";
import "./Boards.css";
function Boards({ currentPlayer, onSquareClick }) {
  const [squares, setSquares] = useState(Array(9).fill(null));

  // Helper function to calculate the winner
  function calculateWinner(squares) {
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
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(index) {
    if (squares[index] || calculateWinner(squares)) {
      return;
    } else {
      const newSquares = squares.slice(); // Create a copy of squares array
      newSquares[index] = currentPlayer;
      setSquares(newSquares);
      onSquareClick(index);
    }
  }
  function renderSquare(index) {
    return <Square value={squares[index]} onClick={() => handleClick(index)} />;
  }

  return (
    <div className="Boarder">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Boards;
