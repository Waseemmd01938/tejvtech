# Tejvtech - Technology Solutions Website

A modern, professional website for Tejvtech, a technology solutions company specializing in custom software development, cloud solutions, and digital transformation services.

## 🚀 Overview

Tejvtech is a comprehensive web application built with React and Vite, showcasing a full-service technology company's offerings across multiple domains including enterprise solutions, development services, and industry-specific expertise.

## ✨ Features

### Core Pages
- **Home** - Dynamic landing page with hero section, stats, features, testimonials, and CTAs
- **About** - Company information, mission & vision, team, and core values
- **Services** - Overview of all service offerings
- **Technologies** - Technology stack and expertise showcase
- **Portfolio** - Project showcase and case studies
- **Blog** - Articles and insights with dynamic routing
- **Contact** - Contact form and company information
- **Industries** - Industry-specific solutions overview

### Business Solutions (6 Categories)
- Enterprise AI
- Cloud Solutions
- Data Analytics
- Cybersecurity
- Digital Transformation
- IT Consulting

### Development Services (6 Categories)
- Web Development
- Mobile App Development
- UI/UX Design
- Cloud & DevOps
- Digital Marketing
- Databases

### Industry Expertise (12 Sectors)
- Healthcare
- FinTech
- E-Commerce
- Manufacturing
- Education
- Logistics
- Real Estate
- Agriculture
- Defence
- Aerospace
- Telecommunications
- BFSI (Banking, Financial Services, and Insurance)

### Professional Services (16 Services)
- Training
- Support
- Consulting
- Implementation & Deployment
- Infrastructure Support
- Application Maintenance
- Application Development
- API Development
- Customer Software Support
- DevOps
- Digital Transformation
- Migrations & Upgrades
- Partner Product Support
- Startup & MVP Services
- System Integration
- PLM (Product Lifecycle Management)

## 🛠️ Tech Stack

### Frontend
- **React 19.2.0** - UI library
- **React Router DOM 6.28.2** - Client-side routing
- **Vite 7.2.4** - Build tool and dev server
- **Bootstrap 4.6.2** - CSS framework (legacy support)

### Development Tools
- **ESLint** - Code linting
- **Vite Plugin React** - Fast refresh and JSX support

## 📁 Project Structure

```
tejvtech/
├── public/
│   └── Tejvtech-logo.png          # Company logo
├── src/
│   ├── assets/                     # Static assets
│   ├── components/                 # Reusable components
│   │   ├── Navbar.jsx/css         # Navigation bar with dropdowns
│   │   ├── Footer.jsx/css         # Footer with links and newsletter
│   │   └── PageTemplate.jsx/css   # Reusable page template
│   ├── data/                       # Data files and constants
│   ├── pages/                      # Page components
│   │   ├── development/           # Development service pages (6)
│   │   ├── industries/            # Industry-specific pages (12)
│   │   ├── services/              # Professional service pages (16)
│   │   ├── solutions/             # Business solution pages (6)
│   │   ├── Home.jsx               # Landing page
│   │   ├── About.jsx              # About page
│   │   ├── Services.jsx           # Services overview
│   │   ├── Technologies.jsx       # Tech stack showcase
│   │   ├── Portfolio.jsx          # Project portfolio
│   │   ├── Blog.jsx               # Blog listing
│   │   ├── BlogPost.jsx           # Individual blog post
│   │   ├── Contact.jsx            # Contact page
│   │   ├── Industries.jsx         # Industries overview
│   │   ├── Affiliates.jsx         # Partner affiliates
│   │   └── PrivacyPolicy.jsx      # Privacy & terms
│   ├── styles/                     # Global styles
│   │   └── fontFix.css            # Font rendering fixes
│   ├── App.jsx                     # Main app component with routing
│   ├── App.css                     # App-level styles
│   ├── index.css                   # Global styles and CSS variables
│   └── main.jsx                    # Application entry point
├── index.html                      # HTML template
├── package.json                    # Dependencies and scripts
├── vite.config.js                  # Vite configuration
├── eslint.config.js                # ESLint configuration
└── README.md                       # This file
```

## 🎨 Design Features

- **Modern UI/UX** - Clean, professional design with gradient accents
- **Responsive Layout** - Mobile-first design with breakpoints for all devices
- **Dynamic Navigation** - Multi-level dropdown menus with hover effects
- **Glassmorphism Effects** - Modern backdrop blur and transparency
- **Smooth Animations** - Transitions and micro-interactions
- **Gradient Typography** - Eye-catching text with gradient fills
- **Card-based Layouts** - Organized content presentation
- **Newsletter Integration** - Footer newsletter subscription
- **Social Media Links** - LinkedIn, Twitter, Facebook, Instagram, GitHub

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tejvtech
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Routing Structure

The application uses React Router with the following route patterns:

- `/` - Home page
- `/about` - About page
- `/services` - Services overview
- `/technologies` - Technologies page
- `/portfolio` - Portfolio showcase
- `/blog` - Blog listing
- `/blog/:slug` - Individual blog post
- `/contact` - Contact page
- `/industries` - Industries overview
- `/affiliates` - Partner affiliates
- `/privacy-policy` - Privacy policy
- `/terms` - Terms of service

**Dynamic Routes:**
- `/business/:solution` - Business solutions (6 routes)
- `/development/:service` - Development services (6 routes)
- `/industry/:sector` - Industry pages (12 routes)
- `/service/:type` - Professional services (16 routes)

## 🎨 Styling Approach

- **CSS Modules** - Component-scoped styles
- **CSS Variables** - Consistent theming with custom properties
- **Responsive Design** - Mobile-first with media queries
- **Flexbox & Grid** - Modern layout techniques
- **Custom Animations** - Keyframe animations for enhanced UX

## 🔧 Configuration

### Vite Configuration
The project uses Vite for fast development and optimized builds. Configuration can be found in `vite.config.js`.

### ESLint Configuration
Code quality is maintained with ESLint. Rules are defined in `eslint.config.js`.

## 📞 Contact Information

- **Address**: 2-11-41 Annapurna Colony, Uppal, Hyderabad, Telangana 500039, India
- **Email**: contact@tejvtech.com
- **Phone**: +91 63090 69639

## 🤝 Contributing

This is a private project. For any inquiries or collaboration opportunities, please contact us through the website.

## 📄 License

Copyright © 2025 Tejvtech. All rights reserved.

## 🔄 Recent Updates

- Added company logo to Navbar and Footer
- Implemented comprehensive routing for all service categories
- Enhanced responsive design across all pages
- Optimized font rendering with custom CSS fixes
- Improved navigation with multi-level dropdown menus

## 🎓 Development Notes

- The project uses React 19.2.0 with the latest features
- All pages follow a consistent template structure using `PageTemplate` component
- Dynamic content is organized by category (solutions, development, industries, services)
- The application is fully client-side rendered with React Router
- CSS architecture follows a component-based approach with shared global styles

---

**Built with ❤️ by Tejvtech Team**
