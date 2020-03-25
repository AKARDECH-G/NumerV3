import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Bisection from "../pages/root of equation/Bisection";
import Falseposition from "../pages/root of equation/Falseposition";
import Onepoint from "../pages/root of equation//Onepoint";
import Newton from "../pages/root of equation/Newton";
import Secant from "../pages/root of equation/Secant";
/*import Project from "../pages/Project";
import Post from "../pages/Post";
import About from "../pages/About";*/

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Bisection" component={Bisection} />
    <Route exact path="/Falseposition" component={Falseposition} />
    <Route exact path="/Onepoint" component={Onepoint} />
    <Route exact path="/Newton" component={Newton} />
    <Route exact path="/Secant" component={Secant} />
  </Switch>
);
