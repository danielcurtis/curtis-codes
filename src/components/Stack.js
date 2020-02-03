import React from 'react';
import '../pages/index.css';

function Stack(props) {
  return (
     <div className="Stack">
      <div>
        <h3 className="Stack-h3 condensed">
          <a href={props.data.link} target="_blank" rel="noopener noreferrer">
            {props.data.name}
          </a>
        </h3>
        <p className="Stack-p sans">{props.data.desc}</p>
        <span className="Stack-feat condensed">{props.data.feat}</span>
      </div>
    </div>
  );
}

export default Stack;
