import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AdminRoutes from "./AdminRoutes";

export default function AppRoutes() {

  return (
    <Router
      future={{
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        {/* Routes protégées */}
        <Route>
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Route>
      </Routes>
    </Router>
  );
}
