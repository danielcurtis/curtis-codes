import React from 'react';
import useDarkMode from 'use-dark-mode';
import { Link } from 'gatsby';

import Sunshine from './sunshine';
import Moonshine from './moonshine';
import '../pages/index.css';

function Header(props) {
  const darkMode = useDarkMode(true);
  const handleTheme = (theme) => {
    theme === "dark" ? darkMode.enable() : darkMode.disable();
  }
  let modeIcon;

  if (darkMode.value)
    modeIcon = <Sunshine onClick={handleTheme} />;
  else
    modeIcon = <Moonshine onClick={handleTheme} />;

  return (
    <header className="Header">
      <nav className="Header-nav">
        <Link
          className="Header-link condensed"
          activeClassName="Header-link-a condensed"
          to="/"
          >
          {`// Curtis Codes`}
        </Link>
        <Link
          partiallyActive={true}
          className="Header-link condensed"
          activeClassName="Header-link-a condensed"
          to="/articles/"
          >
          {`Articles`}
        </Link>
        <div className="modeIcon">{modeIcon}</div>
      </nav>
    </header>
  );
}

export default Header;
