import React from "react"
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Link, graphql } from "gatsby"

const Track = ({/*
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    },
  },
*/}) => (
  <div>
    <div className="sans">
      <h2>Frontend</h2>
      <ul>
        <Link to="/tags/react"><li>React</li></Link>
        <Link to=""><li>Gatsby</li></Link>
        <Link to=""><li>JavaScript</li></Link>
        <Link to=""><li>HTML/CSS</li></Link>
        <li style={{ color: "darkred" }}>Next.js</li>
        <li style={{ color: "darkred" }}>Angular</li>
        <li style={{ color: "darkred" }}>TypeScript</li>
      </ul>

      <h2>Backend</h2>
      <ul>
        <Link to=""><li>C</li></Link>
        <Link to=""><li>C++</li></Link>
        <Link to=""><li>Python</li></Link>
        <Link to=""><li>Node.js</li></Link>
        <Link to=""><li>Express</li></Link>
      </ul>

      <h2>DevOps</h2>
      <ul>
        <li style={{ color: "darkred" }}>Docker</li>
        <li style={{ color: "darkred" }}>Kubernetes</li>
        <li style={{ color: "darkred" }}>AWS</li>
      </ul>

      <h2>Networks</h2>
      <ul>
        <li style={{ color: "darkred" }}>Cybersecurity</li>
        <li style={{ color: "darkred" }}>Sockets</li>
      </ul>

      <h2>Databases</h2>
      <ul>
        <Link to=""><li>SQL</li></Link>
        <Link to=""><li>MongoDB</li></Link>
        <Link to=""><li>Firebase</li></Link>
        <li style={{ color: "darkred" }}>Apollo/GraphQL</li>
      </ul>

      <h2>Computer Science & Engineering</h2>
      <ul>
        <li style={{ color: "darkred" }}>Big O Notation</li>
        <li style={{ color: "darkred" }}>Algorithms</li>
        <li style={{ color: "darkred" }}>Data Structures</li>
        <li style={{ color: "darkred" }}>Design Patterns</li>
        <li style={{ color: "darkred" }}>Quantum Mechanics</li>
        <li style={{ color: "darkred" }}>Physics</li>
        <li style={{ color: "darkred" }}>Calculus</li>
        <li style={{ color: "darkred" }}>Linear Algebra</li>
      </ul>

      <h2>Machine Learning & A.I.</h2>
      <ul>
        <li style={{ color: "darkred" }}>Deep Learning</li>
        <li style={{ color: "darkred" }}>Artificial Intelligence</li>
        <li style={{ color: "darkred" }}>Machine Learning Math</li>
        <li style={{ color: "darkred" }}>TensorFlow</li>
        <li style={{ color: "darkred" }}>Computer Vision</li>
        <li style={{ color: "darkred" }}>Natural Language Processing</li>
      </ul>

      <h2>Tools</h2>
      <ul>
        <li>Git</li>
        <li style={{ color: "darkred" }}>Webpack</li>
      </ul>

      <h2>Other</h2>

      {/*
      <ul>
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
      */}
    </div>
  </div>
);
/*
Track.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}*/

export default Track;
