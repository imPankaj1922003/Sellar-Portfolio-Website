import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import WhySellar from './components/WhySellar/WhySellar.jsx';
import CoreSolution from './components/CoreSolutions/CoreSolution.jsx';
import PricingTable from './components/PricingTable/PricingTable';
import FutureVision from './components/FutureVision/FutureVision.jsx';
import AppShowcase from './components/AppShowCase/AppShowCase.jsx';
import CatalogueShowCase from './components/CatalogueShowCase/CatalogueShowCase.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

const App = () => {
  return (
    <div className="app-wrapper">
      <Navbar />
      <div id="home"><HeroSection /></div>
      <AppShowcase />
      <CatalogueShowCase />
      <div id="solutions"><CoreSolution /></div>
      <div id="why-sellar"><WhySellar /></div>
      <div id="pricing"><PricingTable /></div>
      <FutureVision />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;