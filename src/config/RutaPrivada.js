import React, {useContext,useEffect } from 'react'
import UsuariosContext from '../components/context/UsuariosContext/UsuariosContext'
import { Redirect,Route } from 'react-router-dom'
import ProyectosContext from '../components/context/ProyectosController/ProyectosContext'
const RoutaPrivada = ({component: Component,...props}) => {
    const usuariosContext = useContext(UsuariosContext)
    const {autenticado,usuarioAutenticado,cargando} = usuariosContext
    
      //Context Proyectos 
  const proyectosContext = useContext(ProyectosContext)
  const {obtenerProyecto} = proyectosContext
  
     useEffect(()=>{
      usuarioAutenticado()
      obtenerProyecto()
      //eslint-disable-next-line
     },[])

     return(<Route  {...props} render={props => !autenticado && !cargando ? (<Redirect to="/"/>) : (<Component {...props}  />) } /> )

}


export default RoutaPrivada