import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import NotFoundPage from "../pages/NotFoundPage";
import Header from "./components/Header";
import EmployeeAbout from "../pages/EmployeeAbout";
import CompanyAbout from "../pages/CompanyAbout";
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />}>
          <Route path="employee" element={<EmployeeAbout/>} /> 
          {/* Sadece parent route'un path'inde / olmalı. */}
          <Route path="company" element={<CompanyAbout/>} />
        </Route>

        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
