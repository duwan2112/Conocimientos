import React, { useContext } from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ConocimientosContext from "../../context/ConocimientoContext/ConocimientosContext";
import NuevoProyecto from "./NuevoProyecto";
import Proyectos from "./Proyectos";
import AsideStyle from "./AsideStyle";
import UsuariosContext from '../../context/UsuariosContext/UsuariosContext'
export default function Aside() {
  //Context conocimientos
  const conocimientosContext = useContext(ConocimientosContext);
  const { activar, aside } = conocimientosContext;

  //Context usuarios 
  const usuariosContext = useContext(UsuariosContext)
  const {cerrarSesion} = usuariosContext

  //Funcion para activar el desplegable del menu
  const onClick = () => {
    activar();
  };

  const onClickSesion = () => {
   cerrarSesion()
  }
  return (
    <AsideStyle aside={aside}>
      <div className="contenedor-aside">
        <div className={`aside ${aside ? "active-aside" : null}`}>
          <h3> Bienvenido Duwan Peña </h3>
          
          <NuevoProyecto />
          <Proyectos />
          <button className="button-cerrarsesion" onClick={onClickSesion} >Cerrar Sesion</button>
        </div>

        <button onClick={onClick} className="button-active">
          {" "}
          <ArrowForwardIcon
            className={`icon ${aside ? "volteo" : null}`}
            style={{ fontSize: 50 }}
          />{" "}
        </button>
      </div>
    </AsideStyle>
  );
}
