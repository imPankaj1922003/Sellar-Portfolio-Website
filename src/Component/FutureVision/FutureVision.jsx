import React from 'react';
import './FutureVision.css';

const FutureVision = () => {
    return (
        <section className="vision-section" id="vision">
            {/* Background Glows for Dark Theme */}
            <div className="vision-glow-top"></div>
            
            <div className="vision-container">
                <div className="vision-header-main">
                    <span className="vision-badge-neon">UPCOMING TECH</span>
                    <h2 className="vision-title">
                        Beyond <span className="gradient-text">Traditional Billing</span>
                    </h2>
                    <p className="vision-subtitle">
                        Don't just manage your business—evolve it. Experience an intelligent retail ecosystem designed to forecast trends and automate growth before you even ask.
                    </p>
                </div>

                <div className="vision-grid-premium">
                    {/* Main Feature Card */}
                    <div className="vision-main-card">
                        <div className="vision-card-inner">
                            <div className="icon-wrap-neon">🤖</div>
                            <h3>AI-Driven Forecast</h3>
                            <p>Hamara smart engine aapke sales data ko analyze karke batayega ki kal kya bikne wala hai. Never miss a sale due to out-of-stock items.</p>
                            <div className="card-status">
                                <span className="status-dot"></span> In Development
                            </div>
                        </div>
                    </div>

                    {/* Side Features Stack */}
                    <div className="vision-side-stack">
                        <div className="side-card glass-blue">
                            <div className="side-icon">🤝</div>
                            <div className="side-info">
                                <h4>B2B Marketplace</h4>
                                <p>Direct connection with manufacturers.</p>
                            </div>
                        </div>

                        <div className="side-card glass-purple">
                            <div className="side-icon">📊</div>
                            <div className="side-info">
                                <h4>Predictive Analytics</h4>
                                <p>Automated profit & loss insights.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="vision-bottom-tags">
                    <span className="v-tag">#SmartRetail</span>
                    <span className="v-tag">#FutureOfPOS</span>
                    <span className="v-tag">#SellarIntelligence</span>
                </div>
            </div>
        </section>
    );
};

export default FutureVision;