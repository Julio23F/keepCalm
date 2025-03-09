// src/routes/PublicRoute.jsx
// import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
//   const { isAuthenticated } = useSelector((state) => state.auth);

  // Si l'utilisateur est connecté, redirigez-le vers la page d'accueil
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  // Sinon, affichez les routes publiques (comme le login)
  return <Outlet />;
};

export default PublicRoute;
