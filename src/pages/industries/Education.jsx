import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pageData } from '../../data/pageData';
import './Education.css';

const Education = () => {
    const data = pageData['education'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="education-page">
            {/* Hero Section */}
            <section className="edu-hero">
                <div className="hero-bg-overlay" style={{ backgroundImage: `url(${data.heroImage})` }}></div>
                <div className="container">
                    <div className="edu-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            EdTech Innovation
                        </div>
                        <h1>Empowering the <span className="text-gradient">Future of Learning.</span></h1>
                        <p>{data.description}</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Transform Your Institution
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="edu-solutions">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>EdTech Solutions</h2>
                        <p>Innovative technology services designed for modern educational institutions.</p>
                    </div>
                    <div className="edu-grid">
                        {data.features.map((solution, index) => (
                            <div key={index} className="edu-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{solution.icon}</div>
                                <h3>{solution.title}</h3>
                                <p>{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="edu-impact bg-light">
                <div className="container">
                    <div className="impact-grid">
                        <div className="impact-image animate-up">
                            <img src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80" alt="Education Impact" />
                        </div>
                        <div className="impact-content animate-up delay-1">
                            <span className="section-tag">Our Impact</span>
                            <h2>Making a Difference</h2>
                            <p>Our technology is used by leading institutions worldwide to deliver high-quality education and streamline administrative processes.</p>
                            <div className="impact-stats">
                                <div className="stat-box">
                                    <span className="stat-num">1M+</span>
                                    <span className="stat-label">Students Reached</span>
                                </div>
                                <div className="stat-box">
                                    <span className="stat-num">500+</span>
                                    <span className="stat-label">Institutions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="edu-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">modernize learning?</span></h2>
                        <p>Let's collaborate to build the next generation of educational technology.</p>
                        <Link to="/contact" className="btn btn-hero-primary">
                            Get a Free Demo
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

export default Education;
