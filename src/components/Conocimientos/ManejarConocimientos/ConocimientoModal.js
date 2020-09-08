import React, { useContext } from "react";
import ConocimientosContext from "../../context/ConocimientoContext/ConocimientosContext";
import ConocimientoModalStyle from "./ConocimientoModalStyle";
import CloseIcon from "@material-ui/icons/Close";
export default function ConocimientoModal(props) {

  //Context de conocimientos
  const conocimientosContext = useContext(ConocimientosContext);
  const {confirmareliminacion,confirmarEliminacion,conocimientoActual,herramienta,carpetaActual,herramientaActivar,esperarcarga} = conocimientosContext;

  
  //Si se oprime el boton de cerrar
  const onClick = () => {
    if(esperarcarga === false){
       conocimientoActual(null);
    herramientaActivar(null);
    if(herramienta === 'editar'){
      carpetaActual(null)
    }
    if(confirmareliminacion){
      confirmarEliminacion(null)
    }
    }
   
  };


  return (
    <ConocimientoModalStyle>
      <div className="modal-conocimiento">
        {props.children}
        <button onClick={onClick} className="button-close">
          <CloseIcon />
        </button>
      </div>
      <button onClick={onClick} className="cerrar-modal"></button>
    </ConocimientoModalStyle>
  );
}
