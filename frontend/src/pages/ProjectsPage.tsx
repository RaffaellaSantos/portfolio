import React from "react";
import PageWrapper from "../components/pageWrapper";
import ProjectCard from "../components/projectcard";

const ProjectsPage: React.FC = () => (
  <PageWrapper title="Projetos">
    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <ProjectCard
        title="Projeto 1"
        description="Em construção... "
        onClick={() => ''}
      />
      <ProjectCard
        title="Projeto 2"
        description="Em construção... "
        onClick={() => ''}
      />
      <ProjectCard
        title="Projeto 3"
        description="Em construção... "
        onClick={() => ''}
      />
      <ProjectCard
        title="Projeto 4"
        description="Em construção... "
        onClick={() => ''}
      />
    </div>
  </PageWrapper>
);

export default ProjectsPage;
