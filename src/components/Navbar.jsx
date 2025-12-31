import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleMouseEnter = (menu) => setActiveDropdown(menu);
    const handleMouseLeave = () => setActiveDropdown(null);
    const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

    // Improved slugify to match App.jsx routes
    const slugify = (text) => {
        return text
            .toLowerCase()
            .replace(/ & /g, '-') // Handle " & " specifically
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(/[^a-z0-9-]/g, ''); // Remove non-alphanumeric except -
    };

    const businessSolutions = [
        'Enterprise AI', 'Cloud Solutions', 'Data Analytics', 'Cybersecurity',
        'Digital Transformation', 'IT Consulting'
    ];

    const services = [
        'Training', 'Support', 'Consulting', 'Implementation & Deployment',
        'Infrastructure Support', 'Application Maintenance', 'Application Development',
        'API Development', 'Customer Software Support', 'DevOps',
        'Digital Transformation', 'Migrations & Upgrades', 'Partner Product Support',
        'Startup & MVP Services', 'System Integration', 'PLM'
    ];

    const development = [
        { name: 'Digital Marketing', path: 'digital-marketing' },
        { name: 'Web Development', path: 'web-development' },
        { name: 'Mobile App Development', path: 'mobile-app-development' },
        { name: 'UI/UX Design', path: 'ui-ux-design' },
        { name: 'Cloud & DevOps', path: 'cloud-devops' },
        { name: 'Databases', path: 'databases' }
    ];

    const industries = [
        'Healthcare', 'FinTech', 'E-Commerce', 'Manufacturing',
        'Education', 'Logistics', 'Real Estate', 'Agriculture',
        'Defence', 'Aerospace', 'Telecommunications', 'BFSI'
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    <img src="/Tejvtech-logo.png" alt="Tejvtech Logo" className="logo-image" />
                    <span className="logo-text">tejvtech</span>
                </Link>

                <ul className={`navbar-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                    <li>
                        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
                            HOME
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/technologies" className={({ isActive }) => isActive ? 'active' : ''}>
                            TECHNOLOGIES
                        </NavLink>
                    </li>

                    <li onMouseEnter={() => handleMouseEnter('business')} onMouseLeave={handleMouseLeave} className="dropdown">
                        <span className="nav-item">SOLUTIONS <i className="arrow down"></i></span>
                        {activeDropdown === 'business' && (
                            <ul className="dropdown-menu">
                                {businessSolutions.map(item => (
                                    <li key={item}><Link to={`/business/${slugify(item)}`}>{item}</Link></li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave} className="dropdown">
                        <span className="nav-item">SERVICES <i className="arrow down"></i></span>
                        {activeDropdown === 'services' && (
                            <ul className="dropdown-menu dropdown-menu-lg">
                                {services.map(item => (
                                    <li key={item}><Link to={`/service/${slugify(item)}`}>{item}</Link></li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li onMouseEnter={() => handleMouseEnter('development')} onMouseLeave={handleMouseLeave} className="dropdown">
                        <span className="nav-item">DEVELOPMENT <i className="arrow down"></i></span>
                        {activeDropdown === 'development' && (
                            <ul className="dropdown-menu">
                                {development.map(item => (
                                    <li key={item.name}>
                                        <Link to={`/development/${item.path}`}>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li onMouseEnter={() => handleMouseEnter('industries')} onMouseLeave={handleMouseLeave} className="dropdown">
                        <span className="nav-item">INDUSTRIES <i className="arrow down"></i></span>
                        {activeDropdown === 'industries' && (
                            <ul className="dropdown-menu columns-2">
                                <li className="dropdown-header"><Link to="/industries">View All Industries</Link></li>
                                {industries.map(item => (
                                    <li key={item}><Link to={`/industry/${slugify(item)}`}>{item}</Link></li>
                                ))}
                            </ul>
                        )}
                    </li>

                    <li>
                        <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'active' : ''}>
                            PORTFOLIO
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>
                            BLOG
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                            ABOUT
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>
                            CONTACT
                        </NavLink>
                    </li>
                </ul>

                <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle Menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {mobileMenuOpen ? (
                            <>
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </>
                        ) : (
                            <>
                                <line x1="3" y1="12" x2="21" y2="12"></line>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <line x1="3" y1="18" x2="21" y2="18"></line>
                            </>
                        )}
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
