import React from 'react';
import {FaStar,FaPhone, FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope} from 'react-icons/fa'

import { Container } from './styles';
import Habilidades from '../Habilidades';


const Home: React.FC = () => {
  return (
    <Container>
      
    <h1>ADOILSON BACELAR DE FREITAS</h1>
   <h3>Cursando Análise e Desenvolvimento</h3>
   <div className='contatos'>
    <pre>FEIRA DE SANTANA/BA</pre>
    <pre>adoilsonbacelar@gmail.com <FaEnvelope/></pre>
    <pre>(75) 9 9709-2305 <FaPhone/></pre>
   </div>
   <div className="sociais">
   <a href="https://www.linkedin.com/in/adoilson-freitas-98b154172/" target='_blank' rel='noreferrer noopener'><FaLinkedin /></a>
      <a href="https://github.com/Adoilson-Freitas" target='_blank' rel='noreferrer noopener'><FaGithub /></a>
      <a href="https://www.facebook.com/profile.php?id=100010849633496" target='_blank' rel='noreferrer noopener'><FaFacebook /></a>
      <a href="https://www.instagram.com/adoilsonf/" target='_blank' rel='noreferrer noopener'><FaInstagram /></a>
    </div>
   <p> 
      Atualmente Focado em NodeJS, ReactJS e React Native.
      Fiz curso Técnico de Informática - no Centro Territorial de 
      Educação Profissional Portal do Sertão (2016). Estudante de Análise e Desenvolvimento
      de Sistemas na UniCesumar EAD.
    </p>
   

    <div className="educacao">
      <h1 id= "pathLink#sobre">EDUCAÇÃO</h1>
      <h2>Unicesumar - Centro Universitário de Maringá <span>Jan/2019 a jul/2021</span></h2>
      <p>Tecnólogo em Análise e Desenvolvimento de Sistemas</p>
      <h2>Centro Territorial de Educação Profissional do Portal do Sertão<span>Jan/2013 a dez/2016</span></h2>
      <p>Ensino Médio Integrado ao Curso Técnico em Informática</p>
    </div>

    <Habilidades />

    <div className="certificado">
    <h1>CERTIFICAÇÃO</h1>
    <a href="http://soft.blue/certificado/4145234BC37D" target='_blank' rel='noreferrer noopener'><FaStar /> WEB: HTML5, CSS3, JavaScript & Ajax - Softblue</a><br/>
    <a href="http://ude.my/UC-2c6c280c-570b-405e-a73b-e6d3b39fc7ee" target='_blank' rel='noreferrer noopener'><FaStar /> React + Redux: Fundamentos e 2 Apps do Absoluto ZERO! - Udemy </a>
    </div>
    </Container>
  ); 
}

export default Home;
