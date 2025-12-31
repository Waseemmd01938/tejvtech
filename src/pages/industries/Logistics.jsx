import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pageData } from '../../data/pageData';
import './Logistics.css';

const Logistics = () => {
    const data = pageData['logistics'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="logistics-page">
            {/* Hero Section */}
            <section className="log-hero">
                <div className="hero-bg-overlay" style={{ backgroundImage: `url(${data.heroImage})` }}></div>
                <div className="container">
                    <div className="log-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Supply Chain Excellence
                        </div>
                        <h1>Optimizing the <span className="text-gradient">Global Flow.</span></h1>
                        <p>{data.description}</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Optimize Your Logistics
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="log-solutions">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>Logistics Solutions</h2>
                        <p>Comprehensive technology services designed for the modern supply chain.</p>
                    </div>
                    <div className="log-grid">
                        {data.features.map((solution, index) => (
                            <div key={index} className="log-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{solution.icon}</div>
                                <h3>{solution.title}</h3>
                                <p>{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Efficiency Section */}
            <section className="log-efficiency bg-dark">
                <div className="container">
                    <div className="efficiency-grid">
                        <div className="efficiency-content animate-up">
                            <span className="section-tag">Efficiency First</span>
                            <h2 className="text-white">Streamline Your Operations</h2>
                            <p className="text-light">Our solutions are designed to identify bottlenecks and optimize every aspect of your logistics network, ensuring faster deliveries and lower costs.</p>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-val">20%</span>
                                    <span className="stat-label">Fuel Savings</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">15%</span>
                                    <span className="stat-label">Faster Delivery</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">99%</span>
                                    <span className="stat-label">Inventory Accuracy</span>
                                </div>
                            </div>
                        </div>
                        <div className="efficiency-visual animate-up delay-1">
                            <div className="map-visual"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="log-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">scale your logistics?</span></h2>
                        <p>Let's build a smarter, more efficient supply chain future together.</p>
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

export default Logistics;
