import React,{useContext,useState} from 'react'
import ConocimientosContext from '../../context/ConocimientoContext/ConocimientosContext'
import ProyectosContext from '../../context/ProyectosController/ProyectosContext'
export default function NuevoProyecto() {

     //Context Conocimientos 
     const conocimientosContext = useContext(ConocimientosContext)
     const {herramientaActivar,conocimientoActual,carpetaActual} = conocimientosContext
   
   //Context Proyectos 
   const proyectosContext = useContext(ProyectosContext)
   const {añadirProyecto,nuevoProyecto,nuevoproyecto} = proyectosContext
   
     // UseState form 
    const [proyecto,setProyecto] = useState({nombre: ''})

   //Funcion para activar el form del nuevo proyecto 
    const onClick = () => {
        herramientaActivar(null)
        conocimientoActual(null)
        carpetaActual(null)
        nuevoProyecto()
       
    }

    //Actualizar el estado si hay un cambio en el input
    const onChange = e => {
        setProyecto({...proyecto,[e.target.name]: e.target.value})
    }
    
    //Generar nuevo proyecto
    const onSubmit = e => {
        e.preventDefault()
        
      if(proyecto.nombre.trim()){
            añadirProyecto(proyecto)
           nuevoProyecto()
           setProyecto({nombre:''})
      }

    }
    return (
        <div>
            <button onClick={onClick} className=" nuevo-proyecto btn  btn-block"> Nuevo Proyecto </button>
           {nuevoproyecto ?( <form onSubmit={onSubmit} autoComplete="off" className="form-proyecto">
                <input className="input" type="text" onChange={onChange} value={proyecto.nombre} name="nombre" placeholder="Nuevo proyecto"/>

                <input className="crear-proyecto btn btn-block" type="submit" value="Crear Proyecto"/>
                
                </form> ) : null }
           
             
        </div>
    )
}
