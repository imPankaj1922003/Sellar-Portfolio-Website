import React from 'react';
import './CoreSolution.css';

const CoreSolution = () => {
    const allSolutions = [
        { title: "POS Billing", icon: "💳", desc: "Super fast checkout with GST support." },
        { title: "Smart Inventory", icon: "📦", desc: "Auto stock alerts and easy management." },
        { title: "Deep Analytics", icon: "📈", desc: "Track daily profit, loss, and growth." },
        { title: "E-Catalogue", icon: "🌐", desc: "Turn your stock into an online store." },
        { title: "Staff Access", icon: "👥", desc: "Manage staff roles and permissions safely." },
        // { title: "Vendor Panel", icon: "🤝", desc: "Easy tracking of purchases and dues." }
    ];

    return (
        <section id="solutions" className="solutions-section dark-theme">
            <div className="solutions-container">
                <div className="solutions-header">
                    <span className="mini-title">POWERING YOUR BUSINESS</span>
                    <h2 className="section-h2">Core <span className="blue-text">Solutions</span></h2>
                    <p className="section-p">Everything you need to manage and grow your retail business in one place.</p>
                </div>

                <div className="solutions-grid">
                    {allSolutions.map((sol, index) => (
                        <div className="sol-card" key={index}>
                            <div className="sol-icon-circle">{sol.icon}</div>
                            <div className="sol-text">
                                <h3>{sol.title}</h3>
                                <p>{sol.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CoreSolution;