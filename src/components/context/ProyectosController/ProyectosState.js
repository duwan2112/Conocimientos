import React, { useReducer } from "react";
import ProyectosContext from "./ProyectosContext";
import ProyectosReducer from "./ProyectosReducer";
import clienteAxios from "../../../config/clienteAxios";
import {
  OBTENER_PROYECTOS,
  AÑADIR_PROYECTO,
  ELIMINAR_PROYECTO,
  PROYECTO_ACTUAL,
  ACTIVAR_NUEVOPROYECTO,
} from "../../../types/index";
const ProyectosState = (props) => {
  const initialState = {
    proyectos: [],
    proyectoactual: null,
    nuevoproyecto: false,
  };

  const [state, dispatch] = useReducer(ProyectosReducer, initialState);

  //Añadir proyectos
  const añadirProyecto = async (proyecto) => {
    try {
      const respuesta = await clienteAxios.post("/api/proyectos", proyecto);
      dispatch({ type: AÑADIR_PROYECTO, payload: respuesta.data });
    } catch (error) {
      console.log(error.response);
    }
  };
  //Obtener proyectos
  const obtenerProyecto = async () => {
    try {
      const respuesta = await clienteAxios.get("/api/proyectos");
      dispatch({
        type: OBTENER_PROYECTOS,
        payload: respuesta.data.proyectos,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  //Eliminar proyectos
  const eliminarProyecto = async (proyecto) => {
    try {
      await clienteAxios.delete(
        `/api/proyectos/${proyecto._id}`
      );
      dispatch({
        type: ELIMINAR_PROYECTO,
        payload: proyecto._id,
      });
    } catch (error) {
      console.log(error.response);
    }
  };

  //Selecciona proyecto actual
  const proyectoActual = (proyecto) => {
    dispatch({
      type: PROYECTO_ACTUAL,
      payload: proyecto,
    });
  };
  //Activar el formulario de nuevo proyecto
  const nuevoProyecto = () => {
    dispatch({
      type: ACTIVAR_NUEVOPROYECTO,
    });
  };

  return (
    <ProyectosContext.Provider
      value={{
        proyectos: state.proyectos,
        proyectoactual: state.proyectoactual,
        nuevoproyecto: state.nuevoproyecto,
        añadirProyecto,
        obtenerProyecto,
        eliminarProyecto,
        proyectoActual,
        nuevoProyecto,
      }}
    >
      {props.children}
    </ProyectosContext.Provider>
  );
};

export default ProyectosState;
