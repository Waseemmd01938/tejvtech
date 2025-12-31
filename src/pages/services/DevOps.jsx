import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DevOps.css';

const DevOps = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        { title: 'CI/CD Pipelines', description: 'Automating your software delivery process for faster and more reliable releases.', icon: '🔄' },
        { title: 'Infrastructure as Code', description: 'Managing your infrastructure through code for consistency and scalability.', icon: '💻' },
        { title: 'Containerization', description: 'Expert implementation of Docker and Kubernetes for modern application deployment.', icon: '📦' },
        { title: 'Cloud Automation', description: 'Automating cloud resource management and scaling for maximum efficiency.', icon: '☁️' },
        { title: 'Monitoring & Logging', description: 'Comprehensive visibility into your application and infrastructure health.', icon: '📊' },
        { title: 'Security Automation', description: 'Integrating security into your DevOps process for continuous protection.', icon: '🛡️' }
    ];

    return (
        <div className="devops-page">
            {/* Hero Section */}
            <section className="do-hero">
                <div className="container">
                    <div className="do-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Accelerating Your Delivery
                        </div>
                        <h1>Modern <span className="text-gradient">DevOps Solutions.</span></h1>
                        <p>We help you bridge the gap between development and operations, enabling faster delivery, higher quality, and greater scalability for your software.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Optimize Your DevOps
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="do-hero-visual">
                    <div className="do-grid-pattern"></div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="do-services">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>DevOps Services</h2>
                        <p>Comprehensive solutions to automate and optimize your software lifecycle.</p>
                    </div>
                    <div className="do-grid">
                        {services.map((service, index) => (
                            <div key={index} className="do-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Efficiency Section */}
            <section className="do-efficiency bg-dark">
                <div className="container">
                    <div className="efficiency-grid">
                        <div className="efficiency-content animate-up">
                            <span className="section-tag">Efficiency First</span>
                            <h2 className="text-white">Continuous Innovation</h2>
                            <p className="text-light">Our DevOps practices are designed to eliminate bottlenecks and automate repetitive tasks, ensuring your team can focus on building and delivering value.</p>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-val">5x</span>
                                    <span className="stat-label">Faster Releases</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">90%</span>
                                    <span className="stat-label">Automation</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">Zero</span>
                                    <span className="stat-label">Manual Errors</span>
                                </div>
                            </div>
                        </div>
                        <div className="efficiency-visual animate-up delay-1">
                            <div className="gear-visual">⚙️</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="do-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">modernize your DevOps?</span></h2>
                        <p>Let's collaborate to build a high-performance and automated software delivery engine.</p>
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

export default DevOps;
