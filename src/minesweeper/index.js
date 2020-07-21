import React from 'react';
import { GameProvider } from './components/GameContext';
import Game from './components/Game';

function Minesweeper() {
	return (
		<GameProvider>
			<Game />
		</GameProvider>
	);
}

export default Minesweeper;
