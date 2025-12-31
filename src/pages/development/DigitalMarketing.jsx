import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './DigitalMarketing.css';

const DigitalMarketing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        { title: 'Search Engine Optimization', description: 'Improve your organic visibility and rank higher on search engines with our data-driven SEO strategies.', icon: '🔍' },
        { title: 'Content Marketing', description: 'Engage your audience with high-quality, relevant content that builds trust and drives conversions.', icon: '📝' },
        { title: 'Social Media Management', description: 'Build a strong community and increase brand awareness across all major social platforms.', icon: '📱' },
        { title: 'Pay-Per-Click Advertising', description: 'Maximize your ROI with targeted ad campaigns on Google, Meta, and LinkedIn.', icon: '🎯' },
        { title: 'Email Marketing', description: 'Nurture leads and drive repeat business with personalized, automated email campaigns.', icon: '📧' },
        { title: 'Analytics & Reporting', description: 'Track your performance with comprehensive dashboards and actionable insights.', icon: '📊' }
    ];

    return (
        <div className="marketing-page">
            {/* Hero Section */}
            <section className="marketing-hero">
                <div className="container">
                    <div className="marketing-hero-content animate-up">
                        <span className="hero-tag">Growth Focused</span>
                        <h1>Drive Growth with <span className="text-gradient">Digital Precision.</span></h1>
                        <p>We combine creativity with advanced analytics to deliver marketing strategies that don't just look good—they deliver measurable results for your business.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Grow Your Business
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="marketing-hero-visual">
                    <div className="floating-stats stats-1">ROI +300%</div>
                    <div className="floating-stats stats-2">Leads +150%</div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="marketing-services">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>Marketing Solutions</h2>
                        <p>Comprehensive digital marketing services designed to scale your brand.</p>
                    </div>
                    <div className="marketing-grid">
                        {services.map((service, index) => (
                            <div key={index} className="marketing-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Strategy Section */}
            <section className="marketing-strategy bg-light">
                <div className="container">
                    <div className="strategy-grid">
                        <div className="strategy-content animate-up">
                            <span className="section-tag">Our Approach</span>
                            <h2>Data-Driven Success</h2>
                            <p>We don't believe in guesswork. Every campaign we run is backed by rigorous data analysis and continuous optimization to ensure you get the best possible results.</p>
                            <div className="strategy-steps">
                                <div className="step">
                                    <span className="step-num">01</span>
                                    <div>
                                        <h4>Analyze</h4>
                                        <p>We study your market, competitors, and audience.</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <span className="step-num">02</span>
                                    <div>
                                        <h4>Strategize</h4>
                                        <p>We build a custom roadmap for your growth.</p>
                                    </div>
                                </div>
                                <div className="step">
                                    <span className="step-num">03</span>
                                    <div>
                                        <h4>Execute</h4>
                                        <p>We launch and optimize your campaigns.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="strategy-visual animate-up delay-1">
                            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Marketing Strategy" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="marketing-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">scale your brand?</span></h2>
                        <p>Let's discuss how we can help you achieve your business goals through digital marketing.</p>
                        <Link to="/contact" className="btn btn-hero-primary">
                            Get a Free Audit
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

export default DigitalMarketing;
