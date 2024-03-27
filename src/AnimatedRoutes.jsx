import { AnimatePresence } from "framer-motion";
import React from "react";
import { useLocation } from "react-router";
import { Route, Routes } from "react-router";
import { Link } from "react-router-dom";
import Main from "./components/Main";
import Projects from "./components/Projects";
const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Main />} />
        <Route path="/blog" element={<Projects />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
