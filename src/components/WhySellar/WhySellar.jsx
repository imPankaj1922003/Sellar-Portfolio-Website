import React from 'react';
import './WhySellar.css';

const WhySellar = () => {
    const comparisonData = [
        { feature: "Order Tracking", old: "Manual & Messy", sellar: "Smart AI Dashboard" },
        { feature: "Hidden Costs", old: "Surprise Charges", sellar: "Zero Hidden Fees" },
        { feature: "Settlements", old: "3-5 Business Days", sellar: "Instant T+0 Payouts" },
        { feature: "Support", old: "Ticket/Email Only", sellar: "24/7 Priority Manager" },
        { feature: "GST Billing", old: "Manual Calculation", sellar: "Auto-GST Compliance" },
    ];

    return (
        <section id="why-sellar" className="why-sellar-section">
            <div className="why-sellar-container">
                <div className="header-content">
                    <span className="premium-tag">THE COMPARISON</span>
                    <h2 className="section-h2">Why Choose Sellar<span className="blue-brand">Sellar?</span></h2>
                    <p className="section-p">Stop settling for outdated systems. Switch to the future of retail.</p>
                </div>

                <div className="table-container">
                    <table className="comparison-table">
                        <thead>
                            <tr>
                                <th>Features</th>
                                <th className="old-head">Others</th>
                                <th className="sellar-head">Sellar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((item, index) => (
                                <tr key={index}>
                                    <td className="feature-name">{item.feature}</td>
                                    <td className="old-way">
                                        <span className="status-icon cross">✕</span> {item.old}
                                    </td>
                                    <td className="sellar-way">
                                        <span className="status-icon check">✓</span> {item.sellar}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default WhySellar;