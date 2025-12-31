import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/SolutionLayout.css';
import './DigitalTransformation.css';

const DigitalTransformation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="solution-page dx-page">
            {/* Unique Hero: Minimalist & Bold */}
            <section className="solution-hero dx-hero">
                <div className="container">
                    <div className="dx-hero-inner animate-up">
                        <span className="section-tag">Business Evolution</span>
                        <h1>Reimagine Your <br /><span className="text-gradient">Digital Future</span></h1>
                        <p>We help legacy enterprises evolve into digital-first leaders through strategic technology adoption and cultural shifts.</p>
                        <div className="hero-cta-group" style={{ justifyContent: 'flex-start' }}>
                            <Link to="/contact" className="btn btn-hero-primary">
                                Start Your Transformation
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique Section: Transformation Pillars */}
            <section className="dx-pillars bg-light">
                <div className="container">
                    <div className="solution-section-header animate-up">
                        <span className="section-tag">Pillars</span>
                        <h2>Transformation Pillars</h2>
                        <p>Our holistic approach to digital evolution covers every aspect of your business.</p>
                    </div>
                    <div className="solution-grid">
                        <div className="solution-card dx-pillar animate-up delay-1">
                            <div className="pillar-num">01</div>
                            <h3>Strategy</h3>
                            <p>Defining the roadmap for your digital journey based on long-term business goals and market trends.</p>
                        </div>
                        <div className="solution-card dx-pillar animate-up delay-2">
                            <div className="pillar-num">02</div>
                            <h3>Technology</h3>
                            <p>Implementing the right tech stack to power your modern operations and enable scalable growth.</p>
                        </div>
                        <div className="solution-card dx-pillar animate-up delay-3">
                            <div className="pillar-num">03</div>
                            <h3>Culture</h3>
                            <p>Empowering your team to embrace and drive digital change through training and agile methodologies.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique Section: Before/After Transformation */}
            <section className="dx-impact">
                <div className="container">
                    <div className="solution-section-header animate-up">
                        <span className="section-tag">Impact</span>
                        <h2>The Transformation Effect</h2>
                    </div>
                    <div className="impact-comparison animate-up delay-1">
                        <div className="comparison-box before">
                            <h4>Legacy State</h4>
                            <ul>
                                <li>Manual Processes</li>
                                <li>Data Silos</li>
                                <li>Slow Time-to-Market</li>
                                <li>Fragmented Customer Experience</li>
                            </ul>
                        </div>
                        <div className="comparison-arrow">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                        <div className="comparison-box after">
                            <h4>Digital-First</h4>
                            <ul>
                                <li>Automated Workflows</li>
                                <li>Unified Data Intelligence</li>
                                <li>Rapid Innovation Cycles</li>
                                <li>Omnichannel Customer Journey</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique CTA: Clean & Minimal */}
            <section className="dx-cta">
                <div className="container">
                    <div className="dx-cta-content animate-up">
                        <h2>Ready to evolve?</h2>
                        <p>Join the digital revolution and lead your industry with our proven transformation framework.</p>
                        <Link to="/contact" className="btn btn-hero-primary">
                            Book a Strategy Session
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

export default DigitalTransformation;
