import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import About from "./component/About";
import Contact from "./component/Contact";
import Projectswapper from "./component/Projectswapper"
import { Toaster } from "react-hot-toast";

import "../src/App.css";

function App() {
  return (
    <div className="app">
      <Router>
      <Navbar />
      {/* <Home /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Project" element={<Projectswapper/>} /> 
           <Route path="/About" element={<About />} /> 
           <Route path="/Contact" element={<Contact />} /> 
        </Routes>
        <Toaster containerStyle={{marginTop:"11%"}} className="toast"/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
