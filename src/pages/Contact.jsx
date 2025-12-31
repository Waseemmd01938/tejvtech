import React, { useEffect } from 'react';
import './Contact.css';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-page">
            {/* Contact Hero */}
            <section className="contact-hero">
                <div className="container">
                    <div className="contact-hero-content animate-up">
                        <span className="section-tag">Contact Us</span>
                        <h1>Let's Build Something <span className="text-gradient">Extraordinary</span></h1>
                        <p>Have a project in mind or want to learn more about our services? We're here to help you navigate your digital journey.</p>
                    </div>
                </div>
                <div className="hero-bg-visual"></div>
            </section>

            {/* Contact Content */}
            <section className="contact-main-section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Contact Info */}
                        <div className="contact-info-side animate-up">
                            <div className="info-card-premium">
                                <h2>Contact Information</h2>
                                <p className="info-intro">Reach out to us through any of these channels or fill out the form, and our team will get back to you within 24 hours.</p>

                                <div className="info-items-list">
                                    <div className="info-item-premium">
                                        <div className="info-icon-box">📍</div>
                                        <div className="info-text">
                                            <h4>Our Office</h4>
                                            <p>123 Tech Park, Innovation Street<br />Silicon Valley, CA 94025</p>
                                        </div>
                                    </div>

                                    <div className="info-item-premium">
                                        <div className="info-icon-box">📞</div>
                                        <div className="info-text">
                                            <h4>Phone</h4>
                                            <p>+1 (234) 567-890</p>
                                            <p>+1 (987) 654-321</p>
                                        </div>
                                    </div>

                                    <div className="info-item-premium">
                                        <div className="info-icon-box">✉️</div>
                                        <div className="info-text">
                                            <h4>Email</h4>
                                            <p>info@tejvtech.com</p>
                                            <p>support@tejvtech.com</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-social-box">
                                    <h4>Follow Our Journey</h4>
                                    <div className="social-pills">
                                        <a href="#" className="social-pill">LinkedIn</a>
                                        <a href="#" className="social-pill">Twitter</a>
                                        <a href="#" className="social-pill">Instagram</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-side animate-up delay-1">
                            <div className="form-card-premium">
                                <h2>Send us a Message</h2>
                                <form className="premium-form" onSubmit={(e) => e.preventDefault()}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label>Full Name</label>
                                            <input type="text" placeholder="John Doe" required />
                                        </div>
                                        <div className="form-group">
                                            <label>Email Address</label>
                                            <input type="email" placeholder="john@example.com" required />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <select required>
                                            <option value="">Select a subject</option>
                                            <option value="project">New Project</option>
                                            <option value="support">Support Inquiry</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea rows="6" placeholder="Tell us about your project or inquiry..." required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-hero-primary form-submit-btn">
                                        Send Message
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="contact-map-section animate-up">
                <div className="container">
                    <div className="map-container-premium">
                        <div className="map-overlay">
                            <div className="map-card">
                                <h4>Visit Us</h4>
                                <p>Our doors are always open for a coffee and a chat about technology.</p>
                                <button className="btn btn-outline-small">Get Directions</button>
                            </div>
                        </div>
                        <div className="map-placeholder-visual">
                            {/* In a real app, this would be a Google Map component */}
                            <div className="map-grid-pattern"></div>
                            <div className="map-marker">📍</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
