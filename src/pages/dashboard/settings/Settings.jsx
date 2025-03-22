import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import mitchelle from "@/assets/mitchelle.png";
import getDecodedJWT from "../../../utils/decodeJwt";

const SettingsPage = () => {

  const [email, setEmail] = useState("bryan.cranston@mail.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const user = getDecodedJWT();
  const [firstName, setFirstName] = useState(user.firstname);
  const [lastName, setLastName] = useState(user.lastname);

  return (
      <div className="lg:px-4 sm:px-4 py-4  w-full">
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
          <h3 className="text-xl font-bold mb-6">Account</h3>

          <div className="mb-8">
            <div className="flex flex-col sm:flex-row items-start justify-between sm:items-center gap-6">
              <div className="flex gap-10 items-center">
                <img src={mitchelle} alt="" className="rounded-full" />
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Profile Picture
                  </h4>
                  <p className="text-sm text-gray-500 mb-4">
                    PNG, JPEG under 15MB
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <button className="bg-blue300 text-white px-3 rounded py-1 hover:border hover:bg-white hover:border-blue300 hover:text-blue300">
                  Upload new picture
                </button>
                <button className="bg-red50 px-3 py-1 rounded text-white">Delete</button>
              </div>
            </div>
          </div>

          {/* Full Name */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4">Full name</h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First name
                </label>
                <input
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="Enter your first name"
                  className="w-full border-2 border-gray50 py-2 rounded-md px-2"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last name
                </label>
                <input
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Enter your last name"
                  className="w-full border-2 border-gray50 py-2 rounded-md px-2"
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-1">Contact email</h4>
            <p className="text-sm text-gray-500 mb-4">
              Manage your account email address.
            </p>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Icon
                    icon="fluent:mail-24-regular"
                    className="h-5 w-5 text-gray-400"
                  />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border-2 border-gray50 py-2 rounded-md px-2 pl-10"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-1">Password</h4>
            <p className="text-sm text-gray-500 mb-4">
              Modify your current password.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="currentPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Current password
                </label>
                <input
                  id="currentPassword"
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full border-2 border-gray50 py-2 rounded-md px-2"
                />
              </div>

              <div>
                <label
                  htmlFor="newPassword"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  New password
                </label>
                <input
                  id="newPassword"
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full border-2 border-gray50 py-2 rounded-md px-2"
                />
              </div>
            </div>
              <button className="bg-blue300 text-white text-sm py-2 px-3 rounded-md inline-block mt-3">Update password</button>
          </div>
        </div>
      </div>
  );
};

export default SettingsPage;
