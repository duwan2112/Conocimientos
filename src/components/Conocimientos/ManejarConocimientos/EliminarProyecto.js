import React,{useContext} from 'react'
import ConocimientosContext from '../../context/ConocimientoContext/ConocimientosContext'

export default function EliminarProyecto() {

     //Context Conocimientos
     const conocimientosContext = useContext(ConocimientosContext)
     const {confirmarEliminacion} = conocimientosContext
     




    const onClick = () => {
        confirmarEliminacion(true)
    }
    return (
        <div className="eliminar-proyecto">
            <button onClick={onClick}> Eliminar Proyecto </button>
        </div>
    )
}
