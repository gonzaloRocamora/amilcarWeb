import React from "react";
import NavBar from "./navBar/navBar.js";
import { HashRouter as HashRouter, Router, Route, Switch } from "react-router-dom";
import Home from "./components copy/Home";
import Video from "./components copy/video/Video.jsx";

import Store from "./components copy/Store/Store";

import Connect from "./components copy/Connect";
import "./style.css";

import ArtWork from "./components copy/amilcarFotos/artWork.js";
/*establezco una ruta comun(artwork) y le paso como parametro un name*(title de cada obra*/
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
                 
          <Route path="/artwork/:name">
            <ArtWork />
          </Route>
          </Switch>
        </HashRouter>
    </div>
  );
}

export default App;
