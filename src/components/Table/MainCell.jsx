import React, { useEffect, useState } from "react";
import TableCell from "@mui/material/TableCell";
import Styles from "./table-jss";
import { get } from "lodash";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(Styles);

const MainCell = ({ item, field, type, ...props }) => {
  const classes = useStyles();

  const value = get(item, field);

  switch (type) {
    case "button":
      return (
        <TableCell
          {...props}
          style={{
            textAlign: "center",
            paddingInline: 5,
          }}
          className={classes.tableCellElement}
        >
          <div className={classes.mainCellButton}>{field}</div>
        </TableCell>
      );
    default:
      return (
        <TableCell
          {...props}
          className={classes.tableCellElement}
          style={{ textAlign: "center", paddingInline: 5 }}
        >
          <div className={classes.mainCellElement}>{value}</div>
        </TableCell>
      );
  }
};

export default MainCell;
