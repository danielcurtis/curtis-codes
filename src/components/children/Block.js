import React, { useState } from 'react';

function Block({ i, val, data, setData }) {
  let org = data[i];

  const handleClick = () => {
    if (data[i][0] === 'X') alert('you lose');
    setData({ ...data, [i]: [org[0], 1] });
  };

  return (
    <button
      className={`Block ${val[1] === 0 ? '' : 'Block-active'}`}
      style={val[1] === 0 ? { color: 'grey' } : { color: 'blue' }}
      onClick={handleClick}
    >
      {val[0]}
    </button>
  );
}

export default Block;
