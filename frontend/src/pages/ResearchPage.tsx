import { Link } from "react-router-dom";

export function ResearchPage() {
  return (
    <main>
      <section className="page-head reveal">
        <p className="eyebrow">Research</p>
        <h1>Research Program</h1>
        <p>
          My research investigates how technical methods and human-centered
          inquiry can be integrated for stronger evidence and broader impact.
        </p>
      </section>

      <section className="project-grid reveal">
        <article className="card project-card">
          <p className="mini-label">Project 01</p>
          <h2>Computational Approaches to Public Data</h2>
          <p>
            Building reproducible workflows for collecting, cleaning, and
            analyzing complex public datasets.
          </p>
          <p>
            <strong>Status:</strong> Active
          </p>
        </article>

        <article className="card project-card">
          <p className="mini-label">Project 02</p>
          <h2>Interdisciplinary Collaboration Models</h2>
          <p>
            Studying how teams from different disciplines coordinate methods,
            language, and outcomes.
          </p>
          <p>
            <strong>Status:</strong> Ongoing
          </p>
        </article>

        <article className="card project-card">
          <p className="mini-label">Project 03</p>
          <h2>Research Communication in Public Spaces</h2>
          <p>
            Exploring how scholarly results can be translated for non-specialist
            audiences without losing precision.
          </p>
          <p>
            <strong>Status:</strong> Drafting manuscript
          </p>
        </article>
      </section>

      <section className="spotlight reveal">
        <div>
          <p className="eyebrow">Methods</p>
          <h2>Mixed Methods, Reproducible Practice</h2>
          <p>
            I combine quantitative analysis, close reading, and applied
            communication strategy. Every project is documented for
            transparency and future collaboration.
          </p>
        </div>
        <Link to="/publications" className="btn btn-outline">
          Related Publications
        </Link>
      </section>
    </main>
  );
}
