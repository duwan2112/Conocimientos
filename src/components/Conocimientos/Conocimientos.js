import React,{useContext} from 'react'
import ConocimientosStyle from './ConocimientosStyle'
import Barra from './Barra'
import Aside from './Aside/Aside'
import ConocimientosContext from '../context/ConocimientoContext/ConocimientosContext'
import ManejarConocimientos from './ManejarConocimientos/ManejarConocimientos'



//CONTENEDOR PRINCIPAL DEL MAIN 
export default function Conocimientos() {
    const conocimientosContext = useContext(ConocimientosContext)
    const {aside} = conocimientosContext
     
    return (
        <ConocimientosStyle className="" >
           <Aside/>  
            <main className={`contenedor-main ${aside ? 'active' : null }`}> 
                <Barra/>  
                <ManejarConocimientos/> 
                </main> 
        </ConocimientosStyle>
    )
}
