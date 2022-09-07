import React, { useContext } from "react";
import Home from "../Pages/Home/Home";
import Sobre from "../Pages/Sobre/Sobre";
import Tatuagens from "../Pages/Tatuagens/Tatuagens";
import {Routes as Switch, Route } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Clientes from "../Pages/Dashboard/Clientes";
import HeaderDash from "../Components/HeaderDash/HeaderDash";
import UserProvider, { UserContext } from "../Context/UserProvider";
import Agendamentos from "../Pages/Dashboard/Agendamentos";
import News from "../Pages/Dashboard/News";
import Tatto from "../Pages/Dashboard/Tatto"
import Usuario from "../Pages/Usuario/Usuario";

const Routes = () => {
  return (
    <UserProvider>
      <Switch>
        <Route path="/" element={<div> <Header/> <Home /> <Footer/> </div>}/>
        <Route path="/sobre" element={<div> <Header/> <Sobre /> <Footer/> </div>} />
        <Route path="/eventos/flashday" element={<div> <Header/> <Tatuagens /> <Footer/> </div>} />
        <Route path="/login" element={<div> <Header/> <Login />  <Footer/> </div>} />
        <Route path="/dashboard/Clientes" element={<div> <HeaderDash/> <Clientes/> </div>}/>
        <Route path="/dashboard/Agendamentos" element={<div> <HeaderDash/> <Agendamentos/> </div>}/>
        <Route path="/dashboard/News" element={<div> <HeaderDash/> <News/> </div>}/>
        <Route path="/dashboard/Tatuagens" element={<div> <HeaderDash/> <Tatto/> </div>}/>
        <Route path="/usuario" element={<div><Header/> <Usuario/> <Footer/></div>} />
      </Switch>
    </UserProvider>
  );
};

export default Routes;
