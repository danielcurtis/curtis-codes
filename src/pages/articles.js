import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/seo'

function Articles() {
  return (
    <Layout title="Articles">
      <SEO
        title="Articles"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />
      <div className="sans">
        <h2>Articles by Category</h2>
        <h3>Frontend Languages</h3>
        <Link to="/articles/tags/javascript">JavaScript</Link>
        <br />
        <Link to="/articles/tags/react">React</Link>

        <h3>Backend Languages</h3>
        <Link to="/articles/tags/c">C</Link>
        <br />
        <Link to="/articles/tags/node">Node</Link>

        <h3>DevOps</h3>
        <Link to="/articles/tags/docker">Docker</Link>

        <h3>Computer Science & Engineering</h3>
        <Link to="/articles/tags/algorithms">Algorithms</Link>
        <br />
        <Link to="/articles/tags/cybersecurity">Cybersecurity</Link>

        <h3>Other</h3>
        <Link to="/articles/tags/personal-development">
          Personal Development
        </Link>
      </div>
    </Layout>
  )
}

export default Articles
