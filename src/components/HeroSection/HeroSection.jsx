import React, { useState } from 'react'
import "./HeroSection.css"

const HeroSection = () => {
    const [showDemo, setShowDemo] = useState(false);

    return (
        <header id="home" className="hero-section">
            <div className="hero-bg-glow"></div>

            <div className="hero-container">
                {/* LEFT: LAPTOP VIEW */}
                {/* <div className="side-visual left">
                    <div className="glass-card floating-card-1">
                        <span>📈 Sales +24%</span>
                    </div>
                    <div className="laptop-frame">
                        <div className="laptop-screen">
                            <div className="dashboard-content">
                                <div className="dash-nav"></div>
                                <div className="dash-grid">
                                    <div className="grid-item-main"></div>
                                    <div className="grid-item-side"></div>
                                </div>
                            </div>
                        </div>
                        <div className="laptop-keyboard"></div>
                    </div>
                </div> */}

                {/* CENTER: TEXT CONTENT */}
                <div className="hero-main-content">
                    {/* <div className="promo-badge">TRUSTED BY 500+ RETAILERS</div> */}
                    <h1 className="hero-title">
                        One Platform. <br />
                        <span className="text-gradient">Infinite Growth.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Experience the world's fastest POS and Inventory management system.
                        Designed for speed, built for scale.
                    </p>

                    <div className="hero-btn-wrapper">
                        <button className="btn-primary-glow">Start Free Trial</button>
                        <button onClick={() => setShowDemo(true)} className="btn-secondary-outline">
                            <span className="play-icon">▶</span> Watch Demo
                        </button>
                    </div>
                </div>

                {/* RIGHT: MOBILE VIEW */}
                {/* <div className="side-visual right">
                    <div className="glass-card floating-card-2">
                        <span>✅ Bill Paid</span>
                    </div>
                    <div className="mobile-premium">
                        <div className="dynamic-island"></div>
                        <div className="mobile-display">
                            <div className="app-stats">
                                <div className="circle-chart"></div>
                                <div className="bar-loader"></div>
                                <div className="bar-loader w-75"></div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

            {showDemo && (
                <div className="modal-overlay" onClick={() => setShowDemo(false)}>
                    <div className="modal-body" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setShowDemo(false)}>✕</button>
                        <div className="video-container">
                            <iframe src="https://www.youtube.com/embed/your-video-id" title="Demo" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}

export default HeroSection