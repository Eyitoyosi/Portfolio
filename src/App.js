import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'
import About from './pages/About';
import Contact from './pages/Contact'
import Home from './pages/Home';
import Footer from './Footer';
import Projects from './pages/Project';
import { useState } from 'react';
import { ThemeProvider} from "styled-components"

const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme
}


function App() {
  const [ theme, setTheme ] = useState("light")
  return ( 
    <ThemeProvider theme={themes[theme]}>
    <Router>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Routes>
        <Route path="/" element={<Home theme={theme}/>}/>
        <Route path="/about" element={<About theme={theme}/>}/>
        <Route path="/projects" element={<Projects theme={theme}/>}/>
        <Route path="/contact" element={<Contact theme={theme}/>}/>
      </Routes>
      <Footer />
    </Router>
    </ThemeProvider>
  )
}

export default App;
