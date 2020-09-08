

import {ACTIVAR_ALERTA} from '../../../types/index'
export default (state,action) =>{

   switch(action.type){
     case ACTIVAR_ALERTA: return {
         ...state, alerta: action.payload
     }



    default: return state;
   }
}