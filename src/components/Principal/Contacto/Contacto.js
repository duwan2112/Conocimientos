import React,{useState,useContext} from "react";
import FormStyle from "../FormStyle";
import AlertaContext from '../../context/AlertaContext/AlertaContext'
export default function Contacto() {


    //Context Alerta 
    const alertaContext = useContext(AlertaContext) 
    const {alerta,activarAlerta} = alertaContext
  
  const [formulario,setFormulario] = useState({
    nombre: '', email:'',comentario:''
  })
   const{nombre,email,comentario} = formulario
        const onChange = e => {
    setFormulario({...formulario,[e.target.name]:e.target.value})
  }
  const onSubmit= e => {
    e.preventDefault()
    if(!email.trim() || !comentario.trim() || !nombre.trim()){
      return activarAlerta('Porfavor rellene todos los campos')
    }

  }
  return (
    <FormStyle padding={"1.5rem"}>
      {alerta ? <p className="alerta"> {alerta} </p>  : null}
      <form onSubmit={onSubmit} autoComplete="off">

        <h3>No habilitado aun</h3>
       {/*  <div className="contenedor-input">
          <label htmlFor="nombre"> Nombre: </label>{" "}
          <input
          onChange={onChange}
          id="nombre"
            className="input"
            type="text"
            name="nombre"
            placeholder="Ingresa tu Nombre..."
          />{" "}
        </div>

        <div className="contenedor-input">
          {" "}
          <label htmlFor="email"> Email: </label>{" "}
          <input
          id="email"
            onChange={onChange}
            value={email}
            className="input"
            type="email"
            name="email"
            placeholder="Ingresa tu Email..."
          />{" "}
        </div>
        <div className="contenedor-input">
          {" "}
          <label htmlFor="mensaje"> Mensaje: </label>{" "}
          <textarea
          id="mensaje"
            onChange={onChange}
            value={comentario}
            className="text"
            type="text"
            name="comentario"
            placeholder="Necesitas ayuda con algo?..."
          />{" "}
        </div>
        <div className="contenedor-input">
            <input type="submit" value="Enviar Mensaje" className="btn"/>
             </div>  */}
      </form>
    </FormStyle>
  );
}
