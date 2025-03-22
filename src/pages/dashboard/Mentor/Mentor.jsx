import MentorNotes from "./components/MentorNotes";
import MentorProfile from "./components/MentorProfile";
import MentorRecommendations from "./components/MentorRecommendations";

const Mentor = () => {
  return (
    <div className="flex min-h-screen">
      <div>
        <div className="space-y-6">
          <MentorProfile className="animate-fadeIn" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 bg-white p-4 rounded-md">
            <MentorNotes />
            <MentorRecommendations />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
