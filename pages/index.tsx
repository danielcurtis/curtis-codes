import Layout from '../components/Layout';
import Image from 'next/image';
import styles from './styles/index.module.css';

function IndexPage() {
  return (
    <Layout title="About Dan Curtis">
      <div className={styles.flex}>
        <div className={styles.img}>
          <Image
            alt="Dan Curtis"
            src="/me.png"
            width={150}
            height={150}
            quality={100}
          />
        </div>
        <div>
          <h2 className={styles.heading}>Dan Curtis</h2>
          <strong>
            <p className={styles.heading}>Software Engineer in Denver</p>
          </strong>
        </div>
      </div>
      <div className={styles.index}>
        <p className={styles.p}>
          Welcome to my corner of the Internet. I spend my days coding at CVS
          Health, nights tinkering with side projects, and weekends as far away
          from a computer as possible. For more information about me, chat with
          Clippy!
        </p>
      </div>
    </Layout>
  );
}

export default IndexPage;
