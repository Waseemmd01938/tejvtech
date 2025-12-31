import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pageData } from '../../data/pageData';
import './RealEstate.css';

const RealEstate = () => {
    const data = pageData['real-estate'];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="real-estate-page">
            {/* Hero Section */}
            <section className="re-hero">
                <div className="hero-bg-overlay" style={{ backgroundImage: `url(${data.heroImage})` }}></div>
                <div className="container">
                    <div className="re-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            PropTech Innovation
                        </div>
                        <h1>Digitizing the <span className="text-gradient">Real Estate World.</span></h1>
                        <p>{data.description}</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Build Your Solution
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solutions Grid */}
            <section className="re-solutions">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>Real Estate Solutions</h2>
                        <p>Innovative technology services designed for the modern property market.</p>
                    </div>
                    <div className="re-grid">
                        {data.features.map((solution, index) => (
                            <div key={index} className="re-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{solution.icon}</div>
                                <h3>{solution.title}</h3>
                                <p>{solution.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section className="re-experience bg-light">
                <div className="container">
                    <div className="experience-grid">
                        <div className="experience-image animate-up">
                            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80" alt="Real Estate Experience" />
                        </div>
                        <div className="experience-content animate-up delay-1">
                            <span className="section-tag">User Experience</span>
                            <h2>Immersive Property Discovery</h2>
                            <p>We create stunning digital experiences that bring properties to life, allowing users to explore and connect with their future homes like never before.</p>
                            <ul className="exp-list">
                                <li>High-fidelity 3D renderings</li>
                                <li>Interactive floor plans</li>
                                <li>Seamless mobile experiences</li>
                                <li>Instant agent connectivity</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="re-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">redefine real estate?</span></h2>
                        <p>Let's collaborate to build the next generation of property technology.</p>
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

export default RealEstate;
