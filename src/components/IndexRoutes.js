import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import '98.css';
import './index.css';

import Layout from './Layout';
import SEO from './seo';

import Icons from './Icons';
import About from './About';
import Articles from './Articles';
import Projects from './Projects';

function IndexRoutes() {
  const [active, setActive] = useState('About Me');

  let component;
  if (active === 'About Me') component = <About />;
  else if (active === 'Articles') component = <Articles />;
  else if (active === 'Projects') component = <Projects />;

  return (
    <div>
      <Icons setActive={setActive} />
      {active && (
        <div
          className="window"
          style={{
            maxWidth: '960px',
            zIndex: 1,
            left: '0',
            right: '0',
            top: '0',
            position: 'absolute',
            margin: 'auto',
          }}
        >
          <div className="title-bar">
            <div className="title-bar-text">{active}</div>
            <div className="title-bar-controls">
              <button
                aria-label="Close"
                onClick={() => setActive(null)}
              ></button>
            </div>
          </div>
          <div
            className="window-body"
            style={{
              fontFamily: 'Arial',
              fontSize: '14px',
              webkitFontSmoothing: 'auto',
            }}
          >
            {component}
          </div>
        </div>
      )}
    </div>
  );
}

export default IndexRoutes;
