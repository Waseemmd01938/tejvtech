import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pageData } from '../../data/pageData';
import './APIDevelopment.css';

const APIDevelopment = () => {
    const data = pageData['api-development'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [

        { title: 'RESTful API Design', description: 'Building scalable and secure APIs following industry-standard REST principles.', icon: '🌐' },
        { title: 'GraphQL Development', description: 'Implementing flexible and efficient APIs with GraphQL for modern applications.', icon: '📊' },
        { title: 'API Security', description: 'Ensuring your APIs are protected with robust authentication and authorization.', icon: '🛡️' },
        { title: 'API Documentation', description: 'Comprehensive and interactive documentation for easy integration and use.', icon: '📚' },
        { title: 'API Management', description: 'Full lifecycle management of your APIs, from design to deployment and monitoring.', icon: '⚙️' },
        { title: 'Third-Party Integration', description: 'Connecting your applications with popular third-party APIs and services.', icon: '🔗' }
    ];

    return (
        <div className="api-development-page">
            {/* Hero Section */}
            <section className="api-hero">
                <div className="hero-bg-overlay" style={{ backgroundImage: `url(${data.heroImage})` }}></div>
                <div className="container">
                    <div className="api-hero-content animate-up">

                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Powering the Connected World
                        </div>
                        <h1>Scalable <span className="text-gradient">API Development.</span></h1>
                        <p>We design and build robust, secure, and high-performance APIs that enable seamless communication between your applications and services.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Build Your API
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="api-hero-visual">
                    <div className="api-grid-pattern"></div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="api-services">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>API Services</h2>
                        <p>Comprehensive solutions to build and manage your digital interfaces.</p>
                    </div>
                    <div className="api-grid">
                        {services.map((service, index) => (
                            <div key={index} className="api-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Performance Section */}
            <section className="api-performance bg-dark">
                <div className="container">
                    <div className="performance-grid">
                        <div className="performance-content animate-up">
                            <span className="section-tag">Performance First</span>
                            <h2 className="text-white">High-Speed Connectivity</h2>
                            <p className="text-light">Our APIs are optimized for speed and reliability, ensuring your applications can communicate efficiently and handle high volumes of traffic without compromise.</p>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-val">&lt;100ms</span>
                                    <span className="stat-label">Latency</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">99.99%</span>
                                    <span className="stat-label">Uptime</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">100%</span>
                                    <span className="stat-label">Secure</span>
                                </div>
                            </div>
                        </div>
                        <div className="performance-visual animate-up delay-1">
                            <div className="bolt-visual">⚡</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="api-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">build your next API?</span></h2>
                        <p>Let's collaborate to create a robust and scalable interface for your digital ecosystem.</p>
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

export default APIDevelopment;
