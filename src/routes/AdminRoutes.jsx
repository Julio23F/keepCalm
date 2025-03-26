import { Routes, Route } from "react-router-dom";
import Dashboard from "../containers/AdminPages/Dashboard";
import Menu from "../containers/AdminPages/Menu";
import Email from "../containers/AdminPages/Email";
import AdminLayout from "../layouts/AdminLayout";
import AddNewMember from "../containers/AdminPages/Member/AddNewMember"
import { 
    LayoutDashboard, 
    UtensilsCrossed,
    Settings, 
    User,
    Mail
  } from 'lucide-react';

const sideBarList = [
  {
    label: "Tableau de bord",
    icon: <LayoutDashboard size={20} />,
    route: "/admin/dashboard",
  },
  {
    label: "Member",
    icon: <User size={20} />,
    route: "/admin/members",
  },
  // {
  //   label: "Menu",
  //   icon: <UtensilsCrossed size={20} />,
  //   route: "/admin/menu",
  // },
  {
    label: "Email",
    icon: <Mail size={20} />,
    route: "/admin/email",
  },
  {
    label: "Settings",
    icon: <Settings size={20} />,
    route: "/admin/settings",
  },
];

const adminHeader = [

];

const AdminRoutes = () => {
  return (
    <AdminLayout sideBarList={sideBarList}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/members" element={<Dashboard />} />
        <Route path="/members/add" element={<AddNewMember />} />
        {/* <Route path="/menu" element={<Menu />} /> */}
        <Route path="/email" element={<Email />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRoutes;
