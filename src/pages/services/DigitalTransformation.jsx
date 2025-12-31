import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DigitalTransformation.css';

const DigitalTransformation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const pillars = [
        { title: 'Strategy & Roadmap', description: 'Defining a clear path for your digital evolution based on your business goals.', icon: '🗺️' },
        { title: 'Process Automation', description: 'Streamlining operations and reducing manual effort through intelligent automation.', icon: '⚙️' },
        { title: 'Data Intelligence', description: 'Unlocking the power of your data to drive informed decision-making.', icon: '📊' },
        { title: 'Customer Experience', description: 'Reimagining the customer journey for a digital-first world.', icon: '👥' },
        { title: 'Cloud Migration', description: 'Transitioning your legacy systems to scalable and resilient cloud architectures.', icon: '☁️' },
        { title: 'Cultural Shift', description: 'Empowering your team to embrace and drive digital change.', icon: '💡' }
    ];

    return (
        <div className="dt-service-page">
            {/* Hero Section */}
            <section className="dt-hero">
                <div className="container">
                    <div className="dt-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Evolve or Be Left Behind
                        </div>
                        <h1>Strategic <span className="text-gradient">Digital Transformation.</span></h1>
                        <p>We partner with enterprises to reimagine their business processes, technology, and culture for the modern digital era.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Start Your Journey
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="dt-hero-visual">
                    <div className="dt-grid-pattern"></div>
                </div>
            </section>

            {/* Pillars Grid */}
            <section className="dt-pillars">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Approach</span>
                        <h2>Transformation Pillars</h2>
                        <p>A holistic framework to ensure your digital evolution is successful and sustainable.</p>
                    </div>
                    <div className="dt-grid">
                        {pillars.map((pillar, index) => (
                            <div key={index} className="dt-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{pillar.icon}</div>
                                <h3>{pillar.title}</h3>
                                <p>{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="dt-impact bg-dark">
                <div className="container">
                    <div className="impact-grid">
                        <div className="impact-content animate-up">
                            <span className="section-tag">Business Impact</span>
                            <h2 className="text-white">Drive Real Results</h2>
                            <p className="text-light">Digital transformation is not just about technology—it's about achieving better business outcomes and creating long-term value.</p>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-val">40%</span>
                                    <span className="stat-label">Efficiency Gain</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">25%</span>
                                    <span className="stat-label">Cost Reduction</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">2x</span>
                                    <span className="stat-label">Faster Innovation</span>
                                </div>
                            </div>
                        </div>
                        <div className="impact-visual animate-up delay-1">
                            <div className="growth-visual">📈</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="dt-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">evolve your business?</span></h2>
                        <p>Let's collaborate to build a future-proof digital enterprise.</p>
                        <Link to="/contact" className="btn btn-hero-primary">
                            Consult Our Experts
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

export default DigitalTransformation;
