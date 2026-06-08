import { Link, useLocation } from "react-router-dom";
import "./Header.css";

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="site-header">
      <Link to="/" className="brand">
        NJS
      </Link>
      <nav className="site-nav" aria-label="Primary">
        <Link
          to="/"
          className={`nav-link ${isActive("/") ? "is-active" : ""}`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`nav-link ${isActive("/about") ? "is-active" : ""}`}
        >
          About
        </Link>
        <Link
          to="/research"
          className={`nav-link ${isActive("/research") ? "is-active" : ""}`}
        >
          Projects
        </Link>
        <Link
          to="/publications"
          className={`nav-link ${isActive("/publications") ? "is-active" : ""}`}
        >
          Artifacts
        </Link>
        <Link
          to="/photography"
          className={`nav-link ${isActive("/photography") ? "is-active" : ""}`}
        >
          Photography
        </Link>
      </nav>
    </header>
  );
}
