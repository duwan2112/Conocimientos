import React, { useContext } from "react";
import ConocimientosContext from "../../context/ConocimientoContext/ConocimientosContext";
export default function MostrarConocimiento() {
  //Sus estilos se encuentrar en ManejarConocimientoStyle.js

  //Context Conocimientos
  const conocimientosContext = useContext(ConocimientosContext);
  const { conocimientoactual } = conocimientosContext;

 //Obtener un array de la descripcion para generar espacios
 
 const array = conocimientoactual.descripcion.split("\n")
 let i = 0; 

  return (
    <div className="contenedor-conocimiento">
      <h2>{conocimientoactual.nombre}</h2>
      <div className="contenido">
        {" "}
        <div className="imagen-contenido">
          <img src={conocimientoactual.imageUrl} alt="imagen del contenido" />
        </div>{" "}
        <div className="descripcion">
          {" "}
          <h4> Contenido: </h4>{" "}
  <div className="text"> {array.map(arr =>  <p key={i++}> {arr}</p> )}</div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}
