const styles = {
    entrepriseContainer: {
        width: "100%",  
        height: "80vh",  
        maxWidth: "64rem",   
        backgroundColor: "white",
        borderRadius: "0.75rem", 
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        padding: "1rem",     
        display: "flex",
        flexDirection: "column",

        "@media (max-width: 900px)": {
            height: "100vh", 
            padding: "2rem", 
        }
    },
    representationImg: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // width: "100%", 
        "@media (max-width: 768px)": {
            flexDirection: "column",
            alignItems: "center",
        },
        "@media (max-width: 900px)": {
            display: "none"
        }
    }
};
  
export default styles;