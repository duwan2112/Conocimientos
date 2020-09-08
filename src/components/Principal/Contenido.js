import React,{useContext,useEffect} from "react";
import styled from "styled-components";
import Formulario from "../Principal/Formulario";
import UsuariosContext from "../context/UsuariosContext/UsuariosContext";
import {useHistory} from 'react-router-dom'
const ContenidoStyled = styled.div`
  position: absolute;
  height: 100vh;
  top: 0;
  left: 0;
  min-width: 100vw;
  background: rgba(0, 0, 0, 0.4);
  text-align: center;
  margin: 0;

  .contenedor {
    width: 100%;
    margin: 0;
    padding-top: 4rem;
    position: relative;
    top: 0px;
    display: flex; 
    h1 {
      
      color: #f1f1f1;
      font-size: 4rem;
      font-family: "Amatic SC";
      font-weight: 200;
      padding-top: 1.5rem;
      @media (max-width: 720px) {
        padding: 2rem;
        font-size: 2.5rem;
        line-height: 2.2rem;
      }
    }
  }
  @media (max-width: 960px) {
    background: rgba(0, 0, 0, 0.65);
   .contenedor{
     padding: 0;
   }
    h1 {
      line-height: 3.3rem;
    }
  }
`;
export default function Contenido() {

  //Context usuarios
  const usuariosContext = useContext(UsuariosContext)
  const {autenticado} = usuariosContext


  //UseHistory 
  const history = useHistory()

  useEffect(()=>{
  
      if(autenticado){
           history.push('/conocimientos')
      }
       //eslint-disable-next-line
  },[autenticado])


  return (
    <ContenidoStyled>
      <div className="contenedor row">
        <div className=" col-12  col-lg-6  order-1 order-lg-0">
          <Formulario />
        </div>

        <div className=" col-12  col-lg-6 order-0  order-lg-1">
          <h1>Bienvenido a tu manejador de Conocimientos</h1>
        </div>
      </div>
    </ContenidoStyled>
  );
}
