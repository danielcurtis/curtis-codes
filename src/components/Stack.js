import React from 'react';
import { Link } from 'gatsby';
import '../pages/index.css';

function Stack(props) {
  const colors = ["#E64C4D", "#1E6745", "#8DB26A", "#FCCE61", "#F5713C"];
  const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return (
     <div className="Stack">
      <h3 className="Stack-h3 condensed">
        <a
          href={props.data.link}
          style={{ color: colors[getRandomInt(5)]}}
          target="_blank"
          rel="noopener noreferrer"
          >
          {props.data.name}
        </a>
      </h3>
      <span className="Stack-feat condensed">{props.data.feat}</span>
    </div>
  );
}

export default Stack;
