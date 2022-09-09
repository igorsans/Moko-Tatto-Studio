import React, { useEffect, useState } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import HeaderDash from "../Components/HeaderDash/HeaderDash";
import UserProvider from "../Context/UserProvider";
import Agendamentos from "../Pages/Dashboard/Agendamentos";
import Clientes from "../Pages/Dashboard/Clientes";
import News from "../Pages/Dashboard/News";
import Tatto from "../Pages/Dashboard/Tatto";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Sobre from "../Pages/Sobre/Sobre";
import Tatuagens from "../Pages/Tatuagens/Tatuagens";
import Usuario from "../Pages/Usuario/Usuario";
import S from "./Routes.module.css";

const Routes = () => {

  const[loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <UserProvider>
      {loading ? (<div className={S.loader_container}>
        <div className={S.spinner}></div>
      </div>) : (<Switch>
        <Route path="/" element={<div> <Header/> <Home /> <Footer/> </div>}/>
        <Route path="/sobre" element={<div> <Header/> <Sobre /> <Footer/> </div>} />
        <Route path="/eventos/flashday" element={<div> <Header/> <Tatuagens /> <Footer/> </div>} />
        <Route path="/login" element={<div> <Header/> <Login />  <Footer/> </div>} />
        <Route path="/dashboard/Clientes" element={<div> <HeaderDash/> <Clientes/> </div>}/>
        <Route path="/dashboard/Agendamentos" element={<div> <HeaderDash/> <Agendamentos/> </div>}/>
        <Route path="/dashboard/News" element={<div> <HeaderDash/> <News/> </div>}/>
        <Route path="/dashboard/Tatuagens" element={<div> <HeaderDash/> <Tatto/> </div>}/>
        <Route path="/usuario" element={<div><Header/> <Usuario/> <Footer/></div>} />
      </Switch>)}
    </UserProvider>
  );
};

export default Routes;
