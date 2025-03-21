import React, { useState, useEffect } from 'react';

import { useLocation } from 'react-router-dom';
import Sidebar from "../components/SideBar/SideBar";
import HeaderSection from "../components/Header/HeaderSection";
import {Box} from "@mui/material";
import TodoCalendar from "../components/Calendar/TodoCalendar";
import TaskCard from "../components/Card/TaskCard";

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

  const tasks = [
    {
      title: 'Recruter',
      users: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      ]
    },
    {
      title: 'Danser',
      users: [
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      ]
    },
    {
      title: 'Faire autre chose',
      users: [
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      ]
    },
    {
      title: 'Créer un site',
      users: [
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
      ]
    }
  ];

  const headerType = getHeaderType(location);

  return (
    <>
      <Box className="flex h-screen bg-gray-50">
        <HeaderSection label={headerType && headerType.label} />
        <Box className="w-60 bg-white border-r border-gray-200 p-4" style={{position: "fixed", height: "100vh"}}>
          <Sidebar sideBarList={sideBarList} />
        </Box>
        <Box className="flex-1 px-3" style={{ margin: "0 245px 0 235px", marginTop: "10vh" }}>
          <section>
            {children}
          </section>
        </Box>
        <Box
          style={{
            position: "fixed",
            height: "100vh",
            right: 0,
            top: 0 
          }}
        >
          <Box style={{marginRight: ".5em",}}>
            <TodoCalendar/>
            <TaskCard tasks={tasks}/>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default AdminLayout;
