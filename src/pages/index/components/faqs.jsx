import { useState } from "react";
import { Icon } from "@iconify/react";
import faqImage from "@/assets/faq.png";

const faqs = [
  {
    question: "What is EduPath and who is it for?",
    answers: [
      "EduPath is an innovative platform designed to guide secondary school students through their academic journey and career choices. Whether you're exploring potential university courses, seeking mentorship, or developing essential life skills, EduPath provides the tools and resources to help you succeed.",
      "It is specifically tailored for students in secondary school who want to make informed decisions about their future careers, connect with experienced mentors, and gain access to personalized learning paths that align with their strengths and interests.",
    ],
  },
  {
    question: "How does EduPath create personalized learning paths?",
    answers: [
      "EduPath uses an AI-driven system to assess your academic strengths, weaknesses, and career interests. Based on this data, it provides customized recommendations, including learning modules, skill-building exercises, and mentorship opportunities.",
      "Through interactive quizzes, mentor feedback, and community discussions, EduPath continuously adapts to your progress and refines your learning experience to ensure you stay on the right path toward your academic and professional goals.",
    ],
  },
  {
    question: "Is EduPath aligned with the Nigerian curriculum?",
    answers: [
      "Yes, EduPath is fully aligned with the Nigerian secondary school curriculum, ensuring that students receive guidance and resources that complement their school education. Whether you're preparing for WAEC, NECO, JAMB, or other national examinations, EduPath provides structured learning support.",
      "Beyond academics, the platform also integrates real-world skills and career insights, helping students transition smoothly from secondary school to higher education or vocational training.",
    ],
  },
  {
    question: "How can I connect with mentors on EduPath?",
    answers: [
      "EduPath provides access to a network of experienced mentors, including professionals, university students, and educators, who offer guidance and insights into different career paths. You can connect with mentors by signing up on the platform and selecting areas of interest.",
      "Once you're enrolled, you can participate in one-on-one mentorship sessions, join group discussions, and receive career advice tailored to your goals. Mentors help answer questions, share personal experiences, and provide encouragement to keep you motivated.",
    ],
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row mt-28 px-4 md:px-20 gap-16">
      <div className="lg:w-1/3 space-y-4">
        <h1 className="font-epilogue text-4xl font-bold text-blue100">FAQs</h1>
        <p className="text-gray-600 lg:text-xl">
          If you don&apos;t find an answer to your question, feel free to email us.
        </p>
        <img src={faqImage} alt="FAQ" className="w-full max-w-sm mt-10 md:hidden lg:block" />
      </div>

      <div className="lg:w-2/3 flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="shadow py-3 rounded-lg">
            <button
              className="w-full flex justify-between items-center text-left p-4 font-medium rounded-lg"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg">{faq.question}</span>
              <Icon
                icon={openIndex === index ? "mdi:chevron-up" : "mdi:chevron-down"}
                className="w-6 h-6 transition-transform duration-300"
              />
            </button>
            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? "max-h-[500px] opacity-100 p-4" : "max-h-0 opacity-0"
              } border-t border-gray-100 bg-white`}
            >
              {faq.answers.map((answer, i) => (
                <p className="text-gray-600 text-md mt-2" key={i}>
                  {answer}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;