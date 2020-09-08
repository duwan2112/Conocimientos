import React,{useContext} from 'react'
import Proyecto from './Proyecto'

import ProyectosContext from '../../context/ProyectosController/ProyectosContext'

export default function Proyectos() {

   //Context Proyectos
   const proyectosContext = useContext(ProyectosContext)
   const {proyectos} = proyectosContext


    return (
        <div className="proyectos">
            <h5>Proyectos</h5>
            <ul > 
            {proyectos.length > 0 ? proyectos.map(proyecto =>(<li key={proyecto._id}> <Proyecto key={proyecto._id} proyecto={proyecto}/> </li> )) : null}
            </ul> 
       
        </div>
    )
}
