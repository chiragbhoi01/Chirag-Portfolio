import { useState } from "react";
import Input from "../utils/Input";
import ComponentWithDarkBackground from "./ComponentWithDarkBackground";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<string | null>(null);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setFormStatus("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
    } else {
      setFormStatus("Please fix the errors in the form.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setFormStatus(null);
  };

  return (
    <ComponentWithDarkBackground>
      <section
        id="contact"
        role="region"
        aria-label="Contact Chirag Bhoi"
        className="flex flex-col mx-2 my-1 rounded-2xl  overflow-hidden p-10"
      >
        <div className="flex flex-col items-center w-full">
          <h1 className="text-4xl md:text-6xl font-bold my-5 text-center">
            Contact Me
          </h1>
          <div className="w-full max-w-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-1"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 p-2 text-black"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>
              <button
                type="submit"
                className="p-3 rounded-lg bg-indigo-500 hover:bg-indigo-600 hover:scale-105 text-white font-medium transition-all duration-200"
                aria-label="Submit contact form"
              >
                Send Message
              </button>
              {formStatus && (
                <p
                  className={`text-sm text-center ${
                    formStatus.includes("success")
                      ? "text-green-300"
                      : "text-red-500"
                  }`}
                  aria-live="polite"
                >
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </ComponentWithDarkBackground>
  );
}

export default Contact;
