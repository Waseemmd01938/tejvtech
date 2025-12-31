import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            id: 'ai-ml',
            title: 'AI & Machine Learning',
            description: 'Unlock the power of data with our advanced AI and Machine Learning solutions. We build intelligent systems that automate processes and provide predictive insights.',
            icon: '🤖',
            color: '#6366f1'
        },
        {
            id: 'cloud',
            title: 'Cloud Solutions',
            description: 'Accelerate your digital transformation with our secure and scalable cloud services. We specialize in AWS, Azure, and Google Cloud migrations and management.',
            icon: '☁️',
            color: '#3b82f6'
        },
        {
            id: 'web-development',
            title: 'Web Development',
            description: 'Create stunning, high-performance websites and web applications. Our full-stack developers use the latest technologies to deliver exceptional user experiences.',
            icon: '💻',
            color: '#10b981'
        },
        {
            id: 'mobile-app',
            title: 'Mobile App Development',
            description: 'Reach your customers on the go with our native and cross-platform mobile apps. We build intuitive and engaging apps for iOS and Android.',
            icon: '📱',
            color: '#f59e0b'
        },
        {
            id: 'cybersecurity',
            title: 'Cybersecurity',
            description: 'Protect your business from evolving threats with our comprehensive cybersecurity services. We offer risk assessments, penetration testing, and 24/7 monitoring.',
            icon: '🛡️',
            color: '#ef4444'
        },
        {
            id: 'data-analytics',
            title: 'Data Analytics',
            description: 'Turn your data into a strategic asset. Our analytics solutions help you visualize trends, identify opportunities, and make data-driven decisions.',
            icon: '📊',
            color: '#8b5cf6'
        },
        {
            id: 'devops',
            title: 'DevOps Services',
            description: 'Streamline your development lifecycle with our DevOps expertise. We implement CI/CD pipelines, automation, and infrastructure as code.',
            icon: '⚙️',
            color: '#ec4899'
        },
        {
            id: 'iot',
            title: 'IoT Solutions',
            description: 'Connect the physical and digital worlds with our IoT solutions. We build smart systems for manufacturing, healthcare, and smart cities.',
            icon: '🌐',
            color: '#06b6d4'
        }
    ];

    return (
        <div className="services-page">
            <section className="services-hero">
                <div className="container">
                    <div className="services-hero-content animate-up">
                        <span className="section-tag">Our Expertise</span>
                        <h1>Innovative <span className="text-gradient">Solutions</span> for Modern Enterprises</h1>
                        <p>We deliver end-to-end technology services that empower businesses to innovate faster, scale efficiently, and lead their industries.</p>
                    </div>
                </div>
                <div className="hero-bg-visual"></div>
            </section>

            <section className="services-grid-section">
                <div className="container">
                    <div className="services-grid">
                        {services.map((svc, idx) => (
                            <div key={idx} className="service-card-premium animate-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                                <div className="service-card-inner">
                                    <div className="service-icon-box" style={{ background: `${svc.color}15`, color: svc.color }}>
                                        <span className="svc-icon">{svc.icon}</span>
                                    </div>
                                    <h3>{svc.title}</h3>
                                    <p>{svc.description}</p>
                                    <Link to={`/service/${svc.id}`} className="service-btn">
                                        Explore Service
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                                <div className="card-glow" style={{ background: `radial-gradient(circle at center, ${svc.color}20, transparent 70%)` }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="services-cta-premium">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <div className="cta-content">
                            <h2>Ready to transform your business?</h2>
                            <p>Let's discuss how our expertise can help you achieve your strategic goals and drive meaningful growth.</p>
                            <Link to="/contact" className="btn btn-hero-primary">
                                Get a Free Consultation
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

export default Services;
