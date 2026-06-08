import "./Footer.css";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} Nathaniel J. Shepherd</p>
      <p>
        <a href="mailto:nathaniel.shepherd@utk.edu">nathaniel.shepherd@utk.edu</a>
      </p>
    </footer>
  );
}
