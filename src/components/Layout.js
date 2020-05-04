import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

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
      <div style={{ display: 'flex' }}>
        <div
          style={{
            width: '300px',
            height: '100vh',
            background: 'silver',
            borderRight: '1px solid darkgrey',
            position: 'fixed',
          }}
        >
          <Sidebar />
        </div>
        <main style={{ margin: 'auto 10px auto 320px', maxWidth: '1000px' }}>
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

Layout.propTypes = { children: PropTypes.node.isRequired };

export default Layout;
