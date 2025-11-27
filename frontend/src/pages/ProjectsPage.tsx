import React, { useEffect, useState } from "react";
import PageWrapper from "../components/pageWrapper";
import ProjectCard from "../components/projectcard";
import type { ProjectResponse } from "../API/types/types";
import { AlertTriangle, Loader2 } from "lucide-react";
import { API_URL_LOCAL } from "../utils/config";

const ProjectsPage: React.FC = () => {
  const [projects, setProjects] = useState<ProjectResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(`${API_URL_LOCAL}/projetos`);

        if(!response.ok){
          throw new Error('Falha na API: ${response.statusText}');          
        }

        const data: ProjectResponse[] = await response.json();

        data.sort((a,b) =>{
          const featuredA = a.details?.destaque ?? false;
          const featuredB = b.details?.destaque ?? false;
          return (featuredB ? 1:0) - (featuredA? 1:0);
        })

        setProjects(data);
      } catch (err) {
        if(err instanceof Error){
          setError(err.message);
        }else{
          setError('Ocorreu um erro desconhecido');
        }
      } finally{
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (isLoading){
    return(
      <PageWrapper title="Projetos">
        <div className="flex flex-col items-center justify-center h-64 text-gray-500">
          <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
          <p className="mt-4 text-lg">Buscando projetos no GitHub...</p>
        </div>
      </PageWrapper>
    );
  }

  if (error) {
    return (
      <PageWrapper title="Projetos">
        <div className="flex flex-col items-center justify-center h-64 text-red-500 bg-red-50 p-8 rounded-2xl">
          <AlertTriangle className="h-12 w-12" />
          <p className="mt-4 text-lg font-semibold">Erro ao carregar projetos</p>
          <p className="text-sm">{error}</p>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper title="Projetos">
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          <p>Nenhum projeto encontrado. Adicione repositórios no seu GitHub!</p>
        </div>
      )}
    </PageWrapper>
  );
};

export default ProjectsPage;
