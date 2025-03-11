const styles = {

    projectCard: {
        display: 'block',
        alignItems: 'center',
        padding: '0.75rem', 
        backgroundColor: 'white',
        borderRadius: '0.375rem',
        border: '1px solid #E5E7EB',
        cursor: 'pointer',
        '&:hover': {
          borderColor: '#A78BFA', 
        },
    },
    projectCardHeader: {
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
    },
    projectAvatar: {
        backgroundColor: "#1A1A1A",
        width: "25px",
        height: "25px",
        fontSize: "0.7em"
    },
    projectTitle: {
        marginTop: "7px",
        lineHeight: "1em"
    },
      projectMember: {
        fontSize: '0.7rem',
        color: '#6B7280',
        display: "flex",
        alignItems: "start",
        gap: "5px"
    },
    seeMore: {
        backgroundColor: "#E5E7EB",
        width: "25px",
        height: "25px",
        // fontSize: "0.7em"
    },
};
  
export default styles;