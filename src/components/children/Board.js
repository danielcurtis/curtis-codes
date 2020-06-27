import React, { useState } from 'react';
import Block from './Block';

function Board({ mines, initData }) {
  const [data, setData] = useState(initData);

  for (let i = 0; i < mines.length; i++) {
    console.log(data[mines[i] + 1]);
    mines = mines.sort((a, b) => a - b);
    console.log(mines[i]);
    console.log(mines[i] % 9);

    // use % of 9 to calc edge cases
    // check for X; >81; <0
  }

  return (
    <div className="Board">
      {Object.keys(data).map((el, i) => {
        return (
          <Block
            key={i + 1}
            i={i + 1}
            val={data[i + 1]}
            data={data}
            setData={setData}
          />
        );
      })}
    </div>
  );
}

export default Board;
