import React,{useState,useContext,useEffect} from 'react'
import FormStyle from '../FormStyle'
import AlertaContext from '../../context/AlertaContext/AlertaContext'
import UsuariosContext from '../../context/UsuariosContext/UsuariosContext'
import Spinner from '../../SpinnerUpload/Spinner'
export default function Login() {

  //Context Alerta 
  const alertaContext = useContext(AlertaContext) 
  const {alerta,activarAlerta} = alertaContext
 
  //Context Usuarios 
  const usuariosContext = useContext(UsuariosContext) 
  const {usuarioLogueado,esperarcarga,mensaje} = usuariosContext


  const [formulario,setFormulario] = useState({
    email: '', password:''
  })


  //UseEffect para alerta de error 
  useEffect(()=>{
     if(mensaje){ 
       if(!mensaje.msg){
         return activarAlerta("Algo salio mal,Verifica tus datos y intentalo de nuevo")
       }
      activarAlerta(mensaje.msg)
     }
  },[mensaje])


   const{email,password} = formulario
        const onChange = e => {
    setFormulario({...formulario,[e.target.name]:e.target.value})
  }
  const onSubmit= e => {
    e.preventDefault()
    if(!email.trim() || !password.trim()){
      return activarAlerta('Porfavor rellene todos los campos')
    }
    if(password.length < 6){
      return activarAlerta('Su password debe ser de minimo 6 digitos')
    }

    usuarioLogueado(formulario)
  }
    return (
        <FormStyle padding={'2rem'}>
          {alerta ? <p className="alerta"> {alerta} </p>  : null}
        <form onSubmit={onSubmit} autoComplete="off">
          <div className="contenedor-input"><label htmlFor="email" > Email: </label>   <input id="email" value={email} onChange={onChange} className="input" type="email" name="email" placeholder="Ingresa tu Email..."/>  </div> 
          
          <div className="contenedor-input"> <label htmlFor="password"> Password: </label>  <input id="password" autoComplete="password" value={password} onChange={onChange} className="input" type="password" name="password" placeholder="Ingresa tu Contraseña..."/> </div> 
          <div className="contenedor-input">
           {esperarcarga ? <Spinner/> : <input type="submit" value="Loguearte" className="btn"/>}
            
             </div> 
        </form> 
        </FormStyle>
    )
}
