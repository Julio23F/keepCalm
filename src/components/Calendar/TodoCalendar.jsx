import * as React from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Box } from "@mui/material";
import { createUseStyles } from "react-jss";
import styles from './calendar-jss'; 
const useStyles = createUseStyles(styles);

const TodoCalendar = () => {
  const classes = useStyles();
  return (
  <>
    <Box className="w-70 border border-gray-200" style={{ marginTop: "10vh", borderRadius: "0.375rem", backgroundColor: "white", }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar views={["day"]} className={classes.dateCalendar} style={{height: "45vh"}} />
      </LocalizationProvider>
    </Box>
  </>
  );
};

export default TodoCalendar;
