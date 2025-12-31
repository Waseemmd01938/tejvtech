import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './MobileAppDevelopment.css';

const MobileAppDevelopment = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        { title: 'iOS Development', description: 'Native Swift and SwiftUI applications built for performance and elegance.', icon: '🍎' },
        { title: 'Android Development', description: 'Powerful Kotlin-based apps that leverage the full potential of the Android ecosystem.', icon: '🤖' },
        { title: 'Cross-Platform', description: 'High-performance apps built with React Native and Flutter for maximum reach.', icon: '📱' },
        { title: 'UI/UX Design', description: 'User-centric designs that ensure high engagement and intuitive navigation.', icon: '🎨' },
        { title: 'App Store Optimization', description: 'Strategies to improve visibility and downloads in App Store and Play Store.', icon: '🚀' },
        { title: 'Backend Integration', description: 'Robust and scalable cloud backends to power your mobile experience.', icon: '☁️' }
    ];

    const processSteps = [
        { number: '01', title: 'Discovery', description: 'We dive deep into your business goals and user needs.' },
        { number: '02', title: 'Design', description: 'Creating intuitive wireframes and stunning visual interfaces.' },
        { number: '03', title: 'Development', description: 'Building your app with clean, scalable, and modern code.' },
        { number: '04', title: 'Testing', description: 'Rigorous QA to ensure a bug-free and smooth experience.' },
        { number: '05', title: 'Launch', description: 'Deploying to stores and ensuring a successful rollout.' }
    ];

    return (
        <div className="mobile-dev-page">
            {/* Hero Section */}
            <section className="mobile-hero">
                <div className="container">
                    <div className="mobile-hero-grid">
                        <div className="mobile-hero-content animate-up">
                            <div className="hero-badge">
                                <span className="badge-dot"></span>
                                Next-Gen Mobile Solutions
                            </div>
                            <h1>Building Apps that <span className="text-gradient">Define Future.</span></h1>
                            <p>We create high-performance, intuitive, and scalable mobile applications that deliver exceptional user experiences across all devices.</p>
                            <div className="hero-actions">
                                <Link to="/contact" className="btn btn-hero-primary">
                                    Start Your Project
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="mobile-hero-visual animate-up delay-1">
                            <div className="phone-mockup">
                                <div className="phone-screen">
                                    <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80" alt="App Preview" />
                                </div>
                            </div>
                            <div className="floating-element element-1">🚀</div>
                            <div className="floating-element element-2">✨</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="mobile-features-section">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Capabilities</span>
                        <h2>Our Expertise</h2>
                        <p>Comprehensive mobile development services tailored to your business needs.</p>
                    </div>
                    <div className="mobile-features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="mobile-feature-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="feature-icon-box">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="mobile-process-section bg-dark">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Methodology</span>
                        <h2 className="text-white">How We Build It</h2>
                        <p className="text-light">A streamlined process from concept to successful launch.</p>
                    </div>
                    <div className="process-timeline">
                        {processSteps.map((step, index) => (
                            <div key={index} className="process-step animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="step-number">{step.number}</div>
                                <div className="step-content">
                                    <h3>{step.title}</h3>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="mobile-tech-section">
                <div className="container">
                    <div className="tech-showcase animate-up">
                        <h2>Powered by Modern Tech</h2>
                        <div className="tech-pills-premium">
                            <span>Swift</span>
                            <span>Kotlin</span>
                            <span>React Native</span>
                            <span>Flutter</span>
                            <span>Firebase</span>
                            <span>Node.js</span>
                            <span>AWS</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="mobile-cta-section">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to build your <span className="text-gradient">dream app?</span></h2>
                        <p>Let's turn your vision into a reality with our expert mobile development team.</p>
                        <Link to="/contact" className="btn btn-hero-primary">
                            Get a Free Quote
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

export default MobileAppDevelopment;
