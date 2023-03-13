import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'
import About from './pages/About';
import Contact from './pages/Contact'
import Home from './pages/Home';
import Footer from './Footer';
import Projects from './pages/Project';



function App() {
  return ( 
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
