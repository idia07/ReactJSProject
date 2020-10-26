import './App.css';

import React from 'react';

import {
  BrowserRouter,
  Route,
} from 'react-router-dom';

import Acceuil from './component/Acceuil';
import Competence from './component/Competence';
import Formation from './component/Formation';
import Menu from './component/Menu';
import Projet from './component/Projet';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Route exact path='/' component={Acceuil} />
      <Route path='/formation' component={Formation} />
      <Route path='/competence' component={Competence} />
      <Route path='/projet' component={Projet} />
    </BrowserRouter>
  );
}

export default App;
