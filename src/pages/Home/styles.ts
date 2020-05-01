import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.colors.text};
  margin-left: 28%;
  margin-top: 30px;
  width: 60%;
  h1{
    padding-top: 15%;
    font-size: 40px;
  }

  h3 {
    font-weight: normal;
    margin: 3px;
  }
  .contatos{
    margin-top: 15px;
  }
  .contatos pre{
    display: flex;
    margin-top: 5px;
    justify-content: center;
    align-items: center;
  }

  .sociais {
    text-align: center;
    margin: 50px;
  }
  .sociais a {
    color: ${props => props.theme.colors.text};
    font-size: 40px;
    margin: 20px;
  }

  .sociais a:hover {
    opacity: 0.8;
  }

  .educacao span {
    float: right;
    font-weight: normal;
    font-style: italic;
  }

  .certificado a {
    display: flex;
    align-items: center;
    margin: 2px 0;
    text-decoration: none;
    color: ${props => props.theme.colors.text};
  }

  .certificado h1 {
      margin-bottom: 15px;
    }
 
  p{
    font-size: 16px;
    margin: 20px 0;
  }
  h2 {
   margin: 10px 0;
  }
  .techs svg {
    font-size: 40px;
    margin: 20px;
  }

  .footer {
    text-align: center;
    margin: 10px;
    border-top: 2px solid #000;
    height: 80px;
  }
  .footer a {
    color: ${props => props.theme.colors.text};
    font-size: 30px;
    margin: 20px;
  }

  @media only screen and (max-width: 1024px) {
    margin-left: 20px;
    margin-top: 30px;
    width: 90%;
  }

  @media only screen and (max-width: 750px) {
    margin-right: 0;
    
    .educacao span {
    float: none;
    display: block;
    margin-bottom: -20px;
  }
  }

  @media only screen and (max-width: 660px) {
    text-align: center;
  h1{
    padding-top: 25%;
    font-size: 30px;
  }
  .sociais a {
    font-size: 30px;
  }
  p {
    font-size: 14px;
  }
  .contatos {
    font-size: 12px;
  }
  
  }

  @media only screen and (max-width: 500px) {
    .certificado a {
      font-size: 11px;
    }
  .sociais a {
    font-size: 25px;
    margin: 10px;
  }
  h1{
    font-size: 25px;
  }
  .educacao span {
    font-size: 16px;
  }
  .educacao h2 {
    font-size: 18px;
  }
  h3 {
   font-size: 16px;
  }
  }

  @media only screen and (max-width: 360px) {
    .sociais a {
    font-size: 20px;
    margin: 10px;
  }
  h1{
    font-size: 20px;
  } 
  p {
    font-size: 11px;
  }
  .certificado a {
      font-size: 10px;
    }
    .educacao span {
    font-size: 12px;
  }
  .educacao h2 {
    font-size: 14px;
  }
  }

  @media only screen and (max-width: 320px) {
    .sociais a {
    font-size: 16px;
    margin: 8px;
  }
  .certificado a {
      font-size: 8px;
  }
  h1 {
    font-size: 18px;
  }

  }

`;
  