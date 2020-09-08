import React,{useContext} from 'react'
import codigo from '../../../images/codigo.png'
import ConocimientosContext from '../../context/ConocimientoContext/ConocimientosContext'

export default function Conocimiento({conocimiento}) {

    //Context Conocimiento
    const conocimientosContext = useContext(ConocimientosContext)
    const {conocimientoActual,herramienta,confirmarEliminacion} = conocimientosContext

  //Si se hace click una herramienta
   const onClick = () => {

    //Si se cumple elimina una herramienta
    if(herramienta === "eliminar" || herramienta === 'eliminar2'){
       //confirmarEliminacion 
       confirmarEliminacion({...conocimiento,type: 'conocimientos'})
       //NOTA: el resto de la eliminacion de al carpeta se encuentra en EliminacionConfirmar.js
        return    
    }
      conocimientoActual(conocimiento)
   }
     
    return (
        <> 
        <button onClick={onClick} className="conocimiento">
            
            <img className="img" src={codigo} alt=""/>
            <div className="nombre">
               {conocimiento.nombre}
            </div>
        </button>
        

        </> 
    )
}
