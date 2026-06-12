import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';
import NavigationBar from "./component/NavigationBar";
import Footer from "./component/footer";

function App() {
  return (
    <div style={{ backgroundColor: '#000000', minHeight: '100vh', color: 'white' }}>
      <NavigationBar />
      
      <div id="home" style={{ paddingTop: '80px' }}>
        <Home />
      </div>
      <div id="about" style={{ paddingTop: '80px' }}>
        <About />
      </div>
      <div id="projects" style={{ paddingTop: '80px' }}>
        <Projects />
      </div>
      <div id="contact" style={{ paddingTop: '80px' }}>
        <Contact />
      </div>
      <Footer />
    </div>
  
  );
}

export default App;

