import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Header from "./Header";
import { site } from "./site";
import "sweetalert2/dist/sweetalert2.min.css";

const Contact = ({ showHeader = true }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [loading, setLoading] = useState(false);

  const isValid = {
    name: formData.name.trim().length > 0,
    email: /\S+@\S+\.\S+/.test(formData.email),
    message: formData.message.trim().length > 0,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTouched({ name: true, email: true, message: true });

    if (!isValid.name || !isValid.email || !isValid.message) {
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
        () => {
          Swal.fire("Sent!", "Your message has been delivered.", "success");
          setFormData({ name: "", email: "", message: "" });
          setTouched({ name: false, email: false, message: false });
          setLoading(false);
        },
        () => {
          Swal.fire("Error", "Something went wrong. Please try again.", "error");
          setLoading(false);
        }
      );
  };

  const fieldClass = (name) => `field${touched[name] && !isValid[name] ? " is-error" : ""}${isValid[name] ? " is-valid" : ""}`;

  return (
    <>
      {showHeader && <Header />}
      <section id="contact" className={`band contact-band${showHeader ? " with-nav-offset" : ""}`}>
        <div className="wrap contact-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Tell me what you want to build.</h2>
            <p className="lede">
              A short note is enough: the product, the timeline, and what done looks like.
              I read every message.
            </p>
            <div className="contact-links">
              <a href={site.github} target="_blank" rel="noreferrer"><FaGithub /> GitHub</a>
              <a href={site.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /> LinkedIn</a>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
            <label className={fieldClass("name")}>
              Name
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.name}
                required
              />
            </label>
            <label className={fieldClass("email")}>
              Email
              <input
                type="email"
                name="email"
                id="email"
                placeholder="you@email.com"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.email}
                required
              />
            </label>
            <label className={fieldClass("message")}>
              Message
              <textarea
                name="message"
                id="message"
                rows="6"
                placeholder="What are we making?"
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.message}
                required
              />
            </label>
            <button type="submit" className="action action-solid" disabled={loading}>
              {loading ? "Sending..." : "Send message"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
