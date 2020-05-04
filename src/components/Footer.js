import React from 'react';
import '../pages/index.css';

function Footer() {
  return (
    <div>
      <code>
        © {new Date().getFullYear()} Daniel Curtis&nbsp;|&nbsp;
        <a href="mailto:contactdcurtis@gmail.com">Email</a>
      </code>
    </div>
  );
}

export default Footer;
