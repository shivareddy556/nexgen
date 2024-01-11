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
import Ui_ux_Design from "./components/Ui_ux_Design";
import Menu_Navigations from "./components/Menu_Navigations";
import Ui_ux_Menu_Page from "./components/Ui_ux_Menu_Page";

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
              element={<View_Portfolio_Page />}
            />
            <Route exact path="/viewportfolio/:id" element={<Design_Page />} />

            <Route exact path="/designs" element={<Menu_Navigations />} />
            <Route exact path="/designs/:id" element={<Menu_Navigations />} />
            <Route exact path="/designs/:id/:designs" element={<Ui_ux_Menu_Page />} />
          
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
