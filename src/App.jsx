import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import Sobre from "./Pages/Sobre/Sobre";

function App() {
 
  return (
    <BrowserRouter>
      {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App
