import React, { useContext } from "react";
import ConocimientosContext from "../../../context/ConocimientoContext/ConocimientosContext";
import ProyectosContext from "../../../context/ProyectosController/ProyectosContext";
import Spinner from "../../../SpinnerUpload/Spinner";
export default function EliminarConfirmacion() {
  //Context Conocimientos
  const conocimientosContext = useContext(ConocimientosContext);
  const {
    Delete,
    herramientaActivar,
    confirmareliminacion,
    confirmarEliminacion,
    esperarcarga,
    
  } = conocimientosContext;

  //Context Conocimientos
  const proyectosContext = useContext(ProyectosContext);
  const { eliminarProyecto, proyectoactual } = proyectosContext;


  
  
  //Si confirmareliminacion es true = proyecto  objeto = carpeta o conocimiento
  const onClickEliminar = () => {
     
    if (confirmareliminacion === true) {
      herramientaActivar(null);
      confirmarEliminacion(null)


      return eliminarProyecto(proyectoactual);
    }
    Delete({
      type: confirmareliminacion.type,
      objecto: {
        idConocimiento: confirmareliminacion._id,
        idProyecto: proyectoactual._id,
      },
    });
   herramientaActivar(null);
  };
  const onClickCancelar = () => {
    confirmarEliminacion(null);
  };
  return (
    <div className="confirmar-eliminacion">
      <h1>
        Desea eliminar  {`${confirmareliminacion.nombre ?  "La Carpeta/Conocimiento" : "El Proyecto"}`}
      </h1>
      <div className="contenedor-button">
        {esperarcarga ? (
          <Spinner />
        ) : (
          <>
            <button onClick={onClickEliminar} className="eliminar">
              Eliminar
            </button>
            <button onClick={onClickCancelar} className="cancelar">
              Cancelar
            </button>
          </>
        )}
      </div>
    </div>
  );
}
