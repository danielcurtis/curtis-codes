import React from 'react';

function Project({ name, desc }) {
  return (
    <div className="Project">
      <h2 className="Project-h2">{name}</h2>
      <ul>
        {desc.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

function Projects() {
  const data = [
    {
      name: 'Taskaholic - Personal project and time management',
      desc: [
        'Built using React, NodeJS, and MongoDB',
        'Hosted with Docker and Kubernetes in AWS',
      ],
    },
    {
      name: "CS Dragon - Learn CS topics through Drag 'n Drop",
      desc: [
        'Teaches popular data structures and algorithms',
        "Built using React and Atlassian's react-beautiful-dnd",
      ],
    },
    {
      name:
        'Another C Library - A C library for building complex, scalable applications',
      desc: [
        'Co-creator of the Open Source library',
        'Built and created the documentation website and tutorial videos',
      ],
    },
    {
      name: 'Bullish Dev - Machine Learning stock predictor',
      desc: [
        'Stock predictor soley based on deep learning models',
        'Built using NumPy and TensorFlow',
      ],
    },
  ];

  return (
    <div style={{ padding: '3vh 7vw' }}>
      <h1 style={{ marginBottom: '0' }}>Projects</h1>
      <p>
        I'm always hacking away on side projects. Here's a few of my favorites:
      </p>
      {data.map((el, i) => (
        <Project key={i} name={el.name} desc={el.desc} />
      ))}
    </div>
  );
}

export default Projects;
