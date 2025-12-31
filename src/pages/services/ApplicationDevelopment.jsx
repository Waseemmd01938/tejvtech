import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pageData } from '../../data/pageData';
import './ApplicationDevelopment.css';

const ApplicationDevelopment = () => {
    const data = pageData['application-development'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [

        { title: 'Custom Web Apps', description: 'High-performance, scalable web applications built with modern frameworks.', icon: '🌐' },
        { title: 'Mobile App Development', description: 'Native and cross-platform mobile apps for iOS and Android.', icon: '📱' },
        { title: 'Enterprise Software', description: 'Robust and secure software solutions tailored for large-scale business operations.', icon: '🏢' },
        { title: 'Cloud-Native Apps', description: 'Applications designed and built specifically for cloud environments.', icon: '☁️' },
        { title: 'SaaS Development', description: 'Building scalable and secure Software-as-a-Service platforms.', icon: '🚀' },
        { title: 'Legacy Modernization', description: 'Transforming legacy applications into modern, high-performance systems.', icon: '🔄' }
    ];

    return (
        <div className="app-dev-page">
            {/* Hero Section */}
            <section className="ad-hero">
                <div className="hero-bg-overlay" style={{ backgroundImage: `url(${data.heroImage})` }}></div>
                <div className="container">
                    <div className="ad-hero-content animate-up">

                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Engineering Your Digital Future
                        </div>
                        <h1>Custom <span className="text-gradient">Application Development.</span></h1>
                        <p>We build high-performance, scalable, and secure applications that solve complex business challenges and drive growth.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Start Your Project
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="ad-hero-visual">
                    <div className="ad-grid-pattern"></div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="ad-services">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>Development Services</h2>
                        <p>Comprehensive solutions to build your next-generation applications.</p>
                    </div>
                    <div className="ad-grid">
                        {services.map((service, index) => (
                            <div key={index} className="ad-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Innovation Section */}
            <section className="ad-innovation bg-dark">
                <div className="container">
                    <div className="innovation-grid">
                        <div className="innovation-content animate-up">
                            <span className="section-tag">Innovation First</span>
                            <h2 className="text-white">Built for Performance</h2>
                            <p className="text-light">Our development process prioritizes speed, security, and scalability, ensuring your applications are ready for the demands of the modern digital world.</p>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-val">100+</span>
                                    <span className="stat-label">Apps Delivered</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">99.9%</span>
                                    <span className="stat-label">Code Quality</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">2x</span>
                                    <span className="stat-label">Faster Delivery</span>
                                </div>
                            </div>
                        </div>
                        <div className="innovation-visual animate-up delay-1">
                            <div className="rocket-visual">🚀</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="ad-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">build your next app?</span></h2>
                        <p>Let's collaborate to turn your vision into a high-performance digital reality.</p>
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

export default ApplicationDevelopment;
