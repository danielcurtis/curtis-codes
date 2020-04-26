import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

function Articles() {
  return (
    <Layout>
      <h2>Articles by Category</h2>
      <h3>Frontend Languages</h3>
      <Link to="/tags/javascript">JavaScript</Link>
      <br />
      <Link to="/tags/react">React</Link>

      <h3>Backend Languages</h3>
      <Link to="/tags/c">C</Link>

      <h3>Computer Science & Engineering</h3>
      <Link to="/tags/cybersecurity">Cybersecurity</Link>

      <h3>Other</h3>
      <Link to="/tags/personal-development">Personal Development</Link>
    </Layout>
  )
}

export default Articles
