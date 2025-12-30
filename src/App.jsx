import './App.css';
import Navbar from './Component/Navbar/Navbar.jsx';
import HeroSection from './Component/HeroSection/HeroSection.jsx';
import WhySellar from './Component/WhySellar/WhySellar.jsx';
import CoreSolution from './Component/CoreSolutions/CoreSolution.jsx';
import PricingTable from './Component/PricingTable/PricingTable';
import FutureVision from './Component/FutureVision/FutureVision.jsx';
import AppShowcase from './Component/AppShowCase/AppShowCase.jsx';
import CatalogueShowCase from './Component/CatalogueShowCase/CatalogueShowCase.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Footer from './Component/Footer/Footer.jsx';

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