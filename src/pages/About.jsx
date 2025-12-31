import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

// Import generated images (using absolute paths for now as they are in the .gemini dir)
const heroBg = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"; // Fallback high-res
const storyImg = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"; // Fallback high-res

const About = () => {
    // Animated keyword loop
    const keywords = ['Innovation', 'Excellence', 'Integrity', 'Collaboration', 'Growth'];
    const [currentKeyword, setCurrentKeyword] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        const interval = setInterval(() => {
            setCurrentKeyword((prev) => (prev + 1) % keywords.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const coreValues = [
        {
            icon: '💡',
            title: 'Innovation',
            description: 'We constantly explore new technologies to stay ahead of the curve and deliver cutting-edge solutions.',
            color: '#6366f1'
        },
        {
            icon: '🛡️',
            title: 'Integrity',
            description: 'We build trust through transparency, honest communication, and ethical business practices.',
            color: '#ef4444'
        },
        {
            icon: '💎',
            title: 'Excellence',
            description: 'We are committed to delivering the highest quality in everything we do, from code to consulting.',
            color: '#3b82f6'
        },
        {
            icon: '🤝',
            title: 'Collaboration',
            description: 'We work closely with our clients as true strategic partners, investing in their long-term success.',
            color: '#10b981'
        }
    ];

    return (
        <div className="about-page">
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-bg-overlay" style={{ backgroundImage: `url(${heroBg})` }}></div>
                <div className="container">
                    <div className="about-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Architects of the Digital Future
                        </div>
                        <h1 className="hero-title">
                            Our Story &<br />
                            <span className="text-gradient">Mission.</span>
                        </h1>
                        <p className="hero-subtitle">
                            We are dedicated to transforming businesses through innovation,
                            technology, and a relentless pursuit of excellence.
                        </p>
                        <div className="hero-keyword-loop">
                            <span className="keyword-prefix">We value</span>
                            <span className="keyword-animated" key={currentKeyword}>
                                {keywords[currentKeyword]}
                            </span>
                        </div>
                        <div className="hero-cta-group">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Join Our Journey
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="mission-vision-section">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Purpose</span>
                        <h2>Mission & Vision</h2>
                        <p>The driving force behind every decision and innovation at Tejvtech.</p>
                    </div>
                    <div className="mission-vision-grid">
                        <div className="mission-card animate-up">
                            <div className="card-icon-box">🎯</div>
                            <h3>Our Mission</h3>
                            <p>To empower organizations with scalable, secure, and intelligent technology solutions that drive sustainable growth and competitive advantage in a rapidly evolving digital landscape.</p>
                        </div>
                        <div className="vision-card animate-up delay-1">
                            <div className="card-icon-box">👁️</div>
                            <h3>Our Vision</h3>
                            <p>To be the global partner of choice for digital transformation, recognized for our technical excellence, unwavering integrity, and deeply customer-centric approach to problem-solving.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are / Story Section */}
            <section className="about-story-section bg-light">
                <div className="container">
                    <div className="about-story-grid">
                        <div className="story-content animate-up">
                            <span className="section-tag">Our Story</span>
                            <h2>Building Tomorrow, Today.</h2>
                            <p>Tejvtech is a premier technology consulting and software development firm. We bridge the gap between complex business challenges and cutting-edge technology solutions.</p>
                            <p>Founded by a team of industry veterans, we bring decades of experience in AI, Cloud Computing, and Enterprise Software Development. Our agile approach ensures that we deliver value quickly while maintaining the highest standards of quality.</p>

                            <div className="story-stats">
                                <div className="story-stat">
                                    <span className="stat-val">10+</span>
                                    <span className="stat-lab">Years Exp.</span>
                                </div>
                                <div className="stat-sep"></div>
                                <div className="story-stat">
                                    <span className="stat-val">150+</span>
                                    <span className="stat-lab">Projects</span>
                                </div>
                            </div>
                        </div>
                        <div className="story-visual-container animate-up delay-1">
                            <div className="story-image-wrapper">
                                <img src={storyImg} alt="Our Team" className="story-main-image" />
                                <div className="experience-badge">
                                    <span className="exp-num">10+</span>
                                    <span className="exp-text">Years of Excellence</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="about-values-section">
                <div className="container">
                    <div className="values-layout">
                        <div className="values-header animate-up">
                            <span className="section-tag">Our Values</span>
                            <h2>The Principles That Guide Us.</h2>
                            <p>We don't just build software—we build relationships based on trust, transparency, and shared success.</p>
                        </div>
                        <div className="values-grid">
                            {coreValues.map((value, index) => (
                                <div
                                    key={index}
                                    className="value-card-premium animate-up"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="value-icon-box" style={{ background: `${value.color}15`, color: value.color }}>
                                        {value.icon}
                                    </div>
                                    <h4>{value.title}</h4>
                                    <p>{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="about-cta-section">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <div className="cta-content">
                            <h2>Join Us on Our <span className="text-gradient">Journey Together.</span></h2>
                            <p>Whether you're looking for a technology partner or a new career opportunity, we'd love to hear from you and explore the possibilities.</p>
                            <Link to="/contact" className="btn btn-hero-primary">
                                Let's Talk
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

export default About;
