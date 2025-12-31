import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { pageData } from '../data/pageData';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const location = useLocation();
    const [page, setPage] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        setLoading(true);

        // Normalize the serviceId to match our data keys
        const normalizedId = serviceId?.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '');

        if (pageData[normalizedId]) {
            setPage(pageData[normalizedId]);
        } else {
            // Fallback - generate generic page
            setPage({
                category: 'Services',
                title: serviceId?.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') || 'Service',
                subtitle: 'Professional solutions tailored to your needs',
                heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
                description: 'We provide comprehensive services designed to help your business succeed in today\'s competitive landscape.',
                features: [
                    { title: 'Expert Team', description: 'Skilled professionals with industry experience', icon: '👥' },
                    { title: 'Quality Delivery', description: 'High standards and best practices', icon: '✅' },
                    { title: 'Timely Execution', description: 'On-time project completion', icon: '⏱️' },
                    { title: 'Ongoing Support', description: 'Continuous assistance and maintenance', icon: '🤝' }
                ],
                benefits: ['Cost-effective solutions', 'Scalable approach', 'Expert guidance', 'Long-term partnership'],
                technologies: ['Modern Technologies', 'Industry Best Practices', 'Agile Methodology']
            });
        }

        setLoading(false);
    }, [serviceId, location.pathname]);

    if (loading) {
        return (
            <div className="service-detail-page">
                <div className="loading-state">
                    <div className="loader"></div>
                    <p>Loading...</p>
                </div>
            </div>
        );
    }

    if (!page) {
        return (
            <div className="service-detail-page">
                <div className="not-found">
                    <h2>Page Not Found</h2>
                    <p>The page you're looking for doesn't exist.</p>
                    <Link to="/" className="btn btn-primary">Go Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="service-detail-page">
            {/* Hero Section */}
            <section className="detail-hero">
                <div className="detail-hero-bg">
                    <img src={page.heroImage} alt={page.title} />
                    <div className="hero-overlay"></div>
                </div>
                <div className="container detail-hero-content">
                    <nav className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <Link to={`/${page.category.toLowerCase().replace(' ', '-')}`}>{page.category}</Link>
                        <span>/</span>
                        <span className="current">{page.title}</span>
                    </nav>
                    <span className="category-badge">{page.category}</span>
                    <h1>{page.title}</h1>
                    <p className="hero-subtitle">{page.subtitle}</p>
                    <div className="hero-actions">
                        <Link to="/contact" className="btn btn-primary-light">
                            Get Started
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </Link>
                        <a href="#features" className="btn btn-outline-light">Learn More</a>
                    </div>
                </div>
            </section>

            {/* Description Section */}
            <section className="detail-description">
                <div className="container">
                    <div className="description-grid">
                        <div className="description-content">
                            <h2>Overview</h2>
                            <p>{page.description}</p>
                            <div className="quick-benefits">
                                {page.benefits.map((benefit, index) => (
                                    <div key={index} className="benefit-item">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="description-sidebar">
                            <div className="sidebar-card">
                                <h4>Quick Contact</h4>
                                <p>Ready to discuss your project?</p>
                                <Link to="/contact" className="btn btn-primary btn-block">
                                    Talk to an Expert
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="detail-features">
                <div className="container">
                    <div className="section-header-centered">
                        <h2>What We Offer</h2>
                        <p>Comprehensive solutions tailored to your specific needs</p>
                    </div>
                    <div className="features-grid">
                        {page.features.map((feature, index) => (
                            <div key={index} className="feature-card" style={{ '--delay': `${index * 0.1}s` }}>
                                <div className="feature-icon">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="detail-technologies">
                <div className="container">
                    <div className="tech-content">
                        <h2>Technologies & Tools</h2>
                        <p>We leverage industry-leading technologies to deliver exceptional results</p>
                        <div className="tech-tags">
                            {page.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="detail-process">
                <div className="container">
                    <div className="section-header-centered">
                        <h2>Our Process</h2>
                        <p>A proven methodology for delivering successful outcomes</p>
                    </div>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-number">1</div>
                            <h3>Discovery</h3>
                            <p>Understand your requirements, goals, and challenges</p>
                        </div>
                        <div className="process-connector"></div>
                        <div className="process-step">
                            <div className="step-number">2</div>
                            <h3>Planning</h3>
                            <p>Design solution architecture and project roadmap</p>
                        </div>
                        <div className="process-connector"></div>
                        <div className="process-step">
                            <div className="step-number">3</div>
                            <h3>Execution</h3>
                            <p>Agile development with regular updates</p>
                        </div>
                        <div className="process-connector"></div>
                        <div className="process-step">
                            <div className="step-number">4</div>
                            <h3>Delivery</h3>
                            <p>Launch and ongoing support</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="detail-cta">
                <div className="container">
                    <div className="cta-content">
                        <h2>Ready to Get Started?</h2>
                        <p>Let's discuss how we can help you achieve your goals with {page.title.toLowerCase()}.</p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-primary-light">
                                Start Your Project
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link to="/portfolio" className="btn btn-outline-light">
                                View Our Work
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetail;
