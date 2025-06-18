import { useState } from "react";
import "./RetroCaret.css";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-[#257656] text-white p-6 max-w-md mx-auto border-4 border-[#6ee7b7] rounded-lg shadow-lg font-mono h-150">
      <h2 className="text-2xl mb-4 text-center">📟 Contact</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label>
            NAME:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full bg-[#145a4d] border-2 border-[#6ee7b7] px-2 py-1 mt-1 focus:outline-none"
              required
            />
          </label>
          <label>
            EMAIL:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full bg-[#145a4d] border-2 border-[#6ee7b7] px-2 py-1 mt-1 focus:outline-none"
              required
            />
          </label>
          <label>
            MESSAGE:
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full bg-[#145a4d] border-2 border-[#6ee7b7] px-2 py-1 mt-1 h-24 focus:outline-none"
              required
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-[#6ee7b7] text-black px-4 py-2 border-2 border-black hover:bg-white transition"
          >
            SEND
          </button>
        </form>
      ) : (
        <div className="text-center">
          <p>✅ MESSAGE SENT</p>
          <p className="mt-2">
            Thanks, {form.name}! Expect a pixel-perfect reply soon.
          </p>
        </div>
      )}
    </div>
  );
};

export default Contact;
