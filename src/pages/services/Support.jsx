import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Support.css';

const Support = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        { title: '24/7 Helpdesk', description: 'Round-the-clock technical assistance for your employees and customers.', icon: '🎧' },
        { title: 'L1/L2/L3 Support', description: 'Tiered support structure to handle everything from basic queries to complex technical issues.', icon: '🛠️' },
        { title: 'SLA Management', description: 'Guaranteed response and resolution times to ensure business continuity.', icon: '⏱️' },
        { title: 'Incident Management', description: 'Systematic tracking and resolution of technical incidents to minimize impact.', icon: '🚨' },
        { title: 'Knowledge Base', description: 'Comprehensive documentation and self-service resources for common issues.', icon: '📚' },
        { title: 'Performance Monitoring', description: 'Proactive monitoring of systems to identify and resolve issues before they escalate.', icon: '📊' }
    ];

    return (
        <div className="support-page">
            {/* Hero Section */}
            <section className="sup-hero">
                <div className="container">
                    <div className="sup-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Always Online, Always Ready
                        </div>
                        <h1>Reliable <span className="text-gradient">Technical Support.</span></h1>
                        <p>We provide comprehensive technical support and helpdesk services that ensure your business operations never skip a beat.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Get Support Now
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="sup-hero-visual">
                    <div className="support-grid-pattern"></div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="sup-features">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>Support Capabilities</h2>
                        <p>Comprehensive assistance to keep your business running smoothly.</p>
                    </div>
                    <div className="sup-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="sup-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Dashboard Section */}
            <section className="sup-dashboard bg-dark">
                <div className="container">
                    <div className="dashboard-grid">
                        <div className="dashboard-content animate-up">
                            <span className="section-tag">Real-time Monitoring</span>
                            <h2 className="text-white">Proactive System Health</h2>
                            <p className="text-light">Our support team uses advanced monitoring tools to keep a constant eye on your infrastructure, identifying and resolving potential issues before they affect your business.</p>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-val">99.9%</span>
                                    <span className="stat-label">Uptime</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">&lt;15m</span>
                                    <span className="stat-label">Response Time</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">24/7</span>
                                    <span className="stat-label">Availability</span>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-visual animate-up delay-1">
                            <div className="mock-dashboard">
                                <div className="dash-header"><span>SYSTEM_STATUS</span><span>ONLINE</span></div>
                                <div className="dash-body">
                                    <div className="dash-line">CPU Usage: 12%</div>
                                    <div className="dash-line">Memory: 45%</div>
                                    <div className="dash-line">Network: Optimal</div>
                                    <div className="dash-line">Security: Active</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="sup-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Need <span className="text-gradient">immediate assistance?</span></h2>
                        <p>Our expert support team is ready to help you resolve any technical challenges.</p>
                        <Link to="/contact" className="btn btn-hero-primary">
                            Contact Helpdesk
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

export default Support;
