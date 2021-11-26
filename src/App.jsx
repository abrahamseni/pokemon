import { useState } from 'react';
import { tw } from 'twind';
import { Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Layout from './layout';
import PokemonDetail from './pages/pokemonDetail';

function App() {
  return (
    <Layout>
      <>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/pokemon/:pokemonName">
            <PokemonDetail />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      </>
    </Layout>
  );
}

export default App;
