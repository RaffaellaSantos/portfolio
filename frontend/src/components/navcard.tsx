import React from "react";
import { ArrowRight } from "lucide-react";

interface NavCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  onClick: () => void;
}

const NavCard: React.FC<NavCardProps> = ({
  icon: Icon,
  title,
  description,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="group text-left bg-white p-6 rounded-2xl shadow-lg 
      hover:shadow-x1 transition-all duration-300
      border border-gray-100 hover:border-purple-300
      flex flex-col"
    >
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
      </div>
      <div className="mt-6 flex-grow">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-lg text-base text-gray-500">{description}</p>
      </div>
      <div className="mt-6">
        <span className="text-sm font-medium text-purple-600 group-hover:text-purple-700 flex items-center">
          Ver mais
          <ArrowRight className="ml-2 h-5 w-4 transform transition-transform durantion-300 group-hover:translate-x-1" />
        </span>
      </div>
    </button>
  );
};

export default NavCard;
