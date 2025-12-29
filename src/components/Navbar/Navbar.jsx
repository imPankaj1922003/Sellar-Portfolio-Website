import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Bhai, yahan se location aur navigate ka logic hata kar simple scroll rakha hai
    const handleNavClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false); // Mobile menu band karne ke liye
    };

    return (
        <nav className="navbar">
            <div className="logo">
                {/* Link tag ki jagah ab div ya span use karenge */}
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

            {/* Premium Mobile Sidebar */}
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
                    {/* Yahan bhi Link hata kar handleNavClick use kiya hai */}
                    <span onClick={() => handleNavClick('contact')}>
                       <i className="link-icon">📞</i> Contact Us
                    </span>
                </div>

                <div className="sidebar-footer">
                    <p>Ready to grow?</p>
                    <button className="sidebar-btn" onClick={() => handleNavClick('contact')}>Get Started</button>
                </div>
            </div>
            
            {isMenuOpen && <div className="menu-overlay" onClick={() => setIsMenuOpen(false)}></div>}
        </nav>
    );
};

export default Navbar;