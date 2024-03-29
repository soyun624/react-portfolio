import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "./components/particles";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe"
import Experience from "./components/Experience"
import Portfolio from "./components/Portfolio"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <>

    <Navbar />
    <Header />
    <AboutMe />
    <Particles />
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
