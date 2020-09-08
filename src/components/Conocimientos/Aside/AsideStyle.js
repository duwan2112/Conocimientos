import styled,{keyframes} from 'styled-components';


const key = keyframes` 
from{
   transform: scale(1);
}
50%{
  transform: scale(1.3)
}
to{
   transform: scale(1);
}
`
const AsideStyle = styled.div`
.contenedor-aside {
    .aside {
      text-align: center;
      position: fixed;
      left: -15%;
      background: #21295c;
      width: 15%;
      height: 100vh;
      transition: 0.5s;
      color: white;
      padding: 20px 15px;
      overflow: auto;
      .button-cerrarsesion{ 
          background: transparent;
          border: none;
          color: rgba(255,255,255,.9); 
          margin-top: 50px;
          &:hover{
            transform: scale(1.1);
          }
          &:focus{
            outline: none;
          }


      }
      h3{
        font-size: 25px;
      }
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
      @media(max-width: 1024px) and (min-width: 961px)
      {
        h3{font-size: 20px;

        }
            
      }
      @media (max-width: 960px) {
        z-index: 1;
        left: -100%;
        width: 100%;
        background: rgba(33, 41, 92, 0.95);
      }

      .nuevo-proyecto {
        margin-top: 40px;
        background: #1c7293;
        color: white;
        font-weight: bold;
      }
      .form-proyecto {
        margin-top: 40px;
        .input {
          width: 100%;
          border-radius: 3px;
          height: 40px;
          padding-left: 10px;
          margin-bottom: 20px;
          border: none;
        }
        .crear-proyecto {
          color: white;
          font-weight: bold;
          background: rgba(28, 114, 147, 0.8);
        }
      }
      .proyectos {
        text-align: center;
      padding-top: 4rem;
      
      ul{
        display: inline;
        text-align: center;
        list-style-type: none;
        li{
           
            border: 2px solid rgba(255,255,255,.3);
            margin-bottom: 10px;
            border-radius: 5px;
            &:active{
              transform: scale(1.1)
           }
          
       }
          @media (max-width: 960px){
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            padding: 0;
            li{
              margin: 10px;
              width: 40%;
            }
        
        }
      }
       .button-proyecto{ 
           display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          color: #DCDCDD;
           border: none;
          background: transparent;
           width: 100%;
           &:focus{
             outline: none;
            
           }
           
       }
       @media (max-width: 960px){
         padding-top: 3rem;
         padding-bottom: 6rem;
       }
    }
    }
    .button-active {
      z-index: 2;
      position: fixed;
      bottom: 0;
      border: none;
      background: transparent;
      animation: 1s infinite ${key};
      &:focus {
        outline: none;
      }
      .icon {
      color: ${props => props.aside ? 'white' : '#000000CC'};
        transition: 0.5s;
      }
    }
  }
`;

export default AsideStyle;