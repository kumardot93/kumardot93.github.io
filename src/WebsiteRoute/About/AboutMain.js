import React, { useEffect } from 'react';
import TopNav from './../../components/TopNav.js';
import Bio from './../../components/Bio.js';
import Intrests from './../../components/Intrest.js';
import styles from './css/AboutMain.module.css';

function AboutMain() {
	useEffect(() => {
		let elements = document.getElementsByClassName('animate');
		elements = Array.from(elements);
		elements.forEach((element) => {
			if (element.getBoundingClientRect().top < window.innerHeight * 0.9)
				element.classList.add('animateOnShowStart');
			else element.classList.add('animateOnShow');
		});
	}, []);
	return (
		<React.Fragment>
			<TopNav />
			<div className="content mt-4">
				<div className="bg-dark m-3 p-4 roundBorder text-light">
					<h1 className="text-center text-info">About</h1>
					<h2>Aditya Kumar</h2>
					<h3>B.Tech Pre-Final Year Student</h3>
					<Bio className={styles.bio} />
					<hr className="bg-secondary" />
					<div className={`w-100 d-flex ${styles.aboutInCont}`}>
						<div className="d-flex flex-column flex-fill">
							<h4 className="animate">Education</h4>
							<div className="d-flex flex-wrap">
								<div className="m-2 ml-4 animate">
									B.Tech in Computer Science<br />
									<b>Indian Institute of Technology, Jodhpur</b>
									<br />
									<i className="fa fa-calendar ml-2 mt-2" /> Graduating in 2022
									<i className="fa fa-map-marker ml-4 mb-4" /> Jodhpur, Rajasthan
									<br />
								</div>
								<div className="m-2 ml-4 animate">
									Higher Secondary School<br />
									<b>North Point Children's School | I.S.C</b>
									<br />
									<i className="fa fa-calendar ml-2 mt-2" /> May 2018
									<i className="fa fa-map-marker ml-4" /> Muzaffarpur, Bihar
								</div>
								<div className="m-2 ml-4 animate">
									Secondary School<br />
									<b>North Point Children's School | I.C.S.E</b>
									<br />
									<i className="fa fa-calendar ml-2 mt-2" /> May 2016
									<i className="fa fa-map-marker ml-4" /> Muzaffarpur, Bihar
								</div>
							</div>
							<h4 className="mt-4 animate">Projects</h4>
							<div className="d-flex flex-wrap">
								<div className="animate">
									<b>Expression Based Test</b>
									<br />
									Supervisor: Chiranjoy Chatopadhyay, January-August 2020
									<ul>
										<li>Designed a CNN to recognize expressions of a face</li>
										<li>
											Based on the expression of student, corectness of answer and time taken,
											increased or decreased the difficulty of next question
										</li>
									</ul>
								</div>

								<div className="animate">
									<b>Web Based Examination</b>
									<br />
									Supervisor: Chiranjoy Chatopadhyay, June 2020
									<ul>
										<li>Designed a web-app to conduct self assesment test</li>
										<li>
											Instructors can check subjective questions and analyse performance through
											various available tools
										</li>
									</ul>
								</div>

								<div className="animate">
									<b>Collabrative Workspace Management</b>
									<br />
									Trello Hackathon, March - April 2020
									<ul>
										<li>Designed a web app to manage personal and colabrative workspace</li>
									</ul>
								</div>

								<div className="animate">
									<b>Socket-Based Shopping System</b>
									<br />
									Supervisor: Anand Mishra, October - December 2019
									<ul>
										<li>E-Grocery shoping for IT Jodhpur</li>
										<li>
											Web socket based communication channel for connecting vendor and customer
										</li>
									</ul>
								</div>
							</div>

							<h4 className="mt-4 animate">Extracurriculars</h4>
							<ul className="animate">
								<li>Member of Musuc Club, IIT Jodhpur: Guitar and Drum</li>
								<li>Participant Inter-IIT Sports 2019</li>
								<li>Participant Inter-IIT Cult 2020</li>
							</ul>

							<h4 className="mt-4 animate">Positions</h4>
							<ul className="animate">
								<li>Vice-Caption: Designing Club, IT Jodhpur(2019-2020)</li>
								<li>Assistant Head: Digital Designing Team, IGNUS’20</li>
								<li>Core Team: Public Relations, IGNUS’20</li>
							</ul>
						</div>
						<div className="d-flex flex-column flex-fill" style={{ minWidth: '24vw' }}>
							<h4 className="animate">Courses</h4>
							<div className="d-flex flex-column ml-2  animate">
								<h5>IIT Jodhpur</h5>
								<span>Computer Programming</span>
								<span>Linear Algebra and Calculus</span>
								<span>Complex Analysis & Diferential Equation</span>
								<span>Discrete Mathematics</span>
								<span>Data Structures and Algorithms</span>
								<span>Object Analysis and Design</span>
								<span>Signals and Systems</span>
								<span>Probabilityand Statistics</span>
								<span>Theory of Computation</span>
								<span>Software Engineering</span>
								<span> Principles of Economics </span>
								<span>PrinciplesofManagement</span>
								<h5 className="mt-2">Other</h5>
								<span>Full Stack Development</span>
								<span>Web Security Fundamentals</span>
								<span>Android Studio Basic</span>
								<span>Fundamental Finance</span>
							</div>
							<h4 className="mt-4 animate">Skills</h4>
							<div className="d-flex flex-column ml-2  animate">
								<h5>Language</h5>
								<span>Python</span>
								<span>C++</span>
								<span>javaScript</span>
								<span>Java(basic)</span>
								<h5 className="mt-2">Other</h5>
								<span>React</span>
								<span>Django</span>
								<span>Tensorflow-python</span>
								<span>OpenCV-python</span>
								<span>Microcontrollers</span>
								<span>Android Studio(basic)</span>
								<span>Photoshop</span>
							</div>
							<h4 className="mt-4 animate">Achievements</h4>
							<ul className="ml-2 animate">
								<li>Ranked 5th among IIT's in brand designing at Inter-IIT cult meet 2020</li>
							</ul>
						</div>
					</div>
					<Intrests />
				</div>
			</div>
		</React.Fragment>
	);
}

export default AboutMain;
