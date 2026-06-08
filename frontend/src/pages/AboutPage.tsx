import { contact, focusAreas } from "../data/profile";

export function AboutPage() {
  return (
    <main>
      <section className="page-head reveal">
        <p className="eyebrow">About</p>
        <h1>{contact.name}</h1>
        <p>
          {contact.role}. My work centers on LLM and RAG systems for policy,
          procedures, and contracts, with an emphasis on source-grounded
          answers, evaluation, and practical document workflows.
        </p>
      </section>

      <section className="grid-two reveal">
        <article className="card">
          <h2>Research Identity</h2>
          <p>
            I am interested in how AI tools behave when the task depends on
            policy language, procedural correctness, contract clauses, and
            traceable evidence. My projects emphasize benchmarking, comparison,
            and communication of model performance.
          </p>
        </article>
        <article className="card">
          <h2>Working Style</h2>
          <ul className="clean-list">
            <li>Build small, inspectable pipelines before scaling.</li>
            <li>Compare model outputs with explicit evaluation metrics.</li>
            <li>Translate technical results into readable project artifacts.</li>
          </ul>
        </article>
      </section>

      <section className="timeline reveal">
        <h2>Focus Areas</h2>
        {focusAreas.map((area) => (
          <div className="timeline-item" key={area}>
            <h3>{area}</h3>
            <p>Active thread across coursework, research, and public code.</p>
          </div>
        ))}
      </section>

      <section className="timeline reveal">
        <h2>Technical Footprint</h2>
        <div className="timeline-item">
          <h3>Python and AI Evaluation</h3>
          <p>RAG pipelines, fine-tuning workflows, benchmark evaluation, and model comparison.</p>
        </div>
        <div className="timeline-item">
          <h3>Document Intelligence</h3>
          <p>Policy, procedure, and contract workflows where retrieval quality and source grounding matter.</p>
        </div>
        <div className="timeline-item">
          <h3>Web Presence</h3>
          <p>React, TypeScript, FastAPI, and deployment-oriented portfolio infrastructure.</p>
        </div>
      </section>
    </main>
  );
}
