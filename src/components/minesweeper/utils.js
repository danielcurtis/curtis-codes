const getNeighbors = (minefield, mine) => {
	const level = mine.y;
	const levelUp = level - 1;
	const levelDown = level + 1;
	const xLeft = mine.x - 1;
	const xRight = mine.x + 1;

	const sameLevel = minefield.filter(
		(m) => (m.x === xLeft || m.x === xRight) && m.y === level
	);

	const upLevel = minefield.filter(
		(m) =>
			(m.x === xLeft || m.x === xRight || m.x === mine.x) && m.y === levelUp
	);

	const downLevel = minefield.filter(
		(m) =>
			(m.x === xLeft || m.x === xRight || m.x === mine.x) && m.y === levelDown
	);

	return [...sameLevel, ...upLevel, ...downLevel];
};

const genMinefield = () => {
	const getNieghborBombs = (minefield) => {
		const map = minefield.map((mine) => {
			const neighborArray = getNeighbors(minefield, mine);
			const neighbors = neighborArray.filter((neighbor) => neighbor.bomb)
				.length;

			return { ...mine, neighbors };
		});

		return map;
	};

	let minefield = Array(64).fill({
		bomb: false,
		shown: false,
		flagged: false,
	});

	const genCoords = (minefield) => {
		const map = minefield.map((mine, index) => {
			if (index <= 7) {
				return { ...mine, x: index, y: 0 };
			} else {
				const coordinate = Math.floor(index / 8);
				return { ...mine, x: index % (coordinate * 8), y: coordinate };
			}
		});

		return map;
	};

	const genBombs = (minefield) => {
		const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
		const currSets = new Set();

		for (let i = 0; i < 10; i++) {
			let x = getRandomInt(7);
			let y = getRandomInt(7);
			// Ensure no duplicates
			while (currSets.has(x + y)) {
				x = getRandomInt(7);
				y = getRandomInt(7);
			}

			currSets.add(x + y);

			let mine = minefield.find((m) => m.y === y && m.x === x);
			if (!mine.bomb) {
				mine.bomb = true;
			}
		}

		return minefield;
	};

	minefield = genCoords(minefield);
	minefield = genBombs(minefield);
	minefield = getNieghborBombs(minefield);

	return minefield;
};

const showNeighbors = (minefield, mine) => {
	const neighbors = getNeighbors(minefield, mine);
	const map = neighbors.map((neighbor) => {
		if (
			!neighbor.flagged &&
			!neighbor.shown &&
			(neighbor.neighbors === 0 || !neighbor.bomb)
		) {
			neighbor.shown = true;
			if (neighbor.neighbors === 0) {
				showNeighbors(minefield, neighbor);
			}
		}

		return neighbor;
	});

	return map;
};

const showAll = (minefield) => {
	const map = minefield.map((mine) => {
		mine.shown = true;

		return mine;
	});

	return map;
};

const updateMinefield = (minefield, updatedMines) => {
	const map = minefield.map((mine) => {
		updatedMines.forEach((update) => {
			if (update.x === mine.x && update.y === mine.y) {
				mine = { ...mine, ...update };
			}
		});

		return mine;
	});

	return map;
};

const allBombsFlagged = (minefield) => {
	const bombs = minefield.filter((mine) => mine.bomb);

	return bombs.every((bomb) => bomb.flagged);
};

const hiddenEqualsShown = (minefield) => {
	const hidden = minefield.filter((mine) => !mine.shown);
	const bombs = minefield.filter((mine) => mine.bomb);

	return hidden.length === bombs.length;
};

export {
	genMinefield,
	showNeighbors,
	showAll,
	updateMinefield,
	allBombsFlagged,
	hiddenEqualsShown,
};
