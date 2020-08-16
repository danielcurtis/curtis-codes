import React from 'react';

function Project({ name, link, desc }) {
	return (
		<div className="Project">
			<h2 className="Project-h2">
				<a href={link} target="_blank" rel="noopener noreferrer">
					{name}
				</a>
			</h2>
			<ul>
				{desc.map((el) => (
					<li key={el} style={{ fontFamily: 'Arial' }}>
						{el}
					</li>
				))}
			</ul>
		</div>
	);
}

export default Project;
