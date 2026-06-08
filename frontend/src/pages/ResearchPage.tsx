import { labProjects, mainProjectLanes, projects, supportingProjects } from "../data/profile";

export function ResearchPage() {
  return (
    <main>
      <section className="page-head reveal">
        <p className="eyebrow">Projects</p>
        <h1>LLM RAG for Policy, Procedures, and Contracts</h1>
        <p>
          My main project area is using LLMs and retrieval-augmented generation
          to work with document-heavy domains: policy, procedures, and
          contracts. The emphasis is source grounding, evaluation, and workflows
          that can be inspected.
        </p>
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
        <p className="eyebrow">Primary Repositories</p>
        <h2>Implementation and Evaluation Work</h2>
      </section>

      <section className="project-list reveal">
        {projects.map((project) => (
          <article className="card project-row" key={project.repo}>
            <div>
              <p className="mini-label">{project.language} / {project.status}</p>
              <h2>{project.name}</h2>
              <p>{project.summary}</p>
            </div>
            <ul className="clean-list">
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <a href={project.href} className="repo-link">
              {project.repo}
            </a>
          </article>
        ))}
      </section>

      <section className="section-head reveal">
        <p className="eyebrow">Supporting Work</p>
        <h2>Additional Technical Projects</h2>
      </section>

      <section className="project-list reveal">
        {supportingProjects.map((project) => (
          <article className="card project-row" key={project.repo}>
            <div>
              <p className="mini-label">{project.language} / {project.status}</p>
              <h2>{project.name}</h2>
              <p>{project.summary}</p>
            </div>
            <ul className="clean-list">
              {project.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
            <a href={project.href} className="repo-link">
              {project.repo}
            </a>
          </article>
        ))}
      </section>

      <section className="section-head reveal">
        <p className="eyebrow">UTK ASL</p>
        <h2>Lab and Organization Contributions</h2>
        <p>
          Public repositories from UTK ASL where my portfolio should reflect
          lab contribution context alongside personal project work.
        </p>
      </section>

      <section className="project-list reveal">
        {labProjects.map((project) => (
          <article className="card project-row compact-row" key={project.repo}>
            <div>
              <p className="mini-label">{project.language}</p>
              <h2>{project.name}</h2>
              <p>{project.summary}</p>
            </div>
            <a href={project.href} className="repo-link">
              {project.repo}
            </a>
          </article>
        ))}
      </section>

      <section className="spotlight reveal">
        <div>
          <p className="eyebrow">Methods</p>
          <h2>Grounded Answers, Measured Behavior</h2>
          <p>
            The common thread is using retrieval and evaluation to make LLM
            systems more accountable in domains where the source document
            matters.
          </p>
        </div>
        <a href="https://github.com/nshephe4" className="btn btn-outline">
          View GitHub
        </a>
      </section>
    </main>
  );
}
