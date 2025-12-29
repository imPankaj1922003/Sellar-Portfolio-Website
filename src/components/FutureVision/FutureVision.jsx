import React from 'react'
import "./FurureVision.css"
const FutureVision = () => {
    return (
        <div>
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
        </div>
    )
}

export default FutureVision
