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
import Pikachu from "./components copy/amilcarFotos/pikachu/pikachu.js";
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
          <Route path="/pikachu">
            <Pikachu />
          </Route>
          <Route path="/morrison">
            <Morrison />
          </Route>
          <Route path='/madona'>
              <Madona />
          </Route>
        <Route path='/pasionario'>
            <Pasionario />
          </Route>
          <Route path='/rico'>
            <Rico />
          </Route>
          <Route path='/dog'>
            <Dog />
          </Route>
          <Route path= '/antonieta'>
            <Antonieta />
          </Route>
          <Route path= '/bird'>
              <Bird />
          </Route>
          <Route path= '/elvis'>
            <Elvis />
          </Route>
        </Switch>
        <Route path= '/frida'>
          <Frida />
        </Route>
        <Route path='/manu'>
          <Manu />
        </Route>
        <Route path='/marilyn'>
          <Marilyn />
        </Route>
        <Route path='/mazinger'>
          <Mazinger />
        </Route>
        <Route path='/monster'>
          <Monster />
        </Route>
        <Route path='/principito'>
          <Principito />
        </Route>
        <Route path='/queen'>
          <Queen />
        </Route>
        <Route path='/renata'>
          <Renata />
        </Route>
        <Route path='/mask'>
          <Mask />
        </Route>
        </HashRouter>
    </div>
  );
}

export default App;
