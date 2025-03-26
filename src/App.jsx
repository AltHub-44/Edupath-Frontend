import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/login.jsx";
import LandingPage from "./pages/index/index.jsx";
import Signup from "./pages/auth/signup.jsx";
import DashboardLayout from "./pages/dashboard/DashboardLayout.jsx";
import Dashboard from "./pages/dashboard/index/Dashboard.jsx";
import Mentor from "./pages/dashboard/Mentor/Mentor.jsx";
import Mentra from "./pages/dashboard/Mentra/Mentra.jsx";
import ChatPage from "./pages/dashboard/Mentor/components/ChatPage.jsx";
import Path from "./pages/dashboard/yourPath/Path.jsx";
import PrivateRoute from "./pages/auth/PrivateRoute.jsx";
import Goals from "./pages/dashboard/goals/Goals.jsx";
import Notifications from "./pages/dashboard/notifications/Notifications.jsx";
import Resource from "./pages/dashboard/resources/Resource.jsx";
import ArticlePage from "./pages/dashboard/Article/ArticlePage.jsx";
import QuizPage from "./pages/dashboard/quiz/QuizPage.jsx";
import LessonPage from "./pages/dashboard/Lesson/LessonPage.jsx";
import Profile from "./pages/dashboard/settings/Settings.jsx";
import Calendar from "./pages/dashboard/calendar/Calendar.jsx";
import QuizzesPage from "./pages/dashboard/quiz/QuizzesPage.jsx";
import Assignments from "./pages/dashboard/assignment/Assignment.jsx";
import AssignmentDetailPage from "./pages/dashboard/assignment/components/AssignmentDetailsPage.jsx";

// Mentor Dashboard
import MentorLayout from "./mentor/components/MentorLayout.jsx";
import MentorMentees from "./mentor/pages/Mentees.jsx";
import MentorAssignments from "./mentor/pages/Assignments.jsx";
import MentorSchedule from "./mentor/pages/Schedule.jsx";
import MentorResources from "./mentor/pages/Resources.jsx";
import MentorProfile from "./mentor/pages/Profile.jsx";
import MentorSettings from "./mentor/pages/Settings.jsx";
import MentorDashboardPage from "./mentor/MentorDashboardPage.jsx";

// Admin Dashboard
import AdminLayout from "./admin/components/AdminLayout.jsx";
import AdminDashboard from "./admin/pages/Dashboard.jsx";
import AdminUsers from "./admin/pages/Users.jsx";
import AdminCourses from "./admin/pages/Courses.jsx";
import AdminMentors from "./admin/pages/Mentors.jsx";
import AdminReports from "./admin/pages/Reports.jsx";
import AdminSettings from "./admin/pages/Settings.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="mentor" element={<Mentor />} />
          <Route path="mentor/chat" element={<ChatPage />} />
          <Route path="mentra" element={<Mentra />} />
          <Route path="path" element={<Path />} />
          <Route path="goals" element={<Goals />} />
          <Route path="resources" element={<Resource />} />
          <Route path="lesson" element={<LessonPage />} />
          <Route path="article/:articleId" element={<ArticlePage />} />
          <Route path="quiz/:quizId" element={<QuizPage />} />
          <Route path="quizzes" element={<QuizzesPage />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<Profile />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="assignments" element={<Assignments />} />
          <Route
            path="assignment/:assignmentId"
            element={<AssignmentDetailPage />}
          />
        </Route>
      </Route>

      {/* Mentor Dashboard Nested Routes */}
      <Route path="mentor-dashboard" element={<MentorLayout />}>
        <Route index element={<MentorDashboardPage />} />
        <Route path="mentees" element={<MentorMentees />} />
        <Route path="assignments" element={<MentorAssignments />} />
        <Route path="schedule" element={<MentorSchedule />} />
        <Route path="resources" element={<MentorResources />} />
        <Route path="profile" element={<MentorProfile />} />
        <Route path="settings" element={<MentorSettings />} />
      </Route>

      {/* Admin Dashboard Routes */}
      <Route path="/admin-dashboard" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="users" element={<AdminUsers />} />
        <Route path="courses" element={<AdminCourses />} />
        <Route path="mentors" element={<AdminMentors />} />
        <Route path="reports" element={<AdminReports />} />
        <Route path="settings" element={<AdminSettings />} />
      </Route>
    </Routes>
  );
}

export default App;
