import React, { ReactNode, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Window from './Window';
import Clippy from './Clippy';
import styles from './styles/Layout.module.css';

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title = 'Curtis Codes' }: Props) {
  const [showWindow, setShowWindow] = useState(true);
  const linkText = [
    {
      alt: 'Computer with user',
      ref: '/',
      src: '/aboutme.png',
      txt: 'About Me',
    },
    {
      alt: 'Notepad',
      ref: '/articles',
      src: '/articles.png',
      txt: 'Articles',
    },
    {
      alt: 'Globe with cursor',
      ref: '/links',
      src: '/links.png',
      txt: 'Links',
    },
    {
      alt: 'Mine',
      ref: '/minesweeper',
      src: '/minesweeper.png',
      txt: 'Minesweeper',
    },
    {
      alt: 'Tools',
      ref: '/projects',
      src: '/projects.png',
      txt: 'Projects',
    },
  ];

  return (
    <div>
      <Head>
        <title>{`${title} | Curtis Codes`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <nav className={styles.nav}>
        {linkText.map((l: any) => (
          <Link href={l.ref}>
            <a className={styles.a}>
              <Image
                alt={l.alt}
                src={l.src}
                width={50}
                height={50}
                quality={100}
                className={styles.img}
              />
              <br />
              <span className={styles.txt}>{l.txt}</span>
            </a>
          </Link>
        ))}
      </nav>

      {showWindow ? (
        <Window title={title} setShowWindow={setShowWindow}>
          {children}
        </Window>
      ) : null}

      <Clippy />
    </div>
  );
}

export default Layout;
