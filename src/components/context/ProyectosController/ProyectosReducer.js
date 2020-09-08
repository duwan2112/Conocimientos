
import {OBTENER_PROYECTOS, AÑADIR_PROYECTO, ELIMINAR_PROYECTO,PROYECTO_ACTUAL,ACTIVAR_NUEVOPROYECTO} from '../../../types/index'

export default (state,action) => {
    switch(action.type){
      case OBTENER_PROYECTOS: return {
          ...state, proyectos: action.payload
      }
      case AÑADIR_PROYECTO: return {
          ...state, proyectos: [...state.proyectos,action.payload]
      }
       case ELIMINAR_PROYECTO: return{
           ...state, proyectos: state.proyectos.filter(proyecto => proyecto._id !== action.payload), proyectoactual: null
       }

       case PROYECTO_ACTUAL: return {
        ...state, proyectoactual: action.payload
    }
    case ACTIVAR_NUEVOPROYECTO: return{
        ...state, nuevoproyecto: !state.nuevoproyecto
    }
        default: return state;
    }
}