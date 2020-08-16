import React, { useState, useEffect } from 'react';

import Article from './Article';

function Articles() {
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState();

	useEffect(() => {
		fetch('https://dev.to/api/articles?username=curtiscodes')
			.then((res) => res.json())
			.then(
				(result) => {
					setData(result);
					setLoading(false);
				},
				(error) => {
					setLoading(false);
					console.log(error);
				}
			);
	}, []);

	return (
		<div className="win-space">
			<h1>Articles</h1>
			<p>
				Writing about writing code helps us both learn. Here's a few of my
				articles on Dev.to:
			</p>
			{loading
				? 'Loading...'
				: data.map((el, i) => <Article key={i} data={el} />)}
		</div>
	);
}

export default Articles;
