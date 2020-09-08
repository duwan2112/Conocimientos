import React,{useReducer} from 'react' 
import AlertaContext from '../AlertaContext/AlertaContext'
import AlertaReducer from '../AlertaContext/AlertaReducer'
import {ACTIVAR_ALERTA} from '../../../types/index'
const AlertaState = (props) => {

    const initialState = {
       alerta: null,

    }

    const [state,dispatch] = useReducer(AlertaReducer,initialState)

    
     
    const activarAlerta = alerta => {
      dispatch({
          type: ACTIVAR_ALERTA,
          payload: alerta
      })
      
      setTimeout(() => {
        dispatch({
            type: ACTIVAR_ALERTA,
            payload: null
        })
      },5000) 
    }

    return ( 
        <AlertaContext.Provider value={{
            alerta: state.alerta,
            activarAlerta

        }}>

            {props.children}
        </AlertaContext.Provider> 
 

    ) 
}

export default AlertaState