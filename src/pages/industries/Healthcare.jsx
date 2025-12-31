import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pageData } from '../../data/pageData';
import './Healthcare.css';

const Healthcare = () => {
    const data = pageData['healthcare'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="healthcare-page">
            {/* Hero Section */}
            <section className="hc-hero">
                <div className="hero-bg-overlay" style={{ backgroundImage: `url(${data.heroImage})` }}></div>
                <div className="container">
                    <div className="hc-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            HealthTech Innovation
                        </div>
                        <h1>Transforming <span className="text-gradient">Patient Care.</span></h1>
                        <p>{data.description}</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Build Your Solution
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="hc-solutions">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>Healthcare Solutions</h2>
                        <p>Specialized technology services designed for the modern healthcare landscape.</p>
                    </div>
                    <div className="hc-grid">
                        {data.features.map((feature, index) => (
                            <div key={index} className="hc-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Compliance Section */}
            <section className="hc-compliance bg-dark">
                <div className="container">
                    <div className="compliance-grid">
                        <div className="compliance-content animate-up">
                            <span className="section-tag">Security & Compliance</span>
                            <h2 className="text-white">HIPAA-Compliant Solutions</h2>
                            <p className="text-light">We prioritize patient privacy and data security, ensuring all our healthcare solutions meet the highest standards of compliance and protection.</p>
                            <div className="compliance-features">
                                <div className="comp-item">
                                    <span className="comp-icon">🔒</span>
                                    <span className="text-white">End-to-End Encryption</span>
                                </div>
                                <div className="comp-item">
                                    <span className="comp-icon">📋</span>
                                    <span className="text-white">HIPAA/GDPR Compliance</span>
                                </div>
                                <div className="comp-item">
                                    <span className="comp-icon">🛡️</span>
                                    <span className="text-white">Secure Data Storage</span>
                                </div>
                            </div>
                        </div>
                        <div className="compliance-visual animate-up delay-1">
                            <div className="cross-visual">🏥</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="hc-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">modernize patient care?</span></h2>
                        <p>Let's collaborate to build a secure and innovative healthcare product.</p>
                        <Link to="/contact" className="btn btn-hero-primary">
                            Get Started Today
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

export default Healthcare;
