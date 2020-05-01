import React, { useContext } from 'react';
import Switch from 'react-switch';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';
import { FaGithub, FaLinkedinIn, FaHeart, FaCoffee } from 'react-icons/fa'

import { Nav, FooterNav, Pro, Tema } from './styles';


interface Props {
  toggleTheme(): void;
}


const Header: React.FC<Props> = ({ toggleTheme }) => {
  
  const { colors, title } = useContext(ThemeContext);
  
  return (
    <Nav>
    <Tema>
      <Switch
        onChange={toggleTheme}
        checked={title === 'light'}
        checkedIcon={
          false
        }
        uncheckedIcon={
          false
        }
        height={10}
        width={30}
        handleDiameter={15}
        offColor={shade(0.15, colors.secundary)}
        onColor={colors.secundary}
      />
     
      </Tema>
      <img src="image/perfil1.jpeg" alt="Perfil"/>
      <h3>Adoilson Bacelar de Freitas</h3>
      <Pro>
      <p>Fullstack Developer</p>
      </Pro>
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/portifolio"><li>Portifólio</li></Link>
      </ul>
      
      <ul>
        <a href="https://www.linkedin.com/in/adoilson-freitas-98b154172/" target='_blank' rel='noreferrer noopener'><li><FaLinkedinIn /></li></a>
        <a href="https://github.com/Adoilson-Freitas" target='_blank' rel='noreferrer noopener'><li><FaGithub /></li></a>
      </ul>
      
      
      <FooterNav className="footer">
        <p>Feito com</p> 
        <FaHeart color='red'/>
         <p>e</p>
         <FaCoffee />
        <p>Por <a href="https://www.linkedin.com/in/adoilson-freitas-98b154172/" target='_blank' rel='noreferrer noopener'>Adoilson Freitas</a></p>
      </FooterNav>
      
    </Nav>
  );
};

export default Header;