import React, { useEffect } from 'react';
import './Contact.css';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="contact-section" id='contact'>
            <div className="contact-container">
                <div className="contact-info">
                    <span className="contact-badge">GET IN TOUCH</span>
                    <h2>Let's Talk <span className="blue-highlight">Business</span></h2>
                    <p>Have questions about Sellar? Our team is here to help you scale your retail business.</p>
                    
                    <div className="contact-features">
                        <div className="c-feat"><span>✓</span> 24/7 Priority Support</div>
                        <div className="c-feat"><span>✓</span> Free Product Demo</div>
                    </div>
                </div>

                <div className="contact-form-card">
                    <form className="contact-form">
                        {/* Name & Phone in One Row */}
                        <div className="form-row">
                            <div className="input-group">
                                <label>Full Name</label>
                                <input type="text" placeholder="Your Name" required />
                            </div>
                            <div className="input-group">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="+91 00000 00000" required />
                            </div>
                        </div>

                        {/* Email & City in One Row */}
                        <div className="form-row">
                            <div className="input-group">
                                <label>Email ID</label>
                                <input type="email" placeholder="email@example.com" required />
                            </div>
                            <div className="input-group">
                                <label>City</label>
                                <input type="text" placeholder="Your City" required />
                            </div>
                        </div>

                        {/* Message Full Width */}
                        <div className="input-group">
                            <label>Message</label>
                            <textarea placeholder="How can we help?" rows="4" required></textarea>
                        </div>

                        <button type="submit" className="send-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;