import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ServicesPage from "./components/ServicesPage";
import View_Portfolio_Page from "./components/View_Portfolio_Page";
import PricePage from "./components/PricePage";
import "@fontsource/inter";
import "@fontsource/inter/400.css";
import Footer from "./components/Footer";
import Mobile_App from "./components/Mobile_App";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Design_Page from "./components/Design_Page";
import Contacts from "./components/Contacts";
import ScrollToTop from "./context/ScrollToTop";
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  return (
    <div className="app_bg">
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/services" element={<ServicesPage />} />
            <Route
              exact
              path="/viewportfolio"
              element={<View_Portfolio_Page />}
            />
            <Route exact path="/viewportfolio/:id" element={<Design_Page />} />
            <Route exact path="/price" element={<PricePage />} />
            <Route exact path="/contacts" element={<Contacts />} />
            <Route
              exact
              path="/viewportfolio/Mobile"
              element={<Mobile_App />}
            />
          </Routes>
          <Footer />
        </Router>
      </ErrorBoundary>
    </div>
  );
};

export default App;
