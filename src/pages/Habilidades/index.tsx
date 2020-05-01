import React from 'react';
import { FaHtml5, FaLinux, FaGit, FaCss3, FaReact, FaNodeJs} from 'react-icons/fa'
import { DiVisualstudio, DiGithub, DiBootstrap, DiJavascript1 } from "react-icons/di";

import { Container } from './styles';



const Habilidades: React.FC = () => {
  return (
    <Container>
    <div className="techs">
      <h1>HABILIDADES</h1>
      <h2>LINGUAGENS DE PROGRAMAÇÃO E FERRAMENTAS</h2>
      <FaHtml5 />
      <FaCss3 />
      <DiJavascript1/>
      <FaReact />
      <FaNodeJs />
      <DiBootstrap/>
      <DiGithub/>
      <DiVisualstudio/>
      <FaGit />
      <FaLinux/>
  </div>
    </Container>
  ); 
}

export default Habilidades;
