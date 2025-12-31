import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/SolutionLayout.css';
import './DataAnalytics.css';

const DataAnalytics = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="solution-page dark data-page">
            {/* Unique Hero: Dark Mode with Data Visualization */}
            <section className="solution-hero data-hero">
                <div className="data-bg-grid"></div>
                <div className="container">
                    <div className="data-hero-inner animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Data-Driven Excellence
                        </div>
                        <h1>Turn Data Into <br /><span className="gradient-text">Decisions</span></h1>
                        <p>Unlock hidden patterns in your data with advanced BI tools and predictive analytics designed for modern enterprises.</p>
                        <div className="data-hero-stats">
                            <div className="data-stat">
                                <span className="stat-num">10X</span>
                                <span className="stat-label">Faster Insights</span>
                            </div>
                            <div className="data-stat-divider"></div>
                            <div className="data-stat">
                                <span className="stat-num">40%</span>
                                <span className="stat-label">ROI Increase</span>
                            </div>
                        </div>
                        <div className="hero-cta-group">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Get a Data Audit
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique Section: Interactive Dashboard Preview */}
            <section className="dashboard-preview">
                <div className="container">
                    <div className="preview-card animate-up">
                        <div className="preview-header">
                            <div className="dots"><span></span><span></span><span></span></div>
                            <div className="title">Analytics Dashboard v2.0</div>
                        </div>
                        <div className="preview-body">
                            <div className="chart-placeholder">
                                <div className="bar-chart">
                                    <div className="bar" style={{ height: '60%', '--delay': '0.1s' }}></div>
                                    <div className="bar" style={{ height: '80%', '--delay': '0.2s' }}></div>
                                    <div className="bar" style={{ height: '40%', '--delay': '0.3s' }}></div>
                                    <div className="bar" style={{ height: '90%', '--delay': '0.4s' }}></div>
                                    <div className="bar" style={{ height: '50%', '--delay': '0.5s' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique Feature: Data Strategy Steps */}
            <section className="data-strategy">
                <div className="container">
                    <div className="solution-section-header animate-up">
                        <span className="section-tag">Strategy</span>
                        <h2>Our Data Roadmap</h2>
                        <p>A systematic approach to transforming raw data into business intelligence.</p>
                    </div>
                    <div className="solution-grid">
                        <div className="solution-card data-card animate-up delay-1">
                            <div className="step">01</div>
                            <h3>Data Ingestion</h3>
                            <p>Collecting raw data from all your sources into a unified data lake with high integrity.</p>
                        </div>
                        <div className="solution-card data-card animate-up delay-2">
                            <div className="step">02</div>
                            <h3>Processing</h3>
                            <p>Cleaning, normalizing, and structuring data for high-performance real-time analysis.</p>
                        </div>
                        <div className="solution-card data-card animate-up delay-3">
                            <div className="step">03</div>
                            <h3>Visualization</h3>
                            <p>Creating intuitive, interactive dashboards that tell a compelling and actionable story.</p>
                        </div>
                        <div className="solution-card data-card animate-up delay-4">
                            <div className="step">04</div>
                            <h3>Action</h3>
                            <p>Translating complex insights into measurable business growth and strategic decisions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique CTA: Gradient Border */}
            <section className="data-cta">
                <div className="container">
                    <div className="data-cta-box animate-up">
                        <h2>Stop guessing. Start knowing.</h2>
                        <p>Let's build your data-driven future together with our expert data scientists.</p>
                        <Link to="/contact" className="btn btn-hero-primary">
                            Talk to a Data Scientist
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

export default DataAnalytics;
