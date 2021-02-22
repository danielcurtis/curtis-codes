import React, { ReactNode, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Window from './Window';
import { bgImg, nav } from './styles/Layout.module.css';

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title }: Props) {
  const [showWindow, setShowWindow] = useState(true);

  return (
    <div>
      <Head>
        <title>{`${title} | Curtis Codes`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className={bgImg}>
        <Image
          alt="Clouds"
          src="/clouds.jpg"
          layout="fill"
          objectFit="cover"
          quality={75}
        />
      </div>

      <nav className={nav}>
        <Link href="/">About</Link>
        <Link href="/articles">Articles</Link>
        <Link href="/links">Links</Link>
        <Link href="/minesweeper">Minesweeper</Link>
        <Link href="/projects">Projects</Link>
      </nav>

      {showWindow ? (
        <Window title="Articles" setShowWindow={setShowWindow}>
          {children}
        </Window>
      ) : null}
    </div>
  );
}

export default Layout;
