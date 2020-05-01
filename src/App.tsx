import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePeristedState from './utils/usePersistedState'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
 
import Home from './pages/Home';
import Portifolio from './pages/Portifolio';



import light from './styles/themes/light';
import dark from './styles/themes/dark';   

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {

  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', dark);

  const toggleTheme = () => {
    setTheme(theme.title === 'dark' ? light : dark);
  };

  
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/portifolio" component={Portifolio}/>
      </Switch>
      <Footer />
    </BrowserRouter>
    </ThemeProvider>
  );
}


export default App;


