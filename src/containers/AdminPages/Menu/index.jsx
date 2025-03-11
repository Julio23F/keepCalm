import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";
import MenuCard from "../../../components/Card/MenuCard";
import MenuCalendar from '../../../components/Calendar/MenuCalendar';
import { createUseStyles } from "react-jss";
import styles from './menu-jss'; 

const useStyles = createUseStyles(styles);

const Menu = () => {
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = useState(false);

  const listMenu = [
    {title: "Poisson frit" },
    {title: "Haricots" },
    {title: "Légumes" },
    {title: "Boulette" },
    {title: "Viande" },
    {title: "Riz cantonnais"},
    {title: "Poulet rôti"},
  ];

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className={classes.containerMenuList} onClick={handleCardClick}>
        <h3 className={classes.title} >
          Menu List {isExpanded ? "▲" : "▼"}
        </h3>
        
        {/* Contenu animé */}
        <Collapse in={isExpanded} timeout={300}>
          <div className="grid grid-cols-4 gap-3">
            {listMenu.map((menu, index) => (
              <MenuCard 
                key={index}
                menu={menu}
              />
            ))}
          </div>
        </Collapse>
      </div>
      
      <div className={classes.containerCalendar}>
        <MenuCalendar />
      </div>
    </>
  );
};

export default Menu;
