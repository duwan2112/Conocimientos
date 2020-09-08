import styled from 'styled-components';

const ConocimientoModalStyle = styled.div`
position: fixed;
z-index: 10;
top: 0;
left: 0;
  width: 100vw;
  height: 100vh;
  text-align: center;
  
  
  .cerrar-modal{

      width: 100%;
      height: 100%;
   background: rgba(0,0,0,.5);
   border: none;
  }
  .modal-conocimiento{
      overflow: auto;
     position: absolute;
      background: #f1f1f1;
      width: 60%;
      height: 80%;
      margin: auto;
      left: 0; 
      right: 0;
      top: 0; 
      bottom: 0;
      border-radius: 20px;
       &::-webkit-scrollbar{
        -webkit-appearance: none;

      }
      &::-webkit-scrollbar:vertical{
          width: 10px;
          
      }
      &::-webkit-scrollbar:button:increment,&::-webkit-scrollbar-button{
          display: none;
      }
      &::-webkit-scrollbar-thumb{
         background-color: #9EB3C2;
         border-radius: 20px;
         
         
      }
      &::-webkit-scrollbar-track{
         border-radius: 10px;
       
      }
      .button-close{
      position: absolute;
      right: 20px;
      top: 20px;
      border: none;
      background: transparent;
      &:focus{
          outline: none;
      }
      
  }
     @media(max-width: 960px){
         width: 100%;
         height: 100%;
         border-radius: 0;
         .button-close{
            right: 0px;
            top: 10px;
         }
     }
  }

   
h2{
padding-top: 25px;
text-decoration: underline;

}

.contenido{

display: flex;
justify-content: center;
margin: 70px auto;

}

h4{
width: 100%;
margin: 0 auto; 
text-align: center;
}

.descripcion{
font-size: 18px;

width: 40%;
padding-top: 40px;
text-align: start;


}
.text {

width: 80%;
margin: 0 auto;
padding-top:20px
}



.imagen-contenido{
margin-right: 30px;
margin-left: 40px;
height: auto;
width: 40%;
border-radius: 20px;
overflow: hidden;
box-shadow: 2px 2px 10px black
}
.imagen-contenido img{
width: 100%;
height: 100%;
object-fit: cover;

}

  
`;

export default ConocimientoModalStyle;