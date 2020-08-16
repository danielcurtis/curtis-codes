import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { GameContext } from '../game-context';
import { genMinefield } from '../utils';

function Smiley() {
	const images = useStaticQuery(graphql`
		query {
			smile: file(relativePath: { eq: "smile.png" }) {
				childImageSharp {
					fluid(maxWidth: 35, maxHeight: 35) {
						...GatsbyImageSharpFluid
					}
				}
			}
			sunglasses: file(relativePath: { eq: "sunglasses.png" }) {
				childImageSharp {
					fluid(maxWidth: 35, maxHeight: 35) {
						...GatsbyImageSharpFluid
					}
				}
			}
			dead: file(relativePath: { eq: "dead.png" }) {
				childImageSharp {
					fluid(maxWidth: 35, maxHeight: 35) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	const { state, dispatch } = useContext(GameContext);
	const { win, gameover } = state;

	const resetGame = () => {
		const minefield = genMinefield();
		const mines = minefield.filter((mine) => mine.bomb === true).length;

		dispatch({ type: 'setMinefield', payload: minefield });
		dispatch({ type: 'setMines', payload: mines });
		dispatch({ type: 'setFlags', payload: 0 });
		dispatch({ type: 'setTime', payload: 0 });

		gameover
			? dispatch({ type: 'setGameover', payload: false })
			: dispatch({ type: 'setWin', payload: false });
	};

	if (gameover) {
		return (
			<div onClick={resetGame} onKeyDown={resetGame} role="button">
				<Img
					className="Smiley-img"
					fluid={images['dead'].childImageSharp.fluid}
					alt={'dead face'}
				/>
			</div>
		);
	} else if (win) {
		return (
			<div onClick={resetGame} onKeyDown={resetGame} role="button">
				<Img
					className="Smiley-img"
					fluid={images['sunglasses'].childImageSharp.fluid}
					alt={'sunglasses face'}
					onClick={resetGame}
				/>
			</div>
		);
	} else {
		return (
			<div onClick={resetGame} onKeyDown={resetGame} role="button">
				<Img
					className="Smiley-img"
					fluid={images['smile'].childImageSharp.fluid}
					alt={'smiley face'}
					onClick={resetGame}
				/>
			</div>
		);
	}
}

export default Smiley;
