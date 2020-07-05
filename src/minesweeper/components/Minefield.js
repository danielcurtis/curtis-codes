import React, { useContext } from 'react';
import Mine from './Mine';
import { GameContext } from './GameContext';

function Minefield() {
  const { state } = useContext(GameContext);

  return (
    <div className="mine-field">
      {state.minefield.map((mine, index) => (
        <Mine mine={mine} key={`{mine-${index}`} />
      ))}
    </div>
  );
}

export default Minefield;
