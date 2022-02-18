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
import  {HashRouter as Router, Switch, Route, Link } from "react-router-dom";
//import { Swiper, SwiperSlide } from "swiper/react";
import './store.css'
//import "swiper/swiper.min.css";

//import "swiper/components/pagination/pagination.min.css";

// import Swiper core and required modules
//import SwiperCore, { Pagination} from "swiper";

// install Swiper modules
//SwiperCore.use([Pagination]);

export default function Store() {
  return (
    <div className="divStore">
      <h2>Coleccion</h2>
      <h3>Desliza para mas imagenes</h3>
     <div className="divImg">
    
          <Link to="/pikachu">
          <img alt='PIKACHU' src={pikachu1}></img>
          </Link>
          
          
       
          <Link onClick={() => console.log('click')} to="/morrison">
            <img alt='MORRISON' src={jim1}></img>
          </Link>
        
      
         
          <Link to="/madona">
            <img alt='MADONA' src={madona1}></img>
          </Link>
         

         
          <Link to="/pasionario">
            <img alt='PASIONARIO' src={pasio1}></img>
          </Link>
         
    
         
          <Link to="/rico">
            <img alt='RICO' src={rico1}></img>
          </Link>
          
       
          
          <Link to="/dog">
            <img alt='DOG' src={dog}></img>
          </Link>
          

      
          <Link to="/antonieta">
            <img alt='antonieta' src={antonieta1}></img>
          </Link>
         
          
          <Link to= '/bird'>
            <img alt='bird' src={bird1}/>
          </Link>
          
          <Link to= '/elvis'>
            <img alt='elvis' src={elvis1}/>
          </Link>
          
          <Link to= '/frida'>
            <img alt='frida' src={frida1}/>
          </Link>
          
          <Link to='/manu'>
            <img alt='manu' src={manu1}/>
          </Link>
          
          <Link to='/marilyn'>
            <img alt='marilyn' src={marilyn1}/>
          </Link>
          
          <Link to='/mazinger'>
            <img alt='mazinger' src={mazinger1}/>
          </Link>
          
          <Link to='/monster'>
            <img alt='monster' src={monster1}/>
          </Link>
          
          <Link to='/principito'>
            <img alt='principito' src={princi1}/>
          </Link>
          
          <Link to='/queen'>
            <img alt='queen' src={queen1}/>
          </Link>
          
          <Link to='/renata'>
            <img alt='renata' src={renata1}/>
          </Link>
 
      
     </div>
      
    </div>
  );
}
