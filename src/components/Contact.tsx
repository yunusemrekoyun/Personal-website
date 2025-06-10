"use client";
import React, { useState } from "react";

const defaultFormState = {
  name: { value: "", error: "" },
  email: { value: "", error: "" },
  message: { value: "", error: "" },
};

export const Contact = () => {
  const [formData, setFormData] = useState(defaultFormState);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // Backend entegrasyonu için burası
  };

  const inputBaseStyles =
    "px-3 py-2 w-full rounded-md text-sm transition outline-none";
  const lightMode =
    "bg-neutral-100 text-neutral-800 placeholder-neutral-500 focus:ring-2 focus:ring-neutral-300";
  const darkMode =
    "dark:bg-neutral-700 dark:text-neutral-100 dark:placeholder-neutral-400 dark:focus:ring-2 dark:focus:ring-neutral-500";

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <input
          type="text"
          placeholder="Your Name"
          className={`${inputBaseStyles} ${lightMode} ${darkMode}`}
          value={formData.name.value}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: { value: e.target.value, error: "" },
            })
          }
        />
        <input
          type="email"
          placeholder="Your Email"
          className={`${inputBaseStyles} ${lightMode} ${darkMode}`}
          value={formData.email.value}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: { value: e.target.value, error: "" },
            })
          }
        />
      </div>

      <textarea
        placeholder="Your Message"
        rows={10}
        className={`${inputBaseStyles} ${lightMode} ${darkMode} mt-4 resize-none`}
        value={formData.message.value}
        onChange={(e) =>
          setFormData({
            ...formData,
            message: { value: e.target.value, error: "" },
          })
        }
      />

      <button
        type="submit"
        className="w-full mt-4 bg-sky-600 text-white font-semibold py-2 rounded-md hover:bg-sky-700 transition"
      >
        Submit
      </button>
    </form>
  );
};
