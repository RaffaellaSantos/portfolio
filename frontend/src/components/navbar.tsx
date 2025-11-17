import React from "react";
import {
  Home as HomeIcon,
  User,
  Briefcase,
  GitBranch,
  Mail,
} from "lucide-react";

interface NavbarProps {
  currentPage: "home" | "about" | "skills" | "projects" | "contact";
  navigateTo: (
    page: "home" | "about" | "skills" | "projects" | "contact"
  ) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, navigateTo }) => {
  const navItems = [
    { id: "home" as "home", label: "Home", icon: HomeIcon },
    { id: "about" as "about", label: "Sobre Mim", icon: User },
    { id: "skills" as "skills", label: "Competências", icon: Briefcase },
    { id: "projects" as "projects", label: "Projetos", icon: GitBranch },
    { id: "contact" as "contact", label: "Contato", icon: Mail },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="felx-shrink-0 flex items-center">
            <span className="text-2x1 font-bold text-purple-600">
              Adriana Raffaella
            </span>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={`inline-flex items-center px-1 pt-1 border-b-2 
                                font-medium text-sm transition-colors duration-150
                                ${
                                  currentPage == item.id
                                    ? "border-purple-500 text-gray-900"
                                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                }`}
              >
                <item.icon className="mr-2 h-5 w-5" />
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
