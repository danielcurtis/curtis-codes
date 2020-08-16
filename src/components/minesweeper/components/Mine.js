import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';

import { GameContext } from '../game-context';
import {
	showNeighbors,
	allBombsFlagged,
	hiddenEqualsShown,
	showAll,
	updateMinefield,
} from '../utils';

function Mine({ mine }) {
	const images = useStaticQuery(graphql`
		query {
			flag: file(relativePath: { eq: "flag.png" }) {
				childImageSharp {
					fluid(maxWidth: 30, maxHeight: 30) {
						...GatsbyImageSharpFluid
					}
				}
			}
			bomb: file(relativePath: { eq: "bomb.png" }) {
				childImageSharp {
					fluid(maxWidth: 30, maxHeight: 30) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	const { state, dispatch } = useContext(GameContext);

	const showBomb = () =>
		(state.gameover || mine.shown || state.win) && mine.bomb;

	const showFlag = () => (!state.gameover || !state.win) && mine.flagged;

	const showNeighbor = () => (state.gameover || mine.shown) && mine.neighbors;

	const win = () => {
		return (
			allBombsFlagged(state.minefield) || hiddenEqualsShown(state.minefield)
		);
	};

	const handlewin = () => {
		const shown = showAll(state.minefield);
		const minefield = updateMinefield(state.minefield, shown);

		dispatch({ type: 'setWin', payload: true });
		dispatch({ type: 'setMinefield', payload: minefield });
	};

	const handleClick = () => {
		if (mine.bomb) {
			dispatch({ type: 'setGameover', payload: true });
		} else if (!mine.neighbors) {
			mine.shown = true;
			const shownNeighbors = showNeighbors(state.minefield, mine);
			const minefield = updateMinefield(state.minefield, shownNeighbors);
			dispatch({ type: 'setMinefield', payload: minefield });
		} else if (mine.neighbors) {
			mine.shown = true;
			const minefield = updateMinefield(state.minefield, [mine]);
			dispatch({ type: 'setMinefield', payload: minefield });
		}

		if (win()) {
			handlewin();
		}
	};

	const toggleFlagged = (e) => {
		e.preventDefault();

		if (mine.shown && !mine.flagged) return;

		if (!mine.flagged && state.flags === state.mines) return;

		mine.flagged
			? dispatch({ type: 'setFlags', payload: state.flags - 1 })
			: dispatch({ type: 'setFlags', payload: state.flags + 1 });

		mine.flagged = !mine.flagged;

		if (win()) {
			handlewin();
		}

		return false;
	};

	const mineClasses = classNames({
		mine: true,
		'mine-shown': mine.shown || state.gameover,
	});

	return (
		<button
			className={mineClasses}
			onClick={handleClick}
			onContextMenu={(e) => toggleFlagged(e)}>
			{showBomb() ? (
				<Img
					className="Mine-img"
					alt="bomb"
					fluid={images.bomb.childImageSharp.fluid}
				/>
			) : showFlag() ? (
				<Img
					className="Mine-img"
					alt="flag"
					fluid={images.flag.childImageSharp.fluid}
				/>
			) : showNeighbor() ? (
				`${mine.neighbors}`
			) : (
				''
			)}
		</button>
	);
}

export default Mine;
