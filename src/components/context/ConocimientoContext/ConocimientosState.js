import React, { useReducer } from "react";

import ConocimientosContext from "./ConocimientosContext";
import ConocimientosReducer from "./ConocimientosReducer";
import clienteAxios from "../../../config/clienteAxios";
import {
  ACTIVAR_ASIDE,
  CONOCIMIENTOS_DEFAULT,
  CARPETAS_DEFAULT,
  CARPETA_ACTUAL,
  CONOCIMIENTO_ACTUAL,
  AGREGAR_CONOCIMIENTO,
  AGREGAR_CARPETA,
  HERRAMIENTA_ACTIVADA,
  DELETE,
  EDITAR,
  CONFIRMAR_ELIMINACION,
  ESPERAR_CARGA,
  ERROR,
  REINICIO
} from "../../../types/index";
const ConocimientosState = (props) => {
  const initialState = {
    aside: true,
    carpetas: [],
    carpetaactual: null,
    conocimientoactual: null,
    conocimientos: [],
    herramienta: null,
    confirmareliminacion: null,
    esperarcarga: false,
    mensaje: null,
  };

  //agregar conocimiento
  const agregarConocimiento = async (conocimiento) => {
    try {
      dispatch({
        type: ESPERAR_CARGA,
      });
      const formData = new FormData();
      formData.append("image", conocimiento.image);
      formData.append("nombre", conocimiento.formulario.nombre);
      formData.append("descripcion", conocimiento.formulario.descripcion);
      formData.append("proyecto", conocimiento.proyecto);
      formData.append("carpeta",conocimiento.carpeta)
      const respuesta = await clienteAxios.post("/api/conocimientos", formData);
      dispatch({
        type: AGREGAR_CONOCIMIENTO,
        payload: respuesta.data.conocimiento,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };

  //Agregar Carpeta
  const agregarCarpeta = async (carpeta) => {
   
    try {
      const respuesta = await clienteAxios.post("/api/carpetas", carpeta);
      dispatch({
        type: AGREGAR_CARPETA,
        payload: respuesta.data.carpeta,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };

  //Borrar carpeta o conocimiento
  const Delete = async (datos) => {
    const { idConocimiento, idProyecto } = datos.objecto;

    try {
      dispatch({
        type: ESPERAR_CARGA,
      });
      if (datos.type === "carpetas") {
        await clienteAxios.delete(`/api/carpetas/${idConocimiento}`, {
          params: { idProyecto },
        });
      } else {
        await clienteAxios.delete(`/api/conocimientos/${idConocimiento}`, {
          params: { idProyecto },
        });
      }
      //Aqui vamos a eliminar el proyecto con el cliente axios -test-
      dispatch({
        type: DELETE,
        payload: datos,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };

  //Editar carpeta o conocimiento
  const Editar = async (objeto) => {
    try {
      const { objecto2, type2 } = objeto;
      if (type2 === true) {
        await clienteAxios.put(`api/carpetas/${objecto2._id}`, objecto2);
      } else {
        await clienteAxios.put(`api/conocimientos/${objecto2._id}`, objecto2);
        
        
      }
      dispatch({
          type: EDITAR,
          payload: objeto,
        });
     
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error.response.data,
      });
    }
  };

  //confirmacion de la eliminacion
  const confirmarEliminacion = (type) => {
    dispatch({
      type: CONFIRMAR_ELIMINACION,
      payload: type,
    });
  };

  //Activar una herramienta
  const herramientaActivar = (informacion) => {
    dispatch({
      type: HERRAMIENTA_ACTIVADA,
      payload: informacion,
    });
  };

  //Selecciona una carpera para que sea el actual
  const carpetaActual = (carpeta) => {
    dispatch({
      type: CARPETA_ACTUAL,
      payload: carpeta,
    });
  };

  //Selecciona un conocimiento para que sea el actual
  const conocimientoActual = (conocimiento) => {
    dispatch({
      type: CONOCIMIENTO_ACTUAL,
      payload: conocimiento,
    });
  };

  //Cargar conocimientos por default
  const conocimientosDefault = async (proyecto) => {
    try {
      const resultado = await clienteAxios.get("/api/conocimientos", {
        params: { proyecto },
      });
      dispatch({
        type: CONOCIMIENTOS_DEFAULT,
        payload: resultado.data.conocimientos,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  //Cargar carpetas por default
  const carpetasDefault = async (proyecto) => {
    try {
      const resultado = await clienteAxios.get("/api/carpetas", {
        params: { proyecto },
      });
      dispatch({
        type: CARPETAS_DEFAULT,
        payload: resultado.data.carpetas,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  //Activar menu deslizador
  const activar = () => {
    dispatch({
      type: ACTIVAR_ASIDE,
    });
  };


  //Reiniciar valores de las carpetas 
  const reinicio = () => {
    dispatch({
      type: REINICIO
    })
  }
  const [state, dispatch] = useReducer(ConocimientosReducer, initialState);

  return (
    <ConocimientosContext.Provider
      value={{
        aside: state.aside,
        carpetaactual: state.carpetaactual,
        conocimientoactual: state.conocimientoactual,
        conocimientos: state.conocimientos,
        herramienta: state.herramienta,
        carpetas: state.carpetas,
        confirmareliminacion: state.confirmareliminacion,
        esperarcarga: state.esperarcarga,
        mensaje: state.mensaje,
        activar,
        agregarConocimiento,
        agregarCarpeta,
        carpetaActual,
        conocimientoActual,
        conocimientosDefault,
        carpetasDefault,
        herramientaActivar,
        Delete,
        Editar,
        confirmarEliminacion,
        reinicio
      }}
    >
      {props.children}
    </ConocimientosContext.Provider>
  );
};
export default ConocimientosState;
