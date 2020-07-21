import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import IndexRoutes from '../components/IndexRoutes';

function Index() {
	const data = useStaticQuery(graphql`
		query {
			desktop: file(relativePath: { eq: "bg.jpg" }) {
				childImageSharp {
					fluid(quality: 90, maxWidth: 1920) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);
	const imageData = data.desktop.childImageSharp.fluid;

	return (
		<BackgroundImage
			Tag="section"
			style={{
				width: '100%',
				backgroundPosition: 'bottom center',
				backgroundRepeat: 'repeat-y',
				backgroundSize: 'cover',
				overflow: 'hidden',
			}}
			fluid={imageData}
			backgroundColor={'#040e18'}>
			<Layout>
				<SEO
					title="About Me"
					keywords={['software', 'engineer', 'portfolio', 'website']}
				/>
				<div style={{ width: '100vw', height: '100vh' }}>
					<IndexRoutes />
				</div>
			</Layout>
		</BackgroundImage>
	);
}

export default Index;
