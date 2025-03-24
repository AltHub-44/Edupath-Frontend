import { useState } from "react";
import { format, addDays } from "date-fns";
import { Icon } from "@iconify/react";
import { toast } from "react-toastify";
import SimpleCalendar from "./components/SimpleCalendar";

const Calendar = () => {
  const today = new Date();
  const [date, setDate] = useState(today);
  const [showAddEventModal, setShowAddEventModal] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    type: "lecture",
    startTime: "09:00",
    endTime: "10:30",
    location: "",
    description: "",
  });

  // Sample events for the selected date
  const events = [
    {
      id: 1,
      title: "Data Structures Tutorial",
      type: "lecture",
      startTime: "09:00 AM",
      endTime: "10:30 AM",
      instructor: "Dr. James Wilson",
    },
    {
      id: 2,
      title: "Group Project Meeting",
      type: "meeting",
      startTime: "11:00 AM",
      endTime: "12:00 PM",
      attendees: ["Alex", "Jamie", "Taylor"],
      location: "Study Room 204",
    },
    {
      id: 3,
      title: "Assignment Due: Database Design",
      type: "deadline",
      dueTime: "11:59 PM",
      course: "Database Systems",
    },
    {
      id: 4,
      title: "meeting",
      type: "office-hours",
      startTime: "02:00 PM",
      endTime: "04:00 PM",
      instructor: "Prof. Maria Garcia",
      location: "Engineering Building, Room 305",
    },
  ];

  // Sample upcoming deadlines
  const upcomingDeadlines = [
    {
      id: 1,
      title: "Algorithm Analysis Assignment",
      course: "Advanced Algorithms",
      dueDate: addDays(today, 2),
      progress: 60,
    },
    {
      id: 2,
      title: "Web Dev Project Milestone",
      course: "Web Development",
      dueDate: addDays(today, 5),
      progress: 25,
    },
    {
      id: 3,
      title: "Research Paper Draft",
      course: "Research Methods",
      dueDate: addDays(today, 7),
      progress: 10,
    },
  ];

  const getEventBadge = (type) => {
    switch (type) {
      case "lecture":
        return (
          <span className="bg-blue-100 text-blue-800 px-2 py-0.5 text-xs rounded-full">
            Lecture
          </span>
        );
      case "meeting":
        return (
          <span className="bg-green-100 text-green-800 px-2 py-0.5 text-xs rounded-full">
            Meeting
          </span>
        );
      case "deadline":
        return (
          <span className="bg-red-100 text-red-800 px-2 py-0.5 text-xs rounded-full">
            Deadline
          </span>
        );
      default:
        return (
          <span className="bg-gray-100 text-gray-800 px-2 py-0.5 text-xs rounded-full">
            Event
          </span>
        );
    }
  };

  const handleAddEvent = () => {
    // In a real app, this would save to a database
    console.log("Adding new event:", newEvent);
    toast.success("Event added successfully!");
    setShowAddEventModal(false);
    // Reset form
    setNewEvent({
      title: "",
      type: "lecture",
      startTime: "09:00",
      endTime: "10:30",
      description: "",
    });
  };



  return (
    <div className="flex min-h-screen bg-white rounded-md">

      <div className={`flex-1`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold">Calendar</h1>
              <p className="text-gray-500">{format(today, "MMMM dd, yyyy")}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-1 bg-white rounded-lg shadow-sm p-4">
              <div className="mb-4">
                <h2 className="text-lg font-medium">Date Selection</h2>
                <p className="text-sm text-gray-500">
                  Select a date to view events
                </p>
              </div>
              <SimpleCalendar selected={date} onSelect={setDate} />
            </div>

            {/* Events for selected date */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h2 className="text-lg font-medium">
                    Events for {date ? format(date, "MMMM dd, yyyy") : "Today"}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Your schedule for the day
                  </p>
                </div>
                <button
                  className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1.5 rounded-lg hover:bg-blue-600 transition-colors text-sm"
                  onClick={() => setShowAddEventModal(true)}
                >
                  <Icon icon="tabler:calendar-plus" className="h-4 w-4" />
                  Add Event
                </button>
              </div>

              {events.length > 0 ? (
                <div className="space-y-4">
                  {events.map((event) => (
                    <div
                      key={event.id}
                      className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50"
                    >
                      {event.type !== "deadline" && (
                        <div className="sm:w-24 text-center flex flex-row sm:flex-col justify-start sm:justify-center items-center sm:items-center gap-2 sm:gap-0">
                          <span className="text-lg font-semibold">
                            {event.startTime}
                          </span>
                          <span className="text-gray-400 text-sm hidden sm:block">
                            to
                          </span>
                          <span className="text-gray-500 text-sm">
                            {event.endTime}
                          </span>
                        </div>
                      )}

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                          <h3 className="font-medium">{event.title}</h3>
                          {getEventBadge(event.type)}
                        </div>

                        {event.type === "deadline" ? (
                          <div className="flex items-center text-sm text-gray-500 mb-1">
                            <Icon
                              icon="tabler:clock"
                              className="h-4 w-4 mr-2"
                            />
                            Due by {event.dueTime}
                          </div>
                        ) : null}

                        {event.instructor && (
                          <div className="flex items-center text-sm text-gray-500 mb-1">
                            <Icon
                              icon="tabler:users"
                              className="h-4 w-4 mr-2"
                            />
                            {event.instructor}
                          </div>
                        )}

                        {event.attendees && (
                          <div className="flex items-center text-sm text-gray-500 mb-1">
                            <Icon
                              icon="tabler:users"
                              className="h-4 w-4 mr-2"
                            />
                            {event.attendees.join(", ")}
                          </div>
                        )}


                        {event.course && (
                          <div className="flex items-center text-sm text-gray-500">
                            <Icon
                              icon="tabler:calendar"
                              className="h-4 w-4 mr-2"
                            />
                            {event.course}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Icon
                    icon="tabler:calendar"
                    className="h-12 w-12 text-gray-300 mx-auto mb-3"
                  />
                  <h3 className="text-lg font-medium mb-1">
                    No events scheduled
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">
                    Your calendar is clear for this day.
                  </p>
                  <button
                    className="flex items-center gap-1 bg-blue-500 text-white px-3 py-1.5 rounded-lg hover:bg-blue-600 transition-colors text-sm mx-auto"
                    onClick={() => setShowAddEventModal(true)}
                  >
                    <Icon icon="tabler:calendar-plus" className="h-4 w-4" />
                    Add Event
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Upcoming Deadlines */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">Upcoming Deadlines</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingDeadlines.map((deadline) => (
                <div
                  key={deadline.id}
                  className="bg-white rounded-lg shadow-sm border border-gray-100 p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-base">
                        {deadline.title}
                      </h3>
                      <p className="text-sm text-gray-600">{deadline.course}</p>
                    </div>
                    <span className="bg-amber-100 text-amber-800 px-2 py-0.5 text-xs rounded-full">
                      {format(deadline.dueDate, "MMM dd")}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm flex justify-between">
                      <span>Progress</span>
                      <span>{deadline.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${deadline.progress}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-gray-500 flex justify-between items-center pt-2">
                      <span>
                        Due in{" "}
                        {Math.ceil(
                          (deadline.dueDate.getTime() - today.getTime()) /
                            (1000 * 60 * 60 * 24)
                        )}{" "}
                        days
                      </span>
                      <button className="text-blue-500 text-sm hover:text-blue-600 font-medium">
                        View
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add Event Modal */}
      {showAddEventModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
            <div className="flex justify-between items-center border-b p-4">
              <h3 className="text-lg font-semibold">Add New Event</h3>
              <button
                className="text-gray-400 hover:text-gray-600"
                onClick={() => setShowAddEventModal(false)}
              >
                <Icon icon="tabler:x" className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4 max-h-[70vh] overflow-y-auto">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Event Title
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter event title"
                  value={newEvent.title}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, title: e.target.value })
                  }
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Event Type
                </label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={newEvent.type}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, type: e.target.value })
                  }
                >
                  <option value="lecture">Lecture</option>
                  <option value="meeting">Meeting</option>
                  <option value="deadline">Deadline</option>
                  <option value="office-hours">Office Hours</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {newEvent.type !== "deadline" ? (
                <>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Start Time
                      </label>
                      <input
                        type="time"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newEvent.startTime}
                        onChange={(e) =>
                          setNewEvent({
                            ...newEvent,
                            startTime: e.target.value,
                          })
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        End Time
                      </label>
                      <input
                        type="time"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newEvent.endTime}
                        onChange={(e) =>
                          setNewEvent({ ...newEvent, endTime: e.target.value })
                        }
                      />
                    </div>
                  </div>



                  <div className="mb-4">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded text-blue-500 focus:ring-blue-500 mr-2"
                        checked={newEvent.isOnline}
                        onChange={(e) =>
                          setNewEvent({
                            ...newEvent,
                            isOnline: e.target.checked,
                          })
                        }
                      />
                      <span className="text-sm text-gray-700">
                        This is an online event
                      </span>
                    </label>
                  </div>
                </>
              ) : (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Due Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={newEvent.startTime}
                    onChange={(e) =>
                      setNewEvent({ ...newEvent, startTime: e.target.value })
                    }
                  />
                </div>
              )}

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  placeholder="Enter event description"
                  value={newEvent.description}
                  onChange={(e) =>
                    setNewEvent({ ...newEvent, description: e.target.value })
                  }
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end gap-3 border-t p-4">
              <button
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                onClick={() => setShowAddEventModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                onClick={handleAddEvent}
              >
                Add Event
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;

Calendar.propTypes = {};
