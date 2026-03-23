import Hero from './components/Hero';
import Team from './components/Team';
import Services from './components/Services';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Team />
      <Features />
      <Services />
      <Pricing />
      <Workflow />
      <Contact />
    </div>
  );
}

export default App;
