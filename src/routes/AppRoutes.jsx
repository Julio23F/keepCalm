import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import LoginPage from "../containers/UserPages/LoginPage";
import SignUp from "../containers/UserPages/SignUp";
import { useSelector } from "react-redux";
import { roleRoutes } from "../config/routeConfigs";
import AuthRoute from "./AuthRoute";
import PublicRoute from "./PublicRoute";
import AuthLayout from "../layouts/AuthLayout";

export default function AppRoutes() {

  const { isAuthenticated, user } = useSelector((state) => state.auth);

  return (
    <Router
      future={{
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        {/* Routes publiques */}
        <Route element={<PublicRoute />}>
          <Route
            path="/login"
            element={
              <AuthLayout>
                  <LoginPage />
              </AuthLayout>
            }
          />
          <Route
            path="/sign-up"
            element={
              <AuthLayout>
                <SignUp />
              </AuthLayout>
            }
          />
        </Route>

        <Route element={<AuthRoute />}>
          {/* <Route
            path="/"
            element={
              isAuthenticated && user ? (
                <Navigate to={roleRoutes[user.type] || "/login"} replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          /> */}
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Route>
      </Routes>
    </Router>
  );
}
