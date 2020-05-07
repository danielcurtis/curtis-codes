import React from 'react';

function Footer() {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        height: '25px',
        width: '100vw',
        background: 'lightgrey',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <button>Start</button>
      <span>© {new Date().getFullYear()} Daniel Curtis</span>
    </div>
  );
}

export default Footer;
