import React, { useState, useContext ,useEffect } from "react";
import HerramientaStyle from "./HerramientaStyle";
import ConocimientosContext from "../../../context/ConocimientoContext/ConocimientosContext";
import AlertaContext from "../../../context/AlertaContext/AlertaContext";
export default function Editar({ objeto }) {
  //Context Conocimientos
  const conocimientosContext = useContext(ConocimientosContext);
  const {
    Editar,
    herramientaActivar,
    carpetaactual,
    conocimientoactual,
    carpetaActual,
    conocimientoActual,
    mensaje
  } = conocimientosContext;

  //Context Alerta
  const alertaContext = useContext(AlertaContext);
  const { alerta, activarAlerta } = alertaContext;

  //Activador del switche
  const [activar, setActivar] = useState(objeto);

  //Formulario conocimiento
  const [formulario, setFormulario] = useState({...conocimientoactual});

  //Formulario Carpetas 
  const [formularioC,setFormularioC] = useState({...carpetaactual})

  //Funcion para cambiar los datos del formulario
  const onChange = (e) => {
    setFormulario({...formulario, [e.target.name]: e.target.value });
  };
  const onChangeC = (e) => {
    setFormularioC({...formularioC, [e.target.name]: e.target.value });
  };

   //UseEffect para alerta de error 
 useEffect(()=>{
  if(mensaje){ 
    if(!mensaje.msg){
      return activarAlerta("Algo salio mal,Verifica tus datos y intentalo de nuevo")
    }
   activarAlerta(mensaje.msg)
  }
},[mensaje])

  


  //Enviar formulario de editar
  const onSubmit = (e) => {
    
    e.preventDefault();
    if(activar){

      if(formularioC.nombre.trim()){
         Editar({
        type2: activar,
        objecto2: { ...formularioC },
      });
      herramientaActivar(null);
      return carpetaActual(null);
      }
      return activarAlerta("Porfavor rellene todos los campos");
    }
    if(formulario.nombre.trim() && formulario.descripcion.trim()){
      Editar({
      type: activar,
      objecto2: {...formulario},
    });
    herramientaActivar(null);
    return conocimientoActual(null);
    }
    return activarAlerta("Porfavor rellene todos los campos");
  };



  return (
    <HerramientaStyle>
      <h2>Editar un{activar ? "a Carpeta" : " Conocimiento"}</h2>
      {alerta ? <p className="alerta"> {alerta} </p> : null}

      {activar ? (
        <form onSubmit={onSubmit} className="formCrear">
          <div className="contenedor-crear">
            {" "}
            <input
              type="text"
              id="nombre"
              name="nombre"
              onChange={onChangeC}
              value={formularioC.nombre}
              placeholder="Nuevo Nombre"
            />{" "}
          </div>

          <input
            className="button"
            type="submit"
            value={`Editar ${activar ? "Carpeta" : "Conocimiento"}`}
          />
        </form>
      ) : (
        <form onSubmit={onSubmit} className="formCrear">
          <div className="contenedor-crear">
             <div className="contenedor-input">
               <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              onChange={onChange}
              value={formulario.nombre}
              placeholder="Nuevo Nombre"
            />
               </div> 
           <div className="contenedor-input"> 
            <label htmlFor="descripcion">Descripcion:</label>
            <textarea
              id="descripcion"
              name="descripcion"
              onChange={onChange}
              value={formulario.descripcion}
              placeholder="Nueva Descripcion"
            />
            </div> 
          </div>

          <input
            className="button"
            type="submit"
            value={`Editar ${activar ? "Carpeta" : "Conocimiento"}`}
          />
        </form>
      )}
    </HerramientaStyle>
  );
}
