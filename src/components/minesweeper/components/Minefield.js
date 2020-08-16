import React, { useContext } from 'react';

import { GameContext } from '../game-context';
import Mine from './Mine';

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
