// Comprehensive data for all dynamic pages
export const pageData = {
    // Business Solutions
    'enterprise-ai': {
        category: 'Business Solutions',
        title: 'Enterprise AI Solutions',
        subtitle: 'Transform your business with intelligent automation and data-driven insights',
        heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
        description: 'Leverage the power of artificial intelligence to automate processes, gain predictive insights, and drive innovation across your organization.',
        features: [
            { title: 'Machine Learning Models', description: 'Custom ML solutions tailored to your business needs', icon: '🧠' },
            { title: 'Natural Language Processing', description: 'Intelligent text analysis and chatbot solutions', icon: '💬' },
            { title: 'Computer Vision', description: 'Image and video analysis for automation', icon: '👁️' },
            { title: 'Predictive Analytics', description: 'Forecast trends and make data-driven decisions', icon: '📊' }
        ],
        benefits: ['Reduce operational costs by 40%', 'Automate repetitive tasks', 'Improve decision accuracy', 'Scale operations efficiently'],
        technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Azure AI', 'AWS SageMaker']
    },
    'cloud-solutions': {
        category: 'Business Solutions',
        title: 'Cloud Solutions',
        subtitle: 'Scalable, secure, and cost-effective cloud infrastructure',
        heroImage: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
        description: 'Accelerate your digital transformation with our comprehensive cloud services including migration, optimization, and managed services.',
        features: [
            { title: 'Cloud Migration', description: 'Seamless transition to cloud infrastructure', icon: '☁️' },
            { title: 'Multi-Cloud Strategy', description: 'Optimize across AWS, Azure, and GCP', icon: '🔄' },
            { title: 'Cloud Security', description: 'Enterprise-grade security frameworks', icon: '🛡️' },
            { title: 'Cost Optimization', description: 'Reduce cloud spending by up to 30%', icon: '💰' }
        ],
        benefits: ['99.99% uptime guarantee', 'Pay-as-you-go pricing', 'Global scalability', 'Disaster recovery'],
        technologies: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes', 'Docker']
    },
    'data-analytics': {
        category: 'Business Solutions',
        title: 'Data Analytics',
        subtitle: 'Turn raw data into actionable business intelligence',
        heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        description: 'Unlock the full potential of your data with advanced analytics solutions that provide real-time insights and predictive capabilities.',
        features: [
            { title: 'Business Intelligence', description: 'Interactive dashboards and reporting', icon: '📈' },
            { title: 'Big Data Processing', description: 'Handle petabytes of data efficiently', icon: '💾' },
            { title: 'Real-time Analytics', description: 'Instant insights for quick decisions', icon: '⚡' },
            { title: 'Data Visualization', description: 'Beautiful, intuitive data stories', icon: '🎨' }
        ],
        benefits: ['360° customer view', 'Improved forecasting', 'Reduced decision time', 'Competitive advantage'],
        technologies: ['Tableau', 'Power BI', 'Apache Spark', 'Snowflake', 'Databricks']
    },
    'cybersecurity': {
        category: 'Business Solutions',
        title: 'Cybersecurity',
        subtitle: 'Protect your digital assets with enterprise-grade security',
        heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
        description: 'Comprehensive cybersecurity solutions to protect your organization from evolving threats and ensure regulatory compliance.',
        features: [
            { title: 'Threat Detection', description: '24/7 monitoring and response', icon: '🔍' },
            { title: 'Penetration Testing', description: 'Identify vulnerabilities before hackers', icon: '🎯' },
            { title: 'Compliance Management', description: 'GDPR, HIPAA, SOC2 compliance', icon: '📋' },
            { title: 'Security Training', description: 'Employee awareness programs', icon: '🎓' }
        ],
        benefits: ['Zero-trust architecture', 'Reduced breach risk', 'Regulatory compliance', 'Peace of mind'],
        technologies: ['Splunk', 'CrowdStrike', 'Palo Alto', 'Fortinet', 'Okta']
    },
    'digital-transformation': {
        category: 'Business Solutions',
        title: 'Digital Transformation',
        subtitle: 'Reimagine your business for the digital age',
        heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        description: 'End-to-end digital transformation services that modernize your operations, enhance customer experience, and drive growth.',
        features: [
            { title: 'Process Automation', description: 'Streamline workflows with RPA', icon: '⚙️' },
            { title: 'Legacy Modernization', description: 'Update outdated systems', icon: '🔧' },
            { title: 'Customer Experience', description: 'Digital-first CX strategies', icon: '👥' },
            { title: 'Change Management', description: 'Ensure successful adoption', icon: '📊' }
        ],
        benefits: ['Increased efficiency', 'Better customer experience', 'New revenue streams', 'Competitive edge'],
        technologies: ['Salesforce', 'ServiceNow', 'UiPath', 'Automation Anywhere', 'Microsoft 365']
    },
    'it-consulting': {
        category: 'Business Solutions',
        title: 'IT Consulting',
        subtitle: 'Strategic technology guidance for business success',
        heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
        description: 'Expert IT consulting services that align technology with your business objectives and drive measurable outcomes.',
        features: [
            { title: 'Technology Strategy', description: 'Roadmaps aligned with business goals', icon: '🗺️' },
            { title: 'Architecture Design', description: 'Scalable, future-proof solutions', icon: '🏗️' },
            { title: 'Vendor Selection', description: 'Unbiased technology recommendations', icon: '✅' },
            { title: 'IT Governance', description: 'Policies and best practices', icon: '📜' }
        ],
        benefits: ['Reduced IT costs', 'Faster time-to-market', 'Risk mitigation', 'Strategic alignment'],
        technologies: ['TOGAF', 'ITIL', 'Agile', 'SAFe', 'DevOps']
    },

    // Services
    'training': {
        category: 'Services',
        title: 'Training Services',
        subtitle: 'Empower your team with cutting-edge skills',
        heroImage: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
        description: 'Comprehensive training programs designed to upskill your workforce in the latest technologies and methodologies.',
        features: [
            { title: 'Custom Curriculum', description: 'Tailored to your technology stack', icon: '📚' },
            { title: 'Hands-on Labs', description: 'Practical, project-based learning', icon: '💻' },
            { title: 'Certification Prep', description: 'Industry-recognized certifications', icon: '🏆' },
            { title: 'Ongoing Support', description: 'Post-training mentorship', icon: '🤝' }
        ],
        benefits: ['Reduced skill gaps', 'Higher productivity', 'Employee retention', 'Innovation culture'],
        technologies: ['AWS', 'Azure', 'React', 'Python', 'DevOps']
    },
    'support': {
        category: 'Services',
        title: 'Technical Support',
        subtitle: '24/7 support to keep your systems running smoothly',
        heroImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80',
        description: 'Round-the-clock technical support services with rapid response times and expert problem resolution.',
        features: [
            { title: '24/7 Helpdesk', description: 'Always available when you need us', icon: '📞' },
            { title: 'Remote Support', description: 'Quick resolution without site visits', icon: '🖥️' },
            { title: 'Escalation Management', description: 'Tiered support for complex issues', icon: '📈' },
            { title: 'Knowledge Base', description: 'Self-service documentation', icon: '📖' }
        ],
        benefits: ['99.9% uptime', 'Reduced downtime', 'Cost savings', 'Peace of mind'],
        technologies: ['ServiceNow', 'Zendesk', 'Jira', 'Freshdesk', 'PagerDuty']
    },
    'consulting': {
        category: 'Services',
        title: 'Consulting Services',
        subtitle: 'Expert guidance for your technology journey',
        heroImage: 'https://images.unsplash.com/photo-1553028826-f4804a6dba3b?auto=format&fit=crop&w=1200&q=80',
        description: 'Strategic consulting services that help you make informed technology decisions and optimize your IT investments.',
        features: [
            { title: 'Strategy Development', description: 'Align IT with business goals', icon: '🎯' },
            { title: 'Assessment & Audit', description: 'Evaluate current state', icon: '🔍' },
            { title: 'Roadmap Planning', description: 'Clear path to transformation', icon: '🗓️' },
            { title: 'Best Practices', description: 'Industry-proven approaches', icon: '⭐' }
        ],
        benefits: ['Informed decisions', 'Reduced risks', 'Optimized investments', 'Faster outcomes'],
        technologies: ['Enterprise Architecture', 'TOGAF', 'Lean', 'Six Sigma', 'Agile']
    },
    'implementation--deployment': {
        category: 'Services',
        title: 'Implementation & Deployment',
        subtitle: 'Seamless rollout of enterprise solutions',
        heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
        description: 'End-to-end implementation services ensuring successful deployment of complex enterprise systems.',
        features: [
            { title: 'Project Planning', description: 'Detailed implementation roadmap', icon: '📋' },
            { title: 'System Configuration', description: 'Tailored to your needs', icon: '⚙️' },
            { title: 'Data Migration', description: 'Safe transfer of critical data', icon: '💾' },
            { title: 'Go-Live Support', description: 'Smooth transition to production', icon: '🚀' }
        ],
        benefits: ['On-time delivery', 'Minimal disruption', 'Quality assurance', 'User adoption'],
        technologies: ['SAP', 'Oracle', 'Salesforce', 'Microsoft Dynamics', 'Workday']
    },
    'infrastructure-support': {
        category: 'Services',
        title: 'Infrastructure Support',
        subtitle: 'Reliable infrastructure management and maintenance',
        heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
        description: 'Comprehensive infrastructure support services to ensure optimal performance and reliability of your IT systems.',
        features: [
            { title: 'Server Management', description: 'Proactive monitoring and maintenance', icon: '🖥️' },
            { title: 'Network Support', description: 'Secure, high-performance networks', icon: '🌐' },
            { title: 'Storage Solutions', description: 'Scalable data storage', icon: '💽' },
            { title: 'Disaster Recovery', description: 'Business continuity planning', icon: '🔄' }
        ],
        benefits: ['99.99% uptime', 'Reduced costs', 'Proactive maintenance', 'Expert support'],
        technologies: ['VMware', 'Cisco', 'Dell EMC', 'NetApp', 'HPE']
    },
    'application-maintenance': {
        category: 'Services',
        title: 'Application Maintenance',
        subtitle: 'Keep your applications running at peak performance',
        heroImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
        description: 'Ongoing maintenance and enhancement services to ensure your applications remain secure, efficient, and up-to-date.',
        features: [
            { title: 'Bug Fixes', description: 'Quick resolution of issues', icon: '🐛' },
            { title: 'Performance Tuning', description: 'Optimize for speed', icon: '⚡' },
            { title: 'Security Updates', description: 'Regular patches and updates', icon: '🔒' },
            { title: 'Feature Enhancements', description: 'Continuous improvement', icon: '✨' }
        ],
        benefits: ['Reduced downtime', 'Improved performance', 'Lower TCO', 'Extended lifespan'],
        technologies: ['Java', '.NET', 'Python', 'Node.js', 'React']
    },
    'application-development': {
        category: 'Services',
        title: 'Application Development',
        subtitle: 'Custom applications built for your unique needs',
        heroImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
        description: 'Full-cycle application development services from ideation to deployment, using modern technologies and agile methodologies.',
        features: [
            { title: 'Custom Development', description: 'Tailored to your requirements', icon: '🛠️' },
            { title: 'Agile Methodology', description: 'Iterative, flexible approach', icon: '🔄' },
            { title: 'Quality Assurance', description: 'Rigorous testing protocols', icon: '✅' },
            { title: 'Deployment', description: 'Seamless go-live process', icon: '🚀' }
        ],
        benefits: ['Faster time-to-market', 'Scalable solutions', 'Modern tech stack', 'Ongoing support'],
        technologies: ['React', 'Node.js', 'Python', 'Java', 'Kubernetes']
    },
    'api-development': {
        category: 'Services',
        title: 'API Development',
        subtitle: 'Connect your systems with robust APIs',
        heroImage: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80',
        description: 'Design and develop secure, scalable APIs that enable seamless integration between your applications and third-party services.',
        features: [
            { title: 'RESTful APIs', description: 'Industry-standard design', icon: '🔗' },
            { title: 'GraphQL', description: 'Flexible data queries', icon: '📊' },
            { title: 'API Security', description: 'OAuth, JWT authentication', icon: '🔐' },
            { title: 'Documentation', description: 'Clear, comprehensive docs', icon: '📖' }
        ],
        benefits: ['Seamless integration', 'Improved efficiency', 'New capabilities', 'Partner ecosystem'],
        technologies: ['Node.js', 'Python', 'Go', 'Swagger', 'Postman']
    },
    'customer-software-support': {
        category: 'Services',
        title: 'Customer Software Support',
        subtitle: 'Dedicated support for your software users',
        heroImage: 'https://images.unsplash.com/photo-1553775927-a071d5a6a39a?auto=format&fit=crop&w=1200&q=80',
        description: 'End-user support services that ensure your customers get the help they need, when they need it.',
        features: [
            { title: 'Multi-channel Support', description: 'Email, chat, phone support', icon: '📱' },
            { title: 'Ticket Management', description: 'Efficient issue tracking', icon: '🎫' },
            { title: 'User Training', description: 'Onboarding and tutorials', icon: '🎓' },
            { title: 'Feedback Loop', description: 'Continuous improvement', icon: '🔄' }
        ],
        benefits: ['Higher satisfaction', 'Reduced churn', 'Brand loyalty', 'Valuable insights'],
        technologies: ['Zendesk', 'Intercom', 'Freshdesk', 'HubSpot', 'Salesforce']
    },
    'devops': {
        category: 'Services',
        title: 'DevOps Services',
        subtitle: 'Accelerate delivery with DevOps practices',
        heroImage: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80',
        description: 'Implement DevOps practices that streamline development, improve collaboration, and accelerate time-to-market.',
        features: [
            { title: 'CI/CD Pipelines', description: 'Automated build and deploy', icon: '🔄' },
            { title: 'Infrastructure as Code', description: 'Reproducible environments', icon: '📝' },
            { title: 'Containerization', description: 'Docker and Kubernetes', icon: '📦' },
            { title: 'Monitoring', description: 'Real-time observability', icon: '📊' }
        ],
        benefits: ['Faster releases', 'Fewer errors', 'Better collaboration', 'Scalability'],
        technologies: ['Jenkins', 'GitLab', 'Docker', 'Kubernetes', 'Terraform']
    },
    'migrations--upgrades': {
        category: 'Services',
        title: 'Migrations & Upgrades',
        subtitle: 'Smooth transitions to modern platforms',
        heroImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80',
        description: 'Expert migration services for seamless platform upgrades and technology transitions with minimal business disruption.',
        features: [
            { title: 'Assessment', description: 'Thorough migration planning', icon: '📋' },
            { title: 'Data Migration', description: 'Zero data loss guarantee', icon: '💾' },
            { title: 'Testing', description: 'Comprehensive validation', icon: '✅' },
            { title: 'Cutover', description: 'Smooth transition execution', icon: '🔄' }
        ],
        benefits: ['Minimal downtime', 'Data integrity', 'Modern platform', 'Improved performance'],
        technologies: ['AWS Migration Hub', 'Azure Migrate', 'Database Tools', 'ETL Tools', 'Testing Frameworks']
    },
    'partner-product-support': {
        category: 'Services',
        title: 'Partner Product Support',
        subtitle: 'Expert support for third-party solutions',
        heroImage: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1200&q=80',
        description: 'Specialized support services for partner products and third-party enterprise solutions.',
        features: [
            { title: 'Certified Experts', description: 'Partner-trained specialists', icon: '🏅' },
            { title: 'Integration Support', description: 'Connect with your systems', icon: '🔗' },
            { title: 'Customization', description: 'Tailored configurations', icon: '⚙️' },
            { title: 'Upgrades', description: 'Version management', icon: '📈' }
        ],
        benefits: ['Expert guidance', 'Single point of contact', 'Optimized solutions', 'Cost efficiency'],
        technologies: ['SAP', 'Oracle', 'Salesforce', 'Microsoft', 'ServiceNow']
    },
    'startup--mvp-services': {
        category: 'Services',
        title: 'Startup & MVP Services',
        subtitle: 'Launch your idea faster with MVP development',
        heroImage: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80',
        description: 'Rapid MVP development services designed to help startups validate ideas and get to market quickly.',
        features: [
            { title: 'Rapid Prototyping', description: 'From idea to prototype fast', icon: '⚡' },
            { title: 'MVP Development', description: 'Core features first', icon: '🎯' },
            { title: 'Investor Ready', description: 'Demos that impress', icon: '💼' },
            { title: 'Scale-ready', description: 'Built to grow', icon: '📈' }
        ],
        benefits: ['Faster validation', 'Reduced risk', 'Lower costs', 'Investor appeal'],
        technologies: ['React', 'Node.js', 'Firebase', 'AWS', 'Stripe']
    },
    'system-integration': {
        category: 'Services',
        title: 'System Integration',
        subtitle: 'Connect your enterprise systems seamlessly',
        heroImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
        description: 'Enterprise system integration services that connect disparate systems and enable seamless data flow across your organization.',
        features: [
            { title: 'API Integration', description: 'Connect any system', icon: '🔗' },
            { title: 'Data Sync', description: 'Real-time data flow', icon: '🔄' },
            { title: 'Middleware', description: 'Enterprise service bus', icon: '🔀' },
            { title: 'Legacy Integration', description: 'Connect old and new', icon: '🏛️' }
        ],
        benefits: ['Unified data', 'Process automation', 'Better insights', 'Reduced silos'],
        technologies: ['MuleSoft', 'Dell Boomi', 'Informatica', 'Apache Kafka', 'RabbitMQ']
    },
    'plm': {
        category: 'Services',
        title: 'PLM Services',
        subtitle: 'Product Lifecycle Management solutions',
        heroImage: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&q=80',
        description: 'Comprehensive PLM solutions that manage product data from conception through manufacturing and service.',
        features: [
            { title: 'Product Data Management', description: 'Centralized product info', icon: '📁' },
            { title: 'BOM Management', description: 'Bill of materials control', icon: '📋' },
            { title: 'Change Management', description: 'Track design changes', icon: '🔄' },
            { title: 'Collaboration', description: 'Cross-team workflows', icon: '👥' }
        ],
        benefits: ['Faster time-to-market', 'Reduced errors', 'Better collaboration', 'Compliance'],
        technologies: ['Siemens Teamcenter', 'PTC Windchill', 'Dassault 3DEXPERIENCE', 'Autodesk', 'Arena']
    },

    // Development
    'digital-marketing': {
        category: 'Development',
        title: 'Digital Marketing',
        subtitle: 'Grow your online presence and drive results',
        heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        description: 'Comprehensive digital marketing services that increase visibility, drive traffic, and convert visitors into customers.',
        features: [
            { title: 'SEO', description: 'Rank higher on search engines', icon: '🔍' },
            { title: 'Content Marketing', description: 'Engaging content strategy', icon: '📝' },
            { title: 'Social Media', description: 'Build your community', icon: '📱' },
            { title: 'PPC Advertising', description: 'Targeted ad campaigns', icon: '🎯' }
        ],
        benefits: ['Increased visibility', 'More leads', 'Higher ROI', 'Brand awareness'],
        technologies: ['Google Analytics', 'SEMrush', 'HubSpot', 'Google Ads', 'Meta Ads']
    },
    'web-development': {
        category: 'Development',
        title: 'Web Development',
        subtitle: 'Modern, responsive web applications',
        heroImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1200&q=80',
        description: 'Full-stack web development services creating fast, responsive, and user-friendly web applications.',
        features: [
            { title: 'Frontend Development', description: 'React, Vue, Angular', icon: '🎨' },
            { title: 'Backend Development', description: 'Node.js, Python, Java', icon: '⚙️' },
            { title: 'E-commerce', description: 'Online stores and marketplaces', icon: '🛒' },
            { title: 'CMS Development', description: 'Content management systems', icon: '📄' }
        ],
        benefits: ['Modern design', 'Fast performance', 'SEO optimized', 'Mobile responsive'],
        technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS']
    },
    'mobile-app-development': {
        category: 'Development',
        title: 'Mobile App Development',
        subtitle: 'Native and cross-platform mobile apps',
        heroImage: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
        description: 'Build engaging mobile applications for iOS and Android that deliver exceptional user experiences.',
        features: [
            { title: 'iOS Development', description: 'Native Swift/SwiftUI apps', icon: '🍎' },
            { title: 'Android Development', description: 'Native Kotlin apps', icon: '🤖' },
            { title: 'Cross-Platform', description: 'React Native, Flutter', icon: '📱' },
            { title: 'App Store Launch', description: 'Complete deployment support', icon: '🚀' }
        ],
        benefits: ['Wider reach', 'Better engagement', 'Revenue streams', 'Brand presence'],
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase']
    },
    'ui-ux-design': {
        category: 'Development',
        title: 'UI/UX Design',
        subtitle: 'User-centered design that drives engagement',
        heroImage: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80',
        description: 'Create intuitive, beautiful interfaces that users love through research-driven design processes.',
        features: [
            { title: 'User Research', description: 'Understand your users', icon: '🔍' },
            { title: 'Wireframing', description: 'Blueprint your product', icon: '📐' },
            { title: 'Visual Design', description: 'Stunning UI design', icon: '🎨' },
            { title: 'Prototyping', description: 'Interactive prototypes', icon: '🔄' }
        ],
        benefits: ['Higher conversions', 'User satisfaction', 'Reduced development costs', 'Brand consistency'],
        technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle']
    },
    'cloud-devops': {
        category: 'Development',
        title: 'Cloud & DevOps',
        subtitle: 'Modern infrastructure and deployment practices',
        heroImage: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=1200&q=80',
        description: 'Build, deploy, and scale applications with modern cloud infrastructure and DevOps practices.',
        features: [
            { title: 'Cloud Architecture', description: 'Scalable cloud solutions', icon: '☁️' },
            { title: 'CI/CD', description: 'Automated pipelines', icon: '🔄' },
            { title: 'Containerization', description: 'Docker & Kubernetes', icon: '📦' },
            { title: 'Monitoring', description: 'Observability solutions', icon: '📊' }
        ],
        benefits: ['Faster deployments', 'High availability', 'Cost optimization', 'Auto-scaling'],
        technologies: ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform']
    },
    'databases': {
        category: 'Development',
        title: 'Database Solutions',
        subtitle: 'Robust data management and optimization',
        heroImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=1200&q=80',
        description: 'Design, implement, and optimize database solutions that ensure data integrity, security, and performance.',
        features: [
            { title: 'Database Design', description: 'Optimal schema design', icon: '📊' },
            { title: 'Migration', description: 'Safe data transfers', icon: '🔄' },
            { title: 'Optimization', description: 'Performance tuning', icon: '⚡' },
            { title: 'Administration', description: 'Ongoing management', icon: '🔧' }
        ],
        benefits: ['Data integrity', 'Fast queries', 'Scalability', 'Security'],
        technologies: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch']
    },

    // Industries
    'healthcare': {
        category: 'Industries',
        title: 'Healthcare Solutions',
        subtitle: 'Digital transformation for healthcare',
        heroImage: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
        description: 'HIPAA-compliant healthcare IT solutions that improve patient care, streamline operations, and enable telemedicine.',
        features: [
            { title: 'EHR/EMR Systems', description: 'Electronic health records', icon: '📋' },
            { title: 'Telemedicine', description: 'Virtual care platforms', icon: '💻' },
            { title: 'Patient Portals', description: 'Self-service access', icon: '👤' },
            { title: 'Medical IoT', description: 'Connected devices', icon: '📟' }
        ],
        benefits: ['Better patient outcomes', 'Operational efficiency', 'HIPAA compliance', 'Cost reduction'],
        technologies: ['HL7 FHIR', 'Epic', 'Cerner', 'AWS HealthLake', 'Azure Health']
    },
    'fintech': {
        category: 'Industries',
        title: 'FinTech Solutions',
        subtitle: 'Innovative financial technology services',
        heroImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
        description: 'Secure, compliant fintech solutions for digital banking, payments, lending, and wealth management.',
        features: [
            { title: 'Digital Banking', description: 'Modern banking platforms', icon: '🏦' },
            { title: 'Payment Systems', description: 'Secure transactions', icon: '💳' },
            { title: 'Fraud Detection', description: 'AI-powered security', icon: '🛡️' },
            { title: 'Regulatory Compliance', description: 'PCI-DSS, SOX compliance', icon: '📜' }
        ],
        benefits: ['User experience', 'Security', 'Compliance', 'Scalability'],
        technologies: ['Stripe', 'Plaid', 'Blockchain', 'AWS', 'Kubernetes']
    },
    'e-commerce': {
        category: 'Industries',
        title: 'E-Commerce Solutions',
        subtitle: 'Build successful online retail experiences',
        heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6d58d?auto=format&fit=crop&w=1200&q=80',
        description: 'End-to-end e-commerce solutions from storefront to fulfillment, optimized for conversion and growth.',
        features: [
            { title: 'Storefront Development', description: 'Custom online stores', icon: '🏪' },
            { title: 'Payment Integration', description: 'Multiple payment options', icon: '💰' },
            { title: 'Inventory Management', description: 'Real-time stock control', icon: '📦' },
            { title: 'Analytics', description: 'Sales insights', icon: '📊' }
        ],
        benefits: ['Higher conversions', 'Better UX', 'Scalability', 'Omnichannel'],
        technologies: ['Shopify', 'Magento', 'WooCommerce', 'Stripe', 'Algolia']
    },
    'manufacturing': {
        category: 'Industries',
        title: 'Manufacturing Solutions',
        subtitle: 'Industry 4.0 and smart manufacturing',
        heroImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
        description: 'Smart manufacturing solutions that optimize production, reduce waste, and enable predictive maintenance.',
        features: [
            { title: 'IoT Integration', description: 'Connected factory floor', icon: '🏭' },
            { title: 'Predictive Maintenance', description: 'Prevent downtime', icon: '🔧' },
            { title: 'Quality Control', description: 'AI-powered inspection', icon: '✅' },
            { title: 'Supply Chain', description: 'Visibility and control', icon: '📦' }
        ],
        benefits: ['Reduced downtime', 'Higher quality', 'Cost savings', 'Efficiency'],
        technologies: ['IoT Platforms', 'SCADA', 'MES', 'ERP', 'Machine Learning']
    },
    'education': {
        category: 'Industries',
        title: 'Education Solutions',
        subtitle: 'Transform learning experiences',
        heroImage: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1200&q=80',
        description: 'EdTech solutions that make learning accessible, engaging, and effective for students of all ages.',
        features: [
            { title: 'LMS Platforms', description: 'Learning management', icon: '📚' },
            { title: 'Virtual Classrooms', description: 'Live online learning', icon: '🎥' },
            { title: 'Assessment Tools', description: 'Testing and grading', icon: '📝' },
            { title: 'Analytics', description: 'Student performance tracking', icon: '📊' }
        ],
        benefits: ['Accessibility', 'Engagement', 'Scalability', 'Insights'],
        technologies: ['Moodle', 'Canvas', 'WebRTC', 'AWS', 'React']
    },
    'logistics': {
        category: 'Industries',
        title: 'Logistics Solutions',
        subtitle: 'Optimize your supply chain',
        heroImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
        description: 'Logistics and supply chain solutions that provide visibility, optimize routes, and reduce costs.',
        features: [
            { title: 'Fleet Management', description: 'Track and optimize', icon: '🚛' },
            { title: 'Route Optimization', description: 'AI-powered routing', icon: '🗺️' },
            { title: 'Warehouse Management', description: 'Inventory control', icon: '🏢' },
            { title: 'Last Mile Delivery', description: 'Customer delivery', icon: '📦' }
        ],
        benefits: ['Cost reduction', 'Faster delivery', 'Visibility', 'Customer satisfaction'],
        technologies: ['GPS/Telematics', 'WMS', 'TMS', 'IoT', 'Machine Learning']
    },
    'real-estate': {
        category: 'Industries',
        title: 'Real Estate Solutions',
        subtitle: 'PropTech for modern real estate',
        heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
        description: 'PropTech solutions that digitize property management, enhance listings, and streamline transactions.',
        features: [
            { title: 'Property Management', description: 'End-to-end management', icon: '🏢' },
            { title: 'Virtual Tours', description: '3D property viewing', icon: '🏠' },
            { title: 'Tenant Portals', description: 'Self-service access', icon: '👤' },
            { title: 'Smart Buildings', description: 'IoT integration', icon: '🔌' }
        ],
        benefits: ['Efficiency', 'Better experience', 'Cost reduction', 'Data insights'],
        technologies: ['Yardi', 'AppFolio', 'Matterport', 'IoT', 'React']
    },
    'agriculture': {
        category: 'Industries',
        title: 'Agriculture Solutions',
        subtitle: 'Smart farming for better yields',
        heroImage: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=1200&q=80',
        description: 'AgriTech solutions that enable precision farming, crop monitoring, and farm management.',
        features: [
            { title: 'Precision Farming', description: 'Data-driven agriculture', icon: '🌾' },
            { title: 'Crop Monitoring', description: 'Satellite & drone imagery', icon: '📡' },
            { title: 'IoT Sensors', description: 'Soil and weather data', icon: '🌡️' },
            { title: 'Farm Management', description: 'Operations platform', icon: '📋' }
        ],
        benefits: ['Higher yields', 'Reduced costs', 'Sustainability', 'Data insights'],
        technologies: ['IoT', 'Satellite Imagery', 'Machine Learning', 'Mobile Apps', 'Cloud']
    },
    'defence': {
        category: 'Industries',
        title: 'Defence Solutions',
        subtitle: 'Secure technology for defence sector',
        heroImage: 'https://images.unsplash.com/photo-1579912437766-7896df6d3cd3?auto=format&fit=crop&w=1200&q=80',
        description: 'Secure, reliable technology solutions for defence and government agencies.',
        features: [
            { title: 'Secure Communications', description: 'Encrypted channels', icon: '🔐' },
            { title: 'Data Analytics', description: 'Intelligence insights', icon: '📊' },
            { title: 'Simulation Systems', description: 'Training platforms', icon: '🎮' },
            { title: 'Cyber Defence', description: 'Security operations', icon: '🛡️' }
        ],
        benefits: ['Security', 'Reliability', 'Compliance', 'Innovation'],
        technologies: ['Secure Cloud', 'Encryption', 'AI/ML', 'Simulation', 'IoT']
    },
    'aerospace': {
        category: 'Industries',
        title: 'Aerospace Solutions',
        subtitle: 'Technology for aerospace industry',
        heroImage: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=1200&q=80',
        description: 'Advanced technology solutions for aerospace manufacturing, operations, and maintenance.',
        features: [
            { title: 'MRO Systems', description: 'Maintenance tracking', icon: '✈️' },
            { title: 'Digital Twin', description: 'Virtual replicas', icon: '🔄' },
            { title: 'Supply Chain', description: 'Parts management', icon: '📦' },
            { title: 'Quality Assurance', description: 'Compliance tracking', icon: '✅' }
        ],
        benefits: ['Safety', 'Efficiency', 'Compliance', 'Cost reduction'],
        technologies: ['PLM', 'IoT', 'Digital Twin', 'AR/VR', 'Cloud']
    },
    'telecommunications': {
        category: 'Industries',
        title: 'Telecommunications Solutions',
        subtitle: 'Next-gen telecom technology',
        heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80',
        description: 'Technology solutions for telecom operators including BSS/OSS, 5G, and customer experience.',
        features: [
            { title: 'BSS/OSS', description: 'Business operations', icon: '📊' },
            { title: '5G Solutions', description: 'Next-gen networks', icon: '📡' },
            { title: 'CRM', description: 'Customer management', icon: '👥' },
            { title: 'Network Analytics', description: 'Performance insights', icon: '📈' }
        ],
        benefits: ['Revenue growth', 'Customer retention', 'Efficiency', 'Innovation'],
        technologies: ['5G', 'Cloud', 'AI/ML', 'Microservices', 'Kubernetes']
    },
    'bfsi': {
        category: 'Industries',
        title: 'BFSI Solutions',
        subtitle: 'Banking, Financial Services & Insurance',
        heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6d58d?auto=format&fit=crop&w=1200&q=80',
        description: 'Comprehensive solutions for banks, insurance companies, and financial institutions.',
        features: [
            { title: 'Core Banking', description: 'Modern banking systems', icon: '🏦' },
            { title: 'Insurance', description: 'Policy management', icon: '📋' },
            { title: 'Risk Management', description: 'Compliance & risk', icon: '⚠️' },
            { title: 'Customer Portal', description: 'Self-service banking', icon: '💻' }
        ],
        benefits: ['Compliance', 'Customer experience', 'Efficiency', 'Security'],
        technologies: ['Temenos', 'Finacle', 'Guidewire', 'Salesforce', 'AWS']
    }
};

export default pageData;
