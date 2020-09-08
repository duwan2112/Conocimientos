import styled from 'styled-components';

const HerramientaStyle = styled.div`
   display: flex;
   flex-direction:  column;
   justify-content: center;

   h2{
       margin-top: 30px;
   }

   .eleccion{
       display: flex;
       justify-content: center;
       align-items: center;
       box-shadow: inset 0px 0px 5px 1px rgba(0,0,0,.7);
       background: white;
       border-radius: 20px;
       width: 40%;
       margin: 40px auto;
       height: 50px;
       button{
           margin: auto 10px;
          width: 50%;
          border-radius: 30px;
          height: 60%;
          transition: .5s all;
          background: transparent;
          border: none;
          &:focus{
              outline:none;
          }
       }
       .active{
           background: rgba(0,0,0,.6);
           color: white;
       }
       @media (max-width:920px){
           width: 90%;
       }
   }  
   .formCrear{
       width: 50%;
       margin: 0 auto;
       .contenedor-input{
    
          margin-bottom: 30px;
           margin-top: 40px; 
           text-align: start;
       }
       input,textarea{
           width: 100%;
           color: black;
           padding: 10px;
           border: none;
           border-radius: 5px;
           background: white;
           box-shadow: inset 0px 0px 5px 1px rgba(0,0,0,.5);
       }
       textarea{
           word-break: break-all;
       }
       .button{
           margin: 30px 0;
           color: #f1f1f1;
           font-weight: bold;
           background: rgba(0,0,0,.7);
       }
       

       @media (max-width: 920px){
           width: 90%;
       }
   }
   .contenedor-crear{
       margin: 20px 0;
   }
   .cargando{
       margin: 40px;
   }
   .alerta{
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0px auto;
    background: #DC3545; 
    color: #f1f1f1;
    font-size: 15px;
    font-weight: 1000;
    width: 80%;
    transition: 2s all;
    border-radius: 10px; 
    padding: 20px;
    @media (max-width: 920px){

        width: 100%;
        font-size: 15px;

    }
}
`;

export default HerramientaStyle;