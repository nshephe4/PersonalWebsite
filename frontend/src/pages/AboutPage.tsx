import { Link } from "react-router-dom";

export function AboutPage() {
  return (
    <main>
      <section className="page-head reveal">
        <p className="eyebrow">About</p>
        <h1>Academic Curiosity, Human Perspective</h1>
        <p>
          I am a graduate student committed to collaborative research,
          thoughtful writing, and public engagement. My work is driven by
          curiosity, service, and a belief that great scholarship should be
          accessible.
        </p>
      </section>

      <section className="grid-two reveal">
        <article className="card">
          <h2>Background</h2>
          <p>
            I am currently pursuing graduate study while conducting
            interdisciplinary research projects. My training combines technical
            methods with communication-focused scholarship.
          </p>
        </article>
        <article className="card">
          <h2>Outside the Lab</h2>
          <p>
            Beyond academics, I am an avid photographer and storyteller. I use
            visual work to document place, atmosphere, and everyday moments
            that often go unnoticed.
          </p>
        </article>
      </section>

      <section className="timeline reveal">
        <h2>Quick Timeline</h2>
        <div className="timeline-item">
          <h3>Graduate Studies</h3>
          <p>Advanced coursework and focused research development.</p>
        </div>
        <div className="timeline-item">
          <h3>Conference Activity</h3>
          <p>Presented early findings and built cross-institution collaborations.</p>
        </div>
        <div className="timeline-item">
          <h3>Publication Pipeline</h3>
          <p>Developing manuscripts and co-authored projects for peer review.</p>
        </div>
      </section>
    </main>
  );
}
