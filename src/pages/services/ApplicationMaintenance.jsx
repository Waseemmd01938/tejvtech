import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pageData } from '../../data/pageData';
import './ApplicationMaintenance.css';

const ApplicationMaintenance = () => {
    const data = pageData['application-maintenance'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        { title: 'Regular Updates', description: 'Ensuring your applications are always running on the latest and most secure software versions.', icon: '🆙' },
        { title: 'Performance Monitoring', description: 'Proactive tracking of application health and performance to identify and resolve issues.', icon: '📊' },
        { title: 'Bug Fixing', description: 'Rapid identification and resolution of software defects to minimize downtime.', icon: '🐛' },
        { title: 'Security Patching', description: 'Regular implementation of security patches to protect your applications and data.', icon: '🛡️' },
        { title: 'Feature Enhancement', description: 'Continuous improvement and addition of new features to keep your apps competitive.', icon: '✨' },
        { title: 'User Support', description: 'Dedicated assistance for your users to ensure they get the most out of your applications.', icon: '👥' }
    ];

    return (
        <div className="app-maintenance-page">
            {/* Hero Section */}
            <section className="am-hero">
                <div className="hero-bg-overlay" style={{ backgroundImage: `url(${data.heroImage})` }}></div>
                <div className="container">
                    <div className="am-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Ensuring Long-Term Success
                        </div>
                        <h1>Expert <span className="text-gradient">Application Maintenance.</span></h1>
                        <p>{data.description}</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Maintain Your Apps
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="am-services">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>Maintenance Services</h2>
                        <p>Comprehensive solutions to keep your applications running at their peak.</p>
                    </div>
                    <div className="am-grid">
                        {services.map((service, index) => (
                            <div key={index} className="am-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Reliability Section */}
            <section className="am-reliability bg-dark">
                <div className="container">
                    <div className="reliability-grid">
                        <div className="reliability-content animate-up">
                            <span className="section-tag">Reliability First</span>
                            <h2 className="text-white">Uninterrupted Performance</h2>
                            <p className="text-light">Our proactive maintenance approach ensures your applications are always available and performing optimally, minimizing downtime and maximizing user satisfaction.</p>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-val">99.9%</span>
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
                        <div className="reliability-visual animate-up delay-1">
                            <div className="wrench-visual">🔧</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="am-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">optimize your applications?</span></h2>
                        <p>Let's ensure your software is always performing at its peak and driving your business forward.</p>
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

export default ApplicationMaintenance;
