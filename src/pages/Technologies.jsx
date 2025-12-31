import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Technologies.css';

const Technologies = () => {
    // Animated keyword loop
    const keywords = ['Scalable', 'Secure', 'Innovative', 'Future-Proof', 'Efficient'];
    const [currentKeyword, setCurrentKeyword] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        const interval = setInterval(() => {
            setCurrentKeyword((prev) => (prev + 1) % keywords.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const technologies = [
        {
            icon: '🤖',
            title: 'Artificial Intelligence',
            description: 'Harness the power of AI to automate complex processes and gain predictive insights.',
            tags: ['Machine Learning', 'NLP', 'Computer Vision', 'Generative AI'],
            color: '#6366f1'
        },
        {
            icon: '☁️',
            title: 'Cloud Computing',
            description: 'Scalable, secure, and cost-effective cloud solutions for modern enterprises.',
            tags: ['AWS', 'Azure', 'Google Cloud', 'Hybrid Cloud'],
            color: '#3b82f6'
        },
        {
            icon: '📊',
            title: 'Data Analytics',
            description: 'Transform raw data into actionable intelligence with advanced analytics.',
            tags: ['Big Data', 'Business Intelligence', 'Data Warehousing', 'Predictive Analytics'],
            color: '#8b5cf6'
        },
        {
            icon: '⛓️',
            title: 'Blockchain',
            description: 'Secure, transparent, and decentralized solutions for various industries.',
            tags: ['Smart Contracts', 'DeFi', 'Supply Chain', 'NFTs'],
            color: '#10b981'
        },
        {
            icon: '🌐',
            title: 'Internet of Things',
            description: 'Connect devices and systems for smarter operations and real-time monitoring.',
            tags: ['Industrial IoT', 'Smart Home', 'Wearables', 'Edge Computing'],
            color: '#06b6d4'
        },
        {
            icon: '🛡️',
            title: 'Cybersecurity',
            description: 'Robust security frameworks to protect your digital assets and infrastructure.',
            tags: ['Network Security', 'Threat Detection', 'Compliance', 'Identity Management'],
            color: '#ef4444'
        }
    ];

    const valueProps = [
        { icon: '🚀', title: 'Modern Tech Stack', description: 'We use the latest and most stable technologies to ensure long-term viability.' },
        { icon: '🔒', title: 'Security by Design', description: 'Security is integrated into every stage of our development process.' },
        { icon: '📈', title: 'Scalable Solutions', description: 'Our architectures are built to handle growth without performance degradation.' },
        { icon: '⚡', title: 'High Performance', description: 'Optimized code and infrastructure for lightning-fast user experiences.' }
    ];

    return (
        <div className="technologies-page">
            {/* Hero Section */}
            <section className="tech-hero">
                <div className="container">
                    <div className="tech-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Innovation-Driven Technology Stack
                        </div>
                        <h1 className="hero-title">
                            Cutting-Edge Tech.<br />
                            <span className="text-gradient">Future-Ready Solutions.</span>
                        </h1>
                        <p className="hero-subtitle">
                            We leverage the world's most advanced technologies to build software that
                            solves real-world problems and drives business growth.
                        </p>
                        <div className="hero-keyword-loop">
                            <span className="keyword-prefix">Our solutions are</span>
                            <span className="keyword-animated" key={currentKeyword}>
                                {keywords[currentKeyword]}
                            </span>
                        </div>
                        <div className="hero-cta-group" style={{ justifyContent: 'center' }}>
                            <Link to="/contact" className="btn btn-hero-primary">
                                Start Building
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="hero-bg-visual"></div>
            </section>

            {/* Tech Grid Section */}
            <section className="tech-grid-section">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h2 className="section-heading">Core Technologies</h2>
                        <p className="section-description">
                            A deep dive into the technologies we use to deliver excellence and competitive advantage.
                        </p>
                    </div>
                    <div className="tech-grid">
                        {technologies.map((tech, index) => (
                            <div
                                key={index}
                                className="tech-card-premium animate-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="tech-card-inner">
                                    <div className="tech-icon-box" style={{ background: `${tech.color}15`, color: tech.color }}>
                                        {tech.icon}
                                    </div>
                                    <h3>{tech.title}</h3>
                                    <p>{tech.description}</p>
                                    <div className="tech-tags-list">
                                        {tech.tags.map((tag, idx) => (
                                            <span key={idx} className="tech-tag-pill">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="card-glow" style={{ background: `radial-gradient(circle at center, ${tech.color}15, transparent 70%)` }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Value Proposition Section */}
            <section className="tech-values-section">
                <div className="container">
                    <div className="values-grid">
                        <div className="values-header animate-up">
                            <span className="section-tag">Our Approach</span>
                            <h2 className="section-heading">
                                Why Our Tech Stack<br />Matters for You.
                            </h2>
                            <p className="value-intro">
                                Choosing the right technology is the difference between a product
                                that survives and one that thrives in a competitive market.
                            </p>
                        </div>
                        <div className="values-cards-grid">
                            {valueProps.map((prop, index) => (
                                <div
                                    key={index}
                                    className="value-card-premium animate-up"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="value-icon-box">{prop.icon}</div>
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

            {/* Final CTA Section */}
            <section className="tech-cta-section">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <div className="cta-content">
                            <h2>Ready to Leverage <span className="text-gradient">Modern Technology?</span></h2>
                            <p>
                                Let's discuss how our technology expertise can help you achieve
                                your business goals and stay ahead of the competition.
                            </p>
                            <Link to="/contact" className="btn btn-hero-primary">
                                Consult with Experts
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Technologies;
