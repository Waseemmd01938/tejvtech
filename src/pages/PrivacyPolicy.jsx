import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    const [activeTab, setActiveTab] = useState('privacy');
    const lastUpdated = 'December 31, 2024';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page">
            {/* Hero Section */}
            <section className="legal-hero">
                <div className="container">
                    <div className="legal-hero-content animate-up">
                        <span className="section-tag">Legal</span>
                        <h1>Trust & <span className="text-gradient">Transparency</span></h1>
                        <p>Understanding how we protect your data and the terms governing our professional services.</p>
                    </div>
                </div>
                <div className="hero-bg-visual"></div>
            </section>

            {/* Tab Navigation */}
            <section className="legal-main-section">
                <div className="container">
                    <div className="legal-tabs-premium animate-up">
                        <button
                            className={`legal-tab-btn ${activeTab === 'privacy' ? 'active' : ''}`}
                            onClick={() => setActiveTab('privacy')}
                        >
                            Privacy Policy
                        </button>
                        <button
                            className={`legal-tab-btn ${activeTab === 'terms' ? 'active' : ''}`}
                            onClick={() => setActiveTab('terms')}
                        >
                            Terms of Service
                        </button>
                        <button
                            className={`legal-tab-btn ${activeTab === 'cookies' ? 'active' : ''}`}
                            onClick={() => setActiveTab('cookies')}
                        >
                            Cookie Policy
                        </button>
                    </div>

                    <div className="legal-document-container animate-up delay-1">
                        {/* Privacy Policy Content */}
                        {activeTab === 'privacy' && (
                            <div className="legal-document-premium">
                                <div className="doc-header">
                                    <h2>Privacy Policy</h2>
                                    <span className="last-updated">Last Updated: {lastUpdated}</span>
                                </div>

                                <div className="doc-content">
                                    <section className="doc-section">
                                        <h3>1. Introduction</h3>
                                        <p>At Tejvtech, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
                                    </section>

                                    <section className="doc-section">
                                        <h3>2. Information We Collect</h3>
                                        <h4>2.1 Personal Information</h4>
                                        <p>We may collect personal information that you voluntarily provide to us, including but not limited to:</p>
                                        <ul>
                                            <li>Name and contact details (email address, phone number)</li>
                                            <li>Professional information (job title, company name)</li>
                                            <li>Account credentials and billing information</li>
                                        </ul>

                                        <h4>2.2 Automatically Collected Information</h4>
                                        <p>When you access our website, we may automatically collect device information, IP addresses, and usage patterns to improve our service delivery.</p>
                                    </section>

                                    <section className="doc-section">
                                        <h3>3. Data Security</h3>
                                        <p>We implement industry-standard technical and organizational measures to protect your personal information against unauthorized access, alteration, or disclosure.</p>
                                    </section>
                                </div>
                            </div>
                        )}

                        {/* Terms of Service Content */}
                        {activeTab === 'terms' && (
                            <div className="legal-document-premium">
                                <div className="doc-header">
                                    <h2>Terms of Service</h2>
                                    <span className="last-updated">Last Updated: {lastUpdated}</span>
                                </div>

                                <div className="doc-content">
                                    <section className="doc-section">
                                        <h3>1. Acceptance of Terms</h3>
                                        <p>By accessing or using the services provided by Tejvtech, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>
                                    </section>

                                    <section className="doc-section">
                                        <h3>2. Description of Services</h3>
                                        <p>Tejvtech provides technology consulting, software development, and digital transformation services tailored to enterprise needs.</p>
                                    </section>
                                </div>
                            </div>
                        )}

                        {/* Cookie Policy Content */}
                        {activeTab === 'cookies' && (
                            <div className="legal-document-premium">
                                <div className="doc-header">
                                    <h2>Cookie Policy</h2>
                                    <span className="last-updated">Last Updated: {lastUpdated}</span>
                                </div>

                                <div className="doc-content">
                                    <section className="doc-section">
                                        <h3>1. What Are Cookies</h3>
                                        <p>Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences.</p>
                                    </section>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Contact CTA */}
                    <div className="legal-footer-cta animate-up">
                        <div className="cta-card-small">
                            <p>Have questions about our policies?</p>
                            <Link to="/contact" className="btn btn-hero-primary">
                                Contact Legal Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
