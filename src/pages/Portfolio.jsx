import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

const Portfolio = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [filteredProjects, setFilteredProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Animated keyword loop
    const keywords = ['Web Apps', 'Mobile Apps', 'AI Solutions', 'IoT Systems', 'Cloud Platforms'];
    const [currentKeyword, setCurrentKeyword] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        const interval = setInterval(() => {
            setCurrentKeyword((prev) => (prev + 1) % keywords.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Portfolio projects data
    const projects = [
        {
            id: 1,
            title: 'Enterprise Healthcare Platform',
            category: 'web',
            tags: ['Healthcare', 'React', 'Node.js', 'MongoDB'],
            description: 'A comprehensive healthcare management system enabling seamless patient records management, appointment scheduling, and telemedicine capabilities.',
            outcome: 'Reduced patient wait times by 40% and increased operational efficiency by 60%.',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
            client: 'MediCare Solutions',
            duration: '8 months',
            technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'WebRTC']
        },
        {
            id: 2,
            title: 'AI-Powered Analytics Dashboard',
            category: 'ai',
            tags: ['AI/ML', 'Python', 'TensorFlow', 'Analytics'],
            description: 'Machine learning-driven analytics platform providing real-time insights, predictive forecasting, and automated decision recommendations.',
            outcome: 'Enabled 35% improvement in forecast accuracy and 50% faster decision-making.',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
            client: 'DataSmart Corp',
            duration: '6 months',
            technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Docker']
        },
        {
            id: 3,
            title: 'FinTech Mobile Banking App',
            category: 'mobile',
            tags: ['FinTech', 'React Native', 'Banking', 'iOS/Android'],
            description: 'Secure mobile banking application with biometric authentication, real-time transactions, and investment portfolio management.',
            outcome: 'Achieved 500K+ downloads with 4.8-star rating and processed $50M+ in transactions.',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
            client: 'SecureBank Ltd',
            duration: '10 months',
            technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS', 'Stripe']
        },
        {
            id: 4,
            title: 'Smart Logistics Platform',
            category: 'api',
            tags: ['Logistics', 'IoT', 'API', 'Real-time'],
            description: 'End-to-end logistics management system with IoT integration for fleet tracking, route optimization, and automated dispatching.',
            outcome: 'Reduced delivery costs by 25% and improved on-time delivery rate to 98%.',
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
            client: 'FastLogix Inc',
            duration: '7 months',
            technologies: ['Node.js', 'Python', 'IoT', 'Google Maps API', 'Redis']
        },
        {
            id: 5,
            title: 'E-Commerce Marketplace',
            category: 'web',
            tags: ['E-commerce', 'Next.js', 'Payments', 'Multi-vendor'],
            description: 'Multi-vendor e-commerce platform with advanced product catalog, integrated payments, and AI-powered recommendations.',
            outcome: 'Scaled to 10,000+ products with 1M+ monthly active users.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6d58d?auto=format&fit=crop&w=800&q=80',
            client: 'ShopEase Global',
            duration: '12 months',
            technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Elasticsearch', 'Stripe']
        },
        {
            id: 6,
            title: 'Educational LMS Platform',
            category: 'web',
            tags: ['EdTech', 'LMS', 'Video Streaming', 'React'],
            description: 'Comprehensive learning management system with live classes, progress tracking, and interactive assessments.',
            outcome: 'Empowered 50,000+ students across 100+ institutions.',
            image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80',
            client: 'EduPro Academy',
            duration: '9 months',
            technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'WebRTC']
        }
    ];

    const filters = [
        { key: 'all', label: 'All Projects' },
        { key: 'web', label: 'Web Apps' },
        { key: 'mobile', label: 'Mobile Apps' },
        { key: 'ai', label: 'AI & Blockchain' },
        { key: 'api', label: 'API & IoT' }
    ];

    useEffect(() => {
        if (activeFilter === 'all') {
            setFilteredProjects(projects);
        } else {
            setFilteredProjects(projects.filter(p => p.category === activeFilter));
        }
    }, [activeFilter]);

    const openModal = (project) => {
        setSelectedProject(project);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className="portfolio-page">
            {/* Hero Section */}
            <section className="portfolio-hero">
                <div className="container">
                    <div className="portfolio-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Showcasing Our Best Work
                        </div>
                        <h1 className="hero-title">
                            Our Project<br />
                            <span className="text-gradient">Portfolio.</span>
                        </h1>
                        <p className="hero-subtitle">
                            Explore how we've helped businesses transform their ideas into impactful
                            digital solutions across various industries.
                        </p>
                        <div className="hero-keyword-loop">
                            <span className="keyword-prefix">We build</span>
                            <span className="keyword-animated" key={currentKeyword}>
                                {keywords[currentKeyword]}
                            </span>
                        </div>
                    </div>

                    {/* Hero Stats */}
                    <div className="hero-stats animate-up delay-2">
                        <div className="hero-stat">
                            <span className="stat-value">12+</span>
                            <span className="stat-label">Projects Delivered</span>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div className="hero-stat">
                            <span className="stat-value">10+</span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div className="hero-stat">
                            <span className="stat-value">9+</span>
                            <span className="stat-label">Industries Served</span>
                        </div>
                        <div className="hero-stat-divider"></div>
                        <div className="hero-stat">
                            <span className="stat-value">99%</span>
                            <span className="stat-label">Satisfaction</span>
                        </div>
                    </div>
                </div>
                <div className="hero-bg-visual"></div>
            </section>

            {/* Portfolio Grid Section */}
            <section className="portfolio-grid-section">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Our Work</span>
                        <h2 className="section-heading">Proof of Execution</h2>
                        <p className="section-description">
                            Real results from real projects. Filter by category to see our expertise.
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className="portfolio-filters animate-up delay-1">
                        {filters.map(filter => (
                            <button
                                key={filter.key}
                                className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                                onClick={() => setActiveFilter(filter.key)}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <div className="portfolio-grid">
                        {filteredProjects.map((project, index) => (
                            <div
                                key={project.id}
                                className="portfolio-card-premium animate-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                                onClick={() => openModal(project)}
                            >
                                <div className="portfolio-image-wrapper">
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                    <div className="portfolio-overlay">
                                        <div className="overlay-content">
                                            <span className="project-category">{project.category.toUpperCase()}</span>
                                            <h3>{project.title}</h3>
                                            <div className="view-case-btn">
                                                View Case Study
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="portfolio-info-premium">
                                    <div className="project-tags">
                                        {project.tags.slice(0, 3).map((tag, i) => (
                                            <span key={i} className="tag">{tag}</span>
                                        ))}
                                    </div>
                                    <h3>{project.title}</h3>
                                    <p>{project.description.substring(0, 100)}...</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="portfolio-cta-section">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <div className="cta-content">
                            <h2>Have a Project <span className="text-gradient">In Mind?</span></h2>
                            <p>
                                Let's collaborate to bring your vision to life. Our team is ready
                                to create something extraordinary together.
                            </p>
                            <Link to="/contact" className="btn btn-hero-primary">
                                Start a Project
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Modal */}
            {isModalOpen && selectedProject && (
                <div className="project-modal-overlay" onClick={closeModal}>
                    <div className="project-modal animate-up" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="modal-content-inner">
                            <div className="modal-image-side">
                                <img src={selectedProject.image} alt={selectedProject.title} />
                            </div>
                            <div className="modal-details-side">
                                <span className="modal-tag">{selectedProject.category.toUpperCase()}</span>
                                <h2>{selectedProject.title}</h2>
                                <p className="modal-desc">{selectedProject.description}</p>

                                <div className="modal-meta-grid">
                                    <div className="meta-box">
                                        <span className="label">Client</span>
                                        <span className="value">{selectedProject.client}</span>
                                    </div>
                                    <div className="meta-box">
                                        <span className="label">Duration</span>
                                        <span className="value">{selectedProject.duration}</span>
                                    </div>
                                </div>

                                <div className="modal-highlight">
                                    <h4>Key Outcomes</h4>
                                    <p>{selectedProject.outcome}</p>
                                </div>

                                <div className="modal-tech-stack">
                                    <h4>Technologies</h4>
                                    <div className="tech-pills">
                                        {selectedProject.technologies.map((tech, i) => (
                                            <span key={i} className="tech-pill-small">{tech}</span>
                                        ))}
                                    </div>
                                </div>

                                <Link to="/contact" className="btn btn-hero-primary modal-cta-btn">
                                    Discuss Similar Project
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Portfolio;
