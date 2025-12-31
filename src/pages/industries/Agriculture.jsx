import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pageData } from '../../data/pageData';
import './Agriculture.css';

const Agriculture = () => {
    const data = pageData['agriculture'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="agriculture-page">
            {/* Hero Section */}
            <section className="agri-hero">
                <div className="hero-bg-overlay" style={{ backgroundImage: `url(${data.heroImage})` }}></div>
                <div className="container">
                    <div className="agri-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            AgriTech Revolution
                        </div>
                        <h1>Cultivating the <span className="text-gradient">Digital Farm.</span></h1>
                        <p>{data.description}</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Modernize Your Farm
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="agri-solutions">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>AgriTech Solutions</h2>
                        <p>Cutting-edge technology services designed for the modern agricultural sector.</p>
                    </div>
                    <div className="agri-grid">
                        {data.features.map((solution, index) => (
                            <div key={index} className="agri-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{solution.icon}</div>
                                <h3>{solution.title}</h3>
                                <p>{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Sustainability Section */}
            <section className="agri-sustainability bg-dark">
                <div className="container">
                    <div className="sustainability-grid">
                        <div className="sustainability-content animate-up">
                            <span className="section-tag">Sustainability First</span>
                            <h2 className="text-white">Sustainable Growth</h2>
                            <p className="text-light">Our solutions are designed to promote sustainable farming practices by optimizing resource usage and reducing environmental impact.</p>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-val">25%</span>
                                    <span className="stat-label">Water Savings</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">20%</span>
                                    <span className="stat-label">Higher Yields</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">15%</span>
                                    <span className="stat-label">Less Waste</span>
                                </div>
                            </div>
                        </div>
                        <div className="sustainability-visual animate-up delay-1">
                            <div className="nature-visual"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="agri-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">grow your future?</span></h2>
                        <p>Let's collaborate to build a smarter, more sustainable agricultural future.</p>
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

export default Agriculture;
