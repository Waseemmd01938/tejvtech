import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PLM.css';

const PLM = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        { title: 'Product Data Management', description: 'Centralized repository for all product-related data, ensuring a single source of truth.', icon: '📂' },
        { title: 'Lifecycle Orchestration', description: 'Managing the entire product lifecycle from ideation and design to manufacturing and service.', icon: '🔄' },
        { title: 'Change Management', description: 'Systematic tracking and management of product changes to ensure quality and compliance.', icon: '📝' },
        { title: 'BOM Management', description: 'Efficient management of complex Bill of Materials across the product lifecycle.', icon: '📋' },
        { title: 'Collaboration Tools', description: 'Enabling seamless collaboration between design, engineering, and manufacturing teams.', icon: '👥' },
        { title: 'Compliance Tracking', description: 'Ensuring products meet all industry standards and regulatory requirements.', icon: '📜' }
    ];

    return (
        <div className="plm-page">
            {/* Hero Section */}
            <section className="plm-hero">
                <div className="container">
                    <div className="plm-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Streamlining Product Innovation
                        </div>
                        <h1>Product Lifecycle <span className="text-gradient">Management (PLM).</span></h1>
                        <p>We provide comprehensive PLM solutions that help you manage the entire lifecycle of a product efficiently and cost-effectively.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Optimize Your Lifecycle
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="plm-hero-visual">
                    <div className="plm-grid-pattern"></div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="plm-features">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>PLM Capabilities</h2>
                        <p>Comprehensive services to manage your product innovation journey.</p>
                    </div>
                    <div className="plm-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="plm-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Efficiency Section */}
            <section className="plm-efficiency bg-dark">
                <div className="container">
                    <div className="efficiency-grid">
                        <div className="efficiency-content animate-up">
                            <span className="section-tag">Efficiency First</span>
                            <h2 className="text-white">Accelerate Time-to-Market</h2>
                            <p className="text-light">Our PLM solutions are designed to identify bottlenecks and optimize every aspect of your product development process, ensuring faster innovation and lower costs.</p>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-val">30%</span>
                                    <span className="stat-label">Faster Development</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">25%</span>
                                    <span className="stat-label">Cost Reduction</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">100%</span>
                                    <span className="stat-label">Data Integrity</span>
                                </div>
                            </div>
                        </div>
                        <div className="efficiency-visual animate-up delay-1">
                            <div className="cycle-visual">🔄</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="plm-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">optimize your product lifecycle?</span></h2>
                        <p>Let's build a smarter, more efficient product development future together.</p>
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

export default PLM;
