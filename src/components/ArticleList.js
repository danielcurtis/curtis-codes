import React from 'react';
import { Link } from 'gatsby';

import '../pages/index.css';

function ArticleList(props) {
  return (
    <>
    {props.posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug;
      return (
        <div key={node.fields.slug} className="Stack">
          <h3 className="Stack-h3 condensed">
            <Link to={`/articles/${node.fields.slug}`}>
              {title}
            </Link>
          </h3>
          <small className="sans">{node.frontmatter.date}</small>
          <p
            className="Stack-p sans"
            dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          {node.frontmatter.tags.map((tag) => {
            return <span className="Stack-feat condensed">{tag}</span>
          })}
        </div>
      );
    })}
    </>
  );
}

export default ArticleList;
