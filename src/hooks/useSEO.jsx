import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import seoConfig from '../config/seoConfig';

/**
 * Custom hook to manage SEO meta tags dynamically
 * @param {Object} pageConfig - Page-specific SEO configuration
 */
export const useSEO = (pageConfig = {}) => {
  const location = useLocation();
  const config = seoConfig.site;

  useEffect(() => {
    // Default config
    let title = config.name;
    let description = config.description;
    let keywords = config.keywords;
    const url = `${config.domain}${location.pathname}`;
    const image = 'https://tejvtech.com/Tejvtech-logo.png';

    // Override with page-specific config if provided
    if (pageConfig.title) title = pageConfig.title;
    if (pageConfig.description) description = pageConfig.description;
    if (pageConfig.keywords) keywords = pageConfig.keywords;

    // Update title
    document.title = title;

    // Update or create meta tags
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);
    updateMetaTag('name', 'author', config.author);
    updateMetaTag('name', 'viewport', 'width=device-width, initial-scale=1.0');
    updateMetaTag('name', 'theme-color', '#0066CC');
    updateMetaTag('name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // Open Graph tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:url', url);
    updateMetaTag('property', 'og:image', image);
    updateMetaTag('property', 'og:type', seoConfig.openGraph.type);
    updateMetaTag('property', 'og:locale', seoConfig.openGraph.locale);
    updateMetaTag('property', 'og:site_name', config.name);

    // Twitter Card tags
    updateMetaTag('name', 'twitter:card', seoConfig.twitterCard.card);
    updateMetaTag('name', 'twitter:site', seoConfig.twitterCard.site);
    updateMetaTag('name', 'twitter:creator', seoConfig.twitterCard.creator);
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    updateMetaTag('name', 'twitter:image', image);

    // Canonical tag
    updateCanonicalTag(url);

    // Language tag
    updateMetaTag('http-equiv', 'Content-Language', config.language);

    // Scroll to top
    window.scrollTo(0, 0);
  }, [location.pathname, pageConfig]);
};

/**
 * Helper function to update or create meta tags
 */
const updateMetaTag = (attribute, name, content) => {
  if (!content) return;

  let meta = document.querySelector(`meta[${attribute}="${name}"]`);

  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute(attribute, name);
    document.head.appendChild(meta);
  }

  meta.setAttribute('content', content);
};

/**
 * Update canonical link
 */
const updateCanonicalTag = (url) => {
  let link = document.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }

  link.href = url;
};

export default useSEO;
