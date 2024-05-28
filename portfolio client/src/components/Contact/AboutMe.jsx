import { useState } from "react";
import contactMe from "../../assets/contact_me.png";
import ContactForm from "./ContactForm";

const AboutMe = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm((prev) => !prev);
  };
  return (
    <div className="relative flex justify-center sm:items-center sm:pt-0 lg:w-[1000px] lg:ml-[-115px]">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="p-4 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-800 sm:text-5xl dark:text-white">
                Get in touch
              </h1>
              <p className="mt-2 text-lg font-medium text-gray-600 sm:text-2xl dark:text-gray-400">
                Fill in the form to start a conversation
              </p>

              <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div className="ml-4 font-semibold tracking-wide text-md">
                  Chottogram, Bangladesh
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="ml-4 font-semibold tracking-wide text-md">
                  +44 1234567890
                </div>
              </div>

              <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  className="w-8 h-8 text-gray-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-4 font-semibold tracking-wide text-md">
                  moinulilm10@gmail.com
                </div>
              </div>
              <button
                onClick={toggleContactForm}
                className="px-3 py-3 mt-4 font-bold text-white transition duration-300 ease-in-out bg-indigo-600 rounded-lg md:w-32 hover:bg-blue-dark hover:bg-indigo-500"
              >
                {showContactForm ? "Close form" : "Contact"}
              </button>
            </div>
            {showContactForm ? (
              <div className="p-6 bg-white dark:bg-gray-800 sm:rounded-lg">
                <ContactForm />
              </div>
            ) : (
              <div className="p-6 sm:rounded-lg ">
                <img
                  src={contactMe}
                  alt="contact photo"
                  className="hidden w-[342px] lg:block h-ful"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
