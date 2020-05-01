import React from 'react';

import { Ideia } from './styles';
import { FaGithubSquare } from 'react-icons/fa';

const Portifolio: React.FC = () => {
  return (
  <Ideia>
  <h1>Projetos</h1>
  <div className="projetos">
  
      <h3><a  href='https://mydailystatus.adoilsonbacelar.now.sh/'>My Daily Status</a>   <a href="https://github.com/Adoilson-Freitas/My-Daily-Status"><span>Repositorio <FaGithubSquare /></span></a></h3>
      <div className="description">My Daily Status é um projeto criado durante o Fullstack Lab do DevPleno. Com a aplicação, o usuário poderá fazer um registro diário do seu estado de saúde durante a pandemia de COVID-19 e também acompanhar os registros de pessoas próximas a você.</div>
      <p>React.Js, Next.Js, Firebase, Geofirestore, Tailwindcss e Eslint</p> 
  </div>
  
  <div className="projetos">
  
      <h3><a  href='https://github.com/Adoilson-Freitas/Be-The-Hero'>Be The Hero</a>   <a href="https://github.com/Adoilson-Freitas/Be-The-Hero"><span>Repositorio <FaGithubSquare /></span></a></h3>
      <div className="description">Projeto desenvolvido na semana OmniStack 11.0 do Rocketseat.Durante a semana foi desenvolvida uma aplicação chamada Be The Hero. Essa aplicação tem como objetivo inicial atender ONGs, onde na aplicação Web o usuário(ONG) cadastrado no sistema pode cadastrar uma causa onde precisa de um herói para ajuda-lo a cuidar de algo especifico e no mobile os usuários (heróis) podem ajudar a ONG que desejar, podendo entrar em contato via WhatsApp ou E-mail.</div>
      <p>Node.Js, Express, sqlite3, Knex, Jest, React.Js, Axios, React Native e Expo</p> 
  </div>

  <div className="projetos">
  
  <h3><a  href='https://adoilson-freitas.github.io/luzesnatall.github.io/'>Luzes-de-Natal</a>   <a href="https://github.com/Adoilson-Freitas/Luzes-de-Natal"><span>Repositorio <FaGithubSquare /></span></a></h3>
  <div className="description">pisca pisca.</div>
  <p>Html, Css e JavaScript</p> 
</div>

  <div className="projetos">
  
  <h3><a  href='https://github.com/Adoilson-Freitas/DevRadar'>DevRadar</a>   <a href="https://github.com/Adoilson-Freitas/DevRadar"><span>Repositorio <FaGithubSquare /></span></a></h3>
    <div className="description">DevRadar, uma aplicação que permite cadastrar Dev's apartir da API do github para encontrar os dados do dev e salvar em um banco da aplicação. Partindo disso a aplicação visa conectar dev's próximos a você que trabalham com as mesmas tecnologias.</div>
    <p>Node.Js, Express, Mongoose, React.Js, Axios, socket.io-client, React Native, react-native-maps e Expo</p> 
  </div>
 

  </Ideia>
 

  );
}

export default Portifolio;
