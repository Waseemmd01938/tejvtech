import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Consulting.css';

const Consulting = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        { title: 'Digital Strategy', description: 'Defining a clear and actionable roadmap for your digital transformation journey.', icon: '🗺️' },
        { title: 'Tech Stack Advisory', description: 'Expert guidance on selecting the right technologies to power your business growth.', icon: '💻' },
        { title: 'Process Optimization', description: 'Identifying and eliminating bottlenecks to improve operational efficiency.', icon: '⚙️' },
        { title: 'Cloud Strategy', description: 'Helping you navigate the complexities of cloud adoption and optimization.', icon: '☁️' },
        { title: 'Security Consulting', description: 'Comprehensive assessment and planning to protect your digital assets.', icon: '🛡️' },
        { title: 'Product Strategy', description: 'Defining your product vision, target market, and roadmap for success.', icon: '🚀' }
    ];

    return (
        <div className="consulting-page">
            {/* Hero Section */}
            <section className="con-hero">
                <div className="container">
                    <div className="con-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Expert Guidance for Digital Success
                        </div>
                        <h1>Strategic <span className="text-gradient">IT Consulting.</span></h1>
                        <p>We provide expert guidance and strategic advice to help you navigate the complex technology landscape and achieve your business goals.</p>
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
                <div className="con-hero-visual">
                    <div className="con-grid-pattern"></div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="con-services">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>Consulting Services</h2>
                        <p>Comprehensive guidance to empower your digital enterprise.</p>
                    </div>
                    <div className="con-grid">
                        {services.map((service, index) => (
                            <div key={index} className="con-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Section */}
            <section className="con-value bg-dark">
                <div className="container">
                    <div className="value-grid">
                        <div className="value-content animate-up">
                            <span className="section-tag">Value First</span>
                            <h2 className="text-white">Drive Real Business Growth</h2>
                            <p className="text-light">Our consulting services are focused on delivering tangible business outcomes, from increased efficiency and lower costs to faster innovation and better customer experiences.</p>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-val">10+</span>
                                    <span className="stat-label">Years Experience</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">100+</span>
                                    <span className="stat-label">Clients Served</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">95%</span>
                                    <span className="stat-label">Success Rate</span>
                                </div>
                            </div>
                        </div>
                        <div className="value-visual animate-up delay-1">
                            <div className="bulb-visual">💡</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="con-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">transform your business?</span></h2>
                        <p>Let's collaborate to build a smarter, more efficient, and high-performing digital future.</p>
                        <Link to="/contact" className="btn btn-hero-primary">
                            Schedule a Consultation
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

export default Consulting;
