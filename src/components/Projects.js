import React from 'react';

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <p>
        I'm a project-based learner. I'm always hacking away on some side
        project, here's a few recent ones:
      </p>
      <table style={{ textAlign: 'left' }}>
        <thead>
          <th>Project</th>
          <th style={{ borderSpacing: '20px' }}>Description</th>
        </thead>
        <tbody>
          <tr>
            <td>Another C Library</td>
            <td>Open source library that makes C accessible</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Projects;
