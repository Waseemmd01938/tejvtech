import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PartnerProductSupport.css';

const PartnerProductSupport = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        { title: 'Implementation', description: 'Expert setup and configuration of partner products to fit your business needs.', icon: '⚙️' },
        { title: 'Customization', description: 'Tailoring partner solutions with custom features and integrations.', icon: '🎨' },
        { title: 'Technical Support', description: 'Dedicated assistance for resolving issues and optimizing product performance.', icon: '🛠️' },
        { title: 'Training & Onboarding', description: 'Empowering your team to get the most out of partner products.', icon: '🎓' },
        { title: 'Upgrades & Migrations', description: 'Ensuring you are always on the latest and most secure product versions.', icon: '🆙' },
        { title: 'Performance Tuning', description: 'Optimizing product configurations for maximum speed and efficiency.', icon: '⚡' }
    ];

    return (
        <div className="partner-support-page">
            {/* Hero Section */}
            <section className="partner-hero">
                <div className="container">
                    <div className="partner-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Maximizing Your Tech Investments
                        </div>
                        <h1>Expert <span className="text-gradient">Partner Product Support.</span></h1>
                        <p>We provide specialized support and services for leading enterprise software products, ensuring you get maximum value from your technology investments.</p>
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
                <div className="partner-hero-visual">
                    <div className="partner-grid-pattern"></div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="partner-services">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>Product Services</h2>
                        <p>Comprehensive support for your enterprise software ecosystem.</p>
                    </div>
                    <div className="partner-grid">
                        {services.map((service, index) => (
                            <div key={index} className="partner-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="partner-list bg-light">
                <div className="container">
                    <div className="partner-list-content animate-up">
                        <h2>Products We Support</h2>
                        <div className="product-pills">
                            <span>SAP</span>
                            <span>Oracle</span>
                            <span>Salesforce</span>
                            <span>Microsoft Dynamics</span>
                            <span>ServiceNow</span>
                            <span>Adobe Experience Cloud</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="partner-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">optimize your products?</span></h2>
                        <p>Let's ensure your enterprise software is performing at its peak.</p>
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

export default PartnerProductSupport;
