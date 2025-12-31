import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './WebDevelopment.css';

const WebDevelopment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        { title: 'Frontend Development', description: 'Building immersive, responsive, and high-performance user interfaces using React, Next.js, and Vue.', icon: '🎨' },
        { title: 'Backend Engineering', description: 'Robust and scalable server-side architectures powered by Node.js, Python, and Java.', icon: '⚙️' },
        { title: 'Full-Stack Solutions', description: 'End-to-end web application development from database design to frontend deployment.', icon: '🚀' },
        { title: 'E-commerce Platforms', description: 'Custom online stores and marketplaces with seamless payment integrations and inventory management.', icon: '🛒' },
        { title: 'Headless CMS', description: 'Flexible content management solutions using Strapi, Contentful, and Sanity for modern web apps.', icon: '📄' },
        { title: 'Progressive Web Apps (PWA)', description: 'Delivering app-like experiences on the web with offline capabilities and push notifications.', icon: '📱' },
        { title: 'API Development', description: 'Designing and implementing secure RESTful and GraphQL APIs for seamless system integration.', icon: '🔗' },
        { title: 'Performance Optimization', description: 'Optimizing web applications for maximum speed, SEO, and exceptional user experience.', icon: '⚡' }
    ];

    const techStack = [
        'React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'GraphQL'
    ];

    return (
        <div className="web-development-page">
            {/* Hero Section */}
            <section className="wd-hero">
                <div className="container">
                    <div className="wd-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Modern Web Architectures
                        </div>
                        <h1>Building the Next Generation of <span className="text-gradient">Web Experiences.</span></h1>
                        <p>We combine cutting-edge technologies with exceptional design to build fast, secure, and scalable web applications that drive business growth.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Start Your Project
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="wd-hero-visual">
                    <div className="wd-grid-pattern"></div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="wd-features">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2>Web Development Services</h2>
                        <p>Comprehensive solutions for every stage of your digital product lifecycle.</p>
                    </div>
                    <div className="wd-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="wd-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="wd-tech bg-dark">
                <div className="container">
                    <div className="tech-content animate-up">
                        <span className="section-tag">Tech Stack</span>
                        <h2 className="text-white">Technologies We Master</h2>
                        <div className="wd-tech-grid">
                            {techStack.map((tech, index) => (
                                <div key={index} className="tech-card">
                                    <span>{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="wd-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">build something amazing?</span></h2>
                        <p>Let's collaborate to bring your digital vision to life with our expert web development team.</p>
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

export default WebDevelopment;
