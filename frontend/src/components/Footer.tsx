import "./Footer.css";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Nathaniel J. Shepherd</p>
      <p>
        <a href="mailto:your.email@example.com">your.email@example.com</a>
      </p>
    </footer>
  );
}
