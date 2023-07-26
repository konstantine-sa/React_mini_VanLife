import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./components/Pages/Header/Header";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Footer from "./components/Pages/Footer/Footer";
import Vans from "./components/Pages/Vans/Vans";
import "./server";
import VanDetails from "./components/Pages/Vans/VanDetails/VanDetails";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans/:id" element={<VanDetails />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
