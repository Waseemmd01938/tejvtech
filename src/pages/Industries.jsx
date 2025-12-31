import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Industries.css';

const Industries = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const industries = [
        {
            id: 'healthcare',
            title: 'Healthcare & Life Sciences',
            description: 'Transforming patient care with digital health solutions, telemedicine platforms, and AI-powered diagnostics.',
            icon: '🏥',
            solutions: ['Electronic Health Records', 'Telemedicine Platforms', 'AI Diagnostics', 'Patient Portals'],
            stats: { projects: 25, clients: 12 },
            color: '#ef4444'
        },
        {
            id: 'fintech',
            title: 'Financial Services & FinTech',
            description: 'Building secure, compliant financial platforms with advanced fraud detection and seamless payment processing.',
            icon: '💳',
            solutions: ['Digital Banking', 'Payment Gateways', 'Fraud Detection', 'Regulatory Compliance'],
            stats: { projects: 40, clients: 18 },
            color: '#3b82f6'
        },
        {
            id: 'ecommerce',
            title: 'Retail & E-Commerce',
            description: 'Creating engaging shopping experiences with personalized recommendations and omnichannel integration.',
            icon: '🛒',
            solutions: ['E-Commerce Platforms', 'Inventory Management', 'Customer Analytics', 'POS Systems'],
            stats: { projects: 35, clients: 20 },
            color: '#f59e0b'
        },
        {
            id: 'manufacturing',
            title: 'Manufacturing & Industrial',
            description: 'Enabling Industry 4.0 with IoT integration, predictive maintenance, and smart factory solutions.',
            icon: '🏭',
            solutions: ['IoT Integration', 'Predictive Maintenance', 'Quality Control', 'Supply Chain'],
            stats: { projects: 20, clients: 8 },
            color: '#10b981'
        },
        {
            id: 'education',
            title: 'Education & EdTech',
            description: 'Revolutionizing learning with interactive LMS platforms, virtual classrooms, and adaptive learning systems.',
            icon: '📚',
            solutions: ['LMS Platforms', 'Virtual Classrooms', 'Student Analytics', 'Assessment Tools'],
            stats: { projects: 30, clients: 15 },
            color: '#8b5cf6'
        },
        {
            id: 'logistics',
            title: 'Logistics & Transportation',
            description: 'Optimizing supply chains with real-time tracking, route optimization, and warehouse automation.',
            icon: '🚚',
            solutions: ['Fleet Management', 'Route Optimization', 'Warehouse Systems', 'Delivery Tracking'],
            stats: { projects: 18, clients: 10 },
            color: '#06b6d4'
        }
    ];

    const caseStudies = [
        {
            industry: 'Healthcare',
            title: 'AI-Powered Diagnostic Platform',
            result: '40% faster diagnosis accuracy',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'
        },
        {
            industry: 'FinTech',
            title: 'Digital Banking Transformation',
            result: '500K+ active users in 6 months',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80'
        },
        {
            industry: 'E-Commerce',
            title: 'Omnichannel Retail Platform',
            result: '60% increase in conversions',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6d58d?auto=format&fit=crop&w=600&q=80'
        }
    ];

    return (
        <div className="industries-page">
            {/* Hero Section */}
            <section className="industries-hero">
                <div className="container">
                    <div className="industries-hero-content animate-up">
                        <span className="section-tag">Industries We Serve</span>
                        <h1>Domain Expertise Across <span className="text-gradient">Global Sectors</span></h1>
                        <p>We bring deep industry knowledge combined with technical excellence to deliver solutions that understand your unique challenges and drive growth.</p>
                    </div>
                </div>
                <div className="hero-bg-visual"></div>
            </section>

            {/* Industries Grid */}
            <section className="industries-grid-section">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Specialization</span>
                        <h2>Sector-Specific Solutions</h2>
                        <p>Our teams have delivered impactful solutions across diverse industries, understanding the nuances that matter for your business.</p>
                    </div>
                    <div className="industries-grid">
                        {industries.map((industry, index) => (
                            <div
                                key={industry.id}
                                className="industry-card-premium animate-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="industry-card-inner">
                                    <div className="industry-icon-box" style={{ background: `${industry.color}15`, color: industry.color }}>
                                        {industry.icon}
                                    </div>
                                    <h3>{industry.title}</h3>
                                    <p>{industry.description}</p>
                                    <div className="industry-solutions-list">
                                        {industry.solutions.map((solution, i) => (
                                            <span key={i} className="solution-pill">{solution}</span>
                                        ))}
                                    </div>
                                    <div className="industry-stats-row">
                                        <div className="industry-stat">
                                            <span className="stat-num">{industry.stats.projects}+</span>
                                            <span className="stat-lab">Projects</span>
                                        </div>
                                        <div className="industry-stat">
                                            <span className="stat-num">{industry.stats.clients}+</span>
                                            <span className="stat-lab">Clients</span>
                                        </div>
                                    </div>
                                    <Link to={`/industry/${industry.id}`} className="industry-btn">
                                        Explore Industry
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className="card-glow" style={{ background: `radial-gradient(circle at center, ${industry.color}15, transparent 70%)` }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="industry-success-section bg-light">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Success Stories</span>
                        <h2>Real Results, Real Impact</h2>
                        <p>Explore how we've helped industry leaders overcome challenges and achieve their digital goals.</p>
                    </div>
                    <div className="success-grid">
                        {caseStudies.map((study, index) => (
                            <div key={index} className="success-card-premium animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="success-image-box">
                                    <img src={study.image} alt={study.title} />
                                    <span className="success-industry-tag">{study.industry}</span>
                                </div>
                                <div className="success-content-box">
                                    <h3>{study.title}</h3>
                                    <div className="success-result-badge">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                        <span>{study.result}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="success-cta-box animate-up">
                        <Link to="/portfolio" className="btn btn-outline">
                            View All Case Studies
                        </Link>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="industries-cta-premium">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <div className="cta-content">
                            <h2>Don't See Your Industry?</h2>
                            <p>We work across all sectors. Let's discuss how our expertise can be applied to your specific industry challenges and opportunities.</p>
                            <div className="hero-cta-group" style={{ justifyContent: 'center' }}>
                                <Link to="/contact" className="btn btn-hero-primary">
                                    Start a Conversation
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Industries;
