import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import {
	FaGithub,
	FaTwitter,
	FaLinkedinIn,
	FaRegEnvelope,
} from 'react-icons/fa';
import BackgroundSkills from './children/BackgroundSkills';

function About() {
	const img = useStaticQuery(graphql`
		query {
			me: file(relativePath: { eq: "me.png" }) {
				childImageSharp {
					fixed(width: 250) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);

	console.log(
		`Hello fellow hackers, check out the Easter egg: https://bit.ly/3i9PByT`
	);

	return (
		<div className="win-space">
			<div className="About-top">
				<Img
					className="About-img"
					fixed={img.me.childImageSharp.fixed}
					alt="Daniel Curtis"
				/>
				<div className="About-top-txt">
					<h1 style={{ margin: '0' }}>Hello, I'm Curtis!</h1>
					<p>
						I’m passionate about building a better tomorrow by solving today’s
						hard problems through software engineering. I have two years of
						professional experience and recently graduated with a bachelors in
						Computer Science. I'm currently searching for new opportunities in
						the Denver area.
					</p>
					<div style={{ display: 'flex' }}>
						<a
							href="mailto:contactdcurtis@gmail.com"
							style={{ textDecoration: 'none' }}>
							<button>
								<FaRegEnvelope />
							</button>
						</a>
						<a
							href="https://github.com/danielcurtis"
							style={{ textDecoration: 'none' }}>
							<button>
								<FaGithub />
							</button>
						</a>
						{/*
						<a
							href="https://linkedin.com/in/dancurtis"
							style={{ textDecoration: 'none' }}>
							<button>
								<FaLinkedinIn />
							</button>
						</a>
						*/}
						<a
							href="https://twitter.com/codescurtis"
							style={{ textDecoration: 'none' }}>
							<button>
								<FaTwitter />
							</button>
						</a>
					</div>
				</div>
			</div>
			<hr />
			<BackgroundSkills />
			<hr style={{ margin: '5vh 0' }} />
			<blockquote style={{ marginBottom: '2vh' }}>
				"...Daniel was the lead developer for our Student Affairs site
				migrations and did wonderful interacting with customers and explaining
				technical matters in an easy-to-understand fashion. He was kind and
				patient when training new employees and kept a positive mindset with
				even the most daunting tasks. During my time working with Daniel, I was
				impressed with his drive, attention to detail, willingness to learn and
				be a team player, and overall technical expertise..."
				<br />
				<footer>— Breanna, Project Manager</footer>
			</blockquote>
			<blockquote>
				"I highly recommend Daniel. He has helped me with my growing business in
				several ways to become a local industry leader. He developed my website
				and built customized payment software. He studied my competitors and
				gave me suggestions for marketing strategies, SEO ranking, and much
				more."
				<br />
				<footer>— Austin, Freelance Client</footer>
			</blockquote>
		</div>
	);
}

export default About;
