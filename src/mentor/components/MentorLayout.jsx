import MentorSidebar from "./MentorSidebar";
import { Outlet } from "react-router-dom";
import MentorHeader from "./MentorHeader";

const MentorLayout = () => {
  return (
    <div className="flex h-screen gap-6">
      <MentorSidebar />
      <div className="flex-1 flex flex-col h-screen overflow-y-auto">
        <MentorHeader />
        <div className="mt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MentorLayout;
