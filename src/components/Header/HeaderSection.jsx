import React, { useState, useEffect } from 'react';
import { Search, Bell } from 'lucide-react';
import ToggleSwitch from "../../components/Switch/ToggleSwitch";
import { getImageUrl } from "../../utils/images";
import Grid from "@mui/material/Grid2";

const HeaderSection = ({ label }) => {
  const [isToggled, setIsToggled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggleChange = (checked) => {
    setIsToggled(checked);
    console.log("Switch is now:", checked ? "ON" : "OFF");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Grid
      container
      spacing={3}
      className="flex items-center justify-between mb-5 border-b border-gray-200"
      style={{
        position: "fixed",
        width: "100%",
        height: "9vh",
        zIndex: 1,
        padding: "0 1em",
        backgroundColor: isScrolled ? "white" : "white",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <Grid item size={{ md: 2 }} >
        <h1 className="text-xl font-bold">KeepCalm.</h1>
      </Grid>
      <Grid item size={{ md: 10 }} style={{ display: "flex", justifyContent: "space-between", paddingLeft: "2em" }}>
        <h2 className="text-2xl font-semibold text-[#34394b]">{label && label}</h2>
        <div className="flex items-center space-x-4">
          <ToggleSwitch
            disabled={false}
            checked={isToggled}
            onChange={handleToggleChange}
            showIcons
            size="md"
            color="#6366f1"
          />
          <Bell size={24} className="text-gray-600 cursor-pointer" />
          <img src={getImageUrl("avatar.png")} alt="Profile" className="w-8 h-8 rounded-full" />
        </div>
      </Grid>
    </Grid>
  );
};

export default HeaderSection;
