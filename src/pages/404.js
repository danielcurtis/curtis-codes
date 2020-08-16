import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

function NotFoundPage() {
	return (
		<Layout location={this.props.location}>
			<SEO title="404: Not Found" />
			<h1>+1-404-not-found</h1>
		</Layout>
	);
}

export default NotFoundPage;
