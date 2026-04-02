import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/contact/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("✅ Thank you, " + formData.name + "! We received your message.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ Server error. Check backend.");
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p className="contact-subtitle">
          Have questions or feedback? We’d love to hear from you.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
