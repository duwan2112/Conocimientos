import React,{useContext} from 'react'
import FolderIcon from '@material-ui/icons/Folder';
import ConocimientosContext from '../../context/ConocimientoContext/ConocimientosContext'
import ProyectosContext from '../../context/ProyectosController/ProyectosContext';
export default function Proyecto({proyecto}) {

  //Context conocimientos
   const conocimientosContext = useContext(ConocimientosContext)
   const {activar,conocimientoActual,carpetaActual,herramientaActivar,conocimientosDefault,carpetasDefault,reinicio} = conocimientosContext
 

     //Context Proyectos
     const proyectosContext = useContext(ProyectosContext)
     const {proyectoActual} = proyectosContext
  

     //Seleccionar un proyecto
    const onClick = () => {
     reinicio()
       proyectoActual(proyecto)
       if(window.innerWidth < 961){
         
          activar()
       }
       herramientaActivar(null)
         conocimientoActual(null)
         carpetaActual(null)
      conocimientosDefault(proyecto._id)
      carpetasDefault(proyecto._id)
    }
    return (
        <button onClick={onClick} className="button-proyecto">
            <FolderIcon style={{fontSize: 75}}/> 
          {proyecto.nombre} 
        </button>
    )
}
