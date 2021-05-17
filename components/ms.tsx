import { useState } from 'react';

interface ISquare {
  x: number;
  y: number;
  score: number;
  isMine: boolean;
  isClicked: boolean;
  isFlagged: boolean;
}

type Props = {
  square: ISquare;
};

function Square({ square }: Props) {
  return (
    <>
      {square.x}, {square.y}
    </>
  );
}

// max is exclusive and min is inclusive
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
}

function generateSquare(isMine: boolean, x: number, y: number) {
  return {
    x: x,
    y: y,
    score: 0,
    isMine: isMine,
    isClicked: false,
    isFlagged: false,
  };
}

function generateBoard() {
  const size: number = 10;
  const mineIndex: number = getRandomInt(0, 10);
  let board: ISquare[][] = [];

  for (let y: number = 0; y < size; y++) {
    let row: ISquare[] = [];

    for (let x: number = 0; x < size; x++) {
      row.push(generateSquare(mineIndex === x, x, y));
    }
    board.push(row);
  }

  return board;
}

function Board() {
  const [board, setBoard] = useState(generateBoard());

  return <>{board.map((col) => col.map((row) => <Square square={row} />))}</>;
}

export default Board;
