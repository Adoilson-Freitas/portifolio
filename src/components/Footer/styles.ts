import styled from 'styled-components';

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;
  color: ${props => props.theme.colors.text};
  margin-top: 30px;
  border-top: 1px solid #555;
  height: 40px;

  .footer {
    justify-content: flex-end;
    text-align: center;
    margin: 10px;
    margin-left: 25%;
  }

  .footer a {
    color: ${props => props.theme.colors.text};
    font-size: 30px;
    margin: 20px;
  }
  a {
    margin: 0 3px;
    text-decoration: none;
   }

  @media only screen and (max-width: 1024px) {
  .footer {
    display: none;
  }
     
  }


`;
  
export const Footer2 = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.colors.text};
    font-size: 15px;
    margin-top: 4px;
    height: 50px;

    svg {
    margin: 0 3px;
  }
  @media only screen and (max-width: 1024px) {
  
  .footer2 {
    margin-left: 0;
    padding: 5px;
  }
  .footer2 p {
    padding: 5px;
  }
  }
  @media only screen and (max-width: 660px) {
    font-size: 12px;
  }

  @media only screen and (min-width: 1025px) {
    display: none;     
  }
`;