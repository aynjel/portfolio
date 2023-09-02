import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home/Home'
import Education from './pages/Education'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import Header from './components/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'

function App() {

  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  )
}

export default App
