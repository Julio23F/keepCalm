import React, { useState } from 'react';
import { 
  Search,
  Bell,
} from 'lucide-react';
import ToggleSwitch from "../../components/Switch/ToggleSwitch"

const HeaderSection = ({label}) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleChange = (checked) => {
    setIsToggled(checked);
    console.log("Switch is now:", checked ? "ON" : "OFF");
  };

    return (
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-semibold text-[#34394b]">{label}</h2>
          <div className="flex items-center space-x-4">
            <ToggleSwitch
              disabled={false}   
              checked={isToggled}
              onChange={handleToggleChange}
              showIcons
              size="lg"
              color="#6366f1"
            />
            <Bell size={24} className="text-gray-600 cursor-pointer" />
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
    )
}

export default HeaderSection;