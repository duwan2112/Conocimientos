import React,{useContext} from 'react'
import FolderIcon from '@material-ui/icons/Folder';
import ConocimientosContext from '../../context/ConocimientoContext/ConocimientosContext'

export default function Carpeta({carpeta}) {


     //Context Conocimiento
    const conocimientosContext = useContext(ConocimientosContext)
    const {confirmarEliminacion,carpetaActual,herramienta} = conocimientosContext


//Si se hace click en una carpeta
   const onClick = () => {
       //Si se cumple elimina una herramienta
   if(herramienta === "eliminar"){
       //Eliminar una carpeta
        
       //confirmarEliminacion 
        confirmarEliminacion({...carpeta,type: 'carpetas'})
        //NOTA: el resto de la eliminacion de al carpeta se encuentra en EliminacionConfirmar.js
       return    
   }
      carpetaActual(carpeta)
   }
     
    return (
        <button  onClick={onClick} className="carpeta">
            
        <FolderIcon className="img"/> 
        <div className="nombre">
           {carpeta.nombre}
        </div>
        
    </button>
    )
}
