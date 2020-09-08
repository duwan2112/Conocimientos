import React from "react";

import Particles from "react-particles-js";
import Contenido from "./Contenido";
import styled from 'styled-components';


const PrincipalStyle = styled.div`
  .particles{
  height: 99vh;
   
  }
`;



export default function Principal() {
  return (
   
    <PrincipalStyle className="principal" >
      <Particles className="particles"
        params={{
          particles: {
            number: { value: 50 },
            density: { enable: true, value_area: 1000 },
            size: { value: 4 },
            color: { value: "#1C7293" },
          },
        }}
      />

      <Contenido >  </Contenido>

  </PrincipalStyle> 
  );
}
