import PropTypes from "prop-types";
import profileImage from "@/assets/mitchelle.png";
import { getCurrentDate } from "@/utils/getCurrentDate";
import { Icon } from "@iconify/react";

const Header = ({ toggleSidebar }) => {
  const currentDate = getCurrentDate();

  return (
    <div className="flex items-center justify-between bg-white px-6 py-5 rounded-bl-2xl">
      <div>
        <h2 className="text-md font-semibold">{currentDate.split(",")[0]}</h2>
        <p className="text-gray-600 text-sm">
          {currentDate.split(",").slice(1).join(",")}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <div className="shadow rounded-full p-2">
          <Icon icon="line-md:bell" className="text-xl text-blue300" />
        </div>
        <img
          src={profileImage}
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />

        <button className="md:hidden p-2" onClick={toggleSidebar}>
          <Icon icon="mdi:menu" className="text-2xl text-gray-700" />
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default Header;
