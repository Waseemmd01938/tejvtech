import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/SolutionLayout.css';
import './CloudSolutions.css';

const CloudSolutions = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="solution-page cloud-page">
            {/* Unique Hero: Split Layout */}
            <section className="solution-hero cloud-hero">
                <div className="container">
                    <div className="cloud-hero-grid">
                        <div className="cloud-hero-text animate-up">
                            <span className="section-tag">Enterprise Cloud</span>
                            <h1>Scale Without <br /><span className="text-gradient">Boundaries</span></h1>
                            <p>Modernize your infrastructure with secure, high-performance cloud solutions that grow with your business.</p>
                            <div className="hero-cta-group" style={{ justifyContent: 'flex-start' }}>
                                <Link to="/contact" className="btn btn-hero-primary">
                                    Start Migration
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                                <Link to="/portfolio" className="btn btn-hero-secondary" style={{ color: 'var(--text-dark)' }}>
                                    View Case Studies
                                </Link>
                            </div>
                        </div>
                        <div className="cloud-hero-image animate-up delay-2">
                            <div className="image-wrapper">
                                <img src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80" alt="Cloud Infrastructure" />
                                <div className="floating-stats">
                                    <div className="stat-pill">99.9% Uptime</div>
                                    <div className="stat-pill">Global CDN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique Section: Cloud Ecosystem */}
            <section className="cloud-ecosystem bg-light">
                <div className="container">
                    <div className="solution-section-header animate-up">
                        <span className="section-tag">Partnerships</span>
                        <h2>Multi-Cloud Ecosystem</h2>
                        <p>We partner with the world's leading cloud providers to give you the best of every platform.</p>
                    </div>
                    <div className="partner-logos animate-up delay-1">
                        <div className="logo-box">AWS</div>
                        <div className="logo-box">Azure</div>
                        <div className="logo-box">Google Cloud</div>
                        <div className="logo-box">DigitalOcean</div>
                    </div>
                </div>
            </section>

            {/* Unique Feature: Infrastructure Rows */}
            <section className="cloud-features">
                <div className="container">
                    <div className="feature-row animate-up">
                        <div className="feature-row-text">
                            <span className="section-tag">Migration</span>
                            <h3>Cloud Migration</h3>
                            <p>Seamlessly transition your legacy systems to the cloud with zero data loss and minimal downtime.</p>
                            <ul className="benefits-list-simple">
                                <li>Strategy & Planning</li>
                                <li>Data Synchronization</li>
                                <li>Post-Migration Support</li>
                            </ul>
                        </div>
                        <div className="feature-row-visual">
                            <div className="visual-box migration">
                                <div className="cloud-icon">☁️</div>
                            </div>
                        </div>
                    </div>
                    <div className="feature-row reverse animate-up delay-1">
                        <div className="feature-row-text">
                            <span className="section-tag">Security</span>
                            <h3>Cloud Security</h3>
                            <p>Protect your digital assets with enterprise-grade encryption and 24/7 threat monitoring.</p>
                            <ul className="benefits-list-simple">
                                <li>DDoS Protection</li>
                                <li>IAM Management</li>
                                <li>Compliance Audits</li>
                            </ul>
                        </div>
                        <div className="feature-row-visual">
                            <div className="visual-box security">
                                <div className="shield-icon">🛡️</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique CTA: Clean & Blue */}
            <section className="cloud-cta">
                <div className="container">
                    <div className="cloud-cta-content animate-up">
                        <h2>Ready to move to the cloud?</h2>
                        <p>Our experts are ready to help you build a scalable, future-proof infrastructure.</p>
                        <Link to="/contact" className="btn btn-hero-primary">
                            Consult an Expert
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CloudSolutions;
