import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { GameContext } from './GameContext';
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
			<Img
				className="Smiley-img"
				fluid={images['dead'].childImageSharp.fluid}
				alt={'dead face'}
				onClick={resetGame}
			/>
		);
	} else if (win) {
		return (
			<Img
				className="Smiley-img"
				fluid={images['sunglasses'].childImageSharp.fluid}
				alt={'sunglasses face'}
				onClick={resetGame}
			/>
		);
	} else {
		return (
			<Img
				className="Smiley-img"
				fluid={images['smile'].childImageSharp.fluid}
				alt={'smiley face'}
				onClick={resetGame}
			/>
		);
	}
}

export default Smiley;
