import React,{useState,useContext,useEffect} from 'react'
import FormStyle from '../FormStyle'
import AlertaContext from '../../context/AlertaContext/AlertaContext'
import UsuariosContext from '../../context/UsuariosContext/UsuariosContext'
export default function Registro() {

     //Context Alerta 
  const alertaContext = useContext(AlertaContext) 
  const {alerta,activarAlerta} = alertaContext
 
  //Context Usuario 
  const usuarioContext = useContext(UsuariosContext)
  const {Registro,mensaje} = usuarioContext
  
    //UseEffect para alerta de error 
  useEffect(()=>{
    if(mensaje){ 
      if(!mensaje.msg){
        return activarAlerta("Algo salio mal,Verifica tus datos y intentalo de nuevo")
      }
     activarAlerta(mensaje.msg)
    }
 },[mensaje])
 

     const [formulario,setFormulario] = useState({
       nombre: '', apellido: '' , email: '', password:'' , confirmar: ''
     })
      const{nombre,apellido,email,password, confirmar} = formulario
           const onChange = e => {
       setFormulario({...formulario,[e.target.name]:e.target.value})
     }
     const onSubmit= e => {
       e.preventDefault()
       if(!email.trim() || !password.trim() || !confirmar.trim() || !apellido.trim() || !nombre.trim()){
        return activarAlerta('Porfavor rellene todos los campos')
      }
      if(password.length < 6){
        return activarAlerta('Su password debe ser de minimo 6 digitos')
      }
      if(password !== confirmar){
        return activarAlerta('Su password y su confirmacion deben ser iguales')
      }
      Registro({nombre: `${formulario.nombre} ${formulario.apellido}`, email,password})

     }
    return (
        <FormStyle padding={'.5rem'}>
          {alerta ? <p className="alerta"> {alerta} </p>  : null}
        <form onSubmit={onSubmit} autoComplete="off">
          <div className="contenedor-input"><label htmlFor="nombre"> Nombre: </label>   <input id="nombre" onChange={onChange} value={nombre} className="input" type="text" name="nombre" placeholder="Ingresa tu Nombre..."/>  </div> 
          <div className="contenedor-input"><label htmlFor="apellido"> Apellido: </label>   <input id="apellido"  onChange={onChange} value={apellido} className="input" type="text" name="apellido" placeholder="Ingresa tu Apellido..."/>  </div> 
          <div className="contenedor-input"><label htmlFor="email"> Email: </label>   <input id="email" onChange={onChange} value={email} className="input" type="email" name="email" placeholder="Ingresa tu Email..."/>  </div> 
          <div className="contenedor-input"><label htmlFor="password"> Password: </label>   <input id="password" autoComplete="password" onChange={onChange} value={password} className="input" type="password" name="password" placeholder="Ingresa tu Password..."/>  </div> 
          <div className="contenedor-input"> <label htmlFor="confirmar"> Confirmar: </label>  <input id="confirmar" autoComplete="confirmar" onChange={onChange} value={confirmar} className="input" type="password" name="confirmar" placeholder="Confirmar tu Password..."/> </div> 
          <div className="contenedor-input">
            <input type="submit" value="Registrate" className="btn"/>
             </div> 
        </form> 
        </FormStyle>
    )
}
