import styled from "styled-components";

const ManejarConocimientosStyle = styled.div`
  position: relative;
  text-align: center;
  margin-top: 40px;
  color: #21295c;
  border: none;
  height: 100%;
  h3 {
    text-align: left;
    padding-left: 20px;
    padding-top: 2rem;
    .button-collapse {
      background: transparent;
      border: none;
      transition: 0.5s;
      &:focus {
        outline: none;
      }
    }
    .active-collapse {
      transform: rotate(-180deg);
    }
  }

  .list-conocimientos {
    display: flex;
    text-align: center;
    list-style-type: none;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    li {
      width: 20%;
    }
    .conocimiento,
    .carpeta {
      border: none;
      box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.81);
      width: 70%;
      height: 180px;
      margin: 20px auto;
      border-radius: 10px;
      overflow: hidden;
      background: #000000cc;
      padding: 0;
      &:focus {
        outline: none;
      }
      @media (min-width: 960px) {
        &:hover {
          transform: scale(1.1);
          .img {
            opacity: 0.9;
          }
        }
      }

      .img {
        width: 100%;
        height: 70%;
        opacity: 0.5;
      }
      .nombre {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30%;
        color: white;
        font-weight: bold;
      }
    }

    .carpeta .img {
      color: white;
    }
    @media (max-width: 960px) {
      li {
        width: 50%;
      }
      .conocimiento,
      .carpeta {
        width: 80%;
        background: rgb(0, 0, 0, 0.8);
      }
    }
  }

  .eliminar-proyecto {
    padding-top: 100px;
    padding-bottom: 50px;

    button {
      width: 50%;
      border: none;
      background: #dc3545;
      padding: 15px;
      border-radius: 20px;
      color: white;
      font-weight: bold;
      &:focus {
        outline: none;
      }
      &:hover {
        opacity: 0.8;
      }
      &:active {
        transform: scale(1.1);
      }
    }
  }
  .confirmar-eliminacion {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .contenedor-button {
      .eliminar,
      .cancelar {
        border: none;
        padding: 15px 30px;
        margin: 20px;
        border-radius: 10px;
        font-weight: bold;
        font-size: 20px;
        &:focus {
          outline: none;
        }
        &:active {
          transform: scale(1.1);
        }
      }
      .eliminar {
        color: white;
        background: #dc3545;
      }
      .cancelar {
        background: white;
      }
    }
  }

  

  @media (max-width: 960px) {
    position: static;
    width: 80%;
    margin: 0 auto;
    padding: 40px 0;
    h3 {
      padding: 0;
      padding-top: 2rem;
    }
    h1 {
      font-size: 30px;
      line-height: 25px;
    }
  }
`;

export default ManejarConocimientosStyle;
