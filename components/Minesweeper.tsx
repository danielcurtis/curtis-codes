import { useState, useEffect, useRef } from 'react';
import styles from './styles/Minesweeper.module.css';

type Props = {
  x: number;
  y: number;
  isM: boolean;
  isC: boolean;
  isF: boolean;
  handleClick: Function;
};

function Square({ x, y, isM, isC, isF, handleClick }: Props) {
  const [isClicked, setIsClicked] = useState(isC);
  const [isFlagged, setIsFlagged] = useState(isF);

  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      handleClick(x, y);
    }
  }, [isClicked, isFlagged]);

  return (
    <div
      className={
        isClicked ? styles.clicked : '' && isFlagged ? styles.flagged : ''
      }
      onClick={() => setIsClicked(true)}
      onContextMenu={() => setIsFlagged(true)}>
      {isM ? '[X]' : '[_]'}
    </div>
  );
}

function Minesweeper() {
  const width: number = 10;
  const [board, setBoard] = useState(Array(width).fill(Array(width)));

  // max is exclusive and min is inclusive
  const getRandomInt = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  const getSquareScore = (matrix: number[][], x: number, y: number) => {
    //-1 0 0
    // 0 C 0
    // 0 0-1
    // y=1, x=1
    let score: number = 0;

    console.log('matrix', matrix);

    for (let currY: number = -1; currY < 3; currY++) {
      // 1, 2, 3
      for (let currX: number = -1; currX < 3; currX++) {
        if (currY + currX !== 0) {
          if (matrix[y - currY][x - currX] === -1) {
            score = score + 1;
          }
        }
      }
    }

    return score;
  };

  const createBoard = () => {
    let newBoard: number[][] = Array(width).fill(Array(width).fill(0));

    // generate board with mines denoted by -1
    for (let y: number = 0; y < width; y++) {
      const firstMine: number = getRandomInt(0, 6);
      const secondMine: number = getRandomInt(5, 11);
      const row: any[] = [];

      for (let x: number = 0; x < width; x++) {
        if (x === firstMine || x === secondMine) {
          row.push(-1);
        } else {
          row.push(0);
        }
      }

      newBoard.push(row);
    }

    // score elements in matrix
    for (let y: number = 0; y < width; y++) {
      for (let x: number = 0; x < width; x++) {
        let score: number = getSquareScore(newBoard, x, y);
        newBoard[y][x] = score;
      }
    }

    console.log('newboard', newBoard);
  };

  const handleClick = (x: number, y: number) => {
    console.log('handleClick', x, y);

    setBoard((board) => {
      let boardCopy = [...board];

      boardCopy[y][x] = (
        <Square
          x={x}
          y={y}
          isM={false}
          isC={false}
          isF={false}
          handleClick={handleClick}
        />
      );

      // console.log(boardCopy);

      return board;
    });
  };

  // run once on start
  // useEffect(() => {
  //   setBoard(createBoard());
  // }, []);

  //console.log('right b4 render', board);

  createBoard();

  return board.map((row: any[], i: number) => (
    <div key={i} className={styles.row}>
      {row.map((s: any, j: number) => (
        <div key={j}>{s}</div>
      ))}
    </div>
  ));
}

export default Minesweeper;
