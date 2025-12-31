import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pageData } from '../../data/pageData';
import './Fintech.css';

const Fintech = () => {
    const data = pageData['fintech'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="fintech-page">
            {/* Hero Section */}
            <section className="fintech-hero">
                <div className="hero-bg-overlay" style={{ backgroundImage: `url(${data.heroImage})` }}></div>
                <div className="container">
                    <div className="fintech-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Future of Finance
                        </div>
                        <h1>Innovating the <span className="text-gradient">Financial Frontier.</span></h1>
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
            <section className="fintech-solutions">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>Fintech Solutions</h2>
                        <p>Comprehensive technology services tailored for the financial sector.</p>
                    </div>
                    <div className="fintech-grid">
                        {data.features.map((feature, index) => (
                            <div key={index} className="fintech-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Section */}
            <section className="fintech-security bg-dark">
                <div className="container">
                    <div className="security-grid">
                        <div className="security-content animate-up">
                            <span className="section-tag">Security First</span>
                            <h2 className="text-white">Uncompromising Security</h2>
                            <p className="text-light">In the world of finance, security is not an option—it's a foundation. We implement multi-layered security protocols to protect every transaction and piece of data.</p>
                            <div className="security-features">
                                <div className="sec-item">
                                    <span className="sec-icon">🔒</span>
                                    <span className="text-white">End-to-End Encryption</span>
                                </div>
                                <div className="sec-item">
                                    <span className="sec-icon">🆔</span>
                                    <span className="text-white">Biometric Authentication</span>
                                </div>
                                <div className="sec-item">
                                    <span className="sec-icon">⚡</span>
                                    <span className="text-white">Real-time Threat Monitoring</span>
                                </div>
                            </div>
                        </div>
                        <div className="security-visual animate-up delay-1">
                            <div className="shield-animation">🛡️</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="fintech-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">disrupt the market?</span></h2>
                        <p>Let's collaborate to build a secure and innovative financial product.</p>
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

export default Fintech;
