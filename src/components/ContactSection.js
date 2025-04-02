import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="w-full bg-gray-100 px-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
      <form className="max-w-2xl mx-auto space-y-8">
        {/* Name Input */}
        <div className="relative">
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            className="w-full bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-black-500 text-lg py-2"
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            className="w-full bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-black-500 text-lg py-2"
          />
        </div>

        {/* Message Input */}
        <div className="relative">
          <textarea
            id="message"
            placeholder="Your Message"
            rows="5"
            className="w-full bg-transparent border-b-2 border-gray-400 focus:outline-none focus:border-black-500 text-lg py-2 resize-none"
          ></textarea>
        </div>

        {/* Send Button */}
        <div className="text-center">
          <button
            type="submit"
            className="text-lg font-semibold text-gray-500  focus:outline-none"
          >
            Send
          </button>
          <div className="w-full h-[2px] bg-gray-500 mt-1"></div>
        </div>
      </form>
    </section>
  );
};

export default ContactSection;