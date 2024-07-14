// src/components/Square.js
import React from 'react';
import { FaRegCircle, FaTimes } from 'react-icons/fa';

const Square = ({ value, onClick, isWinningSquare }) => {
  const className = "square" + (isWinningSquare ? " winning" : "");

  return (
    <button className={className} onClick={onClick}>
      {value === 'X' ? <FaTimes /> : value === 'O' ? <FaRegCircle /> : null}
    </button>
  );
};

export default Square;
