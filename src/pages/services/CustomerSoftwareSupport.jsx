import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CustomerSoftwareSupport.css';

const CustomerSoftwareSupport = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        { title: 'Application Support', description: 'Dedicated assistance for your custom software applications and platforms.', icon: '💻' },
        { title: 'Bug Fixing', description: 'Rapid identification and resolution of software defects and issues.', icon: '🐛' },
        { title: 'Feature Enhancement', description: 'Continuous improvement and addition of new features to your software.', icon: '✨' },
        { title: 'Performance Tuning', description: 'Optimizing your software for maximum speed, scalability, and efficiency.', icon: '⚡' },
        { title: 'Security Updates', description: 'Regular patching and security enhancements to protect your software and data.', icon: '🛡️' },
        { title: 'User Training', description: 'Empowering your users to get the most out of your software solutions.', icon: '🎓' }
    ];

    return (
        <div className="css-page">
            {/* Hero Section */}
            <section className="css-hero">
                <div className="container">
                    <div className="css-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Dedicated to Your Success
                        </div>
                        <h1>Expert <span className="text-gradient">Customer Software Support.</span></h1>
                        <p>We provide comprehensive support and maintenance services for your custom software, ensuring it always performs at its peak and evolves with your business.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Get Expert Support
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="css-hero-visual">
                    <div className="css-grid-pattern"></div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="css-features">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>Support Services</h2>
                        <p>Comprehensive assistance to keep your custom software running smoothly.</p>
                    </div>
                    <div className="css-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="css-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Section */}
            <section className="css-quality bg-dark">
                <div className="container">
                    <div className="quality-grid">
                        <div className="quality-content animate-up">
                            <span className="section-tag">Quality First</span>
                            <h2 className="text-white">Uncompromising Software Health</h2>
                            <p className="text-light">We prioritize the health and performance of your software, ensuring it remains secure, reliable, and user-friendly through proactive maintenance and support.</p>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-val">99%</span>
                                    <span className="stat-label">Resolution Rate</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">&lt;24h</span>
                                    <span className="stat-label">Fix Time</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">24/7</span>
                                    <span className="stat-label">Monitoring</span>
                                </div>
                            </div>
                        </div>
                        <div className="quality-visual animate-up delay-1">
                            <div className="code-visual">💻</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="css-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">optimize your software?</span></h2>
                        <p>Let's ensure your custom software is performing at its peak and driving your business forward.</p>
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

export default CustomerSoftwareSupport;
