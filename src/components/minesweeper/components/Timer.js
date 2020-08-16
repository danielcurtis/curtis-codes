import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { GameContext } from '../game-context';

function Timer() {
	const { state, dispatch } = useContext(GameContext);
	const images = useStaticQuery(graphql`
		query {
			a: file(relativePath: { eq: "0.png" }) {
				childImageSharp {
					fluid(maxWidth: 115, maxHeight: 185) {
						...GatsbyImageSharpFluid
					}
				}
			}
			b: file(relativePath: { eq: "1.png" }) {
				childImageSharp {
					fluid(maxWidth: 115, maxHeight: 185) {
						...GatsbyImageSharpFluid
					}
				}
			}
			c: file(relativePath: { eq: "2.png" }) {
				childImageSharp {
					fluid(maxWidth: 115, maxHeight: 185) {
						...GatsbyImageSharpFluid
					}
				}
			}
			d: file(relativePath: { eq: "3.png" }) {
				childImageSharp {
					fluid(maxWidth: 115, maxHeight: 185) {
						...GatsbyImageSharpFluid
					}
				}
			}
			e: file(relativePath: { eq: "4.png" }) {
				childImageSharp {
					fluid(maxWidth: 115, maxHeight: 185) {
						...GatsbyImageSharpFluid
					}
				}
			}
			f: file(relativePath: { eq: "5.png" }) {
				childImageSharp {
					fluid(maxWidth: 115, maxHeight: 185) {
						...GatsbyImageSharpFluid
					}
				}
			}
			g: file(relativePath: { eq: "6.png" }) {
				childImageSharp {
					fluid(maxWidth: 115, maxHeight: 185) {
						...GatsbyImageSharpFluid
					}
				}
			}
			h: file(relativePath: { eq: "7.png" }) {
				childImageSharp {
					fluid(maxWidth: 115, maxHeight: 185) {
						...GatsbyImageSharpFluid
					}
				}
			}
			i: file(relativePath: { eq: "8.png" }) {
				childImageSharp {
					fluid(maxWidth: 115, maxHeight: 185) {
						...GatsbyImageSharpFluid
					}
				}
			}
			j: file(relativePath: { eq: "9.png" }) {
				childImageSharp {
					fluid(maxWidth: 115, maxHeight: 185) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);
	const vals = {
		0: 'a',
		1: 'b',
		2: 'c',
		3: 'd',
		4: 'e',
		5: 'f',
		6: 'g',
		7: 'h',
		8: 'i',
		9: 'j',
	};

	if (state.toggleTime) {
		dispatch({ type: 'setTime', payload: state.time + 1 });
	}

	let timeStr = state.time.toString();
	let zero = '0';
	let one = '0';
	let two = '0';

	if (state.time < 9 && state.time > 100) {
		zero = '0';
		one = '0';
		two = timeStr.charAt(2);
	} else if (state.time < 100 && state.time > 1000) {
		zero = '0';
		one = timeStr.charAt(1);
		two = timeStr.charAt(2);
	} else if (state.time > 100 && state.time < 1000) {
		zero = timeStr.charAt(0);
		one = timeStr.charAt(1);
		two = timeStr.charAt(2);
	}

	return (
		<div className="Score">
			<Img
				className="Score-img"
				fluid={images[vals[parseInt(zero)]].childImageSharp.fluid}
				alt={zero}
			/>
			<Img
				className="Score-img"
				fluid={images[vals[parseInt(one)]].childImageSharp.fluid}
				alt={one}
			/>
			<Img
				className="Score-img"
				fluid={images[vals[parseInt(two)]].childImageSharp.fluid}
				alt={two}
			/>
		</div>
	);
}

// setInterval(Timer, 1000);

export default Timer;
