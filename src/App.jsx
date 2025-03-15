import './App.css'
import {BrowserRouter} from "react-router-dom";

// Components
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Footer />
    </BrowserRouter>
  )
}

export default App
