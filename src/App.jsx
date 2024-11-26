import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import {
  Header,
  Footer,
} from "./assets/Sections/index";
import { Home, About, ProductsPage, ServicesPage, Contact } from "./assets/Pages/index";
import { Container } from "./assets/Components/index";

const AnimatedRoutes = () => {
  const location = useLocation(); // Moved inside the Router context

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.2 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/About"
          element={
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.2 }}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/Products"
          element={
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.2 }}
            >
              <ProductsPage />
            </motion.div>
          }
        />
        <Route
          path="/Services"
          element={
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.2 }}
            >
              <ServicesPage />
            </motion.div>
          }
        />
        <Route
          path="/Contact"
          element={
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.2 }}
            >
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <AnimatedRoutes />
        </Container>
        <Footer />
      </Router>
    </>
  );
};

export default App;
