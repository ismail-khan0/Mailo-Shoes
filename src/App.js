import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Protfolio from './Components/Protfolio';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='bg-[#8173B2]'>
      <Router>
        <Header/>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home/>
                <About/>
                <Protfolio/>
                <Contact/>
              </>
            }
          />

          <Route
            path="/portfolio"
            element={
              <>
                <Home/>
                <About/>
                <Protfolio/>
                <Contact/>
              </>
            }
          />

          <Route path="/contact" element={<Contact />} />

          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
