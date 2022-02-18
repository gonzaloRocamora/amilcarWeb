import React from "react";
import homeImg from "./homeImg.jpg";
export default function Home() {
  return (
    <div>
      <h2>
        Welcome 
      </h2>
    
          <div className='divHome'>
      
        <img className='homeImg' src={homeImg} alt='amilcar'></img>
      <p>
        Estas invitado a conocer mis obras las cuales plasmo desde lo mas
        profundo de mi corazon, dejando en cada pieza una impronta unica. Aquí
        podrás encontrar todas mis obras al completo sin censura, leer las
        historias de los cuadros y de sus personajes. También podrás ver todo
        tipo de material audiovisual de los modelos y del proceso de creación
        como también acceder a mi tienda online.
      </p>
    </div>
    </div>
  );
}
