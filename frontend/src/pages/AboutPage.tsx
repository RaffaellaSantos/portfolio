import React from "react";
import PageWrapper from "../components/pageWrapper";

const AboutPage: React.FC = () => (
  <PageWrapper title="Sobre Mim">
    <p className="text-lg text-gray-600">
      Graduanda em Engenharia da Computação, pela Universidade Estadual do Amazonas, com experiência em Pesquisa e
      Desenvolvimento (P&DI) como desenvolvedora Web. Possui competências que
      abrangem análise de dados, aprendizado de máquina e redes neurais.
      Adicionalmente, direciona seus estudos para a área de hardware e
      computação de baixo nível, com conhecimento em microeletrônica e
      experiência voluntária na descaracterização de hardware.
    </p>
  </PageWrapper>
);

export default AboutPage;
