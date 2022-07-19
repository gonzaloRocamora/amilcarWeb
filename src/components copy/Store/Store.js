import  React from "react";
import pikachu1 from "../amilcarFotos/pikachu/pikachu1.jpeg";
import jim1 from "../amilcarFotos/jimMorrison/jim1.jpeg";
import pasio1 from '../amilcarFotos/elPasionario/pasio1.jpeg'
import madona1 from "../amilcarFotos/madonna/madona1.PNG";
import rico1 from '../amilcarFotos/rico/rico1.jpeg';
import dog from "../amilcarFotos/theDog/dog3.jpeg";
import antonieta1 from '../amilcarFotos/antonieta/anto1.jpeg';
import bird1 from '../amilcarFotos/bird/bird1.jpeg';
import elvis1 from '../amilcarFotos/elvis/elvis1.jpeg';
import frida1 from '../amilcarFotos/frida/frida1.jpeg';
import manu1 from '../amilcarFotos/manu/manu1.jpeg'
import marilyn1 from '../amilcarFotos/marilyn/marilyn1.jpeg'
import mazinger1 from "../amilcarFotos/mazinger/mazinger1.jpeg";
import monster1 from '../amilcarFotos/monster/monster1.jpeg';
import princi1 from "../amilcarFotos/principito/principito1.jpeg";
import queen1 from '../amilcarFotos/queen/queen1.jpeg';
import renata1 from '../amilcarFotos/renata/renata1.jpeg'
import mask1 from '../amilcarFotos/theMask/mask1.jpeg'
import  {HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import './store.css'

//CADA UNA DE LOS LINKS QUE TIENEN ArtWork COMO COMMON PATH PARA DESPUES INDICAR EL NAME COMO PROP EN LA RUTA DE MI APP
export default function Store() {
  return (
    <div className="divStore">
      <h2>Coleccion</h2>
      <h3>Desliza para mas imagenes</h3>
     <div className="divImg">
          
          <Link to="/artwork/pikachu">
          <img alt='PIKACHU' src={pikachu1}></img>
          </Link>
          
          
       
          <Link onClick={() => console.log('click')} to="/artwork/morrison">
            <img alt='MORRISON' src={jim1}></img>
          </Link>
        
      
         
          <Link to="/artwork/madonna">
            <img alt='MADONNA' src={madona1}></img>
          </Link>
         

         
          <Link to="/artwork/pasionario">
            <img alt='PASIONARIO' src={pasio1}></img>
          </Link>
         
    
         
          <Link to="/artwork/rico">
            <img alt='RICO' src={rico1}></img>
          </Link>
          
       
          
          <Link to="/artwork/dog">
            <img alt='DOG' src={dog}></img>
          </Link>
          

      
          <Link to="/artwork/antonieta">
            <img alt='antonieta' src={antonieta1}></img>
          </Link>
         
          
          <Link to= '/artwork/bird'>
            <img alt='bird' src={bird1}/>
          </Link>
          
          <Link to= '/artwork/elvis'>
            <img alt='elvis' src={elvis1}/>
          </Link>
          
          <Link to= '/artwork/frida'>
            <img alt='frida' src={frida1}/>
          </Link>
          
          <Link to='/artwork/manu'>
            <img alt='manu' src={manu1}/>
          </Link>
          
          <Link to='/artwork/marilyn'>
            <img alt='marilyn' src={marilyn1}/>
          </Link>
          
          <Link to='/artwork/mazinger'>
            <img alt='mazinger' src={mazinger1}/>
          </Link>
          
          <Link to='/artwork/monster'>
            <img alt='monster' src={monster1}/>
          </Link>
          
          <Link to='/artwork/principito'>
            <img alt='principito' src={princi1}/>
          </Link>
          
          <Link to='/artwork/queen'>
            <img alt='queen' src={queen1}/>
          </Link>
          
          <Link to='/artwork/renata'>
            <img alt='renata' src={renata1}/>
          </Link>
          <Link to='/artwork/mask'>
            <img alt='renata' src={mask1}/>
          </Link>
 
      
     </div>
      
    </div>
  );
}
