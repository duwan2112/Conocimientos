import { REGISTRO_EXITOSO, OBTENER_USUARIO, REGISTRO_ERROR,LOGIN_ERROR ,LOGIN_EXITOSO,CERRAR_SESION,CARGANDO,MENSAJE} from '../../../types/index'


export default (state,action) => {
    switch(action.type){
            case CARGANDO: return{
            ...state, esperarcarga: true
            }
            case CERRAR_SESION:
            case LOGIN_ERROR:
            case REGISTRO_ERROR: 
            localStorage.removeItem('token')
            return{
                ...state, usuario: null,autenticado: null,token: null,cargando: false,esperarcarga: false
            }
            case OBTENER_USUARIO: return{
                ...state, usuario: action.payload, autenticado: true, cargando: false,esperarcarga: false
            }
            case LOGIN_EXITOSO: 
            case REGISTRO_EXITOSO: 
            localStorage.setItem('token',action.payload.token)
            return{
                ...state, autenticado: true,cargando: false
            }
            case MENSAJE: return {
                ...state, mensaje: action.payload
            }
    
        default: return state;
    }
}