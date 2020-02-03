import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Footer from './Footer';

function Layout({ children }) {
  const [colorMode, setColorMode] = useState("Sunshine");
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const updateColorMode = () => {
    if (colorMode === "Sunshine")
      setColorMode("Moonshine")
    else if (colorMode === "Moonshine")
      setColorMode("Retrotime")
    else if (colorMode === "Retrotime")
      setColorMode("Sunshine")
  }

  return (
    <div className={colorMode}>
      <Header
        siteTitle={data.site.siteMetadata.title}
        colorMode={colorMode}
        />
      <div className="Layout"><main>{children}</main></div>
      <Footer />
    </div>
  );
}

Layout.propTypes = { children: PropTypes.node.isRequired }

export default Layout;
