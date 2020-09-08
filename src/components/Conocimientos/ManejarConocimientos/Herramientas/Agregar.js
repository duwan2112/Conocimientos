import React, { useState, useContext, useRef, useEffect } from "react";
import HerramientaStyle from "./HerramientaStyle";
import ConocimientosContext from "../../../context/ConocimientoContext/ConocimientosContext";
import AlertaContext from "../../../context/AlertaContext/AlertaContext";
import ProyectosContext from "../../../context/ProyectosController/ProyectosContext";
import Spinner from "../../../SpinnerUpload/Spinner";
import { CARPETA_ACTUAL } from "../../../../types";
export default function Agregar() {
  //Referencia para la imagen en caso que se tenga
  const imagenRef = useRef();

  //Context conocimientos
  const conocimientosContext = useContext(ConocimientosContext);
  const {
    esperarcarga,
    carpetaactual,
    agregarConocimiento,
    agregarCarpeta,
    herramientaActivar,
    mensaje
  } = conocimientosContext;
  //Context Proyectos
  const proyectosContext = useContext(ProyectosContext);
  const { proyectoactual } = proyectosContext;

  //Context Alerta
  const alertaContext = useContext(AlertaContext);
  const { alerta, activarAlerta } = alertaContext;

 //UseEffect para alerta de error 
 useEffect(()=>{
  if(mensaje){ 
    if(!mensaje.msg){
      return activarAlerta("Algo salio mal,Verifica tus datos y intentalo de nuevo")
    }
   activarAlerta(mensaje.msg)
  }
},[mensaje])

  //Boton de switch false - conocimiento
  const [activar, setActivar] = useState(false);

  //State del formulario Conocimiento
  const [formulario, setFormulario] = useState({ nombre: '', descripcion: '' });
 const [formularioC,setFormularioC] = useState('')


  //Funcion para actualizar cambios en el formulario
  const onChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const onChangeC = (e) => {
    setFormularioC(e.target.value);
  }

  // Funcion cambiar switch
  const onClick = () => {
    setActivar(!activar);
    return 
  };

  //Funcion para agregar Conocimientos o Carpeta
  const onSubmit = (e) => {
    e.preventDefault();
    if (!formulario.nombre.trim() && !formularioC.trim() )
      return activarAlerta("Porfavor rellene todos los campos");
    if (activar === false) {
      const enviarCarpeta =  carpetaactual ? carpetaactual._id : null
      agregarConocimiento({
        formulario,
        image: imagenRef.current.files[0],
        proyecto: proyectoactual._id,
        carpeta: enviarCarpeta
      });
      setFormulario({ nombre: "", descripcion: "" });
      setFormularioC('');
      return;
    }
    agregarCarpeta({ nombre: formularioC, proyecto: proyectoactual._id });
    herramientaActivar(null);
    setFormulario({ nombre: "", descripcion: "" });
    setFormularioC('');
  };

  return (
    <HerramientaStyle>
      <h2> Agrega una Carpeta/Conocimiento </h2>

     
      <div className="eleccion">
        {carpetaactual ? null : (
          <button onClick={onClick} className={`${activar ? "active" : null}`}>
            Carpeta
          </button>
        )}
        <button onClick={onClick} className={`${activar ? null : "active"}`}>
          Conocimiento
        </button>
      </div>

      {activar ? (
        <form className="formCrear" onSubmit={onSubmit}>
          <div className="contenedor-crear">
            {" "}
            <input
              type="text"
              id="nombre"
              name="nombre"
              onChange={onChangeC}
              value={formularioC.nombre}
              placeholder="Nombre de la carpeta"
            />{" "}
          </div>

          <input
            className="button"
            type="submit"
            value={`Crear ${activar ? "Carpeta" : "Conocimiento"}`}
          />
        </form>
      ) : (
        <form onSubmit={onSubmit} className="formCrear">
          <div className="contenedor-crear conocimiento-crear">
            {" "}
            <input
              type="text"
              id="nombre"
              onChange={onChange}
              name="nombre"
              placeholder="Ingresa un Nombre"
            />{" "}
          </div>
          <div className="contenedor-crear">
            {" "}
            <textarea
              onChange={onChange}
              placeholder="Cuentanos lo que sabes..."
              name="descripcion"
              id="descripcion"
              cols="15"
              rows="3"
            ></textarea>{" "}
          </div>
          <div className="contenedor-crear">
            {" "}
            <input ref={imagenRef} type="file" name="image" id="image" />{" "}
          </div>

          {esperarcarga ? (
            <>
              <Spinner /> <h3 className="cargando"> Cargando... Esto puede tardar un rato </h3>{" "}
            </>
          ) : (
            <>
             {alerta ? <p className="alerta"> {alerta} </p> : null}
            <input
              className="button"
              type="submit"
              value="Crear Conocimiento"
            />
             </> 
            
          )}
        </form>
      )}
      
    </HerramientaStyle>
  );
}
