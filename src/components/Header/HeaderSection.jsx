import React, { useState } from 'react';
import { 
  Search,
  Bell,
} from 'lucide-react';
import ToggleSwitch from "../../components/Switch/ToggleSwitch";
import {getImageUrl} from "../../utils/images";
const HeaderSection = ({label}) => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleChange = (checked) => {
    setIsToggled(checked);
    console.log("Switch is now:", checked ? "ON" : "OFF");
  };

    return (
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-2xl font-semibold text-[#34394b]">{label && label}</h2>
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
              src={getImageUrl("avatar.png")}
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
    )
}

export default HeaderSection;