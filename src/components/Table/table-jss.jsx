const styles = {
    memberCard: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem', 
        border: '1px solid #E5E7EB', 
        borderRadius: '0.375rem',
      },
      memberTitle: {
        fontWeight: '500', 
      },
      memberCategory: {
        fontSize: '0.875rem',
        color: '#6B7280', 
      },
      memberStatus: {
        width: "65px",
        height: "22px",
        backgroundColor: "#eacefe",
        color: "#000",
        fontSize: "0.6em",
        fontWeight: 600
      },
      memberDaysLeft: {
        fontSize: '0.875rem',
        color: '#6B7280', 
      },
      icon: {
        width: '1.25rem', 
        height: '1.25rem', 
        color: '#9CA3AF', 
      },


    tableCellElement: {
        padding: "8px",
        margin: "50px",
    },
    mainCellButton: {
    // width: "145px",
        height: "30px",
        borderRadius: "3px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "rgb(175, 175, 175) solid 1px",
        backgroundColor: "#FFFFFF",
        color: "#000000",
        fontWeight: 900,
        fontSize: "0.9em",
        cursor: "pointer",
        margin: "auto",
        },
        mainCellElement: {
        fontSize: "0.9em",
        fontWeight: 600,

        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
    },
};
  
export default styles;