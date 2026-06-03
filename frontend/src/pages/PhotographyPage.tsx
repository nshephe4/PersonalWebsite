import { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Photo = {
  id: string;
  title: string;
  filename: string;
  url: string;
};

export function PhotographyPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [statusMessage, setStatusMessage] = useState("Add photos from the website without editing code.");
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    void loadPhotos();
  }, []);

  async function loadPhotos() {
    const response = await fetch("/api/photos");
    const data = await response.json();
    setPhotos(data.photos ?? []);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!selectedFile) {
      setStatusMessage("Choose an image file first.");
      return;
    }

    setIsUploading(true);
    setStatusMessage("Uploading photo...");

    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("title", title || selectedFile.name);

      const response = await fetch("/api/photos", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorBody = await response.json();
        throw new Error(errorBody.detail || "Upload failed");
      }

      const uploadedPhoto: Photo = await response.json();
      setPhotos((currentPhotos) => [uploadedPhoto, ...currentPhotos]);
      setSelectedFile(null);
      setTitle("");
      setStatusMessage("Photo uploaded successfully.");
    } catch (error) {
      const message = error instanceof Error ? error.message : "Upload failed";
      setStatusMessage(message);
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <main>
      <section className="page-head reveal">
        <p className="eyebrow">Photography</p>
        <h1>Field Notes in Light</h1>
        <p>
          Upload and manage photography directly from the site. New photos are
          saved to the FastAPI backend and appear in the gallery below.
        </p>
      </section>

      <section className="card upload-card reveal">
        <form className="upload-form" onSubmit={handleSubmit}>
          <label>
            Photo title
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Morning Geometry"
            />
          </label>

          <label>
            Image file
            <input
              type="file"
              accept="image/*"
              onChange={(event) => setSelectedFile(event.target.files?.[0] ?? null)}
            />
          </label>

          <button className="btn btn-solid" type="submit" disabled={isUploading}>
            {isUploading ? "Uploading..." : "Add Photo"}
          </button>
        </form>
        <p className="upload-status">{statusMessage}</p>
      </section>

      <section className="gallery reveal" aria-label="Photography gallery">
        {photos.length === 0 ? (
          <div className="card empty-gallery">
            <h2>No photos yet</h2>
            <p>Upload the first photo above to start building your gallery.</p>
          </div>
        ) : (
          photos.map((photo) => (
            <figure
              key={photo.id}
              className="gallery-item uploaded-photo"
              style={{ backgroundImage: `url(${photo.url})` }}
            >
              <figcaption>{photo.title}</figcaption>
            </figure>
          ))
        )}
      </section>

      <section className="spotlight reveal">
        <div>
          <p className="eyebrow">Add Your Photos</p>
          <h2>Managed from the Website</h2>
          <p>
            Photos are stored by the backend, so you can add new images from the
            page without opening the code.
          </p>
        </div>
        <Link to="/about" className="btn btn-outline">
          About the Photographer
        </Link>
      </section>
    </main>
  );
}
