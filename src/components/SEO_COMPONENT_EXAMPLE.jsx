// Example component showing how to implement SEO
import { useSEO } from '../hooks/useSEO';
import { seoConfig } from '../config/seoConfig';

/**
 * Static Page Component Example
 * Use this pattern for pages with fixed SEO data
 */
function ExampleStaticPage() {
  // Pass the page configuration to useSEO hook
  useSEO(seoConfig.pages.home);

  return (
    <div className="page-container">
      <h1>Page Heading</h1>
      <p>Page content goes here</p>
    </div>
  );
}

export default ExampleStaticPage;

/**
 * Dynamic Page Component Example
 * Use this pattern for pages with dynamic content
 */
export function ExampleDynamicPage() {
  const seoData = {
    title: 'Custom Page Title - tejvtech',
    description: 'Custom page description that will appear in search results',
    keywords: 'custom, keywords, for, this, page'
  };

  useSEO(seoData);

  return (
    <div className="page-container">
      <h1>Dynamic Page Content</h1>
      <p>Content loaded dynamically</p>
    </div>
  );
}

/**
 * Service Detail Page Component Example
 * Use this pattern for pages with data from pageData
 */
export function ExampleServicePage({ serviceData }) {
  const seoData = {
    title: `${serviceData.title} - tejvtech Services`,
    description: serviceData.description,
    keywords: serviceData.keywords || 'IT services, solutions, technology'
  };

  useSEO(seoData);

  return (
    <div className="service-page">
      <h1>{serviceData.title}</h1>
      <p>{serviceData.description}</p>
      {/* Service details */}
    </div>
  );
}
