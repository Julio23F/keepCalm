import React, { useEffect, useState } from 'react';
import {Box} from "@mui/material";
import { createUseStyles } from "react-jss";
import styles from './email-jss'; 
const useStyles = createUseStyles(styles);
import { Mail, Menu, Plus, MoreHorizontal, Hash, AtSign} from 'lucide-react';
import EmailList from "./EmailList";
import SidebarItem from "./SidebarItem";
const emails = [
    {
      id: 1,
      sender: 'Megan Jackson',
      avatar: 'M',
      subject: 'New project lead',
      preview: 'Hey Edward, just getting in touch because I wanted to get...',
      time: '5 min ago',
      read: false,
      labels: ['Work']
    },
    {
      id: 2,
      sender: 'Jack Williamson',
      avatar: 'J',
      subject: 'New project lead',
      preview: 'Hey Edward! Would be hard about our new pages for...',
      time: '10:30am',
      read: true,
      labels: ['Work']
    },
    {
      id: 3,
      sender: 'Team - Digital Designers',
      avatar: 'T',
      subject: 'New project lead',
      preview: 'Mitchell, we have some problems since our client wants to...',
      time: '10:25am',
      read: true,
      labels: ['Applications', 'Team']
    }
  ];




  
const Email = () => {
    const classes = useStyles();
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    return (
    <div className="flex h-screen bg-gray-100">
        <div className="w-64 bg-white h-screen p-4 flex flex-col fixed left-0 top-0" style={{ marginLeft: "243px", paddingTop: "65px" }}>
            <div className="flex items-center space-x-2 mb-6" style={{ justifyContent: "space-between" }}>
                <img src="https://www.google.com/gmail/about/static-2.0/images/logo-gmail.png" alt="Gmail" className="h-8" />
                <Menu className="w-6 h-6" />
            </div>

            <button className="flex items-center space-x-3 px-6 py-3 rounded-lg bg-blue-100 hover:bg-blue-200">
                <Plus className="w-5 h-5"/>
                <span>Tags</span>
            </button>

            <div className="mt-6 space-y-1 flex-grow overflow-y-auto" style={{ maxHeight: "calc(100vh - 200px)" }}>
            <SidebarItem icon={Mail} text="Inbox" count={10} />
            <div onClick={() => setIsFilterOpen(!isFilterOpen)} className="cursor-pointer">
                <SidebarItem icon={AtSign} text="Filter" count={14} active />
            </div>
            {isFilterOpen && (
                <div className="pl-6 space-y-1">
                    <SidebarItem icon={Hash} text="Important" />
                    <SidebarItem icon={Hash} text="Sent Messages" />
                    <SidebarItem icon={Hash} text="Archived" />
                    <SidebarItem icon={Hash} text="Trash" />
                </div>
            )}
            </div>
            <div className="flex items-center justify-between px-4 py-2 bg-white border-t mt-auto">
                <div className="items-center space-x-3">
                    <img 
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                        alt="Google" 
                        className="h-6"
                    />
                    <span className="text-sm text-gray-600">johndoe@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2">
                    <MoreHorizontal className="w-5 h-5 text-gray-500 cursor-pointer" />
                </div>
            </div>
        </div>



        <div className="flex flex-1" style={{marginLeft: "255px"}}>
            <EmailList 
                emails={emails}
            />
        </div>
    </div>
    )
}




export default Email;