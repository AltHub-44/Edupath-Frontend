import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
  return (
    <div className="flex h-screen gap-6">
      <AdminSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        <AdminHeader />
        <div className="mt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
