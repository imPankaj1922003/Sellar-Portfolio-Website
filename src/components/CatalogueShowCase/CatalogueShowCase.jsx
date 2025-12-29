import React, { useState } from 'react';
import './CatalogueShowCase.css';

const CatalogueShowCase = () => {
    const [activeTab, setActiveTab] = useState(0);

    const catalogueFeatures = [
        { 
            title: "PDF Export", 
            icon: "📑", 
            desc: "Professional catalogues in one click",
            ui: { label: "PDFs Generated", value: "128", color: "#007EA7", subText: "Ready to share", trend: "Fast" }
        },
        { 
            title: "WhatsApp", 
            icon: "💬", 
            desc: "Receive orders directly on chat",
            ui: { label: "WhatsApp Leads", value: "+45", color: "#25D366", subText: "Active chats", trend: "High" }
        },
        { 
            title: "Pricing", 
            icon: "💰", 
            desc: "Manage bulk & retail rates",
            ui: { label: "Price Updates", value: "Active", color: "#f59e0b", subText: "Synced with store", trend: "Live" }
        },
        { 
            title: "QR Menu", 
            icon: "🔍", 
            desc: "Instant scan-to-view",
            ui: { label: "QR Scans Today", value: "320", color: "#6366f1", subText: "In-store visitors", trend: "↑ 20%" }
        }
    ];

    return (
        <section className="cat-premium-section">
            <div className="cat-premium-wrapper">
                
                {/* MOBILE ONLY HEADING */}
                <div className="cat-mobile-header">
                    <span className="mini-badge">SMART CATALOGUE</span>
                    <h2>Digital Storefront</h2>
                </div>

                <div className="cat-premium-container">
                    
                    {/* LEFT SIDE: BUTTONS */}
                    <div className="cat-premium-content">
                        <div className="cat-desktop-header">
                            <span className="cat-premium-badge">SMART CATALOGUE</span>
                            <h2 className="cat-premium-h2">
                                Your Products, Now <br />
                                <span className="text-glow-blue">Digital & Interactive.</span>
                            </h2>
                        </div>
                        
                        <div className="cat-interactive-grid">
                            {catalogueFeatures.map((item, index) => (
                                <button 
                                    className={`cat-feature-btn ${activeTab === index ? 'active' : ''}`} 
                                    key={index}
                                    onClick={() => setActiveTab(index)}
                                    type="button"
                                >
                                    <div className="cat-btn-icon">{item.icon}</div>
                                    <div className="cat-btn-txt">
                                        <h4>{item.title}</h4>
                                        <p>{item.desc}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT SIDE: PHONE */}
                    <div className="cat-premium-visual">
                        <div className="cat-phone-mockup">
                            <div className="cat-phone-screen">
                                <div className="cat-app-mini-ui">
                                    <div className="cat-app-nav">
                                        <span className="dot"></span>
                                        <span className="app-name">Catalogue Pro</span>
                                        <span className="dot"></span>
                                    </div>

                                    <div key={activeTab} className="cat-app-body">
                                        <div className="cat-status-card" style={{ background: catalogueFeatures[activeTab].ui.color }}>
                                            <p>{catalogueFeatures[activeTab].ui.label}</p>
                                            <h3>{catalogueFeatures[activeTab].ui.value}</h3>
                                            <div className="cat-mini-progress">
                                                <div className="bar"></div>
                                            </div>
                                            <span className="trend">{catalogueFeatures[activeTab].ui.trend}</span>
                                        </div>

                                        <div className="cat-preview-box">
                                            <div className="skeleton-line"></div>
                                            <div className="skeleton-line short"></div>
                                            <div className="preview-footer">
                                                <span style={{ color: catalogueFeatures[activeTab].ui.color }}>{catalogueFeatures[activeTab].ui.subText}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="cat-app-footer">
                                        <div className="f-icon active">🏠</div>
                                        <div className="f-icon">📦</div>
                                        <div className="f-icon">⚙️</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CatalogueShowCase;