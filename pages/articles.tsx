import React, { useState, useEffect } from 'react';
import Article from '../components/Article';
import Layout from '../components/Layout';
import styles from './styles/articles.module.css';

type Props = {
  articles: any;
};

function ArticlesPage({ articles }: Props) {
  const [sortBy, setSortBy] = useState('date');
  const [sorted, setSorted] = useState([...articles]);

  useEffect(() => {
    if (sortBy === 'likes') {
      setSorted(() =>
        [...articles].sort(
          (a: any, b: any) =>
            b.positive_reactions_count - a.positive_reactions_count
        )
      );
    } else if (sortBy === 'date') {
      setSorted(() => [...articles]);
    }
  }, [sortBy]);

  return (
    <Layout title="Articles">
      <label className={styles.label}>
        Sort By:&nbsp;
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className={styles.select}>
          <option value="date">Date</option>
          <option value="likes">Popularity</option>
        </select>
      </label>

      <br />
      <hr />

      {sorted.map((a: any) => (
        <Article
          key={a.id}
          title={a.title}
          url={a.url}
          date={a.edited_at ? a.edited_at : a.created_at}
          likes={a.positive_reactions_count}
          description={a.description}
        />
      ))}
    </Layout>
  );
}

export async function getStaticProps(_context: any) {
  const res: any = await fetch(
    'https://dev.to/api/articles?username=curtiscodes'
  );
  const data: any = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      articles: data,
    },
  };
}

export default ArticlesPage;
