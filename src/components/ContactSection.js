import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add the form data to Firestore
      await addDoc(collection(db, "contacts"), formData);
      setSuccessMessage("Your message has been sent successfully!");
      setErrorMessage("");
      // Clear the form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMessage("Failed to send your message. Please try again.");
      setSuccessMessage("");
    }
  };

  return (
    <section id="contact" className="w-full bg-gray-100 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md mx-auto space-y-6"
      >
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-0 py-2 focus:outline-none focus:border-black"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-0 py-2 focus:outline-none focus:border-black"
            required
          />
        </div>

        {/* Message Input */}
        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-0 py-2 focus:outline-none focus:border-black"
            rows="5"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="text-lg font-semibold text-gray-700 hover:text-black focus:outline-none relative"
          >
            Send
            <span className="block h-[2px] bg-gray-300 mt-1 w-full absolute left-0 right-0 mx-auto"></span>
          </button>
        </div>
      </form>

      {/* Success or Error Message */}
      {successMessage && (
        <p className="text-center text-green-500 mt-4">{successMessage}</p>
      )}
      {errorMessage && (
        <p className="text-center text-red-500 mt-4">{errorMessage}</p>
      )}
    </section>
  );
};

export default ContactSection;