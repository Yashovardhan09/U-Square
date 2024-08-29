import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import About from "./pages/About";
import FreeCourses from "./pages/FreeCourses";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import FullStackCourse from "./pages/FullStackCourse";
import Placements from "./pages/Placements";
import ContactUs from "./pages/ContactUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import RefundPolicy from "./pages/RefundPolicy";
import Home from "./pages/Home";
import Salesforce from "./pages/Salesforce";
import MERNStack from "./pages/MERNStack";
import SalesforceCareers from "./pages/SalesforceCareers";
import SalesforceCareerDetail from "./pages/SalesforceCareerDetail";
import Contacts from "./pages/Contacts";
import CourseDetails from "./pages/CourseDetails"; // Import CourseDetails

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/free-courses" element={<FreeCourses />} />
            <Route path="/blog" element={<Blog />} />
            <Route
              path="/blog/becoming-a-full-stack-developer-and-securing-a-job-in-bangalore-a-step-by-step-guide"
              element={<BlogDetail />}
            />
            <Route path="/full-stack-course" element={<FullStackCourse />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/salesforce" element={<Salesforce />} />
            <Route path="/mern-stack" element={<MERNStack />} />
            <Route path="/blog/salesforce_careers" element={<SalesforceCareers />} />
            <Route
              path="/blog/salesforce_careers/salesforce-developer-opportunity-in-bangalore"
              element={<SalesforceCareerDetail />}
            />
            <Route path="/course-details" element={<CourseDetails />} /> {/* Add new route */}
            <Route path="*" element={<div>404 Not Found</div>} /> {/* 404 route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
