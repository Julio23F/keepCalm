const styles = {
    drawerContent: {
        width: 550,
        padding: 24,
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    chip: {
        backgroundColor: "#d7f5c3",
        color: "#000",
        fontSize: "0.7em",
        height: "30px",
        // fontWeight: "600"
    },
    chipDate: {
        backgroundColor: "transparent",
        color: "grey",
        border: "1px solid #E5E7EB",
        fontSize: "0.7em",
        height: "30px",

    },
    dateText: {
        color: "gray",
    },
    timeInfoContainer: {
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginTop: 16,
        padding: 16,
        backgroundColor: "#F3E8FF",
        borderRadius: 8,
        justifyContent: "space-between",
    },
    projectTimeInfo: {
        backgroundColor: "#1A1A1A",
        width: 35,
        height: 35,
        fontSize: "0.7em",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    descriptionProject: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 24,
        marginBottom: 10
    },
    updateDescriptionIcon: {
        backgroundColor: "#E5E7EB", 
        borderRadius: "7px",
        '&:hover': {
            backgroundColor: '#D1D5DB', 
        },
    },
    sectionTitle: {
        marginTop: 34,
        marginBottom: 10
    },
    memberContainer: {
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginTop: 8,
    },
    memberText: {
        fontSize: 14,
    },
};

export default styles;
