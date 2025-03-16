import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
    {
        question: "How do I search for properties?",
        answer: "Use our search bar to filter properties by location, price, and more.",
        userExperiences: [
            "I found my dream apartment in no time with the filter options. Highly recommend!",
            "The search process was really easy, and I was able to find something within my budget."
        ]
    },
    {
        question: "Is there a fee to use this platform?",
        answer: "No, our platform is completely free for renters.",
        userExperiences: [
            "I love that there are no hidden fees! Everything was upfront and transparent."
        ]
    },
    {
        question: "Can I contact the property owner directly?",
        answer: "Yes, you can contact the property owner through our platform.",
        userExperiences: [
            "Being able to contact the property owner directly saved me a lot of time and hassle."
        ]
    },
    {
        question: "How do I book a property?",
        answer: "Once you find your desired property, simply click on 'Book Now' to reserve it instantly.",
        userExperiences: [
            "Booking was super easy! Just a few clicks, and I had my property reserved."
        ]
    },
    {
        question: "What is the booking process like?",
        answer: "After selecting your property, you can fill out a quick form, sign the lease online, and confirm your booking.",
        userExperiences: [
            "I loved how quick and simple the booking process was! Everything was done online."
        ]
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-5xl mx-auto">
                <h3 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">Frequently Asked Questions</h3>
                <div className="space-y-4">
                    {faqData.map((faq, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md transition-all">
                            <button
                                className="flex justify-between items-center w-full font-semibold text-lg text-gray-900 dark:text-white focus:outline-none"
                                onClick={() => toggleAnswer(index)}
                            >
                                {faq.question}
                                {openIndex === index ? <FaMinus /> : <FaPlus />}
                            </button>
                            <div
                                className={`mt-2 overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="text-gray-700 dark:text-gray-300 mt-3">{faq.answer}</p>
                                <div className="mt-4 space-y-2">
                                    <h5 className="font-semibold text-lg text-gray-900 dark:text-white">User Experiences:</h5>
                                    {faq.userExperiences.map((experience, expIndex) => (
                                        <p key={expIndex} className="text-gray-600 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 p-3 rounded-lg">
                                            "{experience}"
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
