import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pageData } from '../../data/pageData';
import './Aerospace.css';

const Aerospace = () => {
    const data = pageData['aerospace'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="aerospace-page">
            {/* Hero Section */}
            <section className="aero-hero">
                <div className="hero-bg-overlay" style={{ backgroundImage: `url(${data.heroImage})` }}></div>
                <div className="container">
                    <div className="aero-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Aviation Innovation
                        </div>
                        <h1>Reaching New <span className="text-gradient">Heights.</span></h1>
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
            <section className="aero-solutions">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>Aerospace Solutions</h2>
                        <p>Specialized technology services designed for the unique needs of the aviation sector.</p>
                    </div>
                    <div className="aero-grid">
                        {data.features.map((solution, index) => (
                            <div key={index} className="aero-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{solution.icon}</div>
                                <h3>{solution.title}</h3>
                                <p>{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Innovation Section */}
            <section className="aero-innovation bg-dark">
                <div className="container">
                    <div className="innovation-grid">
                        <div className="innovation-content animate-up">
                            <span className="section-tag">Innovation First</span>
                            <h2 className="text-white">Pushing Boundaries</h2>
                            <p className="text-light">Our solutions leverage the latest in AI, IoT, and digital twin technology to solve the most complex challenges in the aerospace industry.</p>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-val">15%</span>
                                    <span className="stat-label">Fuel Efficiency</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">30%</span>
                                    <span className="stat-label">Less Downtime</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">100%</span>
                                    <span className="stat-label">Compliance</span>
                                </div>
                            </div>
                        </div>
                        <div className="innovation-visual animate-up delay-1">
                            <div className="space-visual"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="aero-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">innovate in aerospace?</span></h2>
                        <p>Let's collaborate to build the next generation of aviation technology.</p>
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

export default Aerospace;
