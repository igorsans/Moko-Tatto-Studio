import React from "react";
import Home from "../Pages/Home/Home";
import Sobre from "../Pages/Sobre/Sobre";
import Tatuagens from "../Pages/Tatuagens/Tatuagens";
import {Routes as Switch, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/eventos/flashday" element={<Tatuagens />} />
      <Route path="/login" element={<Login />} />
    </Switch>
  );
};

export default Routes;
