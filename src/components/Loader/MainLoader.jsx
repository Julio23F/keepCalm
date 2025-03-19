import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from "@mui/material";

const MainLoader = () => {
    // const { isLoading } = useSelector((state) => state.loading.isLoading);
    const isLoading = useSelector((state) => state.loading.isLoading);

    const isLoadingAuth = useSelector((state) => state.auth.loading);

    console.log("isLoading_dz", isLoading) 
    if (isLoading || isLoadingAuth) {
        return (
            <div style={styles.overlay}>
                <CircularProgress size={100} sx={{ color: "#fff" }} />
            </div>
        );
    }
        
    
    return null;
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
  }
};

export default MainLoader;
