import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    // Animated keyword loop
    const keywords = ['Build', 'Scale', 'Optimize', 'Secure', 'Innovate'];
    const [currentKeyword, setCurrentKeyword] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentKeyword((prev) => (prev + 1) % keywords.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Portfolio filter
    const [activeFilter, setActiveFilter] = useState('all');
    const portfolioItems = [
        { id: 1, category: 'ai', title: 'AI-Powered Analytics Platform', outcome: 'Increased data insights by 300%', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80' },
        { id: 2, category: 'web', title: 'Enterprise E-Commerce Suite', outcome: 'Scaled to 10M+ monthly users', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80' },
        { id: 3, category: 'app', title: 'FinTech Mobile Banking App', outcome: 'Processed $50M+ transactions', image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80' },
        { id: 4, category: 'platform', title: 'Healthcare Management System', outcome: 'Serving 200+ hospitals', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' },
        { id: 5, category: 'ai', title: 'Smart Logistics Solution', outcome: 'Reduced costs by 40%', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80' },
        { id: 6, category: 'web', title: 'SaaS Dashboard Platform', outcome: '500+ enterprise clients', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' },
    ];

    const filteredPortfolio = activeFilter === 'all'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === activeFilter);

    const services = [
        { icon: '⚙️', title: 'Custom Software Development', description: 'Tailored solutions built with cutting-edge technologies', best: 'Enterprises' },
        { icon: '☁️', title: 'Cloud & DevOps Solutions', description: 'Scalable infrastructure for modern businesses', best: 'Scale-ups' },
        { icon: '📱', title: 'Web & Mobile Applications', description: 'Seamless experiences across all devices', best: 'Startups' },
        { icon: '🎨', title: 'UI/UX & Product Design', description: 'User-centric designs that drive engagement', best: 'All Businesses' },
        { icon: '💡', title: 'IT Consulting & Strategy', description: 'Expert guidance for digital transformation', best: 'Enterprises' },
        { icon: '🔧', title: 'Technical Support & Maintenance', description: '24/7 support to keep your systems running', best: 'All Businesses' },
    ];

    const valueProps = [
        { icon: '🏗️', title: 'Scalable Architecture', description: 'Future-proof solutions that grow with your business' },
        { icon: '⚡', title: 'Faster Delivery Cycles', description: 'Agile methodology ensures rapid time-to-market' },
        { icon: '🛡️', title: 'Security-First Approach', description: 'Enterprise-grade security at every layer' },
        { icon: '💬', title: 'Transparent Communication', description: 'Clear updates and honest conversations always' },
        { icon: '🤝', title: 'Partnership Mindset', description: 'We invest in your long-term success' },
    ];

    const clients = [
        { name: 'TechCorp', logo: 'TC' },
        { name: 'InnovateLabs', logo: 'IL' },
        { name: 'DataFlow', logo: 'DF' },
        { name: 'CloudPeak', logo: 'CP' },
        { name: 'NexGen', logo: 'NG' },
        { name: 'Synergy', logo: 'SY' },
    ];

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section" id="hero">
                <div className="hero-bg-overlay"></div>
                <div className="hero-particles">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className="particle" style={{
                            '--delay': `${Math.random() * 5}s`,
                            '--x': `${Math.random() * 100}%`,
                            '--duration': `${3 + Math.random() * 4}s`
                        }}></div>
                    ))}
                </div>
                <div className="container hero-container">
                    <div className="hero-content">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Trusted by 100+ Global Companies
                        </div>
                        <h1 className="hero-title">
                            Engineering Excellence.<br />
                            <span className="gradient-text">Delivering Results.</span>
                        </h1>
                        <p className="hero-subtitle">
                            We partner with visionary businesses to build transformative digital solutions—
                            from ideation to deployment and beyond.
                        </p>
                        <div className="hero-keyword-loop">
                            <span className="keyword-prefix">We help you</span>
                            <span className="keyword-animated" key={currentKeyword}>
                                {keywords[currentKeyword]}
                            </span>
                        </div>
                        <div className="hero-cta-group">
                            <Link to="/services" className="btn btn-hero-primary">
                                <span>Explore Solutions</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link to="/contact" className="btn btn-hero-secondary">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                </svg>
                                <span>Talk to an Expert</span>
                            </Link>
                        </div>
                    </div>
                    <div className="hero-stats">
                        <div className="hero-stat">
                            <span className="stat-value">1+</span>
                            <span className="stat-label">Years Experience</span>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div className="hero-stat">
                            <span className="stat-value">12+</span>
                            <span className="stat-label">Projects Delivered</span>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div className="hero-stat">
                            <span className="stat-value">9+</span>
                            <span className="stat-label">Industries Served</span>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div className="hero-stat">
                            <span className="stat-value">99%</span>
                            <span className="stat-label">Client Satisfaction</span>
                        </div>
                    </div>
                </div>
                <div className="hero-scroll-indicator">
                    <span>Scroll to explore</span>
                    <div className="scroll-mouse"></div>
                </div>
            </section>

            {/* Company Story Section */}
            <section className="story-section" id="about-snapshot">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-content">
                            <span className="section-tag">Our Story</span>
                            <h2 className="section-heading">
                                Built on Trust.<br />Driven by Innovation.
                            </h2>
                            <p className="story-text">
                                Founded with a vision to bridge the gap between technology and business success,
                                we've grown into a trusted partner for companies worldwide. Our journey began with
                                a simple belief: <strong>technology should empower, not complicate.</strong>
                            </p>
                            <ul className="story-highlights">
                                <li>
                                    <span className="highlight-icon">✓</span>
                                    <span>Client-first approach with dedicated project teams</span>
                                </li>
                                <li>
                                    <span className="highlight-icon">✓</span>
                                    <span>Innovation-driven solutions using latest technologies</span>
                                </li>
                                <li>
                                    <span className="highlight-icon">✓</span>
                                    <span>Proven track record with Fortune 500 & startups alike</span>
                                </li>
                            </ul>
                            <Link to="/about" className="link-arrow">
                                Learn more about us
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                        <div className="story-visual">
                            <div className="visual-card visual-card-1">
                                <div className="card-icon">🚀</div>
                                <h4>Reliability</h4>
                                <p>Consistent delivery with zero compromises on quality</p>
                            </div>
                            <div className="visual-card visual-card-2">
                                <div className="card-icon">💎</div>
                                <h4>Excellence</h4>
                                <p>Best practices and cutting-edge methodologies</p>
                            </div>
                            <div className="visual-card visual-card-3">
                                <div className="card-icon">🔄</div>
                                <h4>Adaptability</h4>
                                <p>Agile processes that evolve with your needs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section" id="services-overview">
                <div className="container">
                    <div className="section-header-centered">
                        <span className="section-tag">What We Do</span>
                        <h2 className="section-heading">Comprehensive Digital Solutions</h2>
                        <p className="section-description">
                            From concept to deployment, we deliver end-to-end technology services
                            that drive business growth.
                        </p>
                    </div>
                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="service-card"
                                style={{ '--delay': `${index * 0.1}s` }}
                            >
                                <div className="service-icon">{service.icon}</div>
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <div className="service-best-for">
                                    <span>Best for:</span> {service.best}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Proposition Section */}
            <section className="value-section" id="why-us">
                <div className="container">
                    <div className="value-grid">
                        <div className="value-header">
                            <span className="section-tag section-tag-light">Why Choose Us</span>
                            <h2 className="section-heading section-heading-light">
                                Built for Performance.<br />Designed for Success.
                            </h2>
                            <p className="value-intro">
                                We don't just build software—we engineer competitive advantages.
                                Here's what sets us apart.
                            </p>
                        </div>
                        <div className="value-cards">
                            {valueProps.map((prop, index) => (
                                <div
                                    key={index}
                                    className="value-card"
                                    style={{ '--delay': `${index * 0.1}s` }}
                                >
                                    <div className="value-icon">{prop.icon}</div>
                                    <div className="value-content">
                                        <h4>{prop.title}</h4>
                                        <p>{prop.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="portfolio-section" id="portfolio">
                <div className="container">
                    <div className="section-header-centered">
                        <span className="section-tag">Our Portfolio</span>
                        <h2 className="section-heading">Proof of Execution</h2>
                        <p className="section-description">
                            Real results from real projects. Explore our work across industries.
                        </p>
                    </div>
                    <div className="portfolio-filters">
                        {['all', 'ai', 'web', 'app', 'platform'].map((filter) => (
                            <button
                                key={filter}
                                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter === 'all' ? 'All Projects' : filter.toUpperCase()}
                            </button>
                        ))}
                    </div>
                    <div className="portfolio-grid">
                        {filteredPortfolio.map((item) => (
                            <div key={item.id} className="portfolio-card">
                                <div className="portfolio-image">
                                    <img src={item.image} alt={item.title} />
                                    <div className="portfolio-overlay">
                                        <span className="portfolio-category">{item.category.toUpperCase()}</span>
                                        <h3>{item.title}</h3>
                                        <p className="portfolio-outcome">{item.outcome}</p>
                                        <Link to={`/project/${item.id}`} className="portfolio-link">
                                            View Case Study
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Clients Section */}
            <section className="clients-section" id="clients">
                <div className="container">
                    <div className="clients-header">
                        <h3>Trusted by Industry Leaders</h3>
                        <p>Building long-term partnerships with forward-thinking companies</p>
                    </div>
                    <div className="clients-grid">
                        {clients.map((client, index) => (
                            <div key={index} className="client-logo">
                                <span className="logo-placeholder">{client.logo}</span>
                                <span className="client-name">{client.name}</span>
                            </div>
                        ))}
                    </div>
                    <div className="testimonial-spotlight">
                        <div className="testimonial-content">
                            <blockquote>
                                "Their team didn't just deliver a project—they delivered a transformation.
                                Our efficiency improved by 60% within the first quarter."
                            </blockquote>
                            <div className="testimonial-author">
                                <div className="author-avatar">JC</div>
                                <div className="author-info">
                                    <strong>James Carter</strong>
                                    <span>CEO, TechCorp Industries</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="cta-section" id="cta">
                <div className="cta-bg"></div>
                <div className="container">
                    <div className="cta-content">
                        <h2>Let's Build Something<br /><span className="cta-highlight">Meaningful Together.</span></h2>
                        <p>
                            Ready to transform your ideas into reality? Let's start the conversation
                            and explore how we can accelerate your success.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn btn-cta-primary">
                                Start a Project
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link to="/contact" className="btn btn-cta-secondary">
                                Schedule Free Consultation
                            </Link>
                        </div>
                        <p className="cta-note">No commitment required • Response within 24 hours</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
