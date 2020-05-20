import React from 'react';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import MainLayout from './shared/layouts/main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Sobre" component={Sobre} />
        </Switch>
      </MainLayout>
    </BrowserRouter>

  );
}

export default App;
