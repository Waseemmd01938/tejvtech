import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './UIUXDesign.css';

const UIUXDesign = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        { title: 'User Research', description: 'Deep dive into user behavior, needs, and motivations through various research methodologies.', icon: '🔍' },
        { title: 'Information Architecture', description: 'Organizing and structuring content to ensure intuitive navigation and findability.', icon: '📐' },
        { title: 'Wireframing', description: 'Creating low-fidelity blueprints to define the structure and flow of your digital product.', icon: '🖼️' },
        { title: 'Visual Design', description: 'Crafting stunning, high-fidelity interfaces that align with your brand identity.', icon: '🎨' },
        { title: 'Interaction Design', description: 'Designing engaging animations and transitions that enhance the user experience.', icon: '✨' },
        { title: 'Usability Testing', description: 'Validating designs with real users to identify and resolve friction points.', icon: '🧪' }
    ];

    return (
        <div className="uiux-page">
            {/* Hero Section */}
            <section className="uiux-hero">
                <div className="container">
                    <div className="uiux-hero-content animate-up">
                        <span className="hero-tag">Design Excellence</span>
                        <h1>Crafting <span className="text-gradient">Experiences</span><br />That Matter.</h1>
                        <p>We blend creativity with data-driven insights to design intuitive, engaging, and beautiful digital products that users love.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Start Designing
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="uiux-hero-visual animate-up delay-1">
                    <div className="design-elements">
                        <div className="element circle"></div>
                        <div className="element square"></div>
                        <div className="element triangle"></div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="uiux-services">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Process</span>
                        <h2>Design Services</h2>
                        <p>From research to final polish, we cover every aspect of the design journey.</p>
                    </div>
                    <div className="uiux-grid">
                        {services.map((service, index) => (
                            <div key={index} className="uiux-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="uiux-philosophy bg-dark">
                <div className="container">
                    <div className="philosophy-grid">
                        <div className="philosophy-image animate-up">
                            <img src="https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&w=800&q=80" alt="Design Philosophy" />
                        </div>
                        <div className="philosophy-content animate-up delay-1">
                            <span className="section-tag">Philosophy</span>
                            <h2 className="text-white">User-First Approach</h2>
                            <p className="text-light">We believe that great design is not just about how it looks, but how it works. Our user-centric approach ensures that every pixel serves a purpose and every interaction is meaningful.</p>
                            <ul className="philosophy-list">
                                <li>Empathy-driven design</li>
                                <li>Data-backed decisions</li>
                                <li>Iterative refinement</li>
                                <li>Accessibility for all</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="uiux-cta">
                <div className="container">
                    <div className="cta-box-premium animate-up">
                        <h2>Ready to elevate your <span className="text-gradient">product design?</span></h2>
                        <p>Let's collaborate to create a digital experience that stands out and delivers results.</p>
                        <Link to="/contact" className="btn btn-hero-primary">
                            Work With Us
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

export default UIUXDesign;
