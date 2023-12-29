
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields before submitting.');
      return;
    }


    alert('Message submitted successfully!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="container4 w-full p-10 flex items-center justify-center">
      <div className="contact-form p-10  w-2/4 shadow-lg flex flex-col items-center justify-center bg-slate-200 ">
      <h1 className="text-3xl font-bold mb-6 ">Contact Us</h1>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2 w-full">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default Contact;
