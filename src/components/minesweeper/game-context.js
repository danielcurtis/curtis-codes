import React, { useReducer, createContext } from 'react';

import { genMinefield } from './utils';

const initialState = {
	minefield: genMinefield(),
	flags: 0,
	gameover: false,
	win: false,
	time: 0,
	toggleTime: false,
};

initialState.mines = initialState.minefield.filter(
	(mine) => mine.bomb === true
).length;

const gameReducer = (state, action) => {
	switch (action.type) {
		case 'setMinefield':
			return { ...state, minefield: action.payload };
		case 'setMines':
			return { ...state, mines: action.payload };
		case 'setGameover':
			return { ...state, gameover: action.payload };
		case 'setWin':
			return { ...state, win: action.payload };
		case 'setFlags':
			return { ...state, flags: action.payload };
		case 'setTimer':
			return { ...state, flags: action.payload };
		case 'toggleTime':
			return { ...state, flags: action.payload };
		default:
			return state;
	}
};

const GameContext = createContext();

const GameProvider = (props) => {
	const [state, dispatch] = useReducer(gameReducer, initialState);

	return (
		<GameContext.Provider value={{ state, dispatch }}>
			{props.children}
		</GameContext.Provider>
	);
};

export { GameContext, GameProvider };
