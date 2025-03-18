import React from 'react';
import { useSelector } from 'react-redux';
import { CircularProgress } from "@mui/material";

const MainLoader = () => {
    const { isLoading } = useSelector((state) => state);
    console.log("isLoading_dz", isLoading)
    if (!isLoading) return null;

    return (
        <div style={styles.overlay}>
        <CircularProgress size={100} sx={{ color: "#fff" }} />
        </div>
    );
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
