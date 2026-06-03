import { Routes, Route } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'

import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import SkillsPage from './pages/SkillsPage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <main className="page">
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  )
}

export default App