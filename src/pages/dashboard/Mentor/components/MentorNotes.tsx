import React, { useState } from "react";

const MentorNotes = () => {
  const [expanded, setExpanded] = useState(false);

  const fullNotes = `Chinaza has shown great improvement in her academic 
  performance, particularly in Mathematics and English, where her 
  efforts are paying off. She participates actively in class discussions 
  and is developing stronger critical thinking skills. However, she 
  needs to work on time management and completing assignments by their 
  deadlines. I'd also recommend focusing on building more consistent 
  study habits, as her performance tends to fluctuate when she gets 
  distracted by extracurricular activities. Overall, I'm pleased with 
  her progress and believe she has great potential to excel further.`;

  const truncatedNotes = expanded
    ? fullNotes
    : `${fullNotes.substring(0, 300)}...`;

  return (
    <div className="animate-fadeIn" style={{ animationDelay: "0.1s" }}>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Mentor's Notes on Your Progress
      </h2>

      <p className="text-gray-700 leading-relaxed">{truncatedNotes}</p>

      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-4 text-eduBlue-500 hover:text-eduBlue-600 font-medium transition-colors"
      >
        {expanded ? "See less" : "See more"}
      </button>
    </div>
  );
};

export default MentorNotes;
