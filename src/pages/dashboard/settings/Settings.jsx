import { useState } from "react";
import { Icon } from "@iconify/react";
import mitchelle from "@/assets/mitchelle.png";
import getDecodedJWT from "../../../utils/decodeJwt";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);

  const user = getDecodedJWT();
  // Mock user data
  const [userData, setUserData] = useState({
    name: user.firstname + " " + user.lastname,
    email: user.email,
    role: "Student",
    bio: "Curious and motivated secondary school student with a passion for science. I enjoy exploring new technologies, solving problems, and building creative projects to sharpen my skills.",
    location: "Lagos, Nigeria",
    joinDate: "february 2025",
    education: [
      {
        id: 1,
        school: "Royal boys and girls Academy",
        degree: "Science student",
        year: "2024",
      },
    ],
    favorite_subjects: ["maths", "english", "intro-tech", "biology", "physics"],
  });

  const handleSaveProfile = () => {
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className={`flex-1 `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold">Profile</h1>
              <p className="text-gray-500">Manage your personal information</p>
            </div>
          </div>

          {/* Profile Banner */}
          <div className="bg-white rounded-xl mt-20 mb-6">
            <div className="px-6 py-4 sm:px-8 sm:py-6">
              <div className="flex flex-col sm:flex-row gap-4 sm:items-end -mt-16">
                <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src={mitchelle}
                    alt={userData.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold">{userData.name}</h2>
                  <p className="text-gray-600">{userData.role}</p>
                </div>
                <div>
                  {isEditing ? (
                    <div className="flex gap-2">
                      <button
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setIsEditing(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                        onClick={handleSaveProfile}
                      >
                        Save Changes
                      </button>
                    </div>
                  ) : (
                    <button
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center gap-2"
                      onClick={() => setIsEditing(true)}
                    >
                      <Icon icon="tabler:edit" className="h-4 w-4" />
                      Edit Profile
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Profile Tabs */}
            <div className="border-t border-gray100">
              <div className="flex overflow-x-auto scrollbar-hide">
                <button
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === "profile"
                      ? "text-blue-600 border-b-2 border-blue-500"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("profile")}
                >
                  Profile
                </button>
                <button
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === "achievements"
                      ? "text-blue-600 border-b-2 border-blue-500"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("achievements")}
                >
                  Achievements
                </button>
                <button
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === "activity"
                      ? "text-blue-600 border-b-2 border-blue-500"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("activity")}
                >
                  Activity
                </button>
                <button
                  className={`px-6 py-3 text-sm font-medium ${
                    activeTab === "settings"
                      ? "text-blue-600 border-b-2 border-blue-500"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab("settings")}
                >
                  Settings
                </button>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          {activeTab === "profile" && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">About Me</h3>
                    {isEditing ? (
                      <textarea
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        rows={4}
                        value={userData.bio}
                        onChange={(e) =>
                          setUserData({ ...userData, bio: e.target.value })
                        }
                      />
                    ) : (
                      <p className="text-gray-700">{userData.bio}</p>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Education</h3>
                    {userData.education.map((edu) => (
                      <div key={edu.id} className="mb-3">
                        <div className="flex justify-between">
                          <h4 className="font-medium">{edu.school}</h4>
                          <span className="text-sm text-gray-500">
                            {edu.year}
                          </span>
                        </div>
                        <p className="text-gray-600">{edu.degree}</p>
                      </div>
                    ))}
                    {isEditing && (
                      <button className="text-blue-500 flex items-center gap-1 mt-2 text-sm">
                        <Icon icon="tabler:plus" className="h-4 w-4" />
                        Add Education
                      </button>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">
                      Favorite Subjects
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {userData.favorite_subjects.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                      {isEditing && (
                        <button className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                          <Icon icon="tabler:plus" className="h-3 w-3" />
                          Add Favorite Subject
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column */}
                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">
                      Personal Information
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm text-gray-500">Full Name</p>
                     
                          <p className="font-medium">{userData.name}</p>

                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        {isEditing ? (
                          <input
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
                            value={userData.email}
                            onChange={(e) =>
                              setUserData({
                                ...userData,
                                email: e.target.value,
                              })
                            }
                          />
                        ) : (
                          <p className="font-medium">{userData.email}</p>
                        )}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        {isEditing ? (
                          <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
                            value={userData.location}
                            onChange={(e) =>
                              setUserData({
                                ...userData,
                                location: e.target.value,
                              })
                            }
                          />
                        ) : (
                          <p className="font-medium">{userData.location}</p>
                        )}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Joined</p>
                        <p className="font-medium">{userData.joinDate}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">
                      Learning Stats
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <p className="text-sm">Courses Completed</p>
                        <p className="font-medium">8</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm">Quizzes Taken</p>
                        <p className="font-medium">15</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-sm">Learning Streak</p>
                        <p className="font-medium">28 days</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other tabs would go here */}
          {activeTab === "achievements" && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Your Achievements</h3>
              <div className="text-center py-8">
                <Icon
                  icon="tabler:trophy"
                  className="h-16 w-16 text-gray-300 mx-auto mb-4"
                />
                <h3 className="text-lg font-medium mb-2">
                  No achievements yet
                </h3>
                <p className="text-gray-500 mb-4">
                  Complete courses and quizzes to earn achievements
                </p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                  Start a Course
                </button>
              </div>
            </div>
          )}

          {activeTab === "activity" && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-full h-min">
                    <Icon icon="tabler:book" className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Completed a lesson</p>
                    <p className="text-sm text-gray-500">
                      Introduction to JavaScript - 2 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-green-100 text-green-600 p-2 rounded-full h-min">
                    <Icon icon="tabler:check" className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Finished a quiz</p>
                    <p className="text-sm text-gray-500">
                      HTML Basics Quiz - 1 day ago
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="bg-purple-100 text-purple-600 p-2 rounded-full h-min">
                    <Icon icon="tabler:message-circle" className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Messaged your mentor</p>
                    <p className="text-sm text-gray-500">
                      Yusuf Adeola - 2 days ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "settings" && (
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Account Settings</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Email Notifications</h4>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="rounded text-blue-500 focus:ring-blue-500"
                        defaultChecked
                      />
                      <span>Course updates</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="rounded text-blue-500 focus:ring-blue-500"
                        defaultChecked
                      />
                      <span>Messages from mentors</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        className="rounded text-blue-500 focus:ring-blue-500"
                        defaultChecked
                      />
                      <span>Assignment reminders</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Password</h4>
                  <button className="text-blue-500 flex items-center gap-1">
                    <Icon icon="tabler:lock" className="h-4 w-4" />
                    Change Password
                  </button>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Danger Zone</h4>
                  <button className="text-red-500 flex items-center gap-1">
                    <Icon icon="tabler:trash" className="h-4 w-4" />
                    Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
