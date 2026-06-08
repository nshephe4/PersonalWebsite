import { projects, supportingProjects } from "../data/profile";

export function PublicationsPage() {
  const artifacts = projects;

  return (
    <main>
      <section className="page-head reveal">
        <p className="eyebrow">Artifacts</p>
        <h1>LLM/RAG Artifacts and Evaluation Records</h1>
        <p>
          This section is structured for formal publications as they become
          available. For now, it highlights public technical artifacts tied to
          policy, procedure, and contract-oriented LLM/RAG work.
        </p>
      </section>

      <section className="pub-list reveal">
        {artifacts.map((artifact) => (
          <article className="card pub-item" key={artifact.repo}>
            <p className="mini-label">{artifact.status}</p>
            <h2>{artifact.name}</h2>
            <p>{artifact.summary}</p>
            <a href={artifact.href}>Read repository documentation</a>
          </article>
        ))}
      </section>

      <section className="section-head reveal">
        <p className="eyebrow">Supporting Artifacts</p>
        <h2>Additional Technical Records</h2>
      </section>

      <section className="pub-list reveal">
        {supportingProjects.map((artifact) => (
          <article className="card pub-item" key={artifact.repo}>
            <p className="mini-label">{artifact.status}</p>
            <h2>{artifact.name}</h2>
            <p>{artifact.summary}</p>
            <a href={artifact.href}>Read repository documentation</a>
          </article>
        ))}
      </section>

      <section className="card reveal">
        <p className="mini-label">Future Section</p>
        <h2>Formal Publications</h2>
        <p>
          Add peer-reviewed citations, preprints, conference papers, posters,
          and dataset DOIs here as they are ready for public display.
        </p>
      </section>
    </main>
  );
}
