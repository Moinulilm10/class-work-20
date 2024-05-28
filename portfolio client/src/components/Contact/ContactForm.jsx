const ContactForm = () => {
  return (
    <form className="flex flex-col justify-center p-6 ">
      <div className="flex flex-col">
        <label htmlFor="name" className="hidden">
          Full Name
        </label>
        <input
          type="name"
          name="name"
          id="name"
          placeholder="your full name"
          className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 dark:bg-gray-800 dark:border-gray-700 focus:border-indigo-500 focus:outline-none"
        />
      </div>

      <div className="flex flex-col mt-2">
        <label htmlFor="email" className="hidden">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="your email"
          className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 dark:bg-gray-800 dark:border-gray-700 focus:border-indigo-500 focus:outline-none"
        />
      </div>

      <div className="flex flex-col mt-2">
        <label htmlFor="message" className="hidden">
          Write Your Message
        </label>
        <textarea
          type="text"
          name="message"
          id="message"
          placeholder="message"
          className="px-3 py-3 mt-2 font-semibold text-gray-800 bg-white border border-gray-400 rounded-lg w-100 dark:bg-gray-800 dark:border-gray-700 focus:border-indigo-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="px-6 py-3 mt-3 font-bold text-white transition duration-300 ease-in-out bg-indigo-600 rounded-lg md:w-32 hover:bg-blue-dark hover:bg-indigo-500"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
