import { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMenuOpen]);

    const handleNavClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <div className="logo-text" onClick={() => handleNavClick('home')} style={{ cursor: 'pointer' }}>
                    sellar<span>.in</span>
                </div>
            </div>

            <div className="nav-links">
                <span onClick={() => handleNavClick('solutions')}>Solutions</span>
                <span onClick={() => handleNavClick('pricing')}>Pricing</span>
                <span onClick={() => handleNavClick('why-sellar')}>Why Sellar</span>
                <span onClick={() => handleNavClick('contact')}>Contact</span>
            </div>

            <div className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <div></div>
                <div></div>
                <div></div>
            </div>

            {/* Solid Mobile Sidebar (No Transparency) */}
            <div className={`mobile-sidebar ${isMenuOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h3>Menu</h3>
                </div>

                <div className="sidebar-links">
                    <span onClick={() => handleNavClick('home')}>
                        <i className="link-icon">🏠</i> Home
                    </span>
                    <span onClick={() => handleNavClick('solutions')}>
                        <i className="link-icon">⚡</i> Solutions
                    </span>
                    <span onClick={() => handleNavClick('pricing')}>
                        <i className="link-icon">💰</i> Pricing
                    </span>
                    <span onClick={() => handleNavClick('contact')}>
                        <i className="link-icon">📞</i> Contact Us
                    </span>
                </div>

                <div className="sidebar-footer">
                    <button className="sidebar-btn" onClick={() => handleNavClick('contact')}>Get Started</button>
                </div>
            </div>

            {/* Smooth Overlay (No Blur for performance) */}
            <div
                className={`menu-overlay ${isMenuOpen ? 'active' : ''}`}
                onClick={() => setIsMenuOpen(false)}
            ></div>
        </nav>
    );
};

export default Navbar;