import { useState } from "react";

const faqData = [
  {
    question: "What is the date and time of the wedding?",
    answer: "Our wedding will take place on March 8, 2026, starting at 3:30 PM.",
  },
  {
    question: "Where is the wedding venue?",
    answer: "The ceremony and reception will be held at Manuel Resort, Piñan, Zamboanga del Norte.",
  },
  {
    question: "What is the dress code?",
    answer: "We request semi-formal attire with a touch of pastel colors to match our wedding theme.",
  },
  {
    question: "Is there parking available?",
    answer: "Yes, there is ample parking at the venue for all guests.",
  },
  {
    question: "Can I bring a plus one?",
    answer: "While we would be delighted to invite everyone, in order to ensure a comfortable experience for all our guests, we will be limiting our invitations to those specifically listed. Thank you for your understanding.",
  },
  {
    question: "Will there be accommodations nearby?",
    answer: "Yes, several hotels and inns are available near the venue. We recommend booking early.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="min-h-screen px-4 md:px-12 py-16 bg-white">
      <h2 className="text-4xl font-semibold text-center mb-12 text-[#8daabb]">
        Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg shadow-sm"
          >
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center text-lg font-medium text-gray-800 hover:text-[#8daabb] focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {item.question}
              <span className="text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            {openIndex === index && (
              <div className="px-6 py-4 text-gray-600 border-t border-gray-200 transition-all duration-300">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
