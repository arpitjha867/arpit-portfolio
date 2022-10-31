import About from "./components/About";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
      <Copyright/>
    </>
  );
}

export default App;
