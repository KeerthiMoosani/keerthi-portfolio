import './App.css';
import { Mail, ArrowDown, ExternalLink } from 'lucide-react';
import Chatbot from "./Chatbot";

function App() {
  return (
    <div className="portfolio">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo">KR.</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#profiles">Profiles</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="nav-button"
        >
          View Resume
        </a>
      </nav>

      {/* HERO */}
      <main className="hero">
        <div className="hero-content">

          <p className="hero-label">
            AIML STUDENT • DEVELOPER • PROBLEM SOLVER
          </p>

          <h1>
            Hi, I'm <span>Keerthi</span>.
            <br />
            I build things with code.
          </h1>

          <p className="hero-description">
            An Artificial Intelligence & Machine Learning undergraduate
            interested in software development, backend development,
            problem solving, and emerging technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-button">
              Explore My Work <ArrowDown size={18} />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
             View Resume
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/KeerthiMoosani"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>

            <a
              href="https://www.linkedin.com/in/keerthi-moosani"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>

            <a
              href="mailto:keerthireddymoosani@gmail.com"
              aria-label="Email"
            >
              <Mail size={21} />
            </a>
          </div>
        </div>

        <div className="hero-decoration">

          <div className="code-card">

            <span>const</span> developer = {'{'}
            <br />

            &nbsp;&nbsp;name: <b>"Keerthi"</b>,
            <br />

            &nbsp;&nbsp;focus: <b>"AIML"</b>,
            <br />

            &nbsp;&nbsp;building: <b>"projects"</b>,
            <br />

            &nbsp;&nbsp;learning: <b>true</b>
            <br />

            {'}'};

          </div>

        </div>
      </main>

      {/* ABOUT */}
      <section id="about" className="section">

        <div className="section-heading">
          <p className="section-label">01 — ABOUT</p>
          <h2>A little about me.</h2>
        </div>

        <div className="about-grid">

          <div className="about-text">

            <p>
              I'm <strong>Moosani Keerthi</strong>, a B.Tech student
              specializing in Artificial Intelligence & Machine Learning
              at VNR VJIET.
            </p>

            <p>
              I enjoy turning ideas into working software and exploring
              different areas of development through hands-on projects.
              My interests currently include backend development,
              data structures, Java, Python, and emerging technologies.
            </p>

            <p>
              I believe the best way to learn technology is by building,
              experimenting, and solving real problems.
            </p>

          </div>

          <div className="about-card">

            <div>
              <span>Degree</span>
              <strong>B.Tech — AIML</strong>
            </div>

            <div>
              <span>Institution</span>
              <strong>VNR VJIET</strong>
            </div>

            <div>
              <span>Current Year</span>
              <strong>2nd Year</strong>
            </div>

            <div>
              <span>First-Year CGPA</span>
              <strong>9.4 / 10</strong>
            </div>

          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section">

        <div className="section-heading">
          <p className="section-label">02 — SKILLS</p>
          <h2>Tools I work with.</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-card">

            <h3>Languages</h3>

            <div className="skill-list">
              <span>C</span>
              <span>Java</span>
              <span>Python</span>
              <span>JavaScript</span>
              <span>SQL</span>
            </div>

          </div>

          <div className="skill-card">

            <h3>Web & Backend</h3>

            <div className="skill-list">
              <span>Node.js</span>
              <span>Express.js</span>
              <span>React</span>
              <span>TypeScript</span>
              <span>REST APIs</span>
            </div>

          </div>

          <div className="skill-card">

            <h3>Database & Tools</h3>

            <div className="skill-list">
              <span>MongoDB</span>
              <span>Mongoose</span>
              <span>Git</span>
              <span>GitHub</span>
              <span>VS Code</span>
            </div>

          </div>

          <div className="skill-card">

            <h3>Core Concepts</h3>

            <div className="skill-list">
              <span>Data Structures</span>
              <span>OOP</span>
              <span>CRUD</span>
              <span>JWT Authentication</span>
              <span>Problem Solving</span>
            </div>

          </div>

        </div>
      </section>

      {/* EDUCATION */}
      <section className="section">

        <div className="section-heading">
          <p className="section-label">03 — EDUCATION</p>
          <h2>My academic journey.</h2>
        </div>

        <div className="education-card">

          <div>

            <span className="education-year">
              2025 — 2029
            </span>

            <h3>VNR VJIET</h3>

            <p>
              B.Tech — Artificial Intelligence & Machine Learning
            </p>

          </div>

          <div className="education-score">

            <span>1st Year CGPA</span>

            <strong>9.4 / 10</strong>

          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">

        <div className="section-heading">

          <p className="section-label">
            04 — PROJECTS
          </p>

          <h2>Things I've built.</h2>

        </div>

        <div className="projects-grid">

          {/* CAMPUS MARKETPLACE */}
          <article className="project-card featured-project">

            <div className="project-number">
              01
            </div>

            <div className="project-content">

              <p className="project-type">
                BACKEND • REST API
              </p>

              <h3>
                Campus Marketplace
              </h3>

              <p>
                A backend REST API built for a campus marketplace with
                CRUD operations, JWT authentication using HTTP-only
                cookies, password hashing, validation, protected routes,
                centralized error handling, and USER/ADMIN role-based
                authorization.
              </p>

              <div className="project-tech">

                <span>Node.js</span>
                <span>Express.js</span>
                <span>MongoDB</span>
                <span>Mongoose</span>
                <span>JWT</span>
                <span>bcrypt</span>

              </div>

            </div>
          </article>

          {/* LRU CACHE */}
          <article className="project-card">

            <div className="project-number">
              02
            </div>

            <div className="project-content">

              <p className="project-type">
                DATA STRUCTURES
              </p>

              <h3>
                LRU Cache
              </h3>

              <p>
                An implementation of a Least Recently Used Cache using
                a HashMap and Doubly Linked List for efficient cache
                operations.
              </p>

              <div className="project-tech">

                <span>Data Structures</span>
                <span>HashMap</span>
                <span>Doubly Linked List</span>

              </div>

            </div>
          </article>

          {/* AI TOOL DETECTION */}
          <article className="project-card">

            <div className="project-number">
              03
            </div>

            <div className="project-content">

              <p className="project-type">
                PYTHON • AI
              </p>

              <h3>
                AI Tool Detection
              </h3>

              <p>
                A Python-based project related to detecting or
                identifying AI-generated content or AI tool usage.
              </p>

              <div className="project-tech">

                <span>Python</span>
                <span>AI</span>

              </div>

            </div>
          </article>

          {/* LIBRARY MANAGEMENT SYSTEM */}
          <article className="project-card">

            <div className="project-number">
              04
            </div>

            <div className="project-content">

              <p className="project-type">
                JAVA • OOP
              </p>

              <h3>
                Library Management System
              </h3>

              <p>
                A Java-based library system demonstrating inheritance,
                polymorphism, abstraction, and encapsulation while
                managing books, students, users, librarians, and
                book issue operations.
              </p>

              <div className="project-tech">

                <span>Java</span>
                <span>OOP</span>
                <span>Inheritance</span>
                <span>Polymorphism</span>

              </div>

            </div>
          </article>

          {/* KABADISETU */}
          <article className="project-card">

            <div className="project-number">
              05
            </div>

            <div className="project-content">

              <p className="project-type">
                REACT • TYPESCRIPT
              </p>

              <h3>
                KabadiSetu
              </h3>

              <p>
                A React/TypeScript e-waste management platform
                prototype for material selection, image uploads,
                AI-analysis workflow, weight tracking, and estimated
                material rates.
              </p>

              <div className="project-tech">

                <span>React</span>
                <span>TypeScript</span>
                <span>AI Workflow</span>

              </div>

            </div>
          </article>

        </div>
      </section>

      {/* CODING PROFILES */}
      <section id="profiles" className="section">

        <div className="section-heading">

          <p className="section-label">
            05 — CODING PROFILES
          </p>

          <h2>
            Find me online.
          </h2>

        </div>

        <div className="profiles-grid">

          <a
            className="profile-card"
            href="https://github.com/KeerthiMoosani"
            target="_blank"
            rel="noreferrer"
          >

            <div>

              <span className="profile-label">
                SOURCE CODE
              </span>

              <h3>
                GitHub
              </h3>

              <p>
                Projects, experiments and code.
              </p>

            </div>

            <ExternalLink size={18} />

          </a>

          <a
            className="profile-card"
            href="https://www.linkedin.com/in/keerthi-moosani"
            target="_blank"
            rel="noreferrer"
          >

            <div>

              <span className="profile-label">
                PROFESSIONAL
              </span>

              <h3>
                LinkedIn
              </h3>

              <p>
                Professional profile and connections.
              </p>

            </div>

            <ExternalLink size={18} />

          </a>

          <a
            className="profile-card"
            href="https://www.codechef.com/users/keerthimoosani"
            target="_blank"
            rel="noreferrer"
          >

            <div>

              <span className="profile-label">
                COMPETITIVE PROGRAMMING
              </span>

              <h3>
                CodeChef
              </h3>

              <p>
                Competitive programming profile.
              </p>

            </div>

            <ExternalLink size={18} />

          </a>

          <a
            className="profile-card"
            href="https://leetcode.com/u/KeerthiMoosani/"
            target="_blank"
            rel="noreferrer"
          >

            <div>

              <span className="profile-label">
                PROBLEM SOLVING
              </span>

              <h3>
                LeetCode
              </h3>

              <p>
                Data structures and algorithm practice.
              </p>

            </div>

            <ExternalLink size={18} />

          </a>

          <a
            className="profile-card"
            href="https://www.hackerrank.com/profile/keerthimoosani"
            target="_blank"
            rel="noreferrer"
          >

            <div>

              <span className="profile-label">
                CODING PRACTICE
              </span>

              <h3>
                HackerRank
              </h3>

              <p>
                Programming and technical practice.
              </p>

            </div>

            <ExternalLink size={18} />

          </a>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section">

        <div className="section-heading">

          <p className="section-label">
            06 — CONTACT
          </p>

          <h2>
            Let's connect.
          </h2>

        </div>

        <div className="contact-card">

          <p>
            Have an idea, opportunity, or just want to say hello?
          </p>

          <a href="mailto:keerthireddymoosani@gmail.com">

            Send me an email

            <ExternalLink size={16} />

          </a>

        </div>
      </section>

      <Chatbot />

    </div>
  );
}

export default App;