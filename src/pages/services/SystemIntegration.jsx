import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SystemIntegration.css';

const SystemIntegration = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        { title: 'API Integration', description: 'Seamlessly connecting your applications and services through robust API integrations.', icon: '🔗' },
        { title: 'Enterprise Service Bus', description: 'Implementing centralized messaging systems to orchestrate complex business processes.', icon: '🚌' },
        { title: 'Data Synchronization', description: 'Ensuring consistent and accurate data across all your integrated systems.', icon: '🔄' },
        { title: 'Legacy System Integration', description: 'Connecting your modern applications with legacy systems for unified operations.', icon: '🏢' },
        { title: 'B2B Integration', description: 'Streamlining communication and data exchange with your partners and suppliers.', icon: '🤝' },
        { title: 'Cloud Integration', description: 'Integrating your on-premise systems with cloud-based applications and services.', icon: '☁️' }
    ];

    return (
        <div className="system-integration-page">
            {/* Hero Section */}
            <section className="si-hero">
                <div className="container">
                    <div className="si-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Unifying Your Digital Ecosystem
                        </div>
                        <h1>Seamless <span className="text-gradient">System Integration.</span></h1>
                        <p>We connect your disparate systems, applications, and data to create a unified, efficient, and high-performance digital ecosystem.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Unify Your Systems
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="si-hero-visual">
                    <div className="si-grid-pattern"></div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="si-services">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>Integration Services</h2>
                        <p>Comprehensive solutions to connect and orchestrate your digital assets.</p>
                    </div>
                    <div className="si-grid">
                        {services.map((service, index) => (
                            <div key={index} className="si-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Efficiency Section */}
            <section className="si-efficiency bg-dark">
                <div className="container">
                    <div className="efficiency-grid">
                        <div className="efficiency-content animate-up">
                            <span className="section-tag">Efficiency First</span>
                            <h2 className="text-white">Unified Operations</h2>
                            <p className="text-light">Our integration solutions eliminate data silos and manual processes, ensuring your business operations are streamlined, accurate, and high-performing.</p>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-val">100%</span>
                                    <span className="stat-label">Data Accuracy</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">40%</span>
                                    <span className="stat-label">Process Speed</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">Zero</span>
                                    <span className="stat-label">Data Silos</span>
                                </div>
                            </div>
                        </div>
                        <div className="efficiency-visual animate-up delay-1">
                            <div className="link-visual">🔗</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="si-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">unify your systems?</span></h2>
                        <p>Let's build a connected and efficient digital future for your business.</p>
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

export default SystemIntegration;
