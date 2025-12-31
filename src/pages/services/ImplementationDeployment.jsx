import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ImplementationDeployment.css';

const ImplementationDeployment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const steps = [
        { title: 'Environment Setup', description: 'Configuring secure and scalable infrastructure for your application deployment.', icon: '🏗️' },
        { title: 'Software Installation', description: 'Expert installation and configuration of your software and dependencies.', icon: '💾' },
        { title: 'Data Migration', description: 'Secure and accurate transfer of your data to the new environment.', icon: '🔄' },
        { title: 'System Integration', description: 'Connecting your new application with existing systems and services.', icon: '🔗' },
        { title: 'Testing & Validation', description: 'Rigorous testing to ensure everything is working perfectly in the production environment.', icon: '✅' },
        { title: 'Go-Live Support', description: 'Smooth transition to the live system with expert monitoring and assistance.', icon: '🚀' }
    ];

    return (
        <div className="implementation-page">
            {/* Hero Section */}
            <section className="id-hero">
                <div className="container">
                    <div className="id-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            From Development to Production
                        </div>
                        <h1>Seamless <span className="text-gradient">Implementation & Deployment.</span></h1>
                        <p>We ensure a smooth, secure, and risk-free transition of your software from development to a high-performance production environment.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Deploy Your Solution
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="id-hero-visual">
                    <div className="id-grid-pattern"></div>
                </div>
            </section>

            {/* Steps Grid */}
            <section className="id-steps">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Process</span>
                        <h2>Deployment Roadmap</h2>
                        <p>A meticulous approach to ensure a successful and stress-free launch journey.</p>
                    </div>
                    <div className="id-grid">
                        {steps.map((step, index) => (
                            <div key={index} className="id-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reliability Section */}
            <section className="id-reliability bg-dark">
                <div className="container">
                    <div className="reliability-grid">
                        <div className="reliability-content animate-up">
                            <span className="section-tag">Reliability First</span>
                            <h2 className="text-white">Uninterrupted Go-Live</h2>
                            <p className="text-light">Our deployment process is designed for zero downtime and maximum security, ensuring your users have a seamless experience from day one.</p>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-val">Zero</span>
                                    <span className="stat-label">Downtime</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">100%</span>
                                    <span className="stat-label">Success Rate</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">24/7</span>
                                    <span className="stat-label">Monitoring</span>
                                </div>
                            </div>
                        </div>
                        <div className="reliability-visual animate-up delay-1">
                            <div className="launch-visual">🚀</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="id-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">launch your solution?</span></h2>
                        <p>Let's plan a seamless implementation and deployment for your business today.</p>
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

export default ImplementationDeployment;
