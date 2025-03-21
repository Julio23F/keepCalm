const styles = {
    container: {
    color: "#34394b",
    borderRadius: '0.375rem',
    color: '#fff',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      color: "#34394b"
    },
    dayContainer: {
        backgroundColor: 'white',
        color: "#34394b",
        borderRadius: '0.375rem',
        border: '1px solid #E5E7EB',
        padding: '1rem 0.4em',
        borderRadius: '5px',
    },
    dateToday: {
        backgroundColor: '#F3E8FF',
        color: "#34394b",
        borderRadius: '0.375rem',
        border: '1px solid #E5E7EB',
        padding: '1rem 0.4em',
        borderRadius: '5px',
    },
    dayTitle: {
      fontSize: '1rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
    },
    taskCard: {
        backgroundColor: 'white',
        borderRadius: '0.375rem',
        border: '1px solid #E5E7EB',
        color: "#34394b",
        padding: '0.5rem',
        height: "auto",
        borderRadius: '5px',
        cursor: 'pointer',
        '&:hover': {
            borderColor: '#A78BFA', 
        },
    },
    selectedTaskCard: {
        backgroundColor: 'white',
        borderRadius: '0.375rem',
        border: '1px solid #E5E7EB',
        color: "#34394b",
        padding: '0.5rem',
        height: "100%",
        borderRadius: '5px',
        cursor: 'pointer',
        '&:hover': {
            borderColor: '#A78BFA', 
        },
    },

    taskTime: {
      fontSize: '0.9rem',
      fontWeight: 'bold',
      color: '#bbb',
    },
    priorityIndicator: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
    },
    highPriority: {
      backgroundColor: 'red',
    },
    mediumPriority: {
      backgroundColor: 'orange',
    },
    lowPriority: {
      backgroundColor: 'green',
    },
    taskTitle: {
        fontSize: '0.8rem',
        fontWeight: 'bold',
        margin: '0.5rem 0',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: '100%',
      },
    selectedTaskTitle: {
        fontSize: '0.8rem',
        fontWeight: 'bold',
        margin: '0.5rem 0',
    },
    taskDescription: {
      fontSize: '0.85rem',
      color: '#ccc',
    },
    taskDetails: {
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center',
      marginTop: '0.5rem',
    },

    buttonAddMenu: {
      backgroundColor: '#1A1A1A',
      color: 'white',
      padding: '0.5rem 1rem', 
      borderRadius: '0.375rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem', 
    },

    dateCalendar: {
      width: "100%", 
      // backgroundColor: "red",
      "& *": { 
        fontSize: 12 
      },
      "& .css-1rl1vrc-MuiDayCalendar-header": {
        height: "25px",
        width: "240px"
      },
      "& .css-1pv2de5-MuiDayCalendar-weekContainer": {
        height: "30px",
        width: "240px"
      },
      "& .css-maujuc-MuiButtonBase-root-MuiPickersDay-root": {
        height: "29px",
        width: "30px"
      },
      "& .css-132wfuh-MuiButtonBase-root-MuiPickersDay-root:not(.Mui-selected)": {
        height: "29px",
        width: "30px"
      },
      "& .css-132wfuh-MuiButtonBase-root-MuiPickersDay-root.Mui-selected": {
        height: "29px",
        width: "30px"
      }
    }
};

export default styles;
