// Google Analytics 4 Integration for tejvtech
// Place this in your main.jsx or App.jsx after React initialization

/**
 * Initialize Google Analytics 4
 * Add your GA4 Measurement ID from Google Analytics
 */

// Option 1: Add this script tag directly to index.html
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());
//   gtag('config', 'G-XXXXXXXXXX');
// </script>

// Option 2: Use React Analytics Import (Recommended)
import { useEffect } from 'react';

/**
 * Initialize GA4 and track page views
 * Call this in your main App.jsx
 */
export const initializeGA = (measurementId) => {
  // Load GA script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', measurementId, {
    // Enable debug mode in development
    debug_mode: process.env.NODE_ENV === 'development',
  });
};

/**
 * Track page views with GA4
 * Use this in conjunction with useSEO hook
 */
export const trackPageView = (pagePath, pageTitle) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};

/**
 * Track custom events
 */
export const trackEvent = (eventName, eventData = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventData);
  }
};

/**
 * Track form submissions
 * Example: Contact form, Newsletter signup
 */
export const trackFormSubmission = (formType, formName = 'contact') => {
  trackEvent('form_submit', {
    form_type: formType,
    form_name: formName,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track button clicks
 */
export const trackButtonClick = (buttonName, buttonAction = 'click') => {
  trackEvent('button_click', {
    button_name: buttonName,
    button_action: buttonAction,
  });
};

/**
 * Track service inquiries
 */
export const trackServiceInquiry = (serviceName) => {
  trackEvent('service_inquiry', {
    service_name: serviceName,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track downloads (whitepapers, case studies, etc.)
 */
export const trackDownload = (fileName, fileType = 'document') => {
  trackEvent('file_download', {
    file_name: fileName,
    file_type: fileType,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track external links
 */
export const trackExternalLink = (url, linkText = 'external_link') => {
  trackEvent('click_external_link', {
    link_url: url,
    link_text: linkText,
    timestamp: new Date().toISOString(),
  });
};

/**
 * Track scroll depth
 */
export const trackScrollDepth = (scrollPercentage) => {
  trackEvent('scroll_depth', {
    scroll_percentage: scrollPercentage,
  });
};

/**
 * Enhanced page view tracking with SEO data
 * Use this with useSEO hook for better tracking
 */
export const trackPageViewWithSEO = (pagePath, pageTitle, seoData) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: pagePath,
      page_title: pageTitle,
      page_description: seoData?.description,
      page_keywords: seoData?.keywords,
      custom_map: {
        dimension1: 'page_category',
        dimension2: 'page_type',
      },
    });
  }
};

/**
 * Setup GA4 in your App.jsx like this:
 * 
 * import { useEffect } from 'react';
 * import { useLocation } from 'react-router-dom';
 * import { initializeGA, trackPageView } from './utils/analytics';
 * 
 * function App() {
 *   const location = useLocation();
 * 
 *   useEffect(() => {
 *     // Initialize GA4 once on app mount
 *     initializeGA('G-XXXXXXXXXX'); // Replace with your Measurement ID
 *   }, []);
 * 
 *   useEffect(() => {
 *     // Track page views on route change
 *     trackPageView(location.pathname, document.title);
 *   }, [location]);
 * 
 *   return (
 *     // Your app JSX
 *   );
 * }
 * 
 * export default App;
 */

/**
 * Step-by-Step GA4 Setup Instructions:
 * 
 * 1. Go to https://analytics.google.com
 * 2. Create a new property or use existing one
 * 3. Create a Web stream for your domain
 * 4. Copy the Measurement ID (format: G-XXXXXXXXXX)
 * 5. Replace 'G-XXXXXXXXXX' with your actual ID in this file
 * 6. Import initializeGA in your App.jsx
 * 7. Call initializeGA('YOUR-MEASUREMENT-ID') on app mount
 * 8. Set up goals/conversions in GA4 for tracking:
 *    - Contact form submissions
 *    - Service page views
 *    - CTA button clicks
 *    - Phone calls (if tracked)
 *    - Chat widget interactions
 */

/**
 * GA4 Goals/Events to Create in Google Analytics:
 * 
 * - form_submit: Contact form submissions
 * - service_inquiry: Service page inquiries
 * - button_click: CTA button clicks
 * - page_view: Page views (auto-tracked)
 * - file_download: Resource downloads
 * - scroll_depth: User engagement metric
 * - click_external_link: Outbound links
 * 
 * Go to Admin > Events > Create Event to set these up
 */

export default {
  initializeGA,
  trackPageView,
  trackEvent,
  trackFormSubmission,
  trackButtonClick,
  trackServiceInquiry,
  trackDownload,
  trackExternalLink,
  trackScrollDepth,
  trackPageViewWithSEO,
};
