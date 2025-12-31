import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pageData } from '../../data/pageData';
import './Defence.css';

const Defence = () => {
    const data = pageData['defence'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="defence-page">
            {/* Hero Section */}
            <section className="def-hero">
                <div className="hero-bg-overlay" style={{ backgroundImage: `url(${data.heroImage})` }}></div>
                <div className="container">
                    <div className="def-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            National Security
                        </div>
                        <h1>Securing the <span className="text-gradient">Digital Frontier.</span></h1>
                        <p>{data.description}</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Consult Our Experts
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="def-solutions">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>Defence Solutions</h2>
                        <p>Specialized technology services designed for the unique needs of the defence sector.</p>
                    </div>
                    <div className="def-grid">
                        {data.features.map((solution, index) => (
                            <div key={index} className="def-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{solution.icon}</div>
                                <h3>{solution.title}</h3>
                                <p>{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Section */}
            <section className="def-security bg-dark">
                <div className="container">
                    <div className="security-grid">
                        <div className="security-content animate-up">
                            <span className="section-tag">Security First</span>
                            <h2 className="text-white">Uncompromising Reliability</h2>
                            <p className="text-light">In the world of defence, failure is not an option. We implement the highest standards of security and reliability in every solution we build.</p>
                            <div className="security-features">
                                <div className="sec-item">
                                    <span className="sec-icon">🔒</span>
                                    <span className="text-white">Military-Grade Encryption</span>
                                </div>
                                <div className="sec-item">
                                    <span className="sec-icon">🛡️</span>
                                    <span className="text-white">Resilient Infrastructure</span>
                                </div>
                                <div className="sec-item">
                                    <span className="sec-icon">⚡</span>
                                    <span className="text-white">Real-time Response Systems</span>
                                </div>
                            </div>
                        </div>
                        <div className="security-visual animate-up delay-1">
                            <div className="radar-visual"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="def-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">strengthen your security?</span></h2>
                        <p>Let's collaborate to build a more secure and resilient future.</p>
                        <Link to="/contact" className="btn btn-hero-primary">
                            Get in Touch
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

export default Defence;
