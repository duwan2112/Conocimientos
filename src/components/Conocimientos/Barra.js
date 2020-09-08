import React,{useContext} from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import EditIcon from '@material-ui/icons/Edit';
import ConocimientosContext from '../context/ConocimientoContext/ConocimientosContext'
import ReplyIcon from '@material-ui/icons/Reply';
import ConocimientoModal from './ManejarConocimientos/ConocimientoModal'
import Agregar from './ManejarConocimientos/Herramientas/Agregar'
import Editar from './ManejarConocimientos/Herramientas/Editar'
import ProyectosContext from '../context/ProyectosController/ProyectosContext';
import MostrarConocimiento from './ManejarConocimientos/MostrarConocimiento'
export default function Barra() {

   //Context Conocimientos
     const conocimientosContext = useContext(ConocimientosContext)
     const {conocimientoactual,carpetaactual,carpetaActual,herramienta,herramientaActivar} = conocimientosContext
       

   //Context Proyectos 
   const proyectosContext = useContext(ProyectosContext)  
   const {proyectoactual}= proyectosContext 
     //Funcion para volver si se encuentra en una carpeta
     const onClickBack = () => {
      if(herramienta){
         return
      }
       carpetaActual(null)
     }

     //Funcion para añadir carpetas o conocimientos
     const onClickAdd = () => {

         herramientaActivar('agregar')
         if(carpetaactual){
            return herramientaActivar('agregar2')
         }

    }
     //Funcion para eliminar carpetas o conocimientos
    const onClickDelete = () => {
       if(herramienta === 'eliminar' || herramienta === 'eliminar2'){
          return herramientaActivar(null)
       }
       if(carpetaactual){
         return herramientaActivar('eliminar2')
      }
      herramientaActivar('eliminar')
    }

     //Funcion para editar carpetas o conocimientos
    const onClickEdit = () => {
       if(herramienta === 'editar' || herramienta === 'editar2'){
          return herramientaActivar(null)
       }
       if(carpetaactual){
          return herramientaActivar('editar2')
       }
         herramientaActivar('editar')
    }


    return (
       <>  
       {/* Dependiendo de la herramienta activada se cargara editar o agregar para abrir el modal */}  
        {herramienta === "agregar"  || herramienta === "agregar2" ? <ConocimientoModal> <Agregar/> </ConocimientoModal> : (  (herramienta === "editar"  && (carpetaactual || conocimientoactual)) ||  (herramienta === "editar2" && conocimientoactual  )  ? <ConocimientoModal><Editar objeto={carpetaactual && herramienta === 'editar' ? true : false }/> </ConocimientoModal>  : null) }
        {/* Modal para mostrar contenido de un conocimiento */}
        {conocimientoactual && herramienta === null ?<ConocimientoModal> <MostrarConocimiento/> </ConocimientoModal>   : null}
       {/* Dependiendo de la herramienta activada se cambia el color de la barra */}
        <div className={`contenedor-barra ${herramienta === "eliminar" || herramienta === "eliminar2"? "delete" : herramienta === 'editar' || herramienta === "editar2" ? "edit" : herramienta === 'agregar' || herramienta === "agregar2" ? 'agregar': null }`}>
   
        {/* Si existe un proyecto seleccionado se cargara la barra con las diferentes herramientas */}
         {proyectoactual ? <> 
         {carpetaactual  && (herramienta === null || herramienta === 'eliminar2' || herramienta === 'editar2' || herramienta === 'agregar2')  ? <button onClick={onClickBack}> <ReplyIcon className="icon"/> </button> : null}
            <button onClick={onClickAdd}> <AddCircleOutlineIcon className="icon"/> </button>
            <button onClick={onClickEdit}> <EditIcon className="icon"/>  </button>
            <button onClick={onClickDelete}> <HighlightOffIcon className="icon"/> </button>
             </> : null}
           
        </div>
       
       
        </>
       
    )
}
