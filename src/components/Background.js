import React from 'react';

function Background() {
	return (
		<div
			className="flex-break"
			style={{
				justifyContent: 'space-between',
				marginTop: '5vh',
			}}>
			<ul
				className="tree-view"
				style={{
					width: '100%',
					fontSize: '14px',
					padding: '10px 20px',
					WebkitFontSmoothing: 'subpixel-antialiased',
				}}>
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
							<li>Python (TensorFlow)</li>
							<li>C/C++</li>
						</ul>
					</details>
					<details>
						<summary>
							<strong>Tools</strong>
						</summary>
						<ul>
							<li>MongoDB</li>
							<li>Docker</li>
							<li>Kubernetes</li>
							<li>Git</li>
						</ul>
					</details>
				</li>
			</ul>
			<ul
				className="tree-view"
				style={{
					width: '100%',
					fontSize: '14px',
					padding: '10px 20px',
					WebkitFontSmoothing: 'subpixel-antialiased',
				}}>
				<li>
					<h3 style={{ margin: '0' }}>Background</h3>
				</li>
				<li>
					<details open>
						<summary>
							<strong>Education</strong>
						</summary>
						<ul>
							<li>B.S. Computer Science - 3.64 GPA</li>
							<li>TensorFlow Specialization - DeepLearnig.ai</li>
						</ul>
					</details>
					<details open>
						<summary>
							<strong>Expierence</strong>
						</summary>
						<ul>
							<details>
								<summary>Software Engineer Intern @OhioOIT</summary>
								<ul>
									<li>Migrated NodeJS apps to use Docker and Kubernetes</li>
									<li>Converted Angular web apps to use Webpack and Docker</li>
									<li>
										Implemented mobile-first solutions for Oracle PeopleSoft
										apps
									</li>
								</ul>
							</details>
							<details>
								<summary>Frontend Developer Intern @OhioOIT</summary>
								<ul>
									<li>Technical Lead for upgrading outdated websites</li>
									<li>
										Designed and built university websites and components with
										JavaScript and PHP
									</li>
									<li>
										Created developer tools to automate processes with Python
									</li>
								</ul>
							</details>
							<details>
								<summary>Software Engineer Intern @CBS</summary>
								<ul>
									<li>
										Placed with the advanced research engineering team working
										in C and C++
									</li>
									<li>Improved software readability and resolved bugs</li>
								</ul>
							</details>
						</ul>
					</details>
				</li>
			</ul>
		</div>
	);
}

export default Background;
