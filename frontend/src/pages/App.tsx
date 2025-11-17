import { useState } from "react";
import Home from "./home";
import Navbar from "../components/navbar";
import AboutPage from "./AboutPage";
import SkillsPage from "./SkillsPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "about" | "skills" | "projects" | "contact"
  >("home");

  const renderPage = () => {
    switch (currentPage) {
        case 'home':
            return <Home navigateTo={setCurrentPage}/>
        case 'about':
            return <AboutPage />
        case 'skills':
            return <SkillsPage />
        case 'projects':
            return <ProjectsPage />
        case 'contact':
            return <ContactPage />
        default:
            return <Home navigateTo={setCurrentPage}/>
    }
  };

  return (
    <div className="mi-h-screen text-gray-800 font-sans">
        <Navbar currentPage={currentPage} navigateTo={setCurrentPage} />
        <main>
            {renderPage()}
        </main>
    </div>
  );
}
