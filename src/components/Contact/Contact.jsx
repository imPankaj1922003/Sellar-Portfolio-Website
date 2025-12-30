import React, { useState, useEffect } from 'react';
import './Contact.css';
// Ensure this path matches where you actually saved your firebase.js file
import { db } from '../../Lib/Firebase'; 
import { collection, addDoc } from 'firebase/firestore'; 

const Contact = () => {
    // 1. State for form data
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        city: '',
        message: ''
    });

    // 2. State for loading status (Fixed: this was missing in your code)
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Disable button while sending

        try {
            // 3. Send data to Firebase Firestore
            // "contacts" is the name of the collection in your database
            await addDoc(collection(db, "contacts"), {
                ...formData,
                submittedAt: new Date() // Adds a timestamp so you know when they messaged
            });

            console.log("Form Data Sent:", formData);
            alert("Message Sent Successfully!");

            // 4. Reset form after success
            setFormData({
                fullName: '',
                phone: '',
                email: '',
                city: '',
                message: ''
            });

        } catch (error) {
            console.error("Error adding document: ", error);
            alert("Something went wrong. Please check your internet connection.");
        }

        setIsSubmitting(false); // Re-enable button
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

                        <button type="submit" className="send-btn" disabled={isSubmitting}>
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;