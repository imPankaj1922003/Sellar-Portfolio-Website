import React, { useState } from 'react';
import './PricingTable.css'

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);

    const features = [
        { name: "Vendor POS Dashboard Access", basic: true, pro: true },
        { name: "Total Sale Board", basic: true, pro: true },
        { name: "Automated Sales Reports", basic: true, pro: true },
        { name: "Custom Voucher Numbering Feature", basic: true, pro: true },
        { name: "Bar Code + QR Code Scanner Feature", basic: true, pro: true },
        { name: "Autofill Bill Amount & Balances", basic: true, pro: true },
        { name: "Bulk Import Items Functionality", basic: true, pro: true },
        { name: "Parent Categorisation of Items", basic: true, pro: true },
        { name: "Automated Invoice Generation", basic: true, pro: true },
        { name: "GST composition", basic: true, pro: true },
        { name: "Daily Performance Board (Bar charts)", basic: false, pro: true },
        { name: "Payment Methods Board", basic: false, pro: true },
        { name: "Top Items Sold Board", basic: false, pro: true },
        { name: "Top Salesman Board", basic: false, pro: true },
        { name: "Restock Items Board", basic: false, pro: true },
        { name: "Hide Data Functionality", basic: false, pro: true },
        { name: "Sales Return Voucher", basic: false, pro: true },
        { name: "Voucher modification (Edit Button)", basic: false, pro: true },
        { name: "Purchase Voucher", basic: false, pro: true },
        { name: "Payment Reminder Feature", basic: false, pro: true },
        { name: "Multi-Store Functionality", basic: false, pro: true },
        { name: "Automated PnL Reports", basic: false, pro: true },
        { name: "Customer Database management", basic: false, pro: true },
        { name: "Supplier Database management", basic: false, pro: true },
        { name: "Custom User App Permissions", basic: false, pro: true },
        { name: "Individual Barcode Printing", basic: false, pro: true },
        { name: "Multiple Owners Setup", basic: false, pro: true },
    ];

    return (
        <section className="pricing-section" id="pricing">
            <div className="pricing-container">

                {/* Naya Switch Button Section */}
                <div className="toggle-container" style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <span style={{ fontWeight: '700', color: isYearly ? '#64748b' : '#007EA7' }}>Monthly</span>
                    <label className="switch" style={{ margin: '0 15px' }}>
                        <input type="checkbox" onChange={() => setIsYearly(!isYearly)} />
                        <span className="slider round"></span>
                    </label>
                    <span style={{ fontWeight: '700', color: isYearly ? '#007EA7' : '#64748b' }}>
                        Yearly <span style={{ fontSize: '10px', background: '#00A8E8', color: 'white', padding: '2px 8px', borderRadius: '10px', marginLeft: '5px' }}>Save 15%</span>
                    </span>
                </div>

                <div className="pricing-table-card">
                    <div className="table-header-sticky">
                        <div className="feature-label-cell">FEATURES</div>

                        {/* Basic Plan Pricing Logic */}
                        <div className="plan-column-head">
                            <span className="p-title">POS Basic</span>
                            <span className="p-price">₹{isYearly ? '999' : '99'}</span>
                            <span className="p-cycle">per {isYearly ? 'year' : '4 weeks'}</span>
                            {/* <button className="btn-outline">Choose</button> */}
                        </div>

                        {/* Pro Plan Pricing Logic */}
                        <div className="plan-column-head highlighted">
                            <div className="badge-rec">RECOMMENDED</div>
                            <span className="p-title">POS Pro</span>
                            <span className="p-price">₹{isYearly ? '2999' : '299'}</span>
                            <span className="p-cycle">per {isYearly ? 'year' : '4 weeks'}</span>
                            {/* <button className="btn-filled">Choose</button> */}
                        </div>
                    </div>

                    <div className="table-body-scroll">
                        {features.map((f, i) => (
                            <div className="t-row" key={i}>
                                <div className="t-cell-name">
                                    {f.name} <span className="i-icon">ⓘ</span>
                                </div>
                                <div className="t-cell-status">
                                    {f.basic ? <span className="tick">✔</span> : <span className="cross" style={{ color: '#ef4444', opacity: '1' }}>✖</span>}
                                </div>
                                <div className="t-cell-status bg-tint">
                                    {f.pro ? <span className="tick">✔</span> : <span className="cross" style={{ color: '#ef4444', opacity: '1' }}>✖</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;