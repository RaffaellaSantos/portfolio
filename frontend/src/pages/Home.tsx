import TechBadge from "../components/techBadge";
import NavCard from "../components/navcard";
import {
  Briefcase,
  Code,
  Database,
  GitBranch,
  Mail,
  User,
  Wind,
} from "lucide-react";

interface HomeProps {
  navigateTo: (
    page: "home" | "about" | "skills" | "projects" | "contact"
  ) => void;
}

const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  return (
    <div className="container mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center bg-white shadow-xl rounded-2xl p-10 md:p-16 border border-gray-100">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Olá, eu sou <span className="text-purple-600">Adriana Raffaella</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
          Este é o meu portfólio de projetos, um espaco onde eu aplico e
          demonstro meus conhecimentos em desenvolvimento. Aqui você encontrará
          um pouco sobre minha jornada, minhas competências e os projetos que
          construí.
        </p>

        <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-600">Este site foi feito com: </p>
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <TechBadge icon={Code} label="React.tsx" />
          <TechBadge icon={Wind} label="Tailwind CSS" />
          <TechBadge icon={Database} label="FastAPI & MySQL" />
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <NavCard
          icon={User}
          title="Sobre Mim"
          description="Um pouco sobre mim e o que faço."
          onClick={() => navigateTo("about")}
        />
        <NavCard
          icon={Briefcase}
          title="Competências"
          description="Tecnologias que domino."
          onClick={() => navigateTo("skills")}
        />
        <NavCard
          icon={GitBranch}
          title="Projetos"
          description="Explore meus repositórios."
          onClick={() => navigateTo("projects")}
        />
        <NavCard
          icon={Mail}
          title="Contato"
          description="Vamos conversar! Entre em contanto comigo para networking ou colaborações."
          onClick={() => navigateTo("contact")}
        />
      </div>
    </div>
  );
};

export default Home;
