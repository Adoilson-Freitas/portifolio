import styled from 'styled-components';

export const Ideia = styled.div`
  margin: 30px 0 30px 28%;
  width: 70%;
  font-family: 'Roboto', sans-serif;

  
  h1 {
    padding-top: 5%;
    padding-bottom: 5%;
    text-align: center;
  }
  .projetos {
  border-radius: 8px;
  padding: 6px;
  margin-top: 20px;
  margin-right: 10%;
  background: ${props => props.theme.colors.primary};
  }

 span {
   display: flex;
   float: right;
   align-items: center;
   font-size: 14px;
   color: ${props => props.theme.colors.text};

 }
 span svg {
   margin-left: 2px;
 }
 
  p {
   margin: 2px 0;
   font-size: 13px;
 }
 
 .description {
   margin: 8px 0;
   font-size: 12px;
 }
 
  a {
   text-decoration: none;
 }

 @media only screen and (max-width: 1024px) {
  width: 90%;
  margin-left: 5%;
  }

  h1 {
    padding-top: 15%;
    padding-bottom: 5%;
  }

  .projetos {
    margin-top: 15px;
    margin-right: 5%;
  }

  @media only screen and (max-width: 660px) {
  h1{
    padding-top: 25%;
  }
  p {
   font-size: 11px;
 }
 
 .description {
  font-size: 10px;
 }
 span {
   font-size: 12px;
 }
  }

  @media only screen and (max-width: 500px) {
    h1{
      font-size: 20px;
    }
  }
`;
