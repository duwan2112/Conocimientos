import styled,{keyframes} from 'styled-components';


const key = keyframes`
   from{
     bottom: -100px;
   }
   50%{
       bottom: 0;
   }
   to{
     bottom: -100px;
   }
`


const FormStyle = styled.div`
display: flex;
justify-content: center;
margin-left: 20px;
padding-top: 3rem;
background: transparent;
form{
    display: flex;
    flex-direction: column;
    width: 80%;
}
.contenedor-input{
    color: #9EB3C2;
    font-size: 20px;
    display: flex;
    justify-content: space-between;
    padding-top: ${props => props.padding};
}
.input,.text{
    padding-left: 10px;
    background: transparent;
    color: rgba(255,255,255,0.8);
    border: none;
    border-bottom: 3px solid #21295C;
    border-radius: 10px;
    &:focus{
        outline: none;
    }
}  
label{
    font-size: 25px;
    cursor: pointer;
}
.text{
   width:50%;
   border-radius: 0px;

}
.btn
{
    margin-top: 10px;
  color: rgba(255,255,255,.8);
  font-size: 20px;
  font-weight: 800;
  display: block;
  width: 100%;
  height: 50px;
  background: rgba(6,90,130,.7);
}
.alerta{
    animation: 5s ${key};
    position: fixed;
    bottom: -100px;
    right: 0;
    left: 0;
    margin: 10px auto;
    background: rgba(255,255,255,.9); 
    color: black;
    font-size: 30px;
    font-weight: 1000;
    width: 30%;
    line-height: 60px;
   border-radius: 2px;
    padding: 0;
}
@media (max-width: 520px){
    margin: 0;
    form,.text{
        width: 100%;
    }
    .contenedor-input{
       padding-bottom: 1rem;
       font-size: 13px;
       label{
           width: 40%;
           font-size: 18px;
       }
      input,.text{
           width: 60%;
          
        }
    }
    .btn{
        margin: 0 auto;
         margin-bottom: 30px;
    }
    .alerta{
         width: 100%;
        font-size: 15px;
    }
}

`

export default FormStyle