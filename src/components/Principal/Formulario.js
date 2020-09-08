import React,{useState} from 'react'
import styled from 'styled-components';
import Login from './Login/Login'
import Contacto from './Contacto/Contacto'
import Registro from './Registro/Registro'
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

    const FormularioStyle = styled.div`
      width: 90%;   
      margin: 0 auto;
      button{
          background: transparent;
          color: #9EB3C2;
          font-size: 25px;
          border: none;
          margin-top: 3rem;
          &:focus{
              outline: none; 
          }
      }
       p{
        padding-top: 5rem;
        font-size: 3rem;
        font-family: 'Amatic SC';
        color: #DCDCDD;
        line-height: 40px;
      }
      .activado{
        border-top: 7px solid #DCDCCD 
      }
      .imagen{
        font-size: 50px;
        color: #1C7293;
      }
      @media(max-width: 960px){
        p{
          padding-top: 3rem;
          font-size: 2rem;
        }
        button{
          font-size: 15px;
            margin-top: 1rem;
        }
        .imagen{
          font-size: 45px;
        }
      }

    `;
export default function Formulario() {

    const [formulario,setFormulario] = useState(null)

    const HandleClick = e => {
        setFormulario(e)
    }

    const Componente = () => {
      if(formulario === 'Login') return <Login/> 
      else if(formulario === 'Registro') return <Registro/> 
      else return <Contacto/> 
    }
    return (     
        <FormularioStyle>
            <div className="row">
                <button id="login" onClick={()=>{HandleClick('Login')}} className={`col-4 ${formulario === 'Login' ? 'activado' : null}`}><ExitToAppIcon className="imagen"/> <br/> Login</button>
                <button id="registro" onClick={()=>{HandleClick('Registro')}} className={`col-4 ${formulario === 'Registro' ? 'activado' : null}`}><AddToQueueIcon className="imagen"/> <br/> Registro</button>
                <button id="contacto" onClick={()=>{HandleClick('Contacto')}} className={`col-4 ${formulario === 'Contacto' ? 'activado' : null}`}><ContactMailIcon className="imagen"/> <br/> Contacto</button>
              <div className="col-12">  
               
              {formulario ? (Componente()) : <div className="row">  <p className="col-3"> <ArrowUpwardIcon style={{fontSize: 45 , fill: '#1C7293'}} /> </p>  <p className="col-6"> Selecciona una opcion</p>  <p className="col-3">   <ArrowUpwardIcon style={{fontSize: 45 , fill: '#1C7293'}}/></p> </div> }
              </div> 
            </div>
        </FormularioStyle>
    )
}
