import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
    // 1. Saari fields ke liye state banayi
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        city: '',
        message: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Form Data Sent:", formData);
        // Message sent hone ke baad state reset kar di
        setFormData({
            fullName: '',
            phone: '',
            email: '',
            city: '',
            message: ''
        });

        // alert("Message Sent Successfully! Fields have been cleared.");
    };

    return (
        <section className="contact-section" id='contact'>
            <div className="contact-container">
                <div className="contact-info">
                    <span className="contact-badge">GET IN TOUCH</span>
                    <h2>Let's Talk <span className="blue-highlight">Business</span></h2>
                    <p>Have questions about Sellar? Our team is here to help you scale your retail business.</p>
                </div>

                <div className="contact-form-card">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="input-group">
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label>Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="+91 00000 00000"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="input-group">
                                <label>Email ID</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="email@example.com"
                                    required
                                />
                            </div>
                            <div className="input-group">
                                <label>City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    placeholder="Your City"
                                    required
                                />
                            </div>
                        </div>

                        <div className="input-group">
                            <label>Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="How can we help?"
                                rows="4"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="send-btn">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;