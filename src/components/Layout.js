import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Footer from './Footer';
import '98.css';
import './index.css';

function Layout({ children }) {
  const [colorMode, setColorMode] = useState('Sunshine');
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
    if (colorMode === 'Sunshine') setColorMode('Moonshine');
    else if (colorMode === 'Moonshine') setColorMode('Retrotime');
    else if (colorMode === 'Retrotime') setColorMode('Sunshine');
  };

  //       <Header siteTitle={data.site.siteMetadata.title} colorMode={colorMode} />

  return (
    <div className={colorMode}>
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;
