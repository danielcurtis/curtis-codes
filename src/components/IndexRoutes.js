import React, { useState } from 'react';
import Draggable from 'react-draggable';
import '98.css';

import './index.css';
import About from './About';
import Articles from './Articles';
import Projects from './Projects';
import Icons from './Icons';
import Minesweeper from './minesweeper/Minesweeper';

function IndexRoutes() {
	const [active, setActive] = useState('About Me');

	let component;
	if (active === 'About Me') {
		component = <About />;
	} else if (active === 'Articles') {
		component = <Articles />;
	} else if (active === 'Projects') {
		component = <Projects />;
	} else if (active === 'Minesweeper') {
		component = <Minesweeper />;
	}

	return (
		<div>
			<Icons setActive={setActive} />
			{active && (
				<Draggable handle="strong">
					<div
						className={`window ${
							active === 'Minesweeper' ? 'mine-win' : 'main-win'
						}`}>
						<div className="title-bar">
							<strong style={{ display: 'flex' }}>
								<div className="title-bar-text">{active}</div>
								<div
									className={
										active === 'Minesweeper'
											? 'title-bar-mini-spacer'
											: 'title-bar-spacer'
									}
								/>
							</strong>
							<div className="title-bar-controls">
								<button
									aria-label="Close"
									onClick={() => setActive(null)}></button>
							</div>
						</div>
						<div
							className="window-body"
							style={{
								fontFamily: 'Arial',
								fontSize: '16px',
								WebkitFontSmoothing: 'auto',
								maxHeight: '80vh',
								overflowY: 'scroll',
								overflowX: 'hidden',
								margin: '0',
							}}>
							{component}
						</div>
					</div>
				</Draggable>
			)}
		</div>
	);
}

export default IndexRoutes;
