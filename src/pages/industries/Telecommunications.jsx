import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pageData } from '../../data/pageData';
import './Telecommunications.css';

const Telecommunications = () => {
    const data = pageData['telecommunications'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="telecom-page">
            {/* Hero Section */}
            <section className="tel-hero">
                <div className="hero-bg-overlay" style={{ backgroundImage: `url(${data.heroImage})` }}></div>
                <div className="container">
                    <div className="tel-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Next-Gen Connectivity
                        </div>
                        <h1>Connecting the <span className="text-gradient">Connected World.</span></h1>
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
            <section className="tel-solutions">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>Telecom Solutions</h2>
                        <p>Specialized technology services designed for the evolving telecommunications landscape.</p>
                    </div>
                    <div className="tel-grid">
                        {data.features.map((solution, index) => (
                            <div key={index} className="tel-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{solution.icon}</div>
                                <h3>{solution.title}</h3>
                                <p>{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performance Section */}
            <section className="tel-performance bg-dark">
                <div className="container">
                    <div className="performance-grid">
                        <div className="performance-content animate-up">
                            <span className="section-tag">Performance First</span>
                            <h2 className="text-white">Unmatched Network Speed</h2>
                            <p className="text-light">Our solutions are designed to optimize every aspect of your network, ensuring maximum throughput and minimal latency for your customers.</p>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-val">10Gbps+</span>
                                    <span className="stat-label">Network Speed</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">99.99%</span>
                                    <span className="stat-label">Uptime</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">&lt;1ms</span>
                                    <span className="stat-label">Latency</span>
                                </div>
                            </div>
                        </div>
                        <div className="performance-visual animate-up delay-1">
                            <div className="signal-visual"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="tel-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">lead the 5G revolution?</span></h2>
                        <p>Let's collaborate to build the next generation of telecommunications technology.</p>
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

export default Telecommunications;
