import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MigrationsUpgrades.css';

const MigrationsUpgrades = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const steps = [
        { title: 'Assessment', description: 'Comprehensive analysis of your current systems and data to identify risks and opportunities.', icon: '🔍' },
        { title: 'Planning', description: 'Detailed roadmap and strategy for a seamless transition with minimal downtime.', icon: '📋' },
        { title: 'Data Migration', description: 'Secure and accurate transfer of your data to the new platform or version.', icon: '🔄' },
        { title: 'System Upgrade', description: 'Implementation of the latest software versions and features for improved performance.', icon: '⚡' },
        { title: 'Testing', description: 'Rigorous validation to ensure everything is working perfectly in the new environment.', icon: '✅' },
        { title: 'Go-Live', description: 'Smooth transition to the upgraded system with expert support and monitoring.', icon: '🚀' }
    ];

    return (
        <div className="migrations-page">
            {/* Hero Section */}
            <section className="mig-hero">
                <div className="container">
                    <div className="mig-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Modernize Your Tech Stack
                        </div>
                        <h1>Seamless <span className="text-gradient">Migrations & Upgrades.</span></h1>
                        <p>We ensure a smooth, secure, and risk-free transition to modern platforms and the latest software versions for your business.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Start Your Migration
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mig-hero-visual">
                    <div className="mig-grid-pattern"></div>
                </div>
            </section>

            {/* Steps Grid */}
            <section className="mig-steps">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Process</span>
                        <h2>Migration Roadmap</h2>
                        <p>A meticulous approach to ensure a successful and stress-free upgrade journey.</p>
                    </div>
                    <div className="mig-grid">
                        {steps.map((step, index) => (
                            <div key={index} className="mig-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="mig-benefits bg-dark">
                <div className="container">
                    <div className="benefits-grid">
                        <div className="benefits-content animate-up">
                            <span className="section-tag">Why Upgrade?</span>
                            <h2 className="text-white">Stay Ahead of the Curve</h2>
                            <p className="text-light">Upgrading your systems is not just about new features—it's about security, performance, and future-proofing your business.</p>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-val">Zero</span>
                                    <span className="stat-label">Data Loss</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">30%</span>
                                    <span className="stat-label">Faster Performance</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">100%</span>
                                    <span className="stat-label">Secure</span>
                                </div>
                            </div>
                        </div>
                        <div className="benefits-visual animate-up delay-1">
                            <div className="upgrade-visual">🆙</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="mig-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">modernize your systems?</span></h2>
                        <p>Let's plan a seamless migration or upgrade for your business today.</p>
                        <Link to="/contact" className="btn btn-hero-primary">
                            Consult an Expert
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

export default MigrationsUpgrades;
