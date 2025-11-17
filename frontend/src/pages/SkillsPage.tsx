import React from "react";
import PageWrapper from "../components/pageWrapper";
import TechBadge from "../components/techBadge";
import {
  Code,
  Code2,
  Database,
  Pen,
  Brain,
  Weight,
  CircuitBoard,
  Languages,
  Layers,
  Package,
  Puzzle,
  ShieldCheck,
  CheckCircle2,
  Bug,
  CpuIcon,
  GraduationCap,
  GitBranch,
  Container,
  Lightbulb,
  Terminal,
  BarChart2,
} from "lucide-react";

const SkillsPage: React.FC = () => (
  <PageWrapper title="Competências">
    <div className="max-w-7xl mx-auto px-6">
      <ul className="text-lg text-gray-600">
        <div className="my-12">
          <h4 className="text-3xl font-bold text-gray-900">
            Formação & Idiomas
          </h4>
          <div className="mt-4 flex justify-start gap-6 flex-wrap">
            <TechBadge
              icon={GraduationCap}
              label="Engenharia da Computação | UEA-EST | 2023 - Atual"
            />
            <TechBadge icon={Languages} label="Inglês - Intermediário" />
            <TechBadge icon={Languages} label="Português - Fluente" />
          </div>
        </div>

        <div className="my-12">
          <h4 className="text-3xl font-bold text-gray-900">Linguagens</h4>
          <div className="mt-4 flex justify-start gap-6 flex-wrap">
            <TechBadge icon={Code} label="C" />
            <TechBadge icon={Code} label="C#" />
            <TechBadge icon={Code} label="Python" />
            <TechBadge icon={Database} label="SQL" />
            <TechBadge icon={Code2} label="HTML" />
            <TechBadge icon={Code} label="Java" />
            <TechBadge icon={Code2} label="JavaScript/TypeScript" />
          </div>
        </div>

        <div className="my-12">
          <h4 className="text-3xl font-bold text-gray-900">Frameworks</h4>
          <div className="mt-4 flex justify-start gap-6 flex-wrap">
            <TechBadge icon={Layers} label=".NET" />
            <TechBadge icon={Package} label="SpringBoot" />
            <TechBadge icon={Puzzle} label="Angular" />
          </div>
        </div>

        <div className="my-12">
          <h4 className="text-3xl font-bold text-gray-900">Testes (QA)</h4>
          <div className="mt-4 flex justify-start gap-6 flex-wrap">
            <TechBadge icon={Bug} label="JMeter" />
            <TechBadge icon={CheckCircle2} label="Selenium" />
            <TechBadge icon={ShieldCheck} label="Testes Unitários" />
            <TechBadge icon={ShieldCheck} label="Testes de Integração" />
            <TechBadge icon={Weight} label="Testes de Performance/Carga" />
          </div>
        </div>

        <div className="my-12">
          <h4 className="text-3xl font-bold text-gray-900">
            Hardware & Baixo Nível
          </h4>
          <div className="mt-4 flex justify-start gap-6 flex-wrap">
            <TechBadge icon={CpuIcon} label="Verilog" />
            <TechBadge icon={CircuitBoard} label="FPGAs" />
            <TechBadge icon={CircuitBoard} label="Microeletrônica (Básico)" />
          </div>
        </div>

        <div className="my-12">
          <h4 className="text-3xl font-bold text-gray-900">
            DevOps & Ferramentas
          </h4>
          <div className="mt-4 flex justify-start gap-6 flex-wrap">
            <TechBadge icon={GitBranch} label="Git" />
            <TechBadge icon={Container} label="Docker" />
            <TechBadge icon={Terminal} label="Linux" />
          </div>
        </div>

        <div className="my-12">
          <h4 className="text-3xl font-bold text-gray-900">Outras</h4>
          <div className="mt-4 flex justify-start gap-6 flex-wrap">
            <TechBadge icon={BarChart2} label="Análise de Dados" />
            <TechBadge icon={Brain} label="Redes Neurais" />
            <TechBadge icon={Lightbulb} label="Aprendizado de Máquina" />
            <TechBadge icon={Pen} label="LaTeX" />
          </div>
        </div>
      </ul>
    </div>
  </PageWrapper>
);

export default SkillsPage;
