import React from "react";
import NavBar from "./navBar/navBar.js";
import { HashRouter as HashRouter, Router, Route, Switch } from "react-router-dom";
import Home from "./components copy/Home";
import Video from "./components copy/video/Video.jsx";
import Rico from  './components copy/amilcarFotos/rico/rico'
import Store from "./components copy/Store/Store";
import Pasionario from './components copy/amilcarFotos/elPasionario/pasionario'
import Connect from "./components copy/Connect";
import "./style.css";
import Pikachu from "./components copy/amilcarFotos/artWork.js";
import Morrison from "./components copy/amilcarFotos/jimMorrison/morrison.js";
import Madona from './components copy/amilcarFotos/madonna/Madona.js'
import Dog from './components copy/amilcarFotos/theDog/dog'
import Antonieta from "./components copy/amilcarFotos/antonieta/antonieta.js";
import Bird from "./components copy/amilcarFotos/bird/bird.js";
import Elvis from "./components copy/amilcarFotos/elvis/elvis.js";
import Frida from "./components copy/amilcarFotos/frida/frida";
import Manu from "./components copy/amilcarFotos/manu/manu.js";
import Marilyn from "./components copy/amilcarFotos/marilyn/marilyn.js";
import Mazinger from "./components copy/amilcarFotos/mazinger/mazinger.js";
import Monster from "./components copy/amilcarFotos/monster/monster.js";
import Principito from "./components copy/amilcarFotos/principito/principito.js";
import Queen from "./components copy/amilcarFotos/queen/queen.js";
import Renata from './components copy/amilcarFotos/renata/renata';
import Mask from './components copy/amilcarFotos/theMask/mask';
import ArtWork from "./components copy/amilcarFotos/artWork.js";

function App() {
  return (
    <div className="containerApp">
      <HashRouter>
        <NavBar />

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Video" >
            <Video />
          </Route>
          <Route path="/Store">
            <Store />
          </Route>
         
          <Route path="/Connect">
            <Connect />
          </Route>
                 /*establezco una ruta comun y le paso como parametro un name*/
          <Route path="/artwork/:name">
            <ArtWork />
          </Route>
          </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
