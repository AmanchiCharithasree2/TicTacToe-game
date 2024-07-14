// src/App.js
import React, { useState } from 'react';
import Board from './component/Board';
import StatusMessage from './component/StatusMessage';
import { FiRefreshCw } from 'react-icons/fi';
import './index.css';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winningLine, setWinningLine] = useState(null);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (calculateWinner(boardCopy).winner || boardCopy[i]) return;
    boardCopy[i] = isXNext ? 'X' : 'O';
    setBoard(boardCopy);
    setIsXNext(!isXNext);

    const winnerInfo = calculateWinner(boardCopy);
    if (winnerInfo.winner) {
      setWinningLine(winnerInfo.line);
    } else {
      setWinningLine(null);
    }
  };

  const calculateWinner = (squares) => {
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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], line: lines[i] };
      }
    }
    return { winner: null, line: null };
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinningLine(null);
  };

  const winnerInfo = calculateWinner(board);
  const winner = winnerInfo.winner;
  const status = winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`;

  return (
    <div className="game">
      <h1 className="game-title">Tic Tac Toe</h1>
      <StatusMessage status={status} />
      <Board squares={board} onClick={handleClick} winningLine={winningLine} />
      <button className="reset-button" onClick={resetGame}>
        <FiRefreshCw />
        Reset Game
      </button>
    </div>
  );
};

export default App;
