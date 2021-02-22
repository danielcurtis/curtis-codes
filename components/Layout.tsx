import React, { ReactNode, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Window from './Window';
import styles from './styles/Layout.module.css';

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title = 'Curtis Codes' }: Props) {
  const [showWindow, setShowWindow] = useState(true);

  return (
    <div>
      <Head>
        <title>{`${title} | Curtis Codes`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <nav className={styles.nav}>
        <Link href="/">About</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/links">Links</Link>
        <Link href="/minesweeper">Minesweeper</Link>
        <Link href="/projects">Projects</Link>
      </nav>

      {showWindow ? (
        <Window title={title} setShowWindow={setShowWindow}>
          {children}
        </Window>
      ) : null}
    </div>
  );
}

export default Layout;
