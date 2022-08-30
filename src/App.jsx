import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Sobre from "./Pages/Sobre/Sobre";
import Tatuagens from "./Pages/Tatuagens/Tatuagens";

function App() {
 
  return (
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path='/eventos/flashday' element={<Tatuagens/>}/> 
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
