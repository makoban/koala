import Hero from './components/Hero';
import Team from './components/Team';
import Services from './components/Services';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Team />
      <Features />
      <Workflow />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
