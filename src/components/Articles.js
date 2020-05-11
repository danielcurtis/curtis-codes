import React from 'react';
import { Link } from 'gatsby';

function Articles() {
  return (
    <div style={{ marginRight: '10px' }}>
      <h1>Articles</h1>
      <p>
        I write 1000 words every day about what I do and don't know. This
        reduces the bottleneck between "knowing a topic" and "being able to
        explain a topic." For example, I recently dove into Machine Learning. I
        summarized the concepts in my own words, often drawing them out. I then
        shared those summarizations in the form of tutorials on this website.
      </p>

      <p>
        I also write articles on Dev.to and LinkedIn. They feel more "bloggy"
        than the tutorials that I write here.
      </p>

      <button>Dev.to</button>
      <button>LinkedIn</button>
      <button>RSS</button>

      <h2>Most Popular Articles</h2>
      <ol>
        <li>React in 5 Minutes - Dev.to</li>
        <li>My #100DaysOfCode Experience - Dev.to</li>
        <li>Docker Cheatsheet - Dev.to</li>
        <li>Productivity as an Algorithm - Dev.to</li>
        <li>Why C is still important - Dev.to</li>
      </ol>

      <h2>Tutorials</h2>
      <ul class="tree-view">
        <li>Tutorials</li>
        <li>
          <details>
            <summary>Frontend</summary>
            <ul>
              <li>JavaScript</li>
              <li>React</li>
            </ul>
          </details>
          <details>
            <summary>Backend</summary>
            <ul>
              <li>C</li>
              <li>NodeJS</li>
              <li>Python</li>
            </ul>
          </details>
          <details>
            <summary>Machine Learning</summary>
            <ul>
              <li>Docker</li>
              <li>Kubernetes</li>
            </ul>
          </details>
          <details>
            <summary>DevOps</summary>
            <ul>
              <li>Docker</li>
              <li>Kubernetes</li>
            </ul>
          </details>
          <details>
            <summary>Computer Science</summary>
            <ul>
              <li>Algorithms</li>
              <li>Data Structures</li>
              <li>Operating Systems</li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}

export default Articles;
