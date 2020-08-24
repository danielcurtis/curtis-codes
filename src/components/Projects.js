import React from 'react';

import Project from './Project';

function Projects() {
	const data = [
		{
			name:
				'Another C Library - A C Library for building scalable, complex apps',
			link: 'https://anotherclibrary.com',
			desc: [
				'Co-creator of the Open Source C Library',
				"Sorting significantly faster than the standard qsort and C++'s sort",
				'JSON parsing at 1GB/second per CPU',
				'Built-in memory management and garbage collection',
			],
		},
		// {
		// 	name: 'Stonk Advisor - Predictive stock forcasting with deep learning',
		// 	link: 'https://stonkadvisor.com',
		// 	desc: [
		// 		'Time series forecasting based on historical stock data',
		// 		'Daily trend predicting with natural language processing and sentiment analysis',
		// 		'Deep learning models created in Python with TensorFlow, NumPy, and Pandas',
		// 		'Web app built with React, Docker, and Kubernetes on AWS',
		// 	],
		// },
		{
			name: 'Taskaholic - Personal time tracking and project management',
			link: 'https://taskaholic.com',
			desc: [
				'Frontend built with React',
				'Backend built with NodeJS, Express and MongoDB',
				'CI/CD Pipeline built with Docker, Travis CI and Google Kubernetes Engine',
			],
		},
	];

	return (
		<div style={{ padding: '3vh 7vw' }}>
			<h1 style={{ marginBottom: '0' }}>Projects</h1>
			<p>
				I'm always hacking away on side projects. Here's a few of my favorites:
			</p>

			{data.map((el, i) => (
				<Project key={i} name={el.name} link={el.link} desc={el.desc} />
			))}

			<p>
				This portfolio is built with React,{' '}
				<a href="https://jdan.github.io/98.css/">98.css,</a> and{' '}
				<a href="https://win98icons.alexmeub.com/">win98icons</a>.
			</p>
		</div>
	);
}

export default Projects;
