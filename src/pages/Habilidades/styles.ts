import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.colors.text};
  margin-top: 30px;
  width: 100%;
  h1{
    padding-top: 10%;
    font-size: 40px;
  }
 
  p{
    font-size: 18px;
    margin: 20px 0;
  }
  h2 {
   margin: 20px 0;
  }
  .techs svg {
    font-size: 40px;
    margin: 20px;
  }
  @media only screen and (max-width: 660px) {
    text-align: center;
  h1{
    padding-top: 15%;
    font-size: 30px;
  }
  h2 {
    font-size: 20px;
  }
  .techs svg {
    font-size: 30px;
  }
  }
  @media only screen and (max-width: 500px) {
    h1{
      font-size: 25px;
    }
    h2 {
    font-size: 18px;
  }
  }
  @media only screen and (max-width: 360px) {
    h1{
      font-size: 20px;
    }
    h2 {
    font-size: 14px;
  }
  .techs svg {
    font-size: 20px;
  }
  }

  @media only screen and (max-width: 320px) {
  h1 {
    font-size: 18px;
  }

  }
  
`;
  