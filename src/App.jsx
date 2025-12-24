import React, { useState } from 'react';
import './App.css';
import PricingTable from './components/PricingTable';

const App = () => {
  const Pricing = () => {
    const pricingData = [
      { name: "Vendor POS Dashboard Access", basic: true, pro: true },
      { name: "Total Sale Board", basic: true, pro: true },
      { name: "Automated Sales Reports", basic: true, pro: true },
      { name: "Custom Voucher Numbering Feature", basic: true, pro: true },
      { name: "Bar Code+Qr Code Scanner Feature", basic: true, pro: true },
      { name: "Autofill Bill Amount & Balances", basic: true, pro: true },
      { name: "Bulk Import Items Functionality", basic: true, pro: true },
      { name: "Parent Categorisation of Items", basic: true, pro: true },
      { name: "Automated Business Invoice Generation", basic: true, pro: true },
      { name: "GST composition", basic: true, pro: true },
      // Pro Specific Features from Bplan
      { name: "Daily Performance Board (Bar-charts)", basic: false, pro: true },
      { name: "Payment Methods Board", basic: false, pro: true },
      { name: "Top Items Sold Board", basic: false, pro: true },
      { name: "Top Salesman Board", basic: false, pro: true },
      { name: "Restock Items Board", basic: false, pro: true },
      { name: "Hide Data Functionality", basic: false, pro: true },
      { name: "Voucher/Invoice modification (Edit)", basic: false, pro: true },
      { name: "Purchase Voucher & Returns", basic: false, pro: true },
      { name: "Payment Reminder Feature", basic: false, pro: true },
      { name: "Multi-Store Functionality", basic: false, pro: true },
      { name: "Automated PnL Reports", basic: false, pro: true },
      { name: "Customer Database management", basic: false, pro: true },
      { name: "Custom User App Permissions", basic: false, pro: true },
    ];
  }
  const [showDemo, setShowDemo] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle smooth scroll and close mobile menu
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="app-wrapper">
      {/* 1. HEADER (NAVBAR) */}
      <nav className="navbar">
        <div className="logo" onClick={() => scrollToSection('home')}>sellar.in</div>

        {/* Desktop Links */}
        <div className="nav-links desktop-only">
          <span onClick={() => scrollToSection('solutions')}>Solutions</span>
          <span onClick={() => scrollToSection('pricing')}>Pricing</span>
          <span onClick={() => scrollToSection('why-sellar')}>Why Sellar</span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors duration-200 shadow-sm active:scale-95">
            Get App
          </button>
        </div>

        {/* Mobile Toggle Icon */}
        <div className="mobile-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? '✕' : '☰'}
        </div>
      </nav>

      {/* Mobile Sidebar Navigation */}
      <div className={`mobile-sidebar ${isMenuOpen ? 'open' : ''}`}>
        <span onClick={() => scrollToSection('home')}>Home</span>
        <span onClick={() => scrollToSection('solutions')}>Solutions</span>
        <span onClick={() => scrollToSection('why-sellar')}>Why Sellar</span>
        <span onClick={() => scrollToSection('pricing')}>Pricing</span>
        <button className="btn-primary" style={{ marginTop: '20px' }}>Get App</button>
      </div>

      {/* 2. HERO SECTION */}
      <header id="home" className="hero">
        <div className="container">
          {/* <div className="badge">🚀 v3.0 Digital POS</div> */}
          <h1>Retail Management <br /> <span className="gradient-text">In Your Pocket.</span></h1>
          <p>Stop managing registers. Switch to Sellar for the fastest mobile billing, inventory, and real-time business growth.</p>
          <div className="hero-btns">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
              {/* Start Free Trial (Primary Button) */}
              <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all active:scale-95 shadow-md">
                Start Free Trial
              </button>

              {/* Watch Demo (Secondary Button) */}
              <button
                onClick={() => setShowDemo(true)}
                className="w-full sm:w-auto px-8 py-3 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold rounded-lg transition-all active:scale-95 shadow-sm"
              >
                Watch Demo
              </button>
            </div>
          </div>

          <div className="mockup-container">
            <div className="floating-info chip-left">✨ GST Ready</div>
            <div className="floating-info chip-right">📊 Live Reports</div>
            <div className="phone-frame">
              <div className="phone-screen">
                <div className="phone-notch"></div>
                <div className="app-ui">
                  <div className="ui-stat-card">
                    <span>Today's Sales</span>
                    <h3>₹45,280</h3>
                  </div>
                  <div className="ui-list shadow-sm"></div>
                  <div className="ui-list shadow-sm"></div>
                  <div className="ui-list shadow-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 3. TRUST BAR
      <div className="trust-bar">
        <p>TRUSTED BY 500+ LOCAL BUSINESSES</p>
        <div className="logo-strip">
          <div className="dummy-logo">RETAIL PRO</div>
          <div className="dummy-logo">FAST MART</div>
          <div className="dummy-logo">SHOP EASY</div>
        </div>
      </div> */}

      {/* 4. WHY SELLAR (Comparison) */}
      <section id="why-sellar" className="why-sellar-section">
        <div className="container">
          <h2 className="section-h2 text-center">Why Sellar?</h2>
          <div className="comparison-flex">
            <div className="comp-card-premium old-way">
              <div className="comp-header"><span className="comp-badge">OLD WAY</span><h4>Traditional</h4></div>
              <ul className="comp-list">
                {/* <li><span className="icon-red">✕</span> Manual Entries</li> */}
                <li><span className="icon-red">✕</span> Stock Errors</li>
                <li><span className="icon-red">✕</span> No Data Security</li>
              </ul>
            </div>
            <div className="comp-card-premium sellar-way">
              <div className="comp-header"><span className="comp-badge-pro">SELLAR WAY</span><h4>Digital POS</h4></div>
              <ul className="comp-list">
                <li><span className="icon-green">✓</span> 10s Digital Invoicing</li>
                <li><span className="icon-green">✓</span> Real-time Sync</li>
                <li><span className="icon-green">✓</span> Cloud Backup</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CORE SOLUTIONS (GRID) */}
      <section id="solutions" className="section-padding">
        <div className="container">
          <h2 className="section-h2">Core Solutions</h2>
          <div className="features-grid">
            <div className="f-card">
              <div className="f-icon">💳</div>
              <h3>POS Billing</h3>
              <p>Lightning fast billing experience designed for touch screens.</p>
            </div>
            <div className="f-card">
              <div className="f-icon">📦</div>
              <h3>Inventory</h3>
              <p>Real-time stock alerts so you never run out of best-sellers.</p>
            </div>
            <div className="f-card">
              <div className="f-icon">📈</div>
              <h3>Analytics</h3>
              <p>Deep insights into your profit and loss on the go.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingTable />

      {/* 6. FUTURE VISION (DARK & UPGRADED) */}
      <section className="vision-section" id="vision">
        <div className="container">
          <div className="vision-card-premium">
            <div className="vision-content">
              <span className="vision-badge">COMING SOON</span>
              <h2>The Future of <span className="text-glow">Smart Retail</span></h2>
              <p>We're not just a POS. We are building an ecosystem to help you scale faster with data-driven intelligence.</p>

              <div className="vision-features-grid">
                <div className="v-feature">
                  <div className="v-dot blue"></div>
                  <div>
                    <h4>AI Demand Forecast</h4>
                    <p>Predict which items will go out of stock before they do.</p>
                  </div>
                </div>
                <div className="v-feature">
                  <div className="v-dot purple"></div>
                  <div>
                    <h4>B2B Marketplace</h4>
                    <p>Connect directly with wholesalers for the best bulk prices.</p>
                  </div>
                </div>
              </div>

              <div className="tags-row">
                <span>#AI_Forecast</span>
                <span>#B2B_Connect</span>
                <span>#Auto_Sourcing</span>
              </div>
            </div>

            {/* Decorative Gradient Ball for glass effect */}
            <div className="vision-glass-deco"></div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="mega-footer">
        <div className="container">
          <div className="footer-grid-layout">
            {/* Brand Column */}
            <div className="footer-brand">
              <div className="logo white">SELLAR<span>.</span></div>
              <p>The modern operating system for retail businesses. Empowering shops with digital tools to grow faster.</p>
              <div className="social-links">
                <div className="social-links">
                  <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer"><span>FB</span></a>
                  <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer"><span>TW</span></a>
                  <a href="https://www.instagram.com/sellar.in?igsh=MXhobzJrMzIzbGdlaQ==" target="_blank" rel="noreferrer"><span>IG</span></a>
                  <a href="https://www.linkedin.com/company/sellar-in/" target="_blank" rel="noreferrer"><span>LI</span></a>
                </div>
              </div>
            </div>

            {/* Links Columns */}
            <div className="footer-links-wrapper">
              <div className="footer-col">
                <h4>Product</h4>
                <ul>
                  <li onClick={() => scrollToSection('solutions')}>Features</li>
                  <li onClick={() => scrollToSection('pricing')}>Pricing</li>
                  <li>Updates</li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Support</h4>
                <ul>
                  <li>Help Center</li>
                  <li>Contact Us</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
              <div className="footer-col newsletter">
                <h4>Stay Updated</h4>
                <p>Join our list for retail tips.</p>
                <div className="footer-input">
                  <input type="email" placeholder="Email address" />
                  <button>→</button>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 Sellar Inc. Built for Indian Retailers.</p>
            <div className="footer-bottom-links">
              <span>Terms</span>
              <span>Privacy</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </footer>

      {/* DEMO MODAL */}
      {showDemo && (
        <div className="modal-overlay" onClick={() => setShowDemo(false)}>
          <div className="modal-body" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowDemo(false)}>✕</button>
            <div className="video-resp">
              <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Demo" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;