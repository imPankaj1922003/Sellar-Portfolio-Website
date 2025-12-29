import React from 'react';
import './CatalogueShowCase.css';

const CatalogueShowCase = () => {
    // Bhai maine 6 best core solutions khud se select karke daal diye hain
    const coreSolutions = [
        { title: "Smart PDF Export", icon: "📑", desc: "Instant professional catalogues" },
        { title: "WhatsApp Integration", icon: "💬", desc: "Direct ordering on chat" },
        { title: "Dynamic Pricing", icon: "💰", desc: "Bulk & retail price management" },
        { title: "Live QR Menu", icon: "🔍", desc: "Scan to view in-store menu" },
        { title: "Stock Alerts", icon: "🚨", desc: "Auto low-inventory notices" },
        { title: "Order Dashboard", icon: "📱", desc: "Track sales in real-time" }
    ];

    return (
        <section className="catalogue-section">
            <div className="cat-wrapper">
                
                {/* LEFT CONTENT AREA */}
                <div className="cat-info-side">
                    <div className="cat-label">SMART FEATURES</div>
                    <h2 className="cat-heading">Powerful Solutions for <br /><span className="text-blue">Digital Commerce.</span></h2>
                    
                    {/* Har line mein sirf 2 cards */}
                    <div className="solutions-grid">
                        {coreSolutions.map((item, index) => (
                            <div className="solution-mini-card" key={index}>
                                <div className="sol-icon-box">{item.icon}</div>
                                <div className="sol-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cat-footer-action">
                        <button className="start-btn">Get Started Now</button>
                    </div>
                </div>

                {/* RIGHT LAPTOP AREA */}
                <div className="cat-visual-side">
                    <div className="laptop-mock">
                        <div className="laptop-top">
                            <div className="laptop-display">
                                <img 
                                    src="/Catalogue Dashboard.png" 
                                    alt="Catalogue Preview" 
                                    onError={(e) => e.target.src = 'https://via.placeholder.com/800x500/00171f/00A8E8?text=Sellar+Catalogue'}
                                />
                            </div>
                        </div>
                        <div className="laptop-base-part">
                            <div className="trackpad-area"></div>
                        </div>
                    </div>
                    <div className="glow-effect"></div>
                </div>

            </div>
        </section>
    );
};

export default CatalogueShowCase;