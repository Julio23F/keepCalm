import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import Sidebar from "../components/SideBar/SideBar";
import HeaderSection from "../components/Header/HeaderSection";
import {Box} from "@mui/material";

const AdminLayout = ({ children, sideBarList }) => {
  const location = useLocation();

  function getHeaderType(location) {
    const res = sideBarList.find((h) => {
      if (h.route.includes(":id")) {
        const dynamicPath = h.route.replace(":id", "\\d+");
        const regex = new RegExp(`^${dynamicPath}$`);
        return regex.test(location.pathname);
      }
      return h.route === location.pathname;
    });
    return res;
  }



  const headerType = getHeaderType(location);

  return (
    <>
      <Box className="flex h-screen bg-gray-50">
        <HeaderSection label={headerType && headerType.label} />
        <Sidebar sideBarList={sideBarList} />
        <Box className="flex-1 py-4 px-3" style={{ margin: "0 245px", marginTop: "10vh" }}>
          <section>
            {children}
          </section>
        </Box>
        <div 
          className="w-60 border-l border-gray-200"
          style={{
            backgroundColor: "white",
            position: "fixed",
            height: "100vh",
            right: 0,
            top: 0 
          }}
        >
          <div className="flex-1 py-4 px-3" style={{ marginTop: "10vh" }}>
            Calendar
          </div>
        </div>
      </Box>
    </>
  );
};

export default AdminLayout;
