import React from 'react';
import Dash from './pages/Dash';
import Sobre from './pages/Sobre';
import MainLayout from './shared/layouts/main';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Dash} />
          <Route path="/Sobre" component={Sobre} />
        </Switch>
      </MainLayout>
    </BrowserRouter>

  );
}

export default App;
