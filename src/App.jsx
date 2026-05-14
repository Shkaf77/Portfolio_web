import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <main className="page">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
    </main>
  )
}

export default App