import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      Swal.fire("Oops!", "Please fill out all fields.", "error");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_m6lzz7m",
        "template_f9s4f8u",
        formRef.current,
        "Dq0GF2z8BuVI7BtSz"
      )
      .then(
        (result) => {
          Swal.fire("Sent!", "Your message has been delivered.", "success");
          setFormData({ name: "", email: "", message: "" });
          setLoading(false);
        },
        (error) => {
          Swal.fire("Error", "Something went wrong. Please try again.", "error");
          setLoading(false);
        }
      );
  };

  return (
    <section className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">
        Contact Me
      </h2>

      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 w-full">
        <div>
          <label htmlFor="name" className="block mb-2 font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your full name"
            className="w-full box-border border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            value={formData.name}
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your email address"
            className="w-full box-border border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            value={formData.email}
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="6"
            placeholder="Write your message here..."
            className="w-full box-border border border-gray-300 rounded px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
            onChange={handleChange}
            value={formData.message}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded hover:bg-indigo-700 transition duration-300"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>

  );
};

export default Contact;
