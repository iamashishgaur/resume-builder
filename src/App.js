import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Resumesample from "./pages/Resumesample";
import Footer from "./component/Footer";
import ResumeEditPlayground from "./component/ResumeEditPlayground";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resumesample" element={<Resumesample />} />
          <Route path="/resumeeditplayground" element={<ResumeEditPlayground />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
