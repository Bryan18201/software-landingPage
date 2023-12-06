import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Content from "./components/Content";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Faqs from "./components/Faqs";
import Hero from "./components/Hero";
import About from "./components/About";
import "../src/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Content />
    <About />
    <Services />
    <Pricing />
    <Testimonials />
    <Faqs />
    <Footer />
  </React.StrictMode>
);
