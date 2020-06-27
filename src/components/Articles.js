import React, { useState, useEffect } from 'react';
import Article from './children/Article';

function Articles() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [sort, setSort] = useState(false);

  useEffect(() => {
    fetch('https://dev.to/api/articles?username=curtiscodes')
      .then((res) => res.json())
      .then(
        (result) => {
          setData(result);
          setLoading(false);
        },
        (error) => {
          setLoading(false);
          console.log(error);
        }
      );
  }, []);

  const sortData = () => {
    if (sort) {
      data.sort((a, b) =>
        a.public_reactions_count > b.public_reactions_count ? 1 : -1
      );
    } else {
      data.sort((a, b) => (a.edited_at > b.edited_at ? 1 : -1));
    }
  };

  // true == by date; false == by popularity
  const updateSort = (val) => {
    setSort(val);
    sortData();
  };

  return (
    <div className="win-space">
      <h1>Articles</h1>
      <p>
        Writing about writing code helps us both learn. Here's a few of my
        articles on Dev.to:
      </p>
      <div style={{ display: 'flex' }}>
        <button onClick={() => updateSort(true)}>By Date</button>
        <button onClick={() => updateSort(false)}>By Popularity</button>
      </div>
      {loading
        ? 'Loading...'
        : data.map((el, i) => <Article key={i} data={el} />)}
    </div>
  );
}

export default Articles;
