import React from "react";

const MentorRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      text: "Check out this article on effective study techniques",
      link: "#",
      isArticle: true,
    },
    {
      id: 2,
      text: "Review this PDF on Algebra basics before our next session",
      link: "#",
      isPdf: true,
    },
    {
      id: 3,
      text: "Practice these grammar exercises to strengthen your writing skills",
      link: "#",
      isExercise: true,
    },
  ];

  return (
    <div className="lg:border-l-3 lg:border-gray50 lg:pl-4">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 ">
        Mentor's Recommendations
      </h2>

      <ul className="space-y-4">
        {recommendations.map((rec, index) => (
          <li
            key={rec.id}
            className="animate-slideIn"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start gap-2">
              <span className="font-medium text-gray-700">{index + 1}.</span>
              <div>
                <p className="text-gray-800">
                  {rec.text}
                  {rec.isArticle && (
                    <a
                      href={rec.link}
                      className="text-eduBlue-500 hover:text-eduBlue-600 ml-1"
                    >
                      article
                    </a>
                  )}
                </p>
                {(rec.isPdf || rec.isExercise) && (
                  <a
                    href={rec.link}
                    className="inline-flex items-center text-sm text-eduBlue-500 hover:text-eduBlue-600 mt-1 font-medium"
                  >
                    Open resource
                    {/* <ArrowRight size={14} className="ml-1" /> */}
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <button className="mt-6 text-eduBlue-500 hover:text-eduBlue-600 font-medium transition-colors">
        See more
      </button>
    </div>
  );
};

export default MentorRecommendations;
