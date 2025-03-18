import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import MainLoader from './components/Loader/MainLoader';

function App() {
  return (
    <>
      <MainLoader />
      <AppRoutes />
    </>
  );
}

export default App;
