import profileImage from './assets/profile.png'
import './App.css'

function App() {
  return (
    <main className="portfolio">
      <header className="hero">
        <div className="hero-top">
          <div>
            <p className="label">Full Stack Developer</p>
            <div className="brand-wrap">
              <h1>Raj Shekhar</h1>
              <span className="logo-mark">RAj</span>
            </div>
          </div>
          <div className="avatar-wrap">
            <img src={profileImage} alt="Raj Shekhar profile" className="avatar" />
          </div>
        </div>
        <p className="intro">
          Enthusiastic and detail-oriented developer with strong skills in Java,
          Spring Boot, React.js, and MySQL. I build secure, responsive web
          applications with REST APIs and JWT authentication.
        </p>
        <div className="contact-row">
          <a href="tel:+919771147596">+91 9771147596</a>
          <a href="mailto:rajthisside1609@gmail.com">rajthisside1609@gmail.com</a>
          <span>Bengaluru, Karnataka</span>
        </div>
        <div className="contact-row">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </header>

      <section className="card">
        <h2>Skills</h2>
        <div className="grid two">
          <article>
            <h3>Technical</h3>
            <ul>
              <li>Java, JavaScript, SQL, OOPs, DSA, DBMS, SDLC</li>
              <li>Frontend: HTML, CSS, JavaScript, React.js, Redux</li>
              <li>Backend: Java, Spring Boot, REST APIs, JWT</li>
              <li>Database: MySQL, RDBMS, SQL Queries, Normalization</li>
              <li>Tools: VS Code, IntelliJ IDEA, Git, GitHub, Vercel, Render</li>
              <li>AI Tools: Cursor IDE, Claude AI</li>
            </ul>
          </article>
          <article>
            <h3>Soft Skills</h3>
            <ul>
              <li>Problem-Solving</li>
              <li>Quick Learning</li>
              <li>Work Ethics</li>
              <li>Communication</li>
              <li>Teamwork</li>
              <li>Adaptability</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="card">
        <h2>Projects</h2>
        <div className="grid">
          <article className="project project-rajify">
            <h3>RAJify - Full-Stack E-commerce Web Application</h3>
            <p className="meta">Apr 2026 - Apr 2026</p>
            <p>
              Built a full-stack e-commerce web application using Java, Spring
              Boot, HTML, CSS, and JavaScript with responsive UI and REST APIs.
            </p>
            <p className="stack">
              Tech Stack: Java, Spring Boot, HTML, CSS, JavaScript
            </p>
          </article>
          <article className="project project-sales">
            <h3>Sales Savvy - Full Stack E-commerce Application</h3>
            <p className="meta">Jan 2026 - Mar 2026</p>
            <p>
              Developed a full-stack e-commerce platform using Spring Boot and
              React.js with JWT authentication, payment flow, and full order
              management.
            </p>
            <p className="stack">
              Tech Stack: Java, Spring Boot, React.js, JWT, MySQL
            </p>
          </article>
          <article className="project project-pglife">
            <h3>PGLife - Smart PG Listings Platform</h3>
            <p className="meta">Mar 2024 - Apr 2024</p>
            <p>
              Created a responsive web app to browse and filter PG listings
              using HTML, CSS, JavaScript, and React.
            </p>
            <p className="stack">
              Tech Stack: HTML, CSS, JavaScript, React.js
            </p>
          </article>
        </div>
      </section>

      <section className="card experience-section">
        <h2>Experience</h2>
        <article className="item exp-kodnest">
          <h3>Software Development Intern - Kodnest Technologies</h3>
          <p className="meta">Aug 2025 - Present | Bengaluru, Karnataka</p>
          <p>
            Gaining hands-on experience in Java, MySQL, frontend technologies,
            and manual testing while contributing to real-world projects.
          </p>
        </article>
        <article className="item exp-cloud">
          <h3>Cloud Computing Internship - Ardent Computech Pvt Ltd</h3>
          <p className="meta">Sep 2024 - Oct 2024</p>
          <p>
            Completed industrial internship on cloud computing with AWS by
            fulfilling company project criteria and training milestones.
          </p>
        </article>
        <article className="item exp-internshala">
          <h3>Web Development Training - Internshala</h3>
          <p>
            Completed Web Development training at Internshala, building
            real-world projects using HTML, CSS, JavaScript, React, and SQL
            while applying best practices for responsive and scalable web
            applications.
          </p>
        </article>
      </section>

      <section className="card">
        <h2>Education</h2>
        <article className="item">
          <h3>B.Tech in Computer Science & Engineering</h3>
          <p className="meta">Haldia Institute of Technology | 2021 - 2025</p>
          <p>CGPA: 7.7 | Haldia, West Bengal</p>
        </article>
      </section>

      <section className="card">
        <h2>Extra-Curricular</h2>
        <article className="item">
          <h3>Public Relations Manager</h3>
          <p>
            NEEDS (NPO of Haldia Institute of Technology) and HITian Inside
            (official e-media society of Haldia Institute of Technology).
          </p>
        </article>
      </section>

      <section className="card">
        <h2>Languages</h2>
        <article className="item">
          <ul>
            <li>English</li>
            <li>Hindi</li>
          </ul>
        </article>
      </section>
    </main>
  )
}

export default App
