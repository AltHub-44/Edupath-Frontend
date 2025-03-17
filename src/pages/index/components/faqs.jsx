import { useState } from "react";
import { Icon } from "@iconify/react";
import faqImage from "@/assets/faq.png";

const faqs = [
  {
    question: "What is EduPath and who is it for?",
    answers: [
      "It's for anyone who seeks to get career advice.",
      "It's for everyone who desires professional advancement.",
    ],
  },
  {
    question: "How does EduPath create personalized learning paths?",
    answers: [
      "Through our community collaboration.",
      "Through our mentorship program.",
    ],
  },
  {
    question: "Is EduPath aligned with the Nigerian curriculum?",
    answers: [
      "The answer is yes.",
      "EduPath is also aligned with the socio-cultural sphere.",
    ],
  },
  {
    question: "How can I connect with mentors on EduPath?",
    answers: ["Click the (Start your journey) button."],
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row mt-20 px-4 md:px-20 gap-16">
      <div className="lg:w-1/3 space-y-4">
        <h1 className="font-epilogue text-4xl font-bold text-blue200">FAQs</h1>
        <p className="text-gray-600 lg:text-2xl">
          If you do not find an answer to your question, you can send us an email.
        </p>
        <img src={faqImage} alt="faq" className="w-full max-w-sm mt-10 md:hidden lg:block" />
      </div>

      <div className="lg:w-2/3 flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div key={index} className="shadow py-3 rounded-lg">
            <button
              className="w-full flex justify-between items-center text-left p-4 font-medium rounded-lg"
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg ">{faq.question}</span>
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
                <p className="text-gray-600 text-md" key={i}>{answer}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;