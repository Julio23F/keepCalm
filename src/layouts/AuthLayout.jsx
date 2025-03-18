import React from "react";
import styles from "./layout-jss";
import AuthTheme from '../containers/UserPages/AuthTheme';

import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(styles);

const AuthLayout = ({ children }) => {
  const classes = useStyles();
  return (
    
    <div className="min-h-screen w-full flex bg-[#1f1926]">
      <AuthTheme />
      {children}
    </div>


  );
};

export default AuthLayout;
