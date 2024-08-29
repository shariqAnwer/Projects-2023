/* eslint-disable no-unused-vars */

import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isXNext, setIsXNext] = useState(true);

  const Winning_patterns = [];

  const calculateWinner = () => {};
  const handleClick = (index) => {};
  const resetGame = () => {};
  const getStatusMessage = () => {};

  return { board, calculateWinner, handleClick, resetGame, getStatusMessage };
};

export default useTicTacToe;
