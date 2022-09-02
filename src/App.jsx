import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Routes from "./Routes/Routes";


function App() {
 
  return (
    <BrowserRouter>
      {/* <Header/> */}
        <Routes/>
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App