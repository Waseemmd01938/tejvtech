import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pageData } from '../../data/pageData';
import './Manufacturing.css';

const Manufacturing = () => {
    const data = pageData['manufacturing'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="manufacturing-page">
            {/* Hero Section */}
            <section className="mfg-hero">
                <div className="hero-bg-overlay" style={{ backgroundImage: `url(${data.heroImage})` }}></div>
                <div className="container">
                    <div className="mfg-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Industry 4.0
                        </div>
                        <h1>The Future of <span className="text-gradient">Manufacturing.</span></h1>
                        <p>{data.description}</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Modernize Your Factory
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="mfg-solutions">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>Smart Manufacturing</h2>
                        <p>Cutting-edge technology services for the modern industrial landscape.</p>
                    </div>
                    <div className="mfg-grid">
                        {data.features.map((solution, index) => (
                            <div key={index} className="mfg-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{solution.icon}</div>
                                <h3>{solution.title}</h3>
                                <p>{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Efficiency Section */}
            <section className="mfg-efficiency bg-dark">
                <div className="container">
                    <div className="efficiency-grid">
                        <div className="efficiency-content animate-up">
                            <span className="section-tag">Efficiency First</span>
                            <h2 className="text-white">Optimize Every Process</h2>
                            <p className="text-light">Our solutions are designed to identify bottlenecks and optimize every aspect of your production line, ensuring maximum output with minimal waste.</p>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-val">30%</span>
                                    <span className="stat-label">Cost Reduction</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">50%</span>
                                    <span className="stat-label">Less Downtime</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">25%</span>
                                    <span className="stat-label">Higher Output</span>
                                </div>
                            </div>
                        </div>
                        <div className="efficiency-visual animate-up delay-1">
                            <div className="blueprint-visual"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="mfg-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">transform your production?</span></h2>
                        <p>Let's build a smarter, more efficient manufacturing future together.</p>
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

export default Manufacturing;
