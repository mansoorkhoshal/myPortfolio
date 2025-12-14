import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    if (!formData.name.trim()) {
      alert("Name is required");
      return false;
    }

    if (!formData.email.trim()) {
      alert("Email is required");
      return false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      alert("Invalid email format");
      return false;
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      alert("Message must be at least 10 characters");
      return false;
    }

    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xwpbojaj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully! 🎉");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      alert(
        "Something went wrong. Please try again or email me directly at mansoorahmad.dev44@gmail.com"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative bg-background"
    >
      {/* UI REMAINS SAME – no changes below */}
      {/* Your existing JSX stays exactly as it was */}
    </section>
  );
};
