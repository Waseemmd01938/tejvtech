import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Affiliates.css';

const Affiliates = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const benefits = [
        {
            title: "Competitive Commission",
            description: "Earn industry-leading commissions on every referral that converts. Our tiered structure rewards high performers.",
            icon: "💰"
        },
        {
            title: "Marketing Assets",
            description: "Access a comprehensive library of banners, landing pages, and email templates designed to convert.",
            icon: "🎨"
        },
        {
            title: "Real-time Tracking",
            description: "Monitor your clicks, conversions, and earnings in real-time with our advanced affiliate dashboard.",
            icon: "📈"
        }
    ];

    const partners = [
        { name: 'TechGiant', category: 'Enterprise' },
        { name: 'CloudCorp', category: 'Infrastructure' },
        { name: 'DataSystems', category: 'Analytics' },
        { name: 'SecureNet', category: 'Security' },
        { name: 'AI_Innovators', category: 'Artificial Intelligence' },
        { name: 'WebWizards', category: 'Development' },
        { name: 'MobileMasters', category: 'Apps' },
        { name: 'FutureTech', category: 'Innovation' }
    ];

    return (
        <div className="affiliates-page">
            {/* Hero Section */}
            <section className="affiliates-hero">
                <div className="container">
                    <div className="affiliates-hero-content animate-up">
                        <span className="section-tag">Partner Program</span>
                        <h1>Grow Together with <span className="text-gradient">Tejvtech</span></h1>
                        <p>Join our network of industry leaders. We collaborate with the best to deliver innovation and excellence to our clients globally.</p>
                        <div className="hero-cta-group" style={{ justifyContent: 'center' }}>
                            <Link to="/contact" className="btn btn-hero-primary">
                                Become a Partner
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hero-bg-visual"></div>
            </section>

            {/* Benefits Section */}
            <section className="benefits-section-premium">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Benefits</span>
                        <h2>Why Partner With Us?</h2>
                        <p>Unlock exclusive benefits and accelerate your business growth with our comprehensive support system.</p>
                    </div>
                    <div className="benefits-grid">
                        {benefits.map((benefit, index) => (
                            <div className="benefit-card-premium animate-up" key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="benefit-icon-box">{benefit.icon}</div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners Grid */}
            <section className="partners-section-premium bg-light">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Ecosystem</span>
                        <h2>Trusted By Industry Leaders</h2>
                        <p>Our ecosystem of partners powers the next generation of digital solutions across the globe.</p>
                    </div>
                    <div className="partners-grid-layout animate-up delay-1">
                        {partners.map((partner, index) => (
                            <div className="partner-card-premium" key={index}>
                                <div className="partner-logo-box">
                                    <span className="partner-initial">{partner.name.charAt(0)}</span>
                                </div>
                                <div className="partner-info">
                                    <h4>{partner.name}</h4>
                                    <span>{partner.category}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="affiliates-cta-premium">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <div className="cta-content">
                            <h2>Ready to Scale Your Business?</h2>
                            <p>Join the Tejvtech Partner Program today and start your journey towards exponential growth and global reach.</p>
                            <Link to="/contact" className="btn btn-hero-primary">
                                Apply Now
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Affiliates;
