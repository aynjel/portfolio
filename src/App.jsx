import "./App.css";
import Home from "./pages/Home/Home";
import Education from "./pages/Education/Education";
import Skills from "./pages/Skills/Skills";
import Experience from "./pages/Experience/Experience";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import ComingSoon from "./pages/ComingSoon";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/cs" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
