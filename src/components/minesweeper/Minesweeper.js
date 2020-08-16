import React from 'react';

import { GameProvider } from './game-context';
import Game from './components/Game';

function Minesweeper() {
	return (
		<GameProvider>
			<Game />
		</GameProvider>
	);
}

export default Minesweeper;
