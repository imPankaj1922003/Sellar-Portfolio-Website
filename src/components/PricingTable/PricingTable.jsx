import React, { useState } from 'react';
import './PricingTable.css';

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);
    const [activeService, setActiveService] = useState('pos');

    const posFeatures = [
        { name: "Vendor POS Dashboard Access", basic: true, pro: true },
        { name: "Total Sale Board", basic: true, pro: true },
        { name: "Automated Sales Reports", basic: true, pro: true },
        { name: "Bar Code + QR Code Scanner", basic: true, pro: true },
        { name: "Daily Performance Board", basic: false, pro: true },
        { name: "Multi-Store Functionality", basic: false, pro: true },
        { name: "Automated PnL Reports", basic: false, pro: true },
        { name: "Custom User Permissions", basic: false, pro: true },
    ];

    const catalogueFeatures = [
        { name: "Digital Product Showcase", basic: true, pro: true },
        { name: "WhatsApp Ordering", basic: true, pro: true },
        { name: "QR Code for Storefront", basic: true, pro: true },
        { name: "Custom Domain Mapping", basic: false, pro: true },
        { name: "Inventory Sync with POS", basic: false, pro: true },
        { name: "Premium Themes", basic: false, pro: true },
        { name: "Customer Analytics", basic: false, pro: true },
        { name: "Bulk SEO Tools", basic: false, pro: true },
    ];

    const currentFeatures = activeService === 'pos' ? posFeatures : catalogueFeatures;

    const pricing = {
        pos: {
            basic: isYearly ? '999' : '99',
            pro: isYearly ? '2999' : '299'
        },
        catalogue: {
            basic: isYearly ? '499' : '49',
            pro: isYearly ? '1499' : '149'
        }
    };

    return (
        <section className="pricing-section" id="pricing">
            <div className="pricing-container">
                <div className="pricing-header-main">
                    <h2 className="section-title">Simple, <span className="blue-text">Transparent</span> Pricing</h2>
                    
                    <div className="toggle-wrapper">
                        <span className={!isYearly ? "active-period" : ""}>Monthly</span>
                        <label className="switch">
                            <input type="checkbox" onChange={() => setIsYearly(!isYearly)} />
                            <span className="slider round"></span>
                        </label>
                        <span className={isYearly ? "active-period" : ""}>
                            Yearly <span className="save-badge">Save 22%</span>
                        </span>
                    </div>

                    <div className="service-tabs">
                        <button className={`tab-btn ${activeService === 'pos' ? 'active' : ''}`} onClick={() => setActiveService('pos')}>
                            POS Billing
                        </button>
                        <button className={`tab-btn ${activeService === 'catalogue' ? 'active' : ''}`} onClick={() => setActiveService('catalogue')}>
                            Digital Catalogue
                        </button>
                    </div>
                </div>

                {/* SCROLLABLE WRAPPER FOR MOBILE */}
                <div className="pricing-table-scroll-area">
                    <div className="pricing-table-card">
                        <div className="table-header-sticky">
                            <div className="feature-label-cell">FEATURES</div>

                            <div className="plan-column-head">
                                <span className="p-title">{activeService === 'pos' ? 'POS Basic' : 'E-Cat Basic'}</span>
                                <span className="p-price">₹{pricing[activeService].basic}</span>
                                <span className="p-cycle">per {isYearly ? 'year' : '4 weeks'}</span>
                            </div>

                            <div className="plan-column-head highlighted">
                                <div className="badge-rec">RECOMMENDED</div>
                                <span className="p-title">{activeService === 'pos' ? 'POS Pro' : 'E-Cat Pro'}</span>
                                <span className="p-price">₹{pricing[activeService].pro}</span>
                                <span className="p-cycle">per {isYearly ? 'year' : '4 weeks'}</span>
                            </div>
                        </div>

                        <div className="table-body">
                            {currentFeatures.map((f, i) => (
                                <div className="t-row" key={i}>
                                    <div className="t-cell-name">{f.name}</div>
                                    <div className="t-cell-status">
                                        {f.basic ? <span className="tick">✔</span> : <span className="cross">✖</span>}
                                    </div>
                                    <div className="t-cell-status bg-tint">
                                        {f.pro ? <span className="tick">✔</span> : <span className="cross">✖</span>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                <p className="pricing-note">*All prices exclude GST. Additional hardware costs may apply.</p>
            </div>
        </section>
    );
};

export default Pricing;