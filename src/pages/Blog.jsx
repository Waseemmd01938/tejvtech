import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    // Animated keyword loop
    const keywords = ['Insights', 'Trends', 'Guides', 'Updates', 'Innovation'];
    const [currentKeyword, setCurrentKeyword] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        const interval = setInterval(() => {
            setCurrentKeyword((prev) => (prev + 1) % keywords.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const categories = [
        { key: 'all', label: 'All Posts' },
        { key: 'technology', label: 'Technology' },
        { key: 'development', label: 'Development' },
        { key: 'business', label: 'Business' },
        { key: 'insights', label: 'Industry Insights' }
    ];

    const blogPosts = [
        {
            id: 1,
            slug: 'future-of-ai-in-enterprise',
            title: 'The Future of AI in Enterprise: Trends to Watch in 2025',
            excerpt: 'Explore how artificial intelligence is reshaping enterprise operations, from automated decision-making to predictive analytics that drive business growth.',
            category: 'technology',
            author: 'Rajesh Kumar',
            authorAvatar: 'RK',
            date: 'December 28, 2024',
            readTime: '8 min read',
            image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
            featured: true
        },
        {
            id: 2,
            slug: 'microservices-architecture-guide',
            title: 'A Complete Guide to Microservices Architecture for Modern Applications',
            excerpt: 'Learn how to design, implement, and scale microservices architecture that enables faster development cycles and improved system reliability.',
            category: 'development',
            author: 'Priya Sharma',
            authorAvatar: 'PS',
            date: 'December 25, 2024',
            readTime: '12 min read',
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
            featured: true
        },
        {
            id: 3,
            slug: 'digital-transformation-strategies',
            title: 'Digital Transformation Strategies That Actually Work in 2025',
            excerpt: 'Discover proven strategies for digital transformation that help businesses stay competitive in an increasingly digital-first world.',
            category: 'business',
            author: 'Amit Patel',
            authorAvatar: 'AP',
            date: 'December 22, 2024',
            readTime: '6 min read',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
            featured: false
        },
        {
            id: 4,
            slug: 'cloud-security-best-practices',
            title: 'Cloud Security Best Practices Every Business Should Implement',
            excerpt: 'Essential security measures and best practices to protect your cloud infrastructure from evolving cyber threats and vulnerabilities.',
            category: 'technology',
            author: 'Sneha Reddy',
            authorAvatar: 'SR',
            date: 'December 20, 2024',
            readTime: '10 min read',
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
            featured: false
        }
    ];

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPosts = blogPosts.filter(post => post.featured);

    return (
        <div className="blog-page">
            {/* Hero Section */}
            <section className="blog-hero">
                <div className="container">
                    <div className="blog-hero-content animate-up">
                        <div className="hero-badge">
                            <span className="badge-dot"></span>
                            Expert Insights & Resources
                        </div>
                        <h1 className="hero-title">
                            Insights &<br />
                            <span className="text-gradient">Resources.</span>
                        </h1>
                        <p className="hero-subtitle">
                            Stay ahead with the latest technology trends, best practices, and
                            industry insights from our team of experts.
                        </p>
                        <div className="hero-keyword-loop">
                            <span className="keyword-prefix">Discover our</span>
                            <span className="keyword-animated" key={currentKeyword}>
                                {keywords[currentKeyword]}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="hero-bg-visual"></div>
            </section>

            {/* Featured Posts Section */}
            <section className="blog-featured-section">
                <div className="container">
                    <div className="section-header-centered animate-up">
                        <span className="section-tag">Featured</span>
                        <h2>Editor's Choice</h2>
                        <p>Our most impactful articles and deep dives into modern technology.</p>
                    </div>
                    <div className="featured-grid">
                        {featuredPosts.map((post) => (
                            <Link to={`/blog/${post.slug}`} key={post.id} className="featured-card-premium animate-up">
                                <div className="featured-image-box">
                                    <img src={post.image} alt={post.title} loading="lazy" />
                                    <span className="featured-label">Featured</span>
                                </div>
                                <div className="featured-content-box">
                                    <span className="category-pill">{post.category}</span>
                                    <h3>{post.title}</h3>
                                    <p>{post.excerpt}</p>
                                    <div className="post-meta-row">
                                        <div className="author-box">
                                            <span className="author-circle">{post.authorAvatar}</span>
                                            <div className="author-details">
                                                <span className="name">{post.author}</span>
                                                <span className="date">{post.date}</span>
                                            </div>
                                        </div>
                                        <span className="read-time">{post.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Posts Section */}
            <section className="blog-main-section bg-light">
                <div className="container">
                    <div className="blog-controls animate-up">
                        <div className="search-box-premium">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" />
                                <path d="M21 21l-4.35-4.35" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <div className="category-filters-premium">
                            {categories.map(cat => (
                                <button
                                    key={cat.key}
                                    className={`filter-pill ${selectedCategory === cat.key ? 'active' : ''}`}
                                    onClick={() => setSelectedCategory(cat.key)}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="blog-grid-premium">
                        {filteredPosts.map((post, index) => (
                            <article
                                key={post.id}
                                className="blog-card-premium animate-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <Link to={`/blog/${post.slug}`} className="blog-card-inner">
                                    <div className="blog-card-image">
                                        <img src={post.image} alt={post.title} loading="lazy" />
                                        <span className="category-tag">{post.category}</span>
                                    </div>
                                    <div className="blog-card-body">
                                        <span className="read-time-small">{post.readTime}</span>
                                        <h3>{post.title}</h3>
                                        <p>{post.excerpt}</p>
                                        <div className="blog-card-footer">
                                            <span className="author-name">{post.author}</span>
                                            <span className="dot"></span>
                                            <span className="post-date">{post.date}</span>
                                        </div>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>

                    {filteredPosts.length === 0 && (
                        <div className="no-results animate-up">
                            <h3>No articles found</h3>
                            <p>Try adjusting your search or filter criteria.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA Section */}
            <section className="blog-newsletter-section">
                <div className="container">
                    <div className="cta-card-premium animate-up">
                        <div className="cta-content">
                            <h2>Stay Ahead of the <span className="text-gradient">Technology Curve.</span></h2>
                            <p>Subscribe to our newsletter for the latest insights, tips, and industry news delivered straight to your inbox.</p>
                            <form className="newsletter-form-premium" onSubmit={(e) => e.preventDefault()}>
                                <input
                                    type="email"
                                    placeholder="Enter your email address"
                                    required
                                />
                                <button type="submit" className="btn btn-hero-primary">
                                    Subscribe
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </form>
                            <p className="cta-note">No spam, only value. Unsubscribe anytime.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
