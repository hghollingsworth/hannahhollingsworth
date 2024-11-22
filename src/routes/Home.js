import React from 'react';
import Navbar from "../components/Navbar";
import "./Home.css"

const Home = () => {
  return <div>
     <Navbar/>
     <br></br>
     <br></br>

<div class="start">
<img src="https://github.com/bunch0fbananas1/hannah-portfolio/blob/master/portfoliostar1.png?raw=true" id="portfoliostar" width="100"></img>
<img src="https://github.com/bunch0fbananas1/hannah-portfolio/blob/master/portfoliostar1.png?raw=true" id="portfoliostar2" width="100"></img>

  <p id="introduction">Hi, I'm Hannah.</p>
  
  

  <p id="about">A design oriented software engineer passionate about front-end & back-end development</p>
</div>
<br>
</br>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>


<p id="introduction2">a bit about me</p>
<br></br>
<div class="bodyinfo">
  <div>
    <img src="https://github.com/bunch0fbananas1/hannah-portfolio/blob/master/IMG_3522%20(1).JPG?raw=true" alt="me" id="me" width="100%" height="100%" ></img>
  </div>
  <div>
    
    <p id="aboutbody">I am a <bold>senior</bold> at Washington University in St. Louis studying computer science, with minors in physics and history.
My interests lie in the intersection of technology, people, and innovation. I love finding ways to creatively solve technological problems.
In my free time, I can be found running, reading a new book, or testing a new recipe.
<br></br>
<br></br>
<a href="https://github.com/bunch0fbananas1/hannah-portfolio/blob/master/Hannah%20Hollingsworth%20Resume%202024.pdf" target="_blank" id="resume">resume</a>
    </p>
  </div>

</div>

<br></br>
<br></br>

<p id="introduction2">projects</p>
<br></br>
<br></br>
<div class="container">
    <div id="projects">

      <p id="projecttitle">Multi-armed bandit</p>

      <p id="projectdesc">Uses python to simulate multi-armed bandit problem</p>
      <img src="https://github.com/bunch0fbananas1/hannah-portfolio/blob/master/bandit.png?raw=true" id="projectimage" width="33%" height="33%"></img>
    </div>

    <div id="projects">
      <p id="projecttitle">Pacman simulation</p>
      <p id="projectdesc">Employs machine learning algorithm to control a classic pacman game</p>
      <img src="https://github.com/bunch0fbananas1/hannah-portfolio/blob/master/pac2.png?raw=true" id="projectimage" width="33%" height="33%"></img>
      </div>

    <div id="projects">
    <p id="projecttitle">Neuroevolution experiment</p>

    <p id="projectdesc">Evolutionary algorithm is used to simulate Artifical Neural Network (ANN). Coded in Python. </p>
    <a href="https://github.com/bunch0fbananas1/hannah-portfolio/blob/master/neuroevolution.pdf" id="portfoliolink">Source Code</a>
    </div>

    <div id="projects">
    <p id="projecttitle">Personal portfolio</p>

    <p id="projectdesc">Portfolio created using React framework with Javascript, HTML, and CSS elements. I created all graphic using the Adobe suite, and deployed the site through Github pages.</p>
    <a href="https://github.com/bunch0fbananas1/hannah-portfolio/tree/master" id="portfoliolink">Source Code</a>
    </div>

    <div id="projects"> Interactive Web Design
    <p id="projectdesc">Github Pages site created using an API, allowing users to input criteria and find the best national park for a vacation.</p>
    </div>

    <div id="projects">Object-Oriented Programming</div>
    
</div>

<br></br>
<br></br>
<br></br>
<br></br>

<p id="introduction2">experience</p>
<br></br>
<br></br>

<div id="experience">
  <div id="jobs">
    <p> <b>Software Engineering Intern </b></p>
    <p id="jobsubtext">The Boeing Company, June 2024 - August 2024</p>
    <br></br>
    <p id="jobdesc"> Developed code related to satellite systems. Worked closely with DevOps team and participated in coding sprints. Mainly used Python, and gained valuable experience in Javascript, HTML, and Linux systems as well. </p>
  </div>
  <div id="jobs">
    <p> <b>Quality Engineering Intern </b></p>
    <p id="jobsubtext">The Boeing Company, June 2023 - August 2023</p>
    <br></br>

    <p id="jobdesc"> Worked to increase efficiency and optimize procedure related to production line mistakes in manufacture of defense equipement. Observed factory workflow and assisted in minimizing safety concerns. </p>
  </div>
  <div id="jobs">
    <p> <b>Teaching Assistant / Tutor </b></p>
    <p id="jobsubtext">Washington University in St. Louis, August, 2022 - current</p>
    <br></br>
    <p id="jobdesc">Work as a teaching assistant for undergraduate computer science classes: Introduction to Computer Science, Introduction to Computer Engineering, and Web Development. </p>
  </div>

</div>


<br></br>
<br></br>
<br></br>
<br></br>
<p id="introduction2">contact</p>

<div class="contactme">
  <div id="contactinfo">
      <form action="mailto:hghollings@gmail.com" method="post" enctype="text/plain" >
        <input type="submit" value= "Email"></input>
      </form>

  </div>
  <div id="contactinfo">
    <a href="https://www.linkedin.com/in/hannah-hollingsworth-a9703b201/" id="linkchange">LinkedIn</a>
  </div >

  <div id="contactinfo">GitHub</div>
  
  <br></br>
  <br></br>

      </div>  </div>;
  
};

export default Home;

