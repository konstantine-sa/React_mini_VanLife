import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import styles from "./App.module.css";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Footer from "./components/Footer/Footer";
import Vans from "./components/Pages/Vans/Vans";
import "./server";
import VanDetails from "./components/Pages/Vans/VanDetails/VanDetails";
import Layout from "./components/Layout";
import Dashboard from "./components/Pages/Host/Dashboard/Dashboard";
import Income from "./components/Pages/Host/Income/Income";
import Reviews from "./components/Pages/Host/Reviews/Reviews";
import HostLayout from "./components/Pages/Host/HostLayout";
import UsersVans from "./components/Pages/Host/UsersVans/UsersVans";
import UsersVanDetails from "./components/Pages/Host/UsersVans/UsersVanDetails/UsersVanDetails";
import UsersVanInfo from "./components/Pages/Host/UsersVans/UsersVanDetails/UsersVanInfo/UsersVanInfo";
import UsersVanPricing from "./components/Pages/Host/UsersVans/UsersVanDetails/UsersVanPricing/UsersVanPricing";
import UsersVanPhotos from "./components/Pages/Host/UsersVans/UsersVanDetails/UsersVanPhotos/UsersVanPhotos";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="*" element={<ErrorPage />} />
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} />
      <Route path="vans/:id" element={<VanDetails />} />

      <Route path="host" element={<HostLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="income" element={<Income />} />
        <Route path="vans" element={<UsersVans />} />
        <Route path="vans/:id" element={<UsersVanDetails />}>
          <Route index element={<UsersVanInfo />} />
          <Route path="pricing" element={<UsersVanPricing />} />
          <Route path="photos" element={<UsersVanPhotos />} />
        </Route>
        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className={styles.container}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
