import React, { useState } from 'react';
import './AppShowCase.css';

const AppShowCase = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  // Premium UI Data for Phone
  const features = [
    { 
      icon: "📊", title: "Billing", 
      ui: { label: "Daily Sales", value: "₹45,200", color: "#007EA7", subText: "24 Invoices", percent: 75, trend: "↑ 12%" } 
    },
    { 
      icon: "📦", title: "Stock", 
      ui: { label: "Inventory", value: "1,240", color: "#f59e0b", subText: "5 Items Low", percent: 40, trend: "Stable" } 
    },
    { 
      icon: "📄", title: "Reports", 
      ui: { label: "Net Profit", value: "₹18,400", color: "#10b981", subText: "Monthly", percent: 90, trend: "↑ 08%" } 
    },
    { 
      icon: "👥", title: "Staff", 
      ui: { label: "Attendance", value: "12/12", color: "#6366f1", subText: "All Present", percent: 100, trend: "Active" } 
    }
  ];

  return (
    <section className="app-showcase-section">
      <div className="showcase-wrapper">
        
        {/* HEADER SECTION */}
        <div className="showcase-header">
          <span className="mini-badge">ALL-IN-ONE POS</span>
          <h2 className="showcase-title">
            Business Management <br /> <span className="blue-highlight">Simplified.</span>
          </h2>
        </div>

        <div className="display-container">
            {/* LEFT SIDE: IPHONE FRAME */}
            <div className="phone-area">
              <div className="iphone-frame">
                <div className="iphone-screen">
                   <div className="sellar-app-container">
                      {/* App Header */}
                      <div className="app-header-mini">
                        <div className="app-user-info">
                          <div className="user-avatar" style={{ background: features[activeFeature].ui.color }}>S</div>
                          <div>
                            <p className="welcome-msg">Store Manager</p>
                            <p className="store-name">Sellar POS</p>
                          </div>
                        </div>
                        <div className="notif-dot">🔔</div>
                      </div>
                      
                      {/* Dynamic Dashboard Content */}
                      <div key={activeFeature} className="app-main-content">
                        <div className="app-stats-card" style={{ background: features[activeFeature].ui.color }}>
                            <div className="card-top">
                              <span>{features[activeFeature].ui.label}</span>
                              <span className="trend-badge">{features[activeFeature].ui.trend}</span>
                            </div>
                            <h3 className="card-amount">{features[activeFeature].ui.value}</h3>
                            <div className="progress-container">
                              <div className="progress-bar" style={{ width: `${features[activeFeature].ui.percent}%` }}></div>
                            </div>
                            <p className="card-footer-text">{features[activeFeature].ui.subText}</p>
                        </div>

                        {/* Recent Activity Mini List */}
                        <div className="activity-section">
                          <p className="section-label">Recent Activity</p>
                          <div className="activity-item">
                            <div className="activity-icon" style={{ color: features[activeFeature].ui.color }}>●</div>
                            <div className="activity-details">
                              <p>{features[activeFeature].title} updated</p>
                              <span>Just now</span>
                            </div>
                          </div>
                          <div className="activity-item">
                            <div className="activity-icon" style={{ color: '#cbd5e1' }}>●</div>
                            <div className="activity-details">
                              <p>System Synced</p>
                              <span>5 mins ago</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Navigation */}
                      <div className="app-navbar-mini">
                        <div className="nav-icon active" style={{ color: features[activeFeature].ui.color }}>🏠</div>
                        <div className="nav-icon">📁</div>
                        <div className="nav-icon">⚙️</div>
                      </div>
                   </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: INTERACTIVE BUTTONS */}
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