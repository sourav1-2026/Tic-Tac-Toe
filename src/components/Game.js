import React, { useState } from 'react';
import Boards from './Boards';

function Game(){
    const [currentPlayer, setCurrentPlayer] = useState("X");

    function handleSquareClick(index) {
        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
      }
    return (
        <>
        <Boards className="Boards" currentPlayer={currentPlayer} onSquareClick={handleSquareClick}></Boards>
        </>
    )
}

export default Game;