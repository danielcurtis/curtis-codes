import React from 'react';
import { FcLike } from 'react-icons/fc';

function Article({ data }) {
	return (
		<div>
			<a href={data.url} target="_blank" rel="noreferrer">
				<h2 className="Article-h2">{data.title}</h2>
			</a>
			<div className="Article-title">
				<FcLike size="1.2em" style={{ margin: '0 1px 3px 0' }} />
				<code>{data.public_reactions_count}</code>
				<code style={{ marginLeft: '12px' }}>{data.readable_publish_date}</code>
			</div>
			<p>{data.description}</p>
			<hr />
		</div>
	);
}

export default Article;
