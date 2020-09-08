import {
  HERRAMIENTA_ACTIVADA,
  ACTIVAR_ASIDE,
  CONOCIMIENTOS_DEFAULT,
  CARPETAS_DEFAULT,
  CARPETA_ACTUAL,
  CONOCIMIENTO_ACTUAL,
  AGREGAR_CONOCIMIENTO,
  AGREGAR_CARPETA,
  DELETE,
  EDITAR,
  CONFIRMAR_ELIMINACION,
  ESPERAR_CARGA,
  ERROR,
  REINICIO
} from "../../../types/index";

export default (state, action) => {
  switch (action.type) {


     case REINICIO : return {
       ...state , carpetas: [], conocimientos: []
     }
   
    case EDITAR:
    
      const { objecto2, type2 } = action.payload;
      if (type2 === true) {
        return {
          ...state,
          carpetas: state.carpetas.map((carpeta) =>
            carpeta._id === objecto2._id ? objecto2 : carpeta
          ),
        };
      }
      else{
        return {
        ...state,
        conocimientos: state.conocimientos.map((conocimiento) =>
          conocimiento._id === objecto2._id ? objecto2 : conocimiento
        )
      };
      }
      

    case ERROR: return {
      ...state, mensaje: action.payload
    }

    case DELETE:
      const { objecto, type } = action.payload;
      if (type === "carpetas") {
        return {
          ...state,
          carpetas: state.carpetas.filter(
            (carpeta) => carpeta._id !== objecto.idConocimiento
          ),
          confirmareliminacion: null,
        };
      }
      return {
        ...state,
        conocimientos: state.conocimientos.filter(
          (conocimiento) => conocimiento._id !== objecto.idConocimiento
        ),
        confirmareliminacion: null,esperarcarga: false
      };
    case CONFIRMAR_ELIMINACION:
      return {
        ...state,
        confirmareliminacion: action.payload,
      };



    case ACTIVAR_ASIDE:
      return {
        ...state,
        aside: !state.aside,
      };
    case HERRAMIENTA_ACTIVADA:
      return {
        ...state,
        herramienta: action.payload,
      };
    case AGREGAR_CONOCIMIENTO:
      return {
        ...state,
        conocimientos: [...state.conocimientos, action.payload], herramienta: null,esperarcarga: false
      };
    case AGREGAR_CARPETA:
      return {
        ...state,
        carpetas: [...state.carpetas, action.payload],
      };

    case CARPETA_ACTUAL:
      return {
        ...state,
        carpetaactual: action.payload,
      };
    case CONOCIMIENTO_ACTUAL:
      return {
        ...state,
        conocimientoactual: action.payload,
      };
    case CARPETAS_DEFAULT:
      return {
        ...state,
        carpetas: action.payload,
      };
    case CONOCIMIENTOS_DEFAULT:
      return {
        ...state,
        conocimientos: action.payload,
      };

      case ESPERAR_CARGA: return{
        ...state, esperarcarga: true
      }  
    default:
      return state;
  }
};
