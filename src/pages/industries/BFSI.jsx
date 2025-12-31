import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pageData } from '../../data/pageData';
import './BFSI.css';

const BFSI = () => {
    const data = pageData['bfsi'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bfsi-page">
            {/* Hero Section */}
            <section className="bfsi-hero">
                <div className="hero-bg-overlay" style={{ backgroundImage: `url(${data.heroImage})` }}></div>
                <div className="container">
                    <div className="bfsi-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Financial Excellence
                        </div>
                        <h1>Transforming <span className="text-gradient">Financial Services.</span></h1>
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
            <section className="bfsi-solutions">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>BFSI Solutions</h2>
                        <p>Comprehensive technology services tailored for the banking, financial services, and insurance sector.</p>
                    </div>
                    <div className="bfsi-grid">
                        {data.features.map((solution, index) => (
                            <div key={index} className="bfsi-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{solution.icon}</div>
                                <h3>{solution.title}</h3>
                                <p>{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="bfsi-trust bg-dark">
                <div className="container">
                    <div className="trust-grid">
                        <div className="trust-content animate-up">
                            <span className="section-tag">Trust & Security</span>
                            <h2 className="text-white">Uncompromising Security</h2>
                            <p className="text-light">In the world of finance, security and trust are paramount. We implement multi-layered security protocols to protect every transaction and piece of data.</p>
                            <div className="trust-features">
                                <div className="trust-item">
                                    <span className="trust-icon">🔒</span>
                                    <span className="text-white">End-to-End Encryption</span>
                                </div>
                                <div className="trust-item">
                                    <span className="trust-icon">🛡️</span>
                                    <span className="text-white">Regulatory Compliance</span>
                                </div>
                                <div className="trust-item">
                                    <span className="trust-icon">⚡</span>
                                    <span className="text-white">Real-time Fraud Detection</span>
                                </div>
                            </div>
                        </div>
                        <div className="trust-visual animate-up delay-1">
                            <div className="lock-visual"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bfsi-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">modernize your services?</span></h2>
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

export default BFSI;
