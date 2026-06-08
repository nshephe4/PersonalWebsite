import { Link } from "react-router-dom";
import {
  contact,
  focusAreas,
  labProjects,
  mainProjectLanes,
  projects,
  supportingProjects,
} from "../data/profile";

export function HomePage() {
  const featuredProjects = projects;

  return (
    <main>
      <section className="hero hero-split reveal">
        <div>
          <p className="eyebrow">Research Portfolio</p>
          <h1>{contact.name}</h1>
          <p className="hero-text">{contact.role}</p>
          <p className="hero-copy">
            My main work is LLM and retrieval-augmented generation for policy,
            procedures, and contracts: building systems that retrieve the right
            source text, reason over it carefully, and can be evaluated with
            clear evidence.
          </p>
          <div className="hero-actions">
            <Link to="/research" className="btn btn-solid">
              View Projects
            </Link>
            <a href={contact.github} className="btn btn-outline">
              GitHub Profile
            </a>
          </div>
        </div>
        <aside className="profile-panel" aria-label="Profile summary">
          <img className="profile-avatar" src={contact.avatar} alt={contact.name} />
          <p className="profile-role">{contact.role}</p>
          <p className="mini-label">Current Lens</p>
          <ul className="tag-list">
            {focusAreas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="section-head reveal">
        <p className="eyebrow">Main Projects</p>
        <h2>LLM RAG for Policy, Procedures, and Contracts</h2>
      </section>

      <section className="project-grid reveal">
        {mainProjectLanes.map((lane) => (
          <article className="card project-card" key={lane.name}>
            <p className="mini-label">Primary Focus</p>
            <h2>{lane.name}</h2>
            <p>{lane.summary}</p>
          </article>
        ))}
      </section>

      <section className="section-head reveal">
        <p className="eyebrow">Project Evidence</p>
        <h2>Public Work Supporting the Main Theme</h2>
      </section>

      <section className="project-grid reveal">
        {featuredProjects.map((project) => (
          <article className="card project-card" key={project.repo}>
            <p className="mini-label">{project.language}</p>
            <h2>{project.name}</h2>
            <p>{project.summary}</p>
            <a href={project.href}>Open repository</a>
          </article>
        ))}
      </section>

      <section className="grid-two reveal">
        <article className="card stat-card">
          <p className="stat-number">5</p>
          <p>public repositories on GitHub</p>
        </article>
        <article className="card stat-card">
          <p className="stat-number">{supportingProjects.length}</p>
          <p>supporting projects kept separate from the primary research theme</p>
        </article>
      </section>

      <section className="section-head reveal">
        <p className="eyebrow">UTK ASL</p>
        <h2>Lab and Organization Contributions</h2>
      </section>

      <section className="project-grid reveal">
        {labProjects.slice(0, 3).map((project) => (
          <article className="card project-card" key={project.repo}>
            <p className="mini-label">{project.language}</p>
            <h2>{project.name}</h2>
            <p>{project.summary}</p>
            <a href={project.href}>Open repository</a>
          </article>
        ))}
      </section>

      <section className="spotlight reveal">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Open to Research Conversation</h2>
          <p>
            The fastest way to understand my work is through the code,
            methods, and evaluation artifacts behind each project.
          </p>
        </div>
        <a href={`mailto:${contact.email}`} className="btn btn-solid">
          Email Nathaniel
        </a>
      </section>
    </main>
  );
}
