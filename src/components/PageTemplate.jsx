import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './PageTemplate.css';

const PageTemplate = ({ data }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    if (!data) return null;

    // Helper to format category for breadcrumb
    const getCategoryPath = (category) => {
        switch (category) {
            case 'Business Solutions': return '/business';
            case 'Industries': return '/industries';
            case 'Development': return '/development';
            case 'Services': return '/services';
            default: return '/';
        }
    };

    return (
        <div className="page-template">
            {/* Hero Section */}
            <section className="page-hero">
                <div className="page-hero-bg">
                    <img
                        src={data.heroImage || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'}
                        alt={data.title}
                        onError={(e) => {
                            e.target.src = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80';
                        }}
                    />
                    <div className="hero-overlay"></div>
                </div>
                <div className="container">
                    <div className="page-hero-content">
                        <div className="breadcrumb">
                            <Link to="/">Home</Link>
                            <span>/</span>
                            <Link to={getCategoryPath(data.category)}>{data.category}</Link>
                            <span>/</span>
                            <span className="current">{data.title}</span>
                        </div>
                        <span className="category-badge">{data.category}</span>
                        <h1>{data.title}</h1>
                        <p className="hero-subtitle">{data.subtitle}</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Get Started
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <a href="#overview" className="btn btn-hero-secondary">Learn More</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="page-overview" id="overview">
                <div className="container">
                    <div className="overview-grid">
                        <div className="overview-content">
                            <span className="section-tag">Overview</span>
                            <h2>Driving Value Through {data.title}</h2>
                            <p>{data.description}</p>

                            <div className="benefits-list">
                                <h3>Key Benefits</h3>
                                <ul>
                                    {data.benefits && data.benefits.map((benefit, index) => (
                                        <li key={index}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="sidebar-cta">
                            <h4>Ready to Transform?</h4>
                            <p>Our experts are ready to help you implement {data.title} in your organization.</p>
                            <Link to="/contact" className="btn btn-hero-primary" style={{ width: '100%' }}>
                                Contact Us Today
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="page-features bg-light">
                <div className="container">
                    <div className="section-header-centered">
                        <span className="section-tag">Capabilities</span>
                        <h2 className="section-heading">Core Features</h2>
                        <p className="section-description">
                            Explore the powerful capabilities we bring to your business with our {data.title} expertise.
                        </p>
                    </div>
                    <div className="features-grid">
                        {data.features && data.features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            {data.technologies && data.technologies.length > 0 && (
                <section className="page-tech">
                    <div className="container">
                        <div className="section-header-centered">
                            <span className="section-tag">Tech Stack</span>
                            <h2 className="section-heading">Technologies We Use</h2>
                            <p className="section-description">
                                We leverage industry-leading tools and platforms to deliver superior results.
                            </p>
                        </div>
                        <div className="tech-pills">
                            {data.technologies.map((tech, index) => (
                                <span key={index} className="tech-pill">{tech}</span>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Final CTA */}
            <section className="page-final-cta">
                <div className="container">
                    <div className="cta-box">
                        <h2>Let's Build Something Great Together</h2>
                        <p>
                            Take the first step towards digital excellence. Contact our team for a
                            personalized consultation on {data.title}.
                        </p>
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

export default PageTemplate;
