import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Technologies from './pages/Technologies.jsx';
import Affiliates from './pages/Affiliates.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Blog from './pages/Blog.jsx';
import BlogPost from './pages/BlogPost.jsx';
import Industries from './pages/Industries.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

// Business Solutions
import EnterpriseAI from './pages/solutions/EnterpriseAI.jsx';
import CloudSolutions from './pages/solutions/CloudSolutions.jsx';
import DataAnalytics from './pages/solutions/DataAnalytics.jsx';
import Cybersecurity from './pages/solutions/Cybersecurity.jsx';
import DigitalTransformation from './pages/solutions/DigitalTransformation.jsx';
import ITConsulting from './pages/solutions/ITConsulting.jsx';

// Development
import WebDevelopment from './pages/development/WebDevelopment.jsx';
import MobileAppDevelopment from './pages/development/MobileAppDevelopment.jsx';
import UIUXDesign from './pages/development/UIUXDesign.jsx';
import CloudDevOps from './pages/development/CloudDevOps.jsx';
import DigitalMarketing from './pages/development/DigitalMarketing.jsx';
import Databases from './pages/development/Databases.jsx';

// Industries
import Healthcare from './pages/industries/Healthcare.jsx';
import Fintech from './pages/industries/Fintech.jsx';
import Ecommerce from './pages/industries/Ecommerce.jsx';
import Manufacturing from './pages/industries/Manufacturing.jsx';
import Education from './pages/industries/Education.jsx';
import Logistics from './pages/industries/Logistics.jsx';
import RealEstate from './pages/industries/RealEstate.jsx';
import Agriculture from './pages/industries/Agriculture.jsx';
import Defence from './pages/industries/Defence.jsx';
import Aerospace from './pages/industries/Aerospace.jsx';
import Telecommunications from './pages/industries/Telecommunications.jsx';
import BFSI from './pages/industries/BFSI.jsx';

// Services
import Training from './pages/services/Training.jsx';
import Support from './pages/services/Support.jsx';
import Consulting from './pages/services/Consulting.jsx';
import ImplementationDeployment from './pages/services/ImplementationDeployment.jsx';
import InfrastructureSupport from './pages/services/InfrastructureSupport.jsx';
import ApplicationMaintenance from './pages/services/ApplicationMaintenance.jsx';
import ApplicationDevelopment from './pages/services/ApplicationDevelopment.jsx';
import APIDevelopment from './pages/services/APIDevelopment.jsx';
import CustomerSoftwareSupport from './pages/services/CustomerSoftwareSupport.jsx';
import DevOps from './pages/services/DevOps.jsx';
import DigitalTransformationService from './pages/services/DigitalTransformation.jsx';
import MigrationsUpgrades from './pages/services/MigrationsUpgrades.jsx';
import PartnerProductSupport from './pages/services/PartnerProductSupport.jsx';
import StartupMVP from './pages/services/StartupMVP.jsx';
import SystemIntegration from './pages/services/SystemIntegration.jsx';
import PLM from './pages/services/PLM.jsx';

import './App.css';
import './styles/fontFix.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/affiliates" element={<Affiliates />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<PrivacyPolicy />} />

            {/* Business Solutions Routes */}
            <Route path="/business/enterprise-ai" element={<EnterpriseAI />} />
            <Route path="/business/cloud-solutions" element={<CloudSolutions />} />
            <Route path="/business/data-analytics" element={<DataAnalytics />} />
            <Route path="/business/cybersecurity" element={<Cybersecurity />} />
            <Route path="/business/digital-transformation" element={<DigitalTransformation />} />
            <Route path="/business/it-consulting" element={<ITConsulting />} />

            {/* Development Routes */}
            <Route path="/development/web-development" element={<WebDevelopment />} />
            <Route path="/development/mobile-app-development" element={<MobileAppDevelopment />} />
            <Route path="/development/ui-ux-design" element={<UIUXDesign />} />
            <Route path="/development/cloud-devops" element={<CloudDevOps />} />
            <Route path="/development/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/development/databases" element={<Databases />} />

            {/* Industry Routes */}
            <Route path="/industry/healthcare" element={<Healthcare />} />
            <Route path="/industry/fintech" element={<Fintech />} />
            <Route path="/industry/e-commerce" element={<Ecommerce />} />
            <Route path="/industry/manufacturing" element={<Manufacturing />} />
            <Route path="/industry/education" element={<Education />} />
            <Route path="/industry/logistics" element={<Logistics />} />
            <Route path="/industry/real-estate" element={<RealEstate />} />
            <Route path="/industry/agriculture" element={<Agriculture />} />
            <Route path="/industry/defence" element={<Defence />} />
            <Route path="/industry/aerospace" element={<Aerospace />} />
            <Route path="/industry/telecommunications" element={<Telecommunications />} />
            <Route path="/industry/bfsi" element={<BFSI />} />

            {/* Service Routes */}
            <Route path="/service/training" element={<Training />} />
            <Route path="/service/support" element={<Support />} />
            <Route path="/service/consulting" element={<Consulting />} />
            <Route path="/service/implementation-deployment" element={<ImplementationDeployment />} />
            <Route path="/service/infrastructure-support" element={<InfrastructureSupport />} />
            <Route path="/service/application-maintenance" element={<ApplicationMaintenance />} />
            <Route path="/service/application-development" element={<ApplicationDevelopment />} />
            <Route path="/service/api-development" element={<APIDevelopment />} />
            <Route path="/service/customer-software-support" element={<CustomerSoftwareSupport />} />
            <Route path="/service/devops" element={<DevOps />} />
            <Route path="/service/digital-transformation" element={<DigitalTransformationService />} />
            <Route path="/service/migrations-upgrades" element={<MigrationsUpgrades />} />
            <Route path="/service/partner-product-support" element={<PartnerProductSupport />} />
            <Route path="/service/startup-mvp-services" element={<StartupMVP />} />
            <Route path="/service/system-integration" element={<SystemIntegration />} />
            <Route path="/service/plm" element={<PLM />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
