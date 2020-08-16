import React, { useContext } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { GameContext } from '../game-context';

function Score() {
	const { state } = useContext(GameContext);
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

	let current = state.mines - state.flags;
	let currentStr = current.toString();
	let zero = null;
	let one = null;

	if (current > 9) {
		zero = currentStr.charAt(0);
		one = currentStr.charAt(1);
	} else {
		zero = '0';
		one = currentStr.charAt(0);
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
		</div>
	);
}

export default Score;
