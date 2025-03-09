import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import Sidebar from "../components/SideBar/SideBar";
import HeaderSection from "../components/Header/HeaderSection";

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
        <div className="flex h-screen bg-gray-50">
          {/* Sidebar */}
          <Sidebar sideBarList={sideBarList} />
          <div className="flex-1 p-8" style={{marginLeft: "250px"}}>
            <HeaderSection label={headerType.label} />
            <section>
              {children}
            </section>
          </div>
        </div>
    </>
  );
};

export default AdminLayout;
