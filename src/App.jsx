import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';
import Detect from './pages/detect';
import About from './pages/about';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./pages/contact";

function App() {

  return (
    <div className='font-futura text-black'>
      <ToastContainer />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detect" element={<Detect />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
