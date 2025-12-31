import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/SolutionLayout.css';
import './ITConsulting.css';

const ITConsulting = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="solution-page consulting-page">
            {/* Unique Hero: Professional & Trustworthy */}
            <section className="solution-hero consulting-hero">
                <div className="container">
                    <div className="consulting-hero-grid">
                        <div className="consulting-hero-text animate-up">
                            <span className="section-tag">Strategic Advisory</span>
                            <h1>Strategic <br /><span className="text-gradient">IT Consulting</span></h1>
                            <p>Align your technology with your business goals. We provide the expertise you need to navigate the complex digital landscape and drive measurable outcomes.</p>
                            <div className="hero-cta-group" style={{ justifyContent: 'flex-start' }}>
                                <Link to="/contact" className="btn btn-hero-primary">
                                    Book a Consultation
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className="consulting-hero-image animate-up delay-2">
                            <div className="image-wrapper">
                                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" alt="Consulting Team" />
                                <div className="experience-badge">
                                    <span className="years">15+</span>
                                    <span className="label">Years of Expertise</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique Section: Consulting Methodology */}
            <section className="methodology bg-light">
                <div className="container">
                    <div className="solution-section-header animate-up">
                        <span className="section-tag">Methodology</span>
                        <h2>Our Proven Framework</h2>
                        <p>A systematic 4-step process designed to deliver long-term value and competitive advantage.</p>
                    </div>
                    <div className="solution-grid">
                        <div className="solution-card method-step animate-up delay-1">
                            <div className="step-icon">🔍</div>
                            <h3>Discovery</h3>
                            <p>Deep dive into your current infrastructure, workflows, and business challenges to identify opportunities.</p>
                        </div>
                        <div className="solution-card method-step animate-up delay-2">
                            <div className="step-icon">📐</div>
                            <h3>Strategy</h3>
                            <p>Developing a custom technology roadmap aligned with your specific long-term business objectives.</p>
                        </div>
                        <div className="solution-card method-step animate-up delay-3">
                            <div className="step-icon">⚙️</div>
                            <h3>Execution</h3>
                            <p>Implementing recommended solutions with precision, ensuring minimal disruption to your daily operations.</p>
                        </div>
                        <div className="solution-card method-step animate-up delay-4">
                            <div className="step-icon">📈</div>
                            <h3>Optimization</h3>
                            <p>Continuous monitoring, performance tuning, and refinement to ensure maximum ROI and scalability.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique Section: Expert Profiles Preview */}
            <section className="expert-profiles">
                <div className="container">
                    <div className="expert-card-large animate-up">
                        <div className="expert-info">
                            <span className="section-tag">Our Experts</span>
                            <h3>World-Class Guidance</h3>
                            <p>Our consultants bring decades of experience from top-tier technology firms and diverse industries to your project.</p>
                            <div className="expert-stats-grid">
                                <div className="expert-stat">
                                    <h4>15+ Years</h4>
                                    <p>Average Experience</p>
                                </div>
                                <div className="expert-stat">
                                    <h4>Certified</h4>
                                    <p>Enterprise Architects</p>
                                </div>
                                <div className="expert-stat">
                                    <h4>Global</h4>
                                    <p>Industry Specialists</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique CTA: Professional Blue */}
            <section className="consulting-cta">
                <div className="container">
                    <div className="consulting-cta-content animate-up">
                        <h2>Need a technology roadmap?</h2>
                        <p>Let's discuss how we can help you achieve your business objectives with a tailored IT strategy.</p>
                        <Link to="/contact" className="btn btn-hero-primary">
                            Schedule a Strategy Call
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

export default ITConsulting;
