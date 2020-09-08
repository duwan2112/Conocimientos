import React from "react";
import Principal from './components/Principal/Principal'
import Conocimientos from './components/Conocimientos/Conocimientos';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AlertaState from './components/context/AlertaContext/AlertaState';
import ConocimientosState from './components/context/ConocimientoContext/ConocimientosState'
import UsuariosState from './components/context/UsuariosContext/UsuariosState'
import ProyectosState from './components/context/ProyectosController/ProyectosState'
import RoutePrivada from './config/RutaPrivada'
function App() {

  return (

   <AlertaState>
   <UsuariosState> 
    <ConocimientosState>
      <ProyectosState> 
    <Router>
      <Switch>
            <Route exact path="/"  component={Principal} /> 
            <RoutePrivada exact path="/conocimientos" component={Conocimientos}/>
          
      </Switch>
    </Router>
    </ProyectosState> 
     </ConocimientosState>
     </UsuariosState>
     </AlertaState>

  );
}

export default App;
