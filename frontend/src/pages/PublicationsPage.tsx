export function PublicationsPage() {
  return (
    <main>
      <section className="page-head reveal">
        <p className="eyebrow">Publications</p>
        <h1>Selected Academic Work</h1>
        <p>
          Below are representative publications and works in progress. Replace
          placeholder records with full citations and links to final versions.
        </p>
      </section>

      <section className="pub-list reveal">
        <article className="card pub-item">
          <p className="mini-label">2026</p>
          <h2>Shepherd, N. J. (2026). Title of Journal Article.</h2>
          <p>
            <em>Journal Name</em>, 12(3), 101-128.
          </p>
          <a href="#" aria-disabled="true">
            DOI / Link placeholder
          </a>
        </article>

        <article className="card pub-item">
          <p className="mini-label">2025</p>
          <h2>Shepherd, N. J., &amp; Collaborator, A. (2025). Conference Paper Title.</h2>
          <p>
            <em>Proceedings of Conference Name</em>.
          </p>
          <a href="#" aria-disabled="true">
            Conference repository placeholder
          </a>
        </article>

        <article className="card pub-item">
          <p className="mini-label">In Review</p>
          <h2>Shepherd, N. J. Manuscript on interdisciplinary research design.</h2>
          <p>Under peer review.</p>
        </article>
      </section>
    </main>
  );
}
