import React from 'react';
import useDarkMode from 'use-dark-mode';
import { Link } from 'gatsby';

import Sunshine from './Sunshine';
import Moonshine from './Moonshine';
import '../pages/index.css';

function Header(props) {
  const darkMode = useDarkMode(false);
  const handleTheme = (theme) => {
    theme === 'dark' ? darkMode.enable() : darkMode.disable();
  };
  let modeIcon;

  if (darkMode.value) modeIcon = <Sunshine onClick={handleTheme} />;
  else modeIcon = <Moonshine onClick={handleTheme} />;

  return (
    <header>
      <nav>
        <Link active to="/">
          Curtis Codes
        </Link>
        <Link active to="/about" partiallyActive={true}>
          About
        </Link>
        <Link active to="/articles" partiallyActive={true}>
          Articles
        </Link>
        <div>{modeIcon}</div>
      </nav>
    </header>
  );
}

export default Header;
