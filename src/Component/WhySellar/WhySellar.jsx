import React from 'react';
import './WhySellar.css';

const WhySellar = () => {
    const comparisonData = [
        { feature: "System Requirement", others: "Needs a dedicated device", sellar: "works on any device simultaneously" },
        { feature: "Costing", others: "Range from INR 5000 pa to INR 25000 pa", sellar: "starts at INR 999 pa" },
        { feature: "Number of Users", others: "Pay extra per user", sellar: "includes upto 20 users per subscription" },
        { feature: "Ease of use", others: "complex interface", sellar: " Super easy; only what you need" },
        { feature: "Order Tracking", others: "requires manual updates or third-party tools.", sellar: "Live status updates" },
        { feature: "Reporting", others: "Raw data difficult to interpret", sellar: "Smart, structured reports designed" },
        { feature: "Dashboard", others: "Confusing or non-existent.", sellar: "crisp, clear, and informative" },
        { feature: "Storage", others: "Tied to local hard drives", sellar: "100% cloud-based; access your data securely from anywhere." },
    ];

    return (
        <section id="why-sellar" className="why-sellar-section">
            <div className="why-sellar-container">
                <div className="header-content">
                    <span className="premium-tag">THE COMPARISON</span>
                    <h2 className="section-h2">Why Choose <span className="blue-brand">Sellar?</span></h2>
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
                                        <span className="status-icon cross">✕</span> {item.others}
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