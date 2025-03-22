import React from "react";
import yusuf from "@/assets/yusuf.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const MentorProfile = () => {
  return (
    <div className="p-5 bg-white rounded-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
          Meet Your Assigned Mentor
        </h2>
        <button className="flex items-center gap-1 text-eduBlue-500 whitespace-nowrap cursor-pointer hover:text-blue200">
          <Icon icon="flat-color-icons:plus" width="18" className="" />
          <span>Request a new Mentor</span>
        </button>
      </div>

      <p className="text-gray-600 mb-6 sm:mb-8 max-w-3xl">
        Get personalized guidance from your dedicated human mentor, Mr. Yusuf.
        While Mentra, your AI mentor, is always available for support, your
        human mentor brings real-world insights and personalized advice tailored
        just for you.
      </p>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="image-loading flex-shrink-0 mx-auto md:mx-0">
          <img
            src={yusuf}
            alt="Mr. Yusuf Adeola Chukwuemeka"
            className="w-full md:w-72 h-auto rounded-lg shadow-md object-cover"
          />
        </div>

        <div className="space-y-4 sm:space-y-6">
          <div>
            <h3 className="text-base sm:text-lg font-medium text-gray-700">
              Name:
            </h3>
            <p className="text-lg sm:text-xl text-gray-900">
              Mr. Yusuf Adeola Chukwuemeka
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-medium text-gray-700">
              About Yusuf:
            </h3>
            <p className="text-gray-800">
              Passionate about helping students excel in STEM fields with 10+
              years of experience.
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-medium text-gray-700">
              Status:
            </h3>
            <p className="text-gray-800">Responds within 24 hours</p>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
            <button className="cursor-pointer flex items-center gap-2 py-1 px-3 text-white bg-emerald-500 hover:bg-white hover:border hover:border-emerald-500 hover:text-green100 rounded">
                <Icon icon="tdesign:call-1" width="18" className="" />
              <span>Call Mentor</span>
            </button>
            <Link to="/dashboard/mentor/chat"
              className="flex items-center gap-2 border-eduBlue-400 bg-blue300 hover:bg-white hover:text-blue300 hover:border hover:border-blue300 text-white py-1 px-3 text-eduBlue-500 rounded"
            >
              <Icon icon="tabler:message" width="18" />
              <span>Message Mentor</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
