import React, { useContext, useState,useEffect } from "react";
import ConocimientosContext from "../../context/ConocimientoContext/ConocimientosContext";
import ManejarConocimientosStyle from "./ManejarConocimientosStyle";
import Conocimiento from "./Conocimiento";
import Carpeta from "./Carpeta";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import EliminarProyecto from "./EliminarProyecto";
import ConocimientoModal from "./ConocimientoModal";
import EliminarConfirmacion from "./Herramientas/EliminarConfirmacion";
import ProyectosContext from "../../context/ProyectosController/ProyectosContext";
export default function ManejarConocimientos() {
  //Context Conocimientos
  const conocimientosContext = useContext(ConocimientosContext);
  const {
    confirmareliminacion,
    herramienta,
    conocimientos,
    carpetas,
    carpetaactual,
  } = conocimientosContext;

  //Context Proyecto
  const proyectosContext = useContext(ProyectosContext);
  const { proyectoactual } = proyectosContext;

  //useState para conocimientos dentro de una carpeta
  const [carpeta,setCarpeta] = useState([])

  useEffect(() => {
    if(carpetaactual){
        const array = conocimientos.filter((conocimiento)=>  conocimiento.carpeta === carpetaactual._id )
        return setCarpeta(array)
    }
    setCarpeta([])
  },[carpetaactual]) 


  //condiciones para desplegar carpetas y conocimientos  *true-desplegadas
  const [desplegar, setDesplegar] = useState({
    carpetas: true,
    conocimientos: true,
  });

  //  Cambiar el despliegue
  const OnClick = (type) => {
    setDesplegar({ ...desplegar, [type]: !desplegar[type] });
  };

  return (
    <ManejarConocimientosStyle>
      {proyectoactual ? (
        <>
          <h1>
            Proyecto: {proyectoactual.nombre}{" "}
            {carpetaactual ? `/ ${carpetaactual.nombre}` : null}{" "}
          </h1>
          {carpetaactual &&
          (herramienta === null ||
            herramienta === "eliminar2" ||
            herramienta === "editar2" ||
            herramienta === "agregar2") ? null : (
            <>
              {" "}
              <h3>
                {" "}
                Carpetas{" "}
                <button
                  onClick={() => {
                    OnClick("carpetas");
                  }}
                  className={`button-collapse ${
                    desplegar.carpetas ? "active-collapse" : null
                  }`}
                >
                  {" "}
                  <KeyboardArrowDownIcon style={{ fontSize: 40 }} />{" "}
                </button>{" "}
              </h3>
              {carpetas.length > 0 ? (
                <ul className="list-conocimientos">
                  {" "}
                  {desplegar.carpetas && carpetas
                    ? carpetas.map((carpeta) => (
                        <li key={carpeta._id}>
                          {" "}
                          <Carpeta key={carpeta._id} carpeta={carpeta} />{" "}
                        </li>
                      ))
                    : null}{" "}
                </ul>
              ) : (
                <h4>No posee Carpetas, Agrege algunas</h4>
              )}{" "}
            </>
          )}
          <h3>
            {" "}
            Conocimientos{" "}
            <button
              onClick={() => {
                OnClick("conocimientos");
              }}
              className={`button-collapse ${
                desplegar.conocimientos ? "active-collapse" : null
              }`}
            >
              {" "}
              <KeyboardArrowDownIcon style={{ fontSize: 40 }} />{" "}
            </button>
          </h3>
          {carpetaactual ? <> <ul className="list-conocimientos"> { conocimientos.map((conocimiento)=> conocimiento.carpeta === carpetaactual._id ? <li key={conocimiento._id}>
                      <Conocimiento
                        key={conocimiento._id}
                        conocimiento={conocimiento}
                      />
                    </li>  : null )}</ul> {carpeta.length === 0 ? <h4>La Carpeta no posee Conocimientos</h4> : null}  </>:   conocimientos.length > 0 ? (
            <ul className="list-conocimientos">
              {desplegar.conocimientos &&
                conocimientos.map((conocimiento) => 
                
                  conocimiento.carpeta !== "null" 
                   ? null
                   : (
                    <li key={conocimiento._id}>
                      <Conocimiento
                        key={conocimiento._id}
                        conocimiento={conocimiento}
                      />
                    </li>
                  )
                )}
            </ul>
          ) : (
            <h4>No posee Conocimientos, Agrege algunos</h4>
          ) }
   
           
          <EliminarProyecto />
        </>
      ) : (
        <h1> Seleccione un Proyecto</h1>
      )}

      {confirmareliminacion !== null ? (
        <ConocimientoModal>
          {" "}
          <EliminarConfirmacion />{" "}
        </ConocimientoModal>
      ) : null}
    </ManejarConocimientosStyle>
  );
}
