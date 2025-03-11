import { Grid2 } from "@mui/material";
import React from "react";
import styles from "./layout-jss";
import { createUseStyles } from "react-jss";
const useStyles = createUseStyles(styles);

const AuthLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <Grid2 container className={classes.mainAuth}>
      {/* <Grid2 size={{ xs: 0, md: 6 }} className={classes.leftSide}>
        <img src="/auth/login/login.png" alt="log pds" />
      </Grid2>
      <Grid2 size={{ xs: 12, md: 6 }} className={classes.rightSide}>
        {children}
      </Grid2> */}
      {children}
    </Grid2>
  );
};

export default AuthLayout;
