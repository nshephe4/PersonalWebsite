import { Link } from "react-router-dom";

export function PhotographyPage() {
  return (
    <main>
      <section className="page-head reveal">
        <p className="eyebrow">Photography</p>
        <h1>Field Notes in Light</h1>
        <p>
          Photography is where I practice attention. These images capture
          atmosphere, detail, and stories found between destinations.
        </p>
      </section>

      <section className="gallery reveal" aria-label="Photography gallery">
        <figure className="gallery-item tone-a">
          <figcaption>Morning Geometry</figcaption>
        </figure>
        <figure className="gallery-item tone-b">
          <figcaption>Rain on Main Street</figcaption>
        </figure>
        <figure className="gallery-item tone-c">
          <figcaption>Riverbank in Winter</figcaption>
        </figure>
        <figure className="gallery-item tone-d">
          <figcaption>Station Platform Study</figcaption>
        </figure>
        <figure className="gallery-item tone-e">
          <figcaption>Late Summer Field</figcaption>
        </figure>
        <figure className="gallery-item tone-f">
          <figcaption>Night Window Reflection</figcaption>
        </figure>
      </section>

      <section className="spotlight reveal">
        <div>
          <p className="eyebrow">Add Your Photos</p>
          <h2>Replace Placeholder Tiles</h2>
          <p>
            Add your own photos to the frontend/public/photos folder, then set
            each gallery tile background to your image URL in the stylesheet.
          </p>
        </div>
        <Link to="/about" className="btn btn-outline">
          About the Photographer
        </Link>
      </section>
    </main>
  );
}
