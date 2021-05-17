import type { ReactNode } from 'react';
import {
  FaYoutube,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaPaperPlane,
} from 'react-icons/fa';
import { SiTiktok } from 'react-icons/si';
import Layout from '../components/Layout';
import styles from './styles/links.module.css';

interface Props {
  href: string;
  icon: ReactNode;
  desc: string;
}

function LinkTile({ href, icon, desc }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.tile}>
      <span className={styles.icon}>{icon}</span>
      <br />
      <strong className={styles.desc}>{desc}</strong>
    </a>
  );
}

function LinksPage() {
  return (
    <Layout title="Links">
      <div className={styles.grid}>
        <LinkTile
          href="https://twitter.com/codescurtis"
          icon={<FaTwitter />}
          desc="Rare opinions that are solely mine"
        />
        <LinkTile
          href="https://linkedin.com/in/dancurtis/"
          icon={<FaYoutube />}
          desc="Tutorials and projects"
        />
        <LinkTile
          href="https://linkedin.com/in/dancurtis/"
          icon={<FaLinkedinIn />}
          desc="Super-duper professional stuff"
        />
        <LinkTile
          href="https://tiktok.com/@curtiscodes"
          icon={<SiTiktok />}
          desc="Mini-tutorials and memes"
        />
        <LinkTile
          href="https://github.com/danielcurtis"
          icon={<FaGithub />}
          desc="Open source code"
        />
        <LinkTile
          href=""
          icon={<FaPaperPlane />}
          desc="Ask Clippy for my email"
        />
      </div>
    </Layout>
  );
}

export default LinksPage;
