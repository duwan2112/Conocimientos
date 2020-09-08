import React, { useReducer } from "react";
import UsuariosReducer from "./UsuariosReducer";
import UsuariosContext from "./UsuariosContext";
import clienteAxios from "../../../config/clienteAxios";
import {
  REGISTRO_EXITOSO,
  OBTENER_USUARIO,
  REGISTRO_ERROR,
  LOGIN_ERROR,
  LOGIN_EXITOSO,
  CERRAR_SESION,
  CARGANDO,
  MENSAJE
} from "../../../types/index";
import tokenAuth from "../../../config/authToken";
const UsuariosState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    usuario: null,
    autenticado: null,
    cargando: true,
    esperarcarga:false,
    mensaje: null
  };
  const [state, dispatch] = useReducer(UsuariosReducer, initialState);


  const Registro = async (data) => {
    try {
      dispatch({
        type: CARGANDO
      })
      const respuesta = await clienteAxios.post("/api/registro", data);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data,
      });
      usuarioAutenticado();
    } catch (error) {
      dispatch({
        type: MENSAJE,
        payload: error.response.data
      })
      dispatch({
        type: REGISTRO_ERROR,
      });
    }
  };

  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }
    try {
      const respuesta = await clienteAxios.get("/api/login");
      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data.usuario,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  const usuarioLogueado = async (datos) => {
    try {
      dispatch({
        type: CARGANDO
      })
      const respuesta = await clienteAxios.post("/api/login", datos);
      dispatch({ type: LOGIN_EXITOSO, payload: respuesta.data });
      usuarioAutenticado();
    } catch (error) {
      dispatch({
        type: MENSAJE,
        payload: error.response.data
      })
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  const cerrarSesion = () => {
    dispatch({
      type: CERRAR_SESION,
    });
  };

  return (
    <UsuariosContext.Provider
      value={{
        autenticado: state.autenticado,
        cargando: state.cargando,
        esperarcarga: state.esperarcarga,
        mensaje: state.mensaje,
        Registro,
        usuarioLogueado,
        usuarioAutenticado,
        cerrarSesion

      }}
    >
      {" "}
      {props.children}{" "}
    </UsuariosContext.Provider>
  );
};
export default UsuariosState;
