import { useState } from "react";
import { Icon } from "@iconify/react";

const initialNotifications = [
  {
    id: 1,
    type: "assignment",
    title: "New Assignment: JavaScript Fundamentals",
    message: "Complete the JavaScript Fundamentals assignment by Friday.",
    time: "2 hours ago",
    icon: "mdi:file-document-outline",
    read: false,
  },
  {
    id: 2,
    type: "mentor",
    title: "Mentor Feedback Available",
    message: "Dr. Jane Smith has provided feedback on your latest project.",
    time: "5 hours ago",
    icon: "mdi:message-reply-outline",
    read: false,
  },
  {
    id: 3,
    type: "achievement",
    title: "Achievement Unlocked!",
    message: "You've completed 5 consecutive days of learning. Keep it up!",
    time: "1 day ago",
    icon: "mdi:star-outline",
    read: true,
  },
  {
    id: 4,
    type: "deadline",
    title: "Upcoming Deadline",
    message: "CSS Grid Project is due in 2 days. 70% completed.",
    time: "1 day ago",
    icon: "mdi:clock-outline",
    read: true,
  },
  {
    id: 5,
    type: "event",
    title: "Live Workshop: React Hooks",
    message: "Don't miss the live workshop on React Hooks tomorrow at 2PM.",
    time: "2 days ago",
    icon: "mdi:calendar-outline",
    read: true,
  },
  {
    id: 6,
    type: "system",
    title: "System Maintenance",
    message:
      "The platform will be unavailable on Sunday from 2AM to 4AM for scheduled maintenance.",
    time: "3 days ago",
    icon: "mdi:alert-circle-outline",
    read: true,
  },
  {
    id: 7,
    type: "course",
    title: "New Course Available",
    message: "Advanced TypeScript is now available. Enroll today!",
    time: "4 days ago",
    icon: "mdi:book-open-outline",
    read: true,
  },
  {
    id: 8,
    type: "social",
    title: "New Study Group",
    message: 'Alex Kim invited you to join the "Frontend Masters" study group.',
    time: "5 days ago",
    icon: "mdi:account-plus-outline",
    read: true,
  },
];

export default function Notifications() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [activeTab, setActiveTab] = useState("all");

  // Toggle Read Status
  const toggleRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
    );
  };

  const filteredNotifications = notifications.filter((n) => {
    if (activeTab === "unread") return !n.read;
    if (activeTab === "mentions") return n.type === "mentor";
    return true;
  });

  return (
    <div className=" bg-white shadow-md rounded-lg p-6">
      <h1 className="text-3xl font-medium font-epilogue">Notifications</h1>
      <p className="text-gray300 text-sm mt-1">
        Stay updated with your learning journey
      </p>
      <div className="flex p-1 lg:w-5/12 bg-gray20 rounded mt-6">
        {["all", "unread", "mentions", "settings"].map((tab) => (
          <button
            key={tab}
            className={`flex-1 py-2 rounded text-center text-sm font-semibold capitalize ${
              activeTab === tab
                ? "bg-white text-blue-500"
                : "text-gray-500"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
            {tab !== "settings" && (
              <span className="ml-1 text-xs bg-blue300 text-white px-2 py-0.5 rounded-full">
                {tab === "all"
                  ? notifications.length
                  : notifications.filter((n) =>
                      tab === "unread" ? !n.read : n.type === "mentor"
                    ).length}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="p-4">
        {activeTab === "settings" ? (
          <div className="text-center text-gray-600">
            Customize your notification settings.
          </div>
        ) : filteredNotifications.length > 0 ? (
          filteredNotifications.map((n) => (
            <div
              key={n.id}
              className={`flex items-start p-3 mb-3 rounded-lg cursor-pointer transition ${
                n.read ? "bg-gray-100" : "bg-blue-50 hover:bg-blue-100"
              }`}
              onClick={() => toggleRead(n.id)}
            >
              <Icon icon={n.icon} className="text-2xl text-blue-500 mr-3" />
              <div>
                <h4 className="font-semibold text-gray-800">{n.title}</h4>
                <p className="text-sm text-gray-600">{n.message}</p>
                <span className="text-xs text-gray-400">{n.time}</span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No notifications</p>
        )}
      </div>
    </div>
  );
}
