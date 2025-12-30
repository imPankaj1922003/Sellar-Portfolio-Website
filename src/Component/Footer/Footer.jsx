import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import footerLogo from '../../assets/Sellar_Logo_white.png';


const Footer = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <footer className="mega-footer">
                <div className="container">
                    <div className="footer-grid-layout">
                        {/* Brand Column */}
                        <div className="footer-brand">
                            <img
                                src={footerLogo}
                                alt="Sellar Logo"
                                style={{ height: '40px', width: 'auto', marginBottom: '25px' }}
                            />
                            <p>The modern operating system for retail businesses. Empowering shops with digital tools to grow faster.</p>
                            <div className="social-links">
                                <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#1877F2' }} />
                                </a>
                                <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" style={{ color: '#1877F2' }} />
                                </a>
                                <a href="https://www.instagram.com/sellar.in?igsh=MXhobzJrMzIzbGdlaQ==" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#1877F2' }} />
                                </a>
                                <a href="https://www.linkedin.com/company/sellar-in/e" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#1877F2' }} />
                                </a>
                            </div>
                        </div>

                        {/* Links Columns */}
                        <div className="footer-links-wrapper">
                            <div className="footer-col">
                                <h4>Product</h4>
                                <ul>
                                    <li onClick={() => scrollToSection('solutions')}>Features</li>
                                    <li onClick={() => scrollToSection('pricing')}>Pricing</li>
                                    <li>Updates</li>
                                </ul>
                            </div>
                            <div className="footer-col">
                                <h4>Support</h4>
                                <ul>
                                    <li>Help Center</li>
                                    <li>Contact Us</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* --- NEW MIDDLE LINE --- */}
                    <div className="footer-made-in-india">
                        Made with <span className="heart">❤</span> in India
                    </div>

                    <div className="footer-bottom">
                        <p>© 2025 Sellar Inc. Built for Indian Retailers.</p>
                        <div className="footer-bottom-links">
                            <span>Terms</span>
                            <span>Privacy</span>
                            <span>Cookies</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer