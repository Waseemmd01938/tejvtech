import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Databases.css';

const Databases = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        { title: 'Database Design', description: 'Expert schema design and modeling for relational and non-relational databases.', icon: '📊' },
        { title: 'Performance Tuning', description: 'Optimize queries, indexing, and configuration for maximum speed and efficiency.', icon: '⚡' },
        { title: 'Data Migration', description: 'Secure and seamless migration of large-scale datasets with zero downtime.', icon: '🔄' },
        { title: 'High Availability', description: 'Implementation of clustering, replication, and failover solutions for 24/7 uptime.', icon: '🛡️' },
        { title: 'Big Data Solutions', description: 'Architecting and managing large-scale data lakes and processing pipelines.', icon: '💾' },
        { title: 'Database Security', description: 'Robust encryption, access control, and auditing to protect your sensitive data.', icon: '🔒' }
    ];

    return (
        <div className="databases-page">
            {/* Hero Section */}
            <section className="db-hero">
                <div className="container">
                    <div className="db-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Data Integrity & Performance
                        </div>
                        <h1>Powering Your Business with <span className="text-gradient">Robust Data.</span></h1>
                        <p>We design, implement, and optimize enterprise-grade database solutions that ensure your data is always secure, accessible, and performing at its peak.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Optimize Your Data
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="db-hero-visual">
                    <div className="db-grid-pattern"></div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="db-features">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>Database Solutions</h2>
                        <p>Comprehensive data management services for the modern enterprise.</p>
                    </div>
                    <div className="db-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="db-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="db-tech bg-dark">
                <div className="container">
                    <div className="tech-content animate-up">
                        <h2 className="text-white">Technologies We Support</h2>
                        <div className="db-tech-grid">
                            <div className="tech-card"><span>PostgreSQL</span></div>
                            <div className="tech-card"><span>MongoDB</span></div>
                            <div className="tech-card"><span>MySQL</span></div>
                            <div className="tech-card"><span>Oracle</span></div>
                            <div className="tech-card"><span>Redis</span></div>
                            <div className="tech-card"><span>Elasticsearch</span></div>
                            <div className="tech-card"><span>Cassandra</span></div>
                            <div className="tech-card"><span>SQL Server</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="db-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">optimize your data?</span></h2>
                        <p>Let's build a scalable and secure data foundation for your business.</p>
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

export default Databases;
