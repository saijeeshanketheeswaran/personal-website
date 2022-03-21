import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Skills2 from './components/Skills2/Skills'
import Skills3 from './components/Skills3/Skills'
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
      <Skills/>
      <Skills2/>
      <Skills3/>
      <Contact/>
    </div>
  );
}
 
export default App;