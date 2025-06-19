import React, { useState } from "react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import Inputs from "../utils/Inputs";
import Logo from "../utils/Logo";
import { motion } from "framer-motion";

function Contact() {
    const contactInfo = [
        { type: "Phone", value: "+91 7427837782", icon: MdPhone },
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
        <motion.div
            className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#f7e9f0] to-[#e7f3f5] px-4 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <motion.div
                className="p-6 sm:p-8 bg-white rounded-lg shadow-lg w-full max-w-5xl"
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                <motion.div
                    className="text-center mb-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <h1 className="text-4xl font-bold mb-2 text-[#5b2333]">Contact Me</h1>
                    <p className="text-gray-600">I’d love to hear from you!</p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-10">
                    {/* Contact Info */}
                    <motion.div
                        className="space-y-6 flex-1"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
                        }}
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start"
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                            >
                                <info.icon className="text-2xl text-[#5b2333] mr-4 mt-1" />
                                <div>
                                    <p className="font-semibold text-[#5b2333]">{info.type}</p>
                                    <p className="text-gray-700">{info.value}</p>
                                </div>
                            </motion.div>
                        ))}
                        <div className="mt-6">
                            <Logo width="150px" />
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        className="flex-1 space-y-4"
                        onSubmit={handleSubmit}
                        noValidate
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <Inputs
                            label="Name"
                            id="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-[#f7f4f3]"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                        <Inputs
                            type="email"
                            label="Email"
                            id="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="bg-[#f7f4f3]"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                        <Inputs
                            label="Message"
                            id="message"
                            as="textarea"
                            placeholder="Write your message"
                            value={formData.message}
                            onChange={handleChange}
                            className="bg-[#f7f4f3] h-28 resize-none"
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}

                        <motion.button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#5b2333] to-[#7a2e42] text-white px-4 py-2 rounded hover:shadow-lg transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Send Message
                        </motion.button>
                    </motion.form>
                </div>
            </motion.div>
        </motion.div>
    );
}

export default Contact;
