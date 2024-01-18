import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ServicesPage from "./components/ServicesPage";
import ViewPortfolioPage from "./components/View_Portfolio_Page";
import "@fontsource/inter";
import "@fontsource/inter/400.css";
import Footer from "./components/Footer";
import DesignPage from "./components/Design_Page";
import Contacts from "./components/Contacts";
import ScrollToTop from "./context/ScrollToTop";
import ErrorBoundary from "./ErrorBoundary";
import MenuNavigations from "./components/Menu_Navigations";
import UiuxMenuPage from "./components/Ui_ux_Menu_Page";
import SociamediadesignPage from "./components/Social_media_design_Page";
import SocialmediaBranding from "./Socialmedia_Branding";
const App = () => {
  return (
    <div className="app_bg">
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="*" element={<ErrorBoundary />} />
            <Route exact path="/services" element={<ServicesPage />} />
            <Route
              exact
              path="/viewportfolio"
              element={<ViewPortfolioPage />}
            />
            <Route exact path="/viewportfolio/:id" element={<DesignPage />} />
            <Route exact path="/designs" element={<MenuNavigations />} />
            <Route exact path="/designs/:id" element={<MenuNavigations />} />
            <Route
              exact
              path="/designs/:id/:designs"
              element={<UiuxMenuPage />}
            />
            <Route
              exact
              path="/social_media_designs"
              element={<SocialmediaBranding />}
            />
            <Route
              exact
              path="/social_media_designs/:id"
              element={<SociamediadesignPage />}
            />
            <Route exact path="/contacts" element={<Contacts />} />
          </Routes>
          {/* <Footer /> */}
        </Router>
      </ErrorBoundary>
    </div>
  );
};
export default App;
