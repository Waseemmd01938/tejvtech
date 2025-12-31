import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './StartupMVP.css';

const StartupMVP = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        { title: 'Product Discovery', description: 'Defining your product vision, target audience, and core features for maximum impact.', icon: '💡' },
        { title: 'Rapid Prototyping', description: 'Building interactive prototypes to validate your ideas and gather user feedback quickly.', icon: '🎨' },
        { title: 'MVP Development', description: 'Building a minimum viable product with core features to launch and learn from real users.', icon: '🚀' },
        { title: 'Agile Development', description: 'Iterative development process to adapt to changing requirements and user needs.', icon: '⚙️' },
        { title: 'Scalability Planning', description: 'Designing your MVP with future growth and scalability in mind.', icon: '📈' },
        { title: 'Launch Support', description: 'Expert assistance for a successful product launch and initial user onboarding.', icon: '🏁' }
    ];

    return (
        <div className="startup-mvp-page">
            {/* Hero Section */}
            <section className="mvp-hero">
                <div className="container">
                    <div className="mvp-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            From Idea to Reality, Fast
                        </div>
                        <h1>Rapid <span className="text-gradient">Startup MVP Services.</span></h1>
                        <p>We help startups build and launch high-quality minimum viable products quickly and cost-effectively, enabling them to validate their ideas and scale faster.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Launch Your MVP
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mvp-hero-visual">
                    <div className="mvp-grid-pattern"></div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="mvp-services">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>MVP Services</h2>
                        <p>Comprehensive solutions to accelerate your startup journey.</p>
                    </div>
                    <div className="mvp-grid">
                        {services.map((service, index) => (
                            <div key={index} className="mvp-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Speed Section */}
            <section className="mvp-speed bg-dark">
                <div className="container">
                    <div className="speed-grid">
                        <div className="speed-content animate-up">
                            <span className="section-tag">Speed First</span>
                            <h2 className="text-white">Launch in Weeks, Not Months</h2>
                            <p className="text-light">Our streamlined MVP development process is designed for speed and quality, ensuring you can get your product in front of users and start learning as fast as possible.</p>
                            <div className="stats-row">
                                <div className="stat-item">
                                    <span className="stat-val">4-8</span>
                                    <span className="stat-label">Weeks to Launch</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">100%</span>
                                    <span className="stat-label">Agile Process</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-val">Zero</span>
                                    <span className="stat-label">Bloat</span>
                                </div>
                            </div>
                        </div>
                        <div className="speed-visual animate-up delay-1">
                            <div className="startup-visual">🚀</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="mvp-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">launch your startup?</span></h2>
                        <p>Let's collaborate to build a high-impact MVP and kickstart your success journey.</p>
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

export default StartupMVP;
