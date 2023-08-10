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
import Vans, { loader as vansLoader } from "./components/Pages/Vans/Vans";
import "./server";
import VanDetails, {
  loader as VanDetailsLoader,
} from "./components/Pages/Vans/VanDetails/VanDetails";
import Layout from "./components/Layout";
import Dashboard from "./components/Pages/Host/Dashboard/Dashboard";
import Income from "./components/Pages/Host/Income/Income";
import Reviews from "./components/Pages/Host/Reviews/Reviews";
import HostLayout from "./components/Pages/Host/HostLayout";
import UsersVans, {
  loader as usersVansLoader,
} from "./components/Pages/Host/UsersVans/UsersVans";
import UsersVanDetails, {
  loader as userVansDetailsLoader,
} from "./components/Pages/Host/UsersVans/UsersVanDetails/UsersVanDetails";
import UsersVanInfo from "./components/Pages/Host/UsersVans/UsersVanDetails/UsersVanInfo/UsersVanInfo";
import UsersVanPricing from "./components/Pages/Host/UsersVans/UsersVanDetails/UsersVanPricing/UsersVanPricing";
import UsersVanPhotos from "./components/Pages/Host/UsersVans/UsersVanDetails/UsersVanPhotos/UsersVanPhotos";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";
import ErrorHandlerPage from "./utilities/ErrorHandlerPage/ErrorHandlerPage";
import Login, { loader as loginLoader } from "./components/Pages/Login/Login";
import Rent from "./components/Pages/Rent/Rent";
import requireAuth from "./utilities/RequireAuth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<ErrorHandlerPage />}>
      <Route path="*" element={<ErrorPage />} />
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} />
      <Route
        path="vans/:id"
        element={<VanDetails />}
        loader={VanDetailsLoader}
      />
      <Route path="vans/rent" element={<Rent />} />
      <Route path="login" element={<Login />} loader={loginLoader} />

      <Route path="host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => {
            return null;
          }}
        />
        <Route path="vans" element={<UsersVans />} loader={usersVansLoader} />
        <Route
          path="vans/:id"
          element={<UsersVanDetails />}
          loader={userVansDetailsLoader}
        >
          <Route
            index
            element={<UsersVanInfo />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="pricing"
            element={<UsersVanPricing />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="photos"
            element={<UsersVanPhotos />}
            loader={async () => {
              return null;
            }}
          />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <div className={styles.mainContainer}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
