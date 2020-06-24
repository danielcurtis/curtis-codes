import React from 'react';

function BackgroundSkills() {
  return (
    <div
      className="flex-break"
      style={{
        justifyContent: 'space-between',
        marginTop: '5vh',
      }}
    >
      <ul
        className="tree-view"
        style={{
          width: '100%',
          fontSize: '14px',
          padding: '10px 20px',
        }}
      >
        <li>
          <h3 style={{ margin: '0' }}>Skills</h3>
        </li>
        <li>
          <details open>
            <summary>
              <strong>Languages</strong>
            </summary>
            <ul>
              <li>JavaScript (React, DOM, Node)</li>
              <li>C/C++</li>
              <li>Python (NumPy, TensorFlow)</li>
            </ul>
          </details>
          <details>
            <summary>
              <strong>Tools</strong>
            </summary>
            <ul>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Postman</li>
              <li>Jira</li>
              <li>Git</li>
            </ul>
          </details>
        </li>
      </ul>
      <ul
        className="tree-view"
        style={{ width: '100%', fontSize: '14px', padding: '10px 20px' }}
      >
        <li>
          <h3 style={{ margin: '0' }}>Background</h3>
        </li>
        <li>
          <details open>
            <summary>
              <strong>Education</strong>
            </summary>
            <ul>
              <li>B.S. Computer Science & Cybersecurity (2020)</li>
              <li>F.C.C. Full-stack Certification (2020)</li>
              <li>AWS Development Certification (2020)</li>
            </ul>
          </details>
          <details>
            <summary>
              <strong>Expierence</strong>
            </summary>
            <ul>
              <details>
                <summary>Software Engineer Intern @OhioOIT (2020)</summary>
                <ul>
                  <li>Worked with Docker, Angular, & Node</li>
                  <li>
                    Updated university applications to use Docker & Webpack
                  </li>
                </ul>
              </details>
              <details>
                <summary>Frontend Developer Intern @OhioOIT (2019)</summary>
                <ul>
                  <li>Worked with JavaScript, Python, & Drupal</li>
                  <li>Designed and built university websites</li>
                  <li>Created HTML scrape and cleanup tools</li>
                </ul>
              </details>
              <details>
                <summary>Software Engineer Intern @CBS (2017)</summary>
                <ul>
                  <li>Worked with NodeJS, C, & C++</li>
                  <li>Reviewed software for bugs and readability</li>
                  <li>Presented with a full-time offer by the CTO</li>
                </ul>
              </details>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  );
}

export default BackgroundSkills;
