import React from "react";
import { BookText, GitBranch, Star } from "lucide-react";
import type { ProjectResponse } from "../API/types/types";

interface ProjectCardProps {
  project: ProjectResponse;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { details } = project;

  return (
    <a
      href={project.html_url}
      target="noopener noreferrer"
      className={`
        group text-left bg-white p-6 rounded-2xl shadow-lg
        hover:shadow-xl transition-all duration-300
        border border-gray-100 hover:border-purple-500
        flex flex-col relative overflow-hidden
        ${details?.destaque ? "border-2 border-purple-500" : "border-gray-100"}
      `}
    >
      {details?.destaque && (
        <div className="absolute top-0 right-0 h-12 w-12">
          <div className="absolute transform rotate-45 bg-purple-500 text-center text-white font-medium py-1 right-[-34px] top-[15px] w-[170px]">
            Destaque
          </div>
        </div>
      )}

      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 text-purple-600 group-hover:bg-blue-600 group0hover:text-white transition-colors duration-300">
            <GitBranch className="h-6 w-6" aria-hidden='true'/>
        </div>
      </div>

      <div className="mt-6 felx-grow">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {project.name}
        </h3>
        <p className="mt-2 text-sm text-gray-500 line-clamp-3">
            {project.description || 'Sem descrição'}
        </p>

        {details?.aprendizado && (
            <div className="mt-3 pt-3 border-t border-gray-100">
                <div className="flex items-start text-xs text-gray-700 bg-purple-50 p-2 rounded-lg">
                    <BookText className="h-4 w-4 mr-2 flex-shrink-0 text-purple-500"/>
                    <span>{details.aprendizado}</span>
                </div>
            </div>
        )}
      </div>

      <div className="mt-6 flex-shrink-0">
        <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="flex items-center">
                <span className="h-3 w-3 rounded-full mr-1 5">{project.language}</span>
            </div>
            <div className="flex items-center">
                <Star className="h-4 w4 mr-1 text-yellor-500"/>
                {project.stargazers_count}
            </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
