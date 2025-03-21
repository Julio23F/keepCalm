import React, { useState } from 'react';
import { 
  Settings,
  HelpCircle,
} from 'lucide-react';
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../features/auth/authSlice";
import {Box} from "@mui/material";

const Sidebar = ({sideBarList}) => {
    const location = useLocation();
    const dispatch = useDispatch();

    const handleLogout = () => {
      dispatch(logoutUser());
    };
    

    const isRouteActive = (route) => {
      return location.pathname.startsWith(route);
    };
    return (
      <Box className="w-60 bg-white border-r border-gray-200 p-4" style={{position: "fixed", height: "100vh"}}>
        <Box className="space-y-1" style={{marginTop: "9vh"}}>
          {sideBarList.map((page, index) => (
            <Link to={page.route}>
              <Box 
                key={index}
                className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer
                  ${isRouteActive(page.route) ? 'bg-purple-100 text-black' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                {page.icon}
                <span>{page.label}</span>
                {page.label === "Chats" && (
                  <span className="ml-auto bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    3
                  </span>
                )}
              </Box>

            </Link>
            
          ))}
        </Box>
        <Box className="absolute bottom-8 space-y-2">
          <Box className="flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
            <Settings size={20} />
            <span>Settings</span>
          </Box>
          <Box onClick={handleLogout} className="flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
            <HelpCircle size={20} />
            <span>Help & Support</span>
          </Box>
        </Box>
        
      </Box>
    )
}

export default Sidebar;