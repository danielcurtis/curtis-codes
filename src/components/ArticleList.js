import React from 'react';
import { Link } from 'gatsby';

import '../pages/index.css';

function ArticleList(props) {
  // random color generator
  // const colors = ["#E64C4D", "#1E6745", "#8DB26A", "#FCCE61", "#F5713C"];
  // const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

  return (
    <>
      {props.posts.map(({ node }, i) => {
        const title = node.frontmatter.title || node.fields.slug;
        return (
          <div key={node.fields.slug}>
            <h3>
              <Link to={`/articles/${node.fields.slug}`}>{title}</Link>
            </h3>
            <div>
              {node.frontmatter.tags.map((tag, i) => {
                return (
                  <Link key={i} to={`/articles/tags/${tag}`}>
                    {tag}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ArticleList;
