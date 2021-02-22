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
        <h2>Software Engineer in Denver</h2>
      </div>
      <div className={styles.index}>
        <p className={styles.p}>
          Hi friends! My name is Dan and I work at CVS Health. I balance my free
          time between building fun ideas, teaching others code, and the great
          outdoors. Speaking of fun ideas&#8212;ask Clippy if you have more
          questions about me!
        </p>
      </div>
    </Layout>
  );
}

export default IndexPage;
