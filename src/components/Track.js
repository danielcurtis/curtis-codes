import React from "react"
import PropTypes from "prop-types"
import kebabCase from "lodash/kebabCase"

import { Link, graphql } from "gatsby"

function Track() {
  return (
    <div>
      <p>
        I was inspired by Tania Rascia, an excellent OSS programmer and author,
        to learn in public. Until I publish a guide on a topic, I leave it
        marked red (to be learned). My focus is C, Node.js, and React with
        occasional explorations of other curiosities.
      </p>
      <h2>Frontend</h2>
      <ul>
        <Link to="/guides/tags/react"><li>React</li></Link>
        <li style={{ color: "darkred" }}>Gatsby</li>
        <Link to="/guides/tags/javascript"><li>JavaScript</li></Link>
        <li style={{ color: "darkred" }}>HTML/CSS</li>
        <li style={{ color: "darkred" }}>Next.js</li>
        <li style={{ color: "darkred" }}>Angular</li>
        <li style={{ color: "darkred" }}>TypeScript</li>
      </ul>

      <h2>Backend</h2>
      <ul>
        <li style={{ color: "darkred" }}>C</li>
        <li style={{ color: "darkred" }}>C++</li>
        <li style={{ color: "darkred" }}>Python</li>
        <li style={{ color: "darkred" }}>Node.js</li>
        <li style={{ color: "darkred" }}>Express</li>
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
        <li style={{ color: "darkred" }}>SQL</li>
        <li style={{ color: "darkred" }}>MongoDB</li>
        <li style={{ color: "darkred" }}>Firebase</li>
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
  );
}

export default Track;
