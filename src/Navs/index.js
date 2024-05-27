import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../Page/Home";
import Topbar from "../components/common/Topbar";
import FirstPage from "../components/FirstPage/FirstPage";
import NinthPage from "../components/ProjectInsights/NinthPage/NinthPage";
import Page13 from "../components/ProjectInsights/Page13/Page13";
import Page16 from "../components/ProjectInsights/Page16/Page16";
import Page12 from "../components/ProjectInsights/Page12/Page12";
import Milestone from "../components/ProjectInsights/Milestone/Milestone";
import PowerBi from "../components/common/PowerBiIframe/PowerBi";
function Navs() {
  const Hoc = () => {
    const location = useLocation();
    return (
      <>
        <Topbar />
        <div
          style={{
            padding:
              location.pathname === "/home" || location.pathname === "/"
                ? "0px"
                : "10px",
          }}
        >
          <Outlet />
        </div>
        <Footer />
      </>
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Hoc />}>
          <Route path="/home" exact element={<Home />} />
          <Route path="/firstpage" exact element={<FirstPage />} />
          <Route path="/ninthpage" exact element={<NinthPage />} />
          <Route path="/page12" exact element={<Page12 />} />
          <Route path="/page13" exact element={<Page13 />} />
          <Route path="/page16" exact element={<Page16 />} />
          <Route path="/milestone" exact element={<Milestone />} />
          <Route path="/powerbi" exact element={<PowerBi />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Navs;
