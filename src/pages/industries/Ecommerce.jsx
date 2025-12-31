import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pageData } from '../../data/pageData';
import './Ecommerce.css';

const Ecommerce = () => {
    const data = pageData['e-commerce'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="ecommerce-page">
            {/* Hero Section */}
            <section className="ecom-hero">
                <div className="hero-bg-overlay" style={{ backgroundImage: `url(${data.heroImage})` }}></div>
                <div className="container">
                    <div className="ecom-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Retail Revolution
                        </div>
                        <h1>Scale Your <span className="text-gradient">Online Empire.</span></h1>
                        <p>{data.description}</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Launch Your Store
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="ecom-features">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>E-Commerce Solutions</h2>
                        <p>End-to-end services to build and grow your digital retail business.</p>
                    </div>
                    <div className="ecom-grid">
                        {data.features.map((feature, index) => (
                            <div key={index} className="ecom-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Platforms Section */}
            <section className="ecom-platforms bg-light">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Tech Stack</span>
                        <h2>Platforms We Master</h2>
                        <p>We work with the world's leading e-commerce platforms to deliver the best results.</p>
                    </div>
                    <div className="platform-pills animate-up">
                        <span>Shopify</span>
                        <span>Magento</span>
                        <span>WooCommerce</span>
                        <span>BigCommerce</span>
                        <span>Custom Headless</span>
                        <span>Salesforce Commerce</span>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="ecom-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">boost your sales?</span></h2>
                        <p>Let's build a world-class e-commerce experience for your customers.</p>
                        <Link to="/contact" className="btn btn-hero-primary">
                            Get a Free Consultation
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

export default Ecommerce;
