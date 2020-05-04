import React from 'react';
import { Link } from 'gatsby';
import '../pages/index.css';

function Stack(props) {
  // random color generator
  // const colors = ['#E64C4D', '#1E6745', '#8DB26A', '#FCCE61', '#F5713C']
  // const getRandomInt = max => Math.floor(Math.random() * Math.floor(max))

  return (
    <div>
      <h3>
        <a href={props.data.link} target="_blank" rel="noopener noreferrer">
          {props.data.name}
        </a>
      </h3>
      <span>{props.data.feat}</span>
    </div>
  );
}

export default Stack;
