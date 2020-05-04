import React from 'react';
import { Link } from 'gatsby';

function Sidebar() {
  return (
    <div>
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">CurtisCodes.com</div>
          <div className="title-bar-controls">
            <button aria-label="Close"></button>
          </div>
        </div>
      </div>
      <h1
        style={{ fontFamily: 'Impact', fontSize: '24px', textAlign: 'center' }}
      >
        Daniel Curtis <em>Codes</em>
      </h1>

      <p style={{ paddingLeft: '5px' }}>
        Welcome to my personal corner of the Internet where I share my projects
        and what I'm learning.
      </p>

      <ul className="tree-view">
        <li>
          <details open>
            <summary>Navigation</summary>
            <ul>
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <details open>
                  <summary>Articles</summary>
                  <ul>
                    <li>
                      <details>
                        <summary>Frontend</summary>
                        <ul>
                          <li>
                            <Link to="/articles/tags/javascript">
                              JavaScript
                            </Link>
                          </li>
                          <li>
                            <Link to="/articles/tags/react">React</Link>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>Backend</summary>
                        <ul>
                          <li>
                            <Link to="/articles/tags/javascript">C</Link>
                          </li>
                          <li>
                            <Link to="/articles/tags/javascript">Node.js</Link>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li>
                      <details>
                        <summary>Computer Science</summary>
                        <ul>
                          <li>
                            <Link to="/articles/tags/javascript">
                              Algorithms
                            </Link>
                          </li>
                          <li>
                            <Link to="/articles/tags/javascript">
                              Cybersecurtiy
                            </Link>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
      </ul>

      <fieldset style={{ marginTop: '30px' }}>
        <legend>Color Mode</legend>
        <div className="field-row">
          <input id="radio13" type="radio" name="fieldset" />
          <label for="radio13">Dark</label>
        </div>
        <div className="field-row">
          <input id="radio14" type="radio" name="fieldset" />
          <label for="radio14">Light</label>
        </div>
      </fieldset>

      <div style={{ marginTop: '30px' }}>
        <button>
          <a href="https://github.com/danielcurtis/">GitHub</a>
        </button>
        <button>
          <a href="https://linkedin.com/in/dancurtis/">LinkedIn</a>
        </button>
        <button>
          <a href="mailto:contactdcurtis@gmail.com">Email</a>
        </button>
        <button>
          <a href="https://twitter.com/curtiscodes_">Twitter</a>
        </button>
      </div>

      <p style={{ textAlign: 'center' }}>
        Copyright {new Date().getFullYear()} Daniel Curtis
      </p>
    </div>
  );
}

export default Sidebar;
