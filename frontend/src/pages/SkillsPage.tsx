import React from "react";
import PageWrapper from "../components/pageWrapper";
import TechBadge from "../components/techBadge";
import { Code, Code2, Database, LeafyGreen, Pen, Brain, GitPullRequest, DockIcon, Computer, Weight, CircuitBoard, Languages, Plus, FolderCode, Subscript } from "lucide-react";

const SkillsPage: React.FC = () => (
  <PageWrapper title="Competências">
    <ul className="text-lg text-gray-600">
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <TechBadge icon={Code} label="C" />
          <TechBadge icon={Plus} label="C#" />
          <TechBadge icon={Code} label="Python" />
          <TechBadge icon={Database} label="SQL" />
          <TechBadge icon={Code2} label="HTML" />
          <TechBadge icon={Database} label="Java" />
          <TechBadge icon={Code2} label="JavaScript/TypeScript" />
          <TechBadge icon={Code} label=".NET" />
          <TechBadge icon={Code} label="SpringBoot" />
          <TechBadge icon={Code2} label="Angular" />
          <TechBadge icon={Code} label="JMeter" />
          <TechBadge icon={Code} label="Selenium" />
          <TechBadge icon={Subscript} label="Testes Unitários" />
          <TechBadge icon={Code} label="Testes de Integração" />
          <TechBadge icon={Weight} label="Testes de Performance/Carga" />
          <TechBadge icon={Languages} label="Verilog" />
          <TechBadge icon={CircuitBoard} label="FPGAs" />
          <TechBadge icon={CircuitBoard} label="Microeletrônica (Básico)" />
          <TechBadge icon={GitPullRequest} label="Git" />
          <TechBadge icon={DockIcon} label="Docker" />
          <TechBadge icon={Computer} label="Linux" />
          <TechBadge icon={FolderCode} label="Análise de Dados" />
          <TechBadge icon={Brain} label="Redes Neurais" />
          <TechBadge icon={LeafyGreen} label="Aprendizado de Máquina" />
          <TechBadge icon={Pen} label="LaTeX" />
        </div>
    </ul>
  </PageWrapper>
);

export default SkillsPage;
