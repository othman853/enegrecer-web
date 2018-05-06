import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import HomePage from '../components/home/Home';
import Menu from '../components/menu/Menu';
import Rodape from '../components/rodape/Rodape';
import Sobre from '../components/sobre/Sobre';
import ColetivoEnegrecer from '../components/coletivoEnegrecer/ColetivoEnegrecer';
import NovaDenunciaContainer from '../containers/denuncias/NovaDenunciaContainer';
import DepoisDaDenuncia from '../components/depoisdadenuncia/DepoisDaDenuncia';
import ModeradorLogin from '../components/moderador/ModeradorLogin';
import PaginaNaoEncontrada from '../components/paginaNaoEncontrada/PaginaNaoEncontrada';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Menu />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/sobre" component={Sobre} />
        <Route exact path="/coletivo-enegrecer" component={ColetivoEnegrecer} />
        <Route exact path="/denunciar" component={NovaDenunciaContainer} />
        <Route exact path="/depois-denuncia" component={DepoisDaDenuncia} />
        <Route exact path="/login" component={ModeradorLogin} />
        <Route component={PaginaNaoEncontrada} />
      </Switch>
      <Rodape />
    </div>
  </BrowserRouter>
);

export default Routes;
