import React, { FormEvent } from "react";

interface ContactProps {}

const Contact: React.FC<ContactProps> = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert("Form submitted! (This is a placeholder)");
  };

  return (
    <section id="contact" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <form className="max-w-md mx-auto flex flex-col" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="p-2 mb-4 border rounded-md"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-2 mb-4 border rounded-md"
          required
        />
        <textarea
          placeholder="Your Message"
          className="p-2 mb-4 border rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-pink-600 text-white py-2 px-6 rounded-md hover:bg-pink-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
