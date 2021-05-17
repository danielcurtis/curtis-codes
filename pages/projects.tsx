import type { ReactNode } from 'react';
import { GrTasks } from 'react-icons/gr';
import { GiPassport } from 'react-icons/gi';
import { SiCplusplus } from 'react-icons/si';
import Layout from '../components/Layout';
import styles from './styles/projects.module.css';

interface Props {
  logo: ReactNode;
  name: string;
  link: string;
  desc: string[];
  tech: string[];
  i: number;
}

function ProjectTile({ logo, name, link, desc, tech, i }: Props) {
  const getTreeLayout = (num: number) => {
    if (num % 2 === 1) {
      return { gridArea: '1 / 1 / 1 / 3' };
    } else {
      return { gridArea: '1 / 2 / 1 / 4' };
    }
  };

  return (
    <div className={styles.tile}>
      <div className={styles.box}>
        <a href={link}>
          <button className={styles.btn}>{logo}</button>
        </a>
        <br />
        <strong className={styles.name}>{name}</strong>
      </div>

      <div style={getTreeLayout(i)}>
        <ul className="tree-view">
          <li>
            <details open>
              <summary>Details</summary>
              <ul>
                {desc.map((d) => (
                  <li>{d}</li>
                ))}
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Tech Stack</summary>
              <ul>
                {tech.map((t) => (
                  <li>{t}</li>
                ))}
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ProjectsPage() {
  const text = [
    {
      logo: <GrTasks />,
      name: 'Bddy',
      link: 'https://github.com/',
      desc: [
        'Habit tracking based on the buddy system.',
        '1.5k monthly users | $800 monthly earnings',
      ],
      tech: ['React', 'Node/Express', 'MongoDB', 'Kubernetes on GKE'],
    },
    {
      logo: <GiPassport />,
      name: 'Passport',
      link: 'https://github.com/',
      desc: ['Linktree but for bragging about traveling', '100k monthly users'],
      tech: ['React', 'Go', 'PostgreSQL', 'Kubernetes on GKE'],
    },
    {
      logo: <SiCplusplus />,
      name: 'Another C Library',
      link: 'https://github.com/',
      desc: [
        'Open source library of complex algorithms made simole',
        '50k monthly users | 700 GitHub stars',
      ],
      tech: ['C'],
    },
  ];

  return (
    <Layout title="Projects">
      {text.map((t: any, i: number) => (
        <ProjectTile
          logo={t.logo}
          name={t.name}
          link={t.link}
          desc={t.desc}
          tech={t.tech}
          i={i}
        />
      ))}
    </Layout>
  );
}

export default ProjectsPage;
