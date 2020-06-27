import React from 'react';
import Board from './children/Board';

function Minesweeper() {
  // Generate 10 random numbers 0-80
  const mines = [];
  for (let i = 0; i < 10; i++) mines.push(Math.floor(Math.random() * 80) + 1);
  // Generate object k,v where k = 1-81 and v = [0,0]
  let initData = {};
  for (let i = 1; i < 82; i++) initData[i] = [0, 0];
  // Insert mines into object
  const checkVal = (i, v) => {
    let curr = initData[mines[i] + v];
    /*if (
      curr !== undefined &&
      curr[0] !== 'X' &&
      curr[0] !== NaN &&
    ) {
      let org = initData[mines[i] + v];
      let num = parseInt([org[0]]);
      initData[mines[i] + v] = [[num + 1], 0];
    }*/
  };

  for (let i = 0; i < 10; i++) {
    checkVal(i, 1);
    checkVal(i, -1);
    initData[mines[i]] = ['X', 0];
  }

  return (
    <div className="Minesweeper">
      <Board mines={mines} initData={initData} />
    </div>
  );
}

export default Minesweeper;
