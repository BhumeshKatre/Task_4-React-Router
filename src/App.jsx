import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import HomePageLayout from "./Layout/HomePageLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePageLayout />}>
        <Route index element={<Home />} />
        <Route path="user" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
