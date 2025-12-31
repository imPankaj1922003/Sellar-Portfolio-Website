import React, { useState } from 'react';
import './AppShowCase.css';

const AppShowCase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: "📊", title: "Dashboard",
      img: "/dashboard.png" 
    },
    {
      icon: "📦", title: "Transactions",
      img: "/Transaction.png"
    },
    {
      icon: "📄", title: "Sales Voucher",
      img: "/Final.png"
    },
    {
      icon: "👥", title: "Reports",
      img: "/Reports.png"
    }
  ];

  return (
    <section className="app-showcase-section">
      <div className="showcase-wrapper">
        
        <div className="showcase-header">
          <span className="mini-badge">ALL-IN-ONE POS</span>
          <h2 className="showcase-title">
            Billing and Business Management, <br /> <span className="blue-highlight">Simplified</span>
          </h2>
          <p className="showcase-subtitle">
            Manage Billing, Inventory, Customers, Payments, and Reports seamlessly from a single Dashboard.
          </p>
        </div>

        <div className="display-container">
          {/* LEFT: IPHONE FRAME WITH DYNAMIC IMAGE */}
          <div className="phone-area">
            <div className="iphone-frame">
              <div className="iphone-screen">
                <div className="phone-image-wrapper" key={activeFeature}>
                  <img 
                    src={features[activeFeature].img} 
                    alt={features[activeFeature].title} 
                    className="app-screenshot"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: INTERACTIVE BUTTONS */}
          <div className="features-area">
            {features.map((f, i) => (
              <button 
                key={i} 
                className={`feature-btn ${activeFeature === i ? 'active' : ''}`}
                onClick={() => setActiveFeature(i)}
              >
                <div className="icon-box">{f.icon}</div>
                <div className="feature-text">
                  <h4>{f.title}</h4>
                  <p>One-tap {f.title.toLowerCase()} control</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowCase;