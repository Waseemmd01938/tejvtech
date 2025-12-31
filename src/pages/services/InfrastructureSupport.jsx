import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './InfrastructureSupport.css';

const InfrastructureSupport = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        { title: 'Server Management', description: 'Proactive monitoring and maintenance of physical and virtual servers.', icon: '🖥️' },
        { title: 'Network Administration', description: 'Design, implementation, and management of secure and high-performance networks.', icon: '🌐' },
        { title: 'Cloud Infrastructure', description: 'Expert management of AWS, Azure, and Google Cloud environments.', icon: '☁️' },
        { title: 'Backup & Recovery', description: 'Robust data protection and disaster recovery solutions to ensure business continuity.', icon: '💾' },
        { title: 'Security Hardening', description: 'Implementing industry-standard security protocols to protect your infrastructure.', icon: '🛡️' },
        { title: 'Performance Optimization', description: 'Fine-tuning your infrastructure for maximum speed and efficiency.', icon: '⚡' }
    ];

    return (
        <div className="infra-support-page">
            {/* Hero Section */}
            <section className="infra-hero">
                <div className="container">
                    <div className="infra-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Foundation of Digital Success
                        </div>
                        <h1>Enterprise <span className="text-gradient">Infrastructure Support.</span></h1>
                        <p>We build and maintain the robust, secure, and scalable infrastructure that powers your modern digital enterprise.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Manage Your Infrastructure
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="infra-hero-visual">
                    <div className="infra-grid-pattern"></div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="infra-features">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>Infrastructure Management</h2>
                        <p>Comprehensive services to ensure your foundation is solid and secure.</p>
                    </div>
                    <div className="infra-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="infra-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Security Section */}
            <section className="infra-security bg-dark">
                <div className="container">
                    <div className="security-grid">
                        <div className="security-content animate-up">
                            <span className="section-tag">Security First</span>
                            <h2 className="text-white">Uncompromising Reliability</h2>
                            <p className="text-light">We implement multi-layered security protocols and proactive monitoring to ensure your infrastructure is always protected and performing at its peak.</p>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-val">99.99%</span>
                                    <span className="stat-label">Uptime</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">24/7</span>
                                    <span className="stat-label">Monitoring</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">100%</span>
                                    <span className="stat-label">Secure</span>
                                </div>
                            </div>
                        </div>
                        <div className="security-visual animate-up delay-1">
                            <div className="shield-visual">🛡️</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="infra-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">solidify your foundation?</span></h2>
                        <p>Let's build a secure and scalable infrastructure for your business growth.</p>
                        <Link to="/contact" className="btn btn-hero-primary">
                            Get Expert Support
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

export default InfrastructureSupport;
