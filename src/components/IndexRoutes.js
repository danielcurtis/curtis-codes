import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import '98.css';
import './index.css';

import Layout from './Layout';
import SEO from './seo';

import Icons from './Icons';
import Window from './Window';
import About from './About';
import Articles from './Articles';
import Projects from './Projects';

function IndexRoutes() {
  const [toggle, setToggle] = useState(true);
  const [active, setActive] = useState(<About />);

  return (
    <div>
      <Icons active={active} setActive={setActive} />
      {active && <div>{active}</div>}
    </div>
  );
}

export default IndexRoutes;
