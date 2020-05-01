import React from 'react';
import { FaHeart, FaCoffee, FaGithub, FaLinkedin, FaInstagram, FaFacebook} from 'react-icons/fa'
 
import { Container, Footer2 } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      
    <div className="footer">
      <a href="https://www.linkedin.com/in/adoilson-freitas-98b154172/" target='_blank' rel='noreferrer noopener'><FaLinkedin /></a>
      <a href="https://github.com/Adoilson-Freitas" target='_blank' rel='noreferrer noopener'><FaGithub /></a>
      <a href="https://www.facebook.com/profile.php?id=100010849633496" target='_blank' rel='noreferrer noopener'><FaFacebook /></a>
      <a href="https://www.instagram.com/adoilsonf/" target='_blank' rel='noreferrer noopener'><FaInstagram /></a>
    </div>

    <Footer2 className="footer2">
        <p>Feito com</p> 
        <FaHeart color='red'/>
         <p>e</p>
         <FaCoffee />
        <p>Por <a href="https://www.linkedin.com/in/adoilson-freitas-98b154172/" target='_blank' rel='noreferrer noopener'>Adoilson Freitas</a></p>
      </Footer2>
    </Container>
  ); 
}

export default Footer;
