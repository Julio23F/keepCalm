import React, { useState } from 'react';
import { 
  Settings,
  HelpCircle,
} from 'lucide-react';
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({sideBarList}) => {
    const location = useLocation();

    const isRouteActive = (route) => {
      return location.pathname.startsWith(route);
    };
    return (
        <div className="w-64 bg-white border-r border-gray-200 p-4">
        <div className="mb-8">
          <h1 className="text-xl font-bold">KeepCalm.</h1>
        </div>
        
        <div className="space-y-1">
          {sideBarList.map((page, index) => (
            <Link to={page.route}>
              <div 
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
              </div>

            </Link>
            
          ))}
        </div>

        {/* Settings */}
        <div className="absolute bottom-8 space-y-2">
          <div className="flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
            <Settings size={20} />
            <span>Settings</span>
          </div>
          <div className="flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer">
            <HelpCircle size={20} />
            <span>Help & Support</span>
          </div>
        </div>
      </div>
    )
}

export default Sidebar;