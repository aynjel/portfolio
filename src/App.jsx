import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Education from './pages/Education'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Certifications from './pages/Certifications'
import Experience from './pages/Experience'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import { Container, } from 'reactstrap'

function App() {

  return (
    <Router>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App
