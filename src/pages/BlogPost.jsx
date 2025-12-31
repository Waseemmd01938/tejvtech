import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);

    // Sample blog posts data
    const blogPosts = {
        'future-of-ai-in-enterprise': {
            id: 1,
            title: 'The Future of AI in Enterprise: Trends to Watch in 2025',
            category: 'Technology',
            author: 'Rajesh Kumar',
            authorAvatar: 'RK',
            authorRole: 'AI/ML Lead',
            date: 'December 28, 2024',
            readTime: '8 min read',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
            content: `
                <p class="lead">Artificial Intelligence is no longer a futuristic concept—it's reshaping how enterprises operate, make decisions, and serve customers. As we look ahead to 2025, several transformative trends are emerging that will define the next era of enterprise AI.</p>

                <h2>1. Generative AI Goes Mainstream</h2>
                <p>Generative AI has moved beyond experimental phases into production environments. Enterprises are leveraging these capabilities for content creation, code generation, and even product design. The key shift in 2025 is the focus on domain-specific models trained on proprietary data, offering unprecedented accuracy and relevance for business applications.</p>

                <h2>2. Edge AI for Real-Time Decision Making</h2>
                <p>With the proliferation of IoT devices, processing AI at the edge has become essential. Manufacturing plants, healthcare facilities, and retail environments are deploying edge AI solutions that enable real-time analytics without the latency of cloud processing. This trend is particularly impactful in scenarios where milliseconds matter.</p>

                <blockquote>
                    "The enterprises that will thrive in 2025 are those that successfully integrate AI into their core business processes, not as an add-on, but as a fundamental capability."
                </blockquote>

                <h2>3. Responsible AI and Governance</h2>
                <p>As AI becomes more embedded in critical business decisions, governance frameworks are evolving rapidly. Organizations are implementing AI ethics boards, establishing clear guidelines for algorithmic transparency, and ensuring compliance with emerging regulations. The focus is on building AI systems that are explainable, fair, and accountable.</p>

                <h2>4. AI-Powered Automation Beyond RPA</h2>
                <p>Traditional Robotic Process Automation (RPA) is being enhanced with cognitive capabilities. Intelligent Process Automation (IPA) combines computer vision, natural language processing, and machine learning to handle complex, unstructured data and make judgment calls that previously required human intervention.</p>
            `,
            tags: ['AI', 'Enterprise', 'Technology Trends', 'Machine Learning']
        },
        'microservices-architecture-guide': {
            id: 2,
            title: 'A Complete Guide to Microservices Architecture for Modern Applications',
            category: 'Development',
            author: 'Priya Sharma',
            authorAvatar: 'PS',
            authorRole: 'Solutions Architect',
            date: 'December 25, 2024',
            readTime: '12 min read',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
            content: `
                <p class="lead">Microservices architecture has become the de facto standard for building scalable, maintainable applications. This comprehensive guide covers everything you need to know to design, implement, and operate microservices effectively.</p>

                <h2>Understanding Microservices</h2>
                <p>Microservices architecture structures an application as a collection of loosely coupled, independently deployable services. Each service is focused on a specific business capability and can be developed, deployed, and scaled independently.</p>

                <h2>Key Principles of Microservices Design</h2>
                <h3>Single Responsibility</h3>
                <p>Each microservice should focus on doing one thing well. This principle ensures that services remain manageable and can evolve independently without impacting other parts of the system.</p>

                <h3>Decentralized Data Management</h3>
                <p>Each service manages its own database, allowing teams to choose the most appropriate data store for their specific needs. This approach, often called "database per service," promotes loose coupling but requires careful consideration of data consistency.</p>
            `,
            tags: ['Microservices', 'Architecture', 'DevOps', 'Backend']
        }
    };

    useEffect(() => {
        const foundPost = blogPosts[slug];
        if (foundPost) {
            setPost(foundPost);
        }
        window.scrollTo(0, 0);
    }, [slug]);

    const relatedPosts = [
        {
            slug: 'digital-transformation-strategies',
            title: 'Digital Transformation Strategies That Actually Work',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
            date: 'December 22, 2024'
        },
        {
            slug: 'cloud-security-best-practices',
            title: 'Cloud Security Best Practices for Enterprises',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80',
            date: 'December 20, 2024'
        }
    ];

    if (!post) {
        return (
            <div className="blog-post-page">
                <div className="container">
                    <div className="post-not-found animate-up">
                        <h2>Article Not Found</h2>
                        <p>The article you're looking for doesn't exist or has been moved.</p>
                        <Link to="/blog" className="btn btn-hero-primary">
                            Back to Blog
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="blog-post-page">
            {/* Post Hero */}
            <section className="post-hero-premium">
                <div className="container">
                    <div className="post-hero-content animate-up">
                        <Link to="/blog" className="back-btn-premium">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Back to Blog
                        </Link>
                        <span className="post-category-tag">{post.category}</span>
                        <h1>{post.title}</h1>
                        <div className="post-meta-premium">
                            <div className="author-box">
                                <span className="author-circle">{post.authorAvatar}</span>
                                <div className="author-info">
                                    <span className="name">{post.author}</span>
                                    <span className="role">{post.authorRole}</span>
                                </div>
                            </div>
                            <div className="meta-sep"></div>
                            <div className="meta-item">
                                <span className="label">Published</span>
                                <span className="val">{post.date}</span>
                            </div>
                            <div className="meta-sep"></div>
                            <div className="meta-item">
                                <span className="label">Read Time</span>
                                <span className="val">{post.readTime}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="post-hero-image-box animate-up delay-1">
                    <img src={post.image} alt={post.title} />
                </div>
            </section>

            {/* Article Content */}
            <section className="post-body-section">
                <div className="container">
                    <div className="post-layout-grid">
                        <article className="post-article-content animate-up">
                            <div
                                className="content-rich-text"
                                dangerouslySetInnerHTML={{ __html: post.content }}
                            />

                            <div className="post-tags-row">
                                {post.tags.map((tag, index) => (
                                    <span key={index} className="tag-pill">#{tag}</span>
                                ))}
                            </div>

                            <div className="post-share-box">
                                <span>Share this article</span>
                                <div className="share-links">
                                    <button className="share-icon">LN</button>
                                    <button className="share-icon">TW</button>
                                    <button className="share-icon">FB</button>
                                </div>
                            </div>
                        </article>

                        <aside className="post-sidebar-premium animate-up delay-1">
                            <div className="sidebar-card author-bio">
                                <h4>About the Author</h4>
                                <div className="author-header">
                                    <span className="author-circle-lg">{post.authorAvatar}</span>
                                    <div>
                                        <strong>{post.author}</strong>
                                        <span>{post.authorRole}</span>
                                    </div>
                                </div>
                                <p>Expert in emerging technologies with 10+ years of experience helping enterprises navigate digital transformation and scale their technology infrastructure.</p>
                            </div>

                            <div className="sidebar-card newsletter-card">
                                <h4>Stay Updated</h4>
                                <p>Get the latest tech insights delivered to your inbox.</p>
                                <form className="sidebar-form" onSubmit={(e) => e.preventDefault()}>
                                    <input type="email" placeholder="Your email" required />
                                    <button type="submit" className="btn btn-hero-primary btn-full">Subscribe</button>
                                </form>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            <section className="related-posts-section bg-light">
                <div className="container">
                    <div className="section-header animate-up">
                        <h2>Related Articles</h2>
                    </div>
                    <div className="related-grid-premium">
                        {relatedPosts.map((related, index) => (
                            <Link to={`/blog/${related.slug}`} key={index} className="related-card-premium animate-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="related-img">
                                    <img src={related.image} alt={related.title} />
                                </div>
                                <div className="related-body">
                                    <h3>{related.title}</h3>
                                    <span className="date">{related.date}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogPost;
