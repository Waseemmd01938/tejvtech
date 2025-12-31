import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/SolutionLayout.css';
import './EnterpriseAI.css';

const EnterpriseAI = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="solution-page dark ai-page">
            {/* Unique Hero: Centered with Glow Effect */}
            <section className="solution-hero ai-hero">
                <div className="hero-bg-overlay"></div>
                <div className="container">
                    <div className="ai-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Next-Gen Intelligence
                        </div>
                        <h1>Enterprise <span className="gradient-text">AI Solutions</span></h1>
                        <p>Empower your organization with custom-built neural networks and predictive intelligence that scales with your ambition.</p>
                        <div className="hero-cta-group">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Deploy AI Now
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <a href="#capabilities" className="btn btn-hero-secondary">Explore Capabilities</a>
                        </div>
                    </div>
                </div>
                <div className="neural-sphere"></div>
            </section>

            {/* Unique Feature: AI Capabilities Grid */}
            <section id="capabilities" className="ai-capabilities">
                <div className="container">
                    <div className="solution-section-header animate-up">
                        <span className="section-tag">Capabilities</span>
                        <h2>Core AI Capabilities</h2>
                        <p>Leveraging state-of-the-art machine learning to solve complex business problems.</p>
                    </div>
                    <div className="solution-grid">
                        <div className="solution-card ai-card animate-up delay-1">
                            <div className="cap-icon">🧠</div>
                            <h3>Predictive Modeling</h3>
                            <p>Forecast market trends and customer behavior with 95% accuracy using our proprietary ML algorithms.</p>
                        </div>
                        <div className="solution-card ai-card active animate-up delay-2">
                            <div className="cap-icon">💬</div>
                            <h3>Cognitive NLP</h3>
                            <p>Advanced language processing that understands context, sentiment, and intent across 50+ languages.</p>
                        </div>
                        <div className="solution-card ai-card animate-up delay-3">
                            <div className="cap-icon">👁️</div>
                            <h3>Computer Vision</h3>
                            <p>Automate visual inspection and security monitoring with real-time object detection and analysis.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique Section: The AI Roadmap */}
            <section className="ai-roadmap">
                <div className="container">
                    <div className="solution-section-header animate-up">
                        <span className="section-tag">Process</span>
                        <h2>Your AI Journey</h2>
                    </div>
                    <div className="roadmap-container">
                        <div className="roadmap-item animate-up delay-1">
                            <div className="roadmap-dot"></div>
                            <h4>Data Audit</h4>
                            <p>We analyze your existing data infrastructure for AI readiness.</p>
                        </div>
                        <div className="roadmap-item animate-up delay-2">
                            <div className="roadmap-dot"></div>
                            <h4>Model Training</h4>
                            <p>Custom training of models on your specific business datasets.</p>
                        </div>
                        <div className="roadmap-item animate-up delay-3">
                            <div className="roadmap-dot"></div>
                            <h4>Integration</h4>
                            <p>Seamless deployment into your current enterprise workflow.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique CTA: Dark & Minimal */}
            <section className="ai-cta">
                <div className="container">
                    <div className="ai-cta-card animate-up">
                        <h2>Ready to automate the future?</h2>
                        <p>Join 50+ enterprises already using our AI solutions to gain a competitive edge.</p>
                        <Link to="/contact" className="btn btn-hero-primary">
                            Get a Free AI Audit
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

export default EnterpriseAI;
