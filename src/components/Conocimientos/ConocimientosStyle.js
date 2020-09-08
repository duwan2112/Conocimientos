import styled from "styled-components";

const ConocimientosStyle = styled.div`
  background: #dcdcdd;
  min-height: 100vh;  
  .contenedor-main {
    transition: 0.5s;
  .contenedor-barra {
    padding: 0 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1b3b6f;
    color: white;
    height: 60px;
    line-height: 60px;
    transition: 1s all;
    button{
      background: transparent;
      border: none;
      color: white;
      padding: 0px 40px;
      .icon{
        font-size: 40px;
      }
      &:focus{
        outline: none
      }
      &:active,&:hover{
        transform: scale(1.2);
        @media (max-width: 960px){
          transform: scale(1)
        }
      }
    }
    p {
      width: 50%;
      margin: 0;
      font-size: 20px;
      text-align: end;
    }
    @media (max-width: 960px) {
      padding: 10px;
      button{
        padding: 0 20px;
      }
      h2 {
        font-size: 15px;
      }
      p {
        font-size: 15px;
      }
    }
  }
  .delete{
    background: #DC3545;
  }
  .edit{
    background: orange;
  }
  .agregar{
    background: yellow;
  }
  }
  .active {
    margin-left: 15%;
    transition: 0.5s;
    @media (max-width: 960px) {
      margin: 0;
    }
  }
  .active-aside {
    margin-left: 15%;
    transition: 0.5s;
    @media (max-width: 960px) {
      margin-left: 100%;
    }
  }
  .volteo {
    transform: rotate(-180deg);
    transition: 0.5s;
  }
`;

export default ConocimientosStyle;
