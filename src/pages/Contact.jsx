import React, { useState } from "react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import Inputs from "../utils/Inputs";
import Logo from "../utils/Logo";

function Contact() {
    const contactInfo = [
        { type: "Phone", value: "8875127427", icon: MdPhone },
        { type: "Email", value: "mr.chiragbhoi2003@gmail.com", icon: MdEmail },
        { type: "Location", value: "Udaipur, Rajasthan, India", icon: MdLocationOn },
    ];

    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            setErrors({});
            console.log("Form submitted", formData);
            // Send data to backend or EmailJS here
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-10">
            <div className="p-6 sm:p-8 bg-white rounded-lg shadow-md w-full max-w-5xl">
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold mb-2">Contact Me</h1>
                    <p className="text-gray-600">Get in touch</p>
                </div>

                <div className="flex flex-col md:flex-row gap-10">
                    {/* Contact Info */}
                    <div className="space-y-6 flex-1">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="flex items-start">
                                <info.icon className="text-2xl text-blue-600 mr-4 mt-1" />
                                <div>
                                    <p className="font-semibold">{info.type}</p>
                                    <p className="text-gray-700">{info.value}</p>
                                </div>
                            </div>
                        ))}
                        <Logo width="500px"/>
                    </div>

                    {/* Contact Form */}
                    <form className="flex-1 space-y-4" onSubmit={handleSubmit} noValidate>
                        <Inputs
                            label="Name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-white"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                        <Inputs
                            type="email"
                            label="Email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-white"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                        <Inputs
                            label="Message"
                            as="textarea"
                            placeholder="Write your message"
                            value={formData.message}
                            onChange={handleChange}
                            className="bg-white h-28 resize-none"
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
