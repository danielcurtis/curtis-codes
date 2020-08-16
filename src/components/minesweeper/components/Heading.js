import React from 'react';

import Score from './Score';
import Smiley from './Smiley';

function Heading() {
	return (
		<div className="Heading">
			<Score />
			<Smiley />
		</div>
	);
}

export default Heading;
