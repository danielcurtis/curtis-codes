import React from 'react';
import { FcLike } from 'react-icons/fc';

function Article({ data }) {
	return (
		<>
			<a href={data.url} target="_blank" rel="noreferrer">
				<h2 className="Article-h2">{data.title}</h2>
			</a>
			<div className="Article-title">
				<FcLike size="1.2em" className="Article-icon" />
				<code>{data.public_reactions_count}</code>
				<code className="Article-code">{data.readable_publish_date}</code>
			</div>
			<p>{data.description}</p>
			<hr />
		</>
	);
}

export default Article;
