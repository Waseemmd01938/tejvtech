import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/SolutionLayout.css';
import './Cybersecurity.css';

const Cybersecurity = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="solution-page dark cyber-page">
            {/* Unique Hero: Security Shield Visual */}
            <section className="solution-hero cyber-hero">
                <div className="container">
                    <div className="cyber-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot" style={{ background: '#ef4444' }}></span>
                            System Status: Protected
                        </div>
                        <h1>Fortify Your <br /><span className="text-gradient-red">Digital Perimeter</span></h1>
                        <p>Enterprise-grade security solutions that anticipate threats before they happen. We don't just react; we prevent.</p>
                        <div className="hero-cta-group">
                            <Link to="/contact" className="btn btn-hero-primary" style={{ background: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)', boxShadow: '0 4px 20px rgba(239, 68, 68, 0.4)' }}>
                                Get Security Audit
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                            <Link to="/about" className="btn btn-hero-secondary">Our Security Stack</Link>
                        </div>
                    </div>
                </div>
                <div className="cyber-shield-bg"></div>
            </section>

            {/* Unique Section: Threat Landscape */}
            <section className="threat-landscape">
                <div className="container">
                    <div className="solution-section-header animate-up">
                        <span className="section-tag" style={{ color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)' }}>Defense</span>
                        <h2>The Modern Threat Landscape</h2>
                        <p>We protect you against the most sophisticated cyber attacks with multi-layered defense mechanisms.</p>
                    </div>
                    <div className="solution-grid">
                        <div className="solution-card cyber-card animate-up delay-1">
                            <div className="threat-icon">🛡️</div>
                            <h3>Ransomware Protection</h3>
                            <p>Advanced behavioral analysis to detect and block encryption attempts in real-time before data is compromised.</p>
                        </div>
                        <div className="solution-card cyber-card animate-up delay-2">
                            <div className="threat-icon">🕵️</div>
                            <h3>Zero-Day Defense</h3>
                            <p>AI-powered detection for previously unknown vulnerabilities and exploits using heuristic analysis.</p>
                        </div>
                        <div className="solution-card cyber-card animate-up delay-3">
                            <div className="threat-icon">📧</div>
                            <h3>Phishing Security</h3>
                            <p>Deep inspection of email communications and link analysis to prevent sophisticated social engineering attacks.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique Section: Security Compliance */}
            <section className="compliance-section bg-dark-alt">
                <div className="container">
                    <div className="compliance-box animate-up">
                        <div className="compliance-text">
                            <span className="section-tag">Compliance</span>
                            <h3>Global Compliance Standards</h3>
                            <p>We ensure your infrastructure meets the strictest regulatory requirements across all industries worldwide.</p>
                        </div>
                        <div className="compliance-badges">
                            <div className="compliance-badge">GDPR</div>
                            <div className="compliance-badge">HIPAA</div>
                            <div className="compliance-badge">SOC2</div>
                            <div className="compliance-badge">PCI-DSS</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique CTA: Warning Style */}
            <section className="cyber-cta">
                <div className="container">
                    <div className="cyber-cta-card animate-up">
                        <div className="cta-icon-large">⚠️</div>
                        <h2>Is your data truly safe?</h2>
                        <p>Don't wait for a breach to find out. Get a comprehensive security assessment from our certified ethical hackers today.</p>
                        <Link to="/contact" className="btn btn-hero-primary" style={{ background: '#fff', color: '#b91c1c' }}>
                            Start Free Assessment
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

export default Cybersecurity;
