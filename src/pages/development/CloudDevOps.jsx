import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CloudDevOps.css';

const CloudDevOps = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const features = [
        { title: 'Cloud Migration', description: 'Seamlessly transition your infrastructure and applications to the cloud with zero data loss.', icon: '☁️' },
        { title: 'CI/CD Pipelines', description: 'Automate your software delivery process for faster, more reliable releases.', icon: '🔄' },
        { title: 'Infrastructure as Code', description: 'Manage and provision your infrastructure through code using Terraform and Ansible.', icon: '📝' },
        { title: 'Containerization', description: 'Package and deploy applications consistently across environments using Docker and Kubernetes.', icon: '📦' },
        { title: 'Cloud Security', description: 'Implement robust security frameworks and compliance controls in your cloud environment.', icon: '🛡️' },
        { title: 'Monitoring & Logging', description: 'Gain real-time visibility into your systems with advanced observability solutions.', icon: '📊' }
    ];

    return (
        <div className="cloud-devops-page">
            {/* Hero Section */}
            <section className="cloud-hero">
                <div className="container">
                    <div className="cloud-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Scale with Confidence
                        </div>
                        <h1>Modernize Your <span className="text-gradient">Infrastructure.</span></h1>
                        <p>Accelerate your digital transformation with our expert Cloud and DevOps services. We build scalable, secure, and automated environments that drive business agility.</p>
                        <div className="hero-actions">
                            <Link to="/contact" className="btn btn-hero-primary">
                                Consult Our Experts
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="cloud-hero-visual">
                    <div className="cloud-particles"></div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="cloud-features">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Capabilities</span>
                        <h2>Cloud & DevOps Solutions</h2>
                        <p>End-to-end services to optimize your development and operations lifecycle.</p>
                    </div>
                    <div className="cloud-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="cloud-card animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="card-icon-box">{feature.icon}</div>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="cloud-tech bg-dark">
                <div className="container">
                    <div className="tech-content animate-up">
                        <h2 className="text-white">Technologies We Master</h2>
                        <div className="tech-grid-premium">
                            <div className="tech-item"><span>AWS</span></div>
                            <div className="tech-item"><span>Azure</span></div>
                            <div className="tech-item"><span>GCP</span></div>
                            <div className="tech-item"><span>Kubernetes</span></div>
                            <div className="tech-item"><span>Docker</span></div>
                            <div className="tech-item"><span>Terraform</span></div>
                            <div className="tech-item"><span>Jenkins</span></div>
                            <div className="tech-item"><span>GitLab</span></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="cloud-cta">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <h2>Ready to <span className="text-gradient">automate and scale?</span></h2>
                        <p>Let's build a future-proof infrastructure for your business.</p>
                        <Link to="/contact" className="btn btn-hero-primary">
                            Get Started Now
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

export default CloudDevOps;
