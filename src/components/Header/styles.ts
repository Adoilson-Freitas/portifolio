import styled from 'styled-components';

export const Nav = styled.div`
  font-family: 'Roboto', sans-serif;
  position: fixed;
  margin-top: -30px;
  height: 100vh;
  width: 250px;
  background: ${props => props.theme.colors.primary};


  h3{
    color: ${props => props.theme.colors.text};
    text-align: center;
    margin: 5px 0;
    font-size: 18px;
  }

  img {
    margin-top: 20px;
    width: 40%;
    margin-left: 30%;
    border-radius: 50%;
  }
  ul {
  margin-top: 50px;
  list-style: none;
  }
  ul a {
  text-decoration: none;
  }
  ul a:hover {
  opacity: 0.8;
  }

  ul li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    color: ${props => props.theme.colors.text};
    font-size: 16px;
    font-weight: bold; 
  }

  @media only screen and (max-width: 1024px) {
    height: 110px;
    width: 100vw;

    img {
    margin-top: -20px;
    width: 90px;
    border-radius: 50%;
    float: left;
    margin-left: 40px;
    margin-right: 20px;
    }

    ul {
     margin-top: 0;
     display: flex;
     align-items: center;
    }

    ul li {
      margin-left: 40px;
    }
    h3{
      display: none; 
  }
  p{
    display: none;
  }

  a svg{
      display: none;
     }
  }

  @media only screen and (max-width: 500px) {
    height: 90px;
 img {
   width: 60px;
 }
}
@media only screen and (max-width: 360px) {
  ul li {
      margin-left: 10px;
      font-size: 13px;
  }  
  }
`;


export const Pro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.text};
  font-size: 14px;

`;

export const Tema = styled.div`
  outline: none;
  width: 30px;
  margin-top: 10px;
  margin-left: 76%;
    
`;

export const FooterNav = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.text};
    font-size: 12px;
    margin-top: 180px;

    svg {
    margin: 0 3px;
  }

   a {
    margin: 0 3px;
    text-decoration: none;
   }
@media only screen and (max-width: 1024px) {
  display: none;
}
 
`;