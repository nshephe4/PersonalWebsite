import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ResearchPage } from "./pages/ResearchPage";
import { PublicationsPage } from "./pages/PublicationsPage";
import { PhotographyPage } from "./pages/PhotographyPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="site-bg" aria-hidden="true"></div>
      <div className="site-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/publications" element={<PublicationsPage />} />
          <Route path="/photography" element={<PhotographyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
