import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pageData } from '../../data/pageData';
import './Training.css';

const Training = () => {
    const data = pageData['training'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="training-page">
            {/* Hero Section */}
            <section className="train-hero">
                <div className="hero-bg-overlay" style={{ backgroundImage: `url(${data.heroImage})` }}></div>
                <div className="container">
                    <div className="train-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Skill Advancement
                        </div>
                        <h1>Empower Your <span className="text-gradient">Team</span> with Expert Training.</h1>
                        <p>{data.description}</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Explore Programs
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="train-timeline">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Process</span>
                        <h2>The Learning Path</h2>
                        <p>A structured, hands-on approach to mastering new technologies and methodologies.</p>
                    </div>
                    <div className="timeline-container">
                        <div className="timeline-line"></div>
                        {data.features.map((step, index) => (
                            <div key={index} className="timeline-item animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{step.icon}</div>
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="train-benefits bg-light">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Why Us</span>
                        <h2>Why Train With Us?</h2>
                        <p>Practical, project-based learning designed for real-world impact and immediate application.</p>
                    </div>
                    <div className="train-grid">
                        {data.benefits.map((benefit, index) => (
                            <div key={index} className="train-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div style={{ color: 'var(--home-accent)', fontWeight: '800', fontSize: '1.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>0{index + 1}.</div>
                                <h3>{benefit}</h3>
                                <p style={{ color: 'var(--text-medium)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                                    Building a culture of continuous learning and innovation within your organization to stay ahead of the curve.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="train-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Invest in your <span className="text-gradient">greatest asset.</span></h2>
                        <p>Our expert trainers are ready to help your team reach their full potential and drive business growth.</p>
                        <Link to="/contact" className="btn btn-hero-primary">
                            Schedule a Session
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

export default Training;
