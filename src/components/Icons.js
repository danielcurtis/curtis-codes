import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function Icons({ setActive }) {
	const data = useStaticQuery(graphql`
		query {
			doc: file(relativePath: { eq: "doc.png" }) {
				childImageSharp {
					fluid(maxWidth: 100, maxHeight: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			dir: file(relativePath: { eq: "dir.png" }) {
				childImageSharp {
					fluid(maxWidth: 100, maxHeight: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			pic: file(relativePath: { eq: "pic.png" }) {
				childImageSharp {
					fluid(maxWidth: 100, maxHeight: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			mne: file(relativePath: { eq: "mne.png" }) {
				childImageSharp {
					fluid(maxWidth: 100, maxHeight: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	const name = ['About Me', 'Articles', 'Projects', 'Minesweeper'];
	const path = ['doc', 'dir', 'pic', 'mne'];
	const alts = [
		'Document icon',
		'Directory icon',
		'Picture icon',
		'Minesweeper icon',
	];

	return (
		<div className="Icons">
			{name.map((el, i) => {
				return (
					<div
						key={i}
						id={el}
						tabIndex={i + 1}
						role="button"
						onClick={() => setActive(el)}
						onKeyDown={() => setActive(el)}
						style={{
							padding: '10px',
							textAlign: 'center',
							cursor: 'pointer',
						}}>
						<Img
							style={{
								maxWidth: 'calc(10px + 5vh)',
								maxHeight: 'calc(10px + 5vh)',
								margin: 'auto',
							}}
							fluid={data[path[i]].childImageSharp.fluid}
							alt={alts[i]}
						/>
						<label
							htmlFor={el}
							style={{
								background: 'teal',
								color: 'white',
								padding: '2px',
								marginTop: '3px',
							}}>
							{el}
						</label>
					</div>
				);
			})}
		</div>
	);
}

export default Icons;
