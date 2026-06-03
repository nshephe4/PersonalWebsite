import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <main>
      <section className="hero reveal">
        <p className="eyebrow">Graduate Student Portfolio</p>
        <h1>Nathaniel J. Shepherd</h1>
        <p className="hero-text">
          Exploring ideas at the intersection of rigorous scholarship and
          creative observation. This site highlights my research trajectory,
          publications, and visual storytelling through photography.
        </p>
        <div className="hero-actions">
          <Link to="/research" className="btn btn-solid">
            Explore Research
          </Link>
          <Link to="/photography" className="btn btn-outline">
            View Photography
          </Link>
        </div>
      </section>

      <section className="grid-two reveal">
        <article className="card">
          <h2>Current Focus</h2>
          <p>
            My graduate work centers on designing research that combines clear
            methodology with real-world impact. I am especially interested in
            projects that bridge computational analysis, human systems, and
            public-facing scholarship.
          </p>
        </article>
        <article className="card">
          <h2>Recent Updates</h2>
          <ul className="clean-list">
            <li>Submitted manuscript on interdisciplinary research methods.</li>
            <li>Presented findings at a regional academic conference.</li>
            <li>Built an open dataset workflow for collaborative publication.</li>
          </ul>
        </article>
      </section>

      <section className="spotlight reveal">
        <div>
          <p className="eyebrow">Featured Work</p>
          <h2>Research + Creative Practice</h2>
          <p>
            My academic and creative projects are connected by one question:
            how can we communicate complex ideas with clarity and humanity?
          </p>
        </div>
        <Link to="/publications" className="btn btn-solid">
          See Publications
        </Link>
      </section>
    </main>
  );
}
