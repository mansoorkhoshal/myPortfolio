import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
  Github,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    if (!formData.name.trim()) {
      toast({ title: "Name is required", variant: "destructive" });
      return false;
    }
    if (!formData.email.trim()) {
      toast({ title: "Email is required", variant: "destructive" });
      return false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      toast({ title: "Invalid email format", variant: "destructive" });
      return false;
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      toast({
        title: "Message must be at least 10 characters",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("https://formspree.io/f/xwpbojaj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Message sent! 🎉",
          description: "I'll get back to you within 24 hours.",
          variant: "success",
          className:
            "bg-green-600 text-white dark:bg-green-500 border border-green-700 shadow-lg",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error();
      }
    } catch {
      toast({
        title: "Oops! Something went wrong",
        description:
          "Please try again or email me directly at mansoorahmad.dev44@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-20 bg-background overflow-x-hidden"
    >
      {/* WIDTH FIX ONLY */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-12">
        {/* HEADER */}
        <div className="text-center mb-14 sm:mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary mb-4">
            Let's Connect
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {/* CONTACT INFO (unchanged content) */}
          <div className="space-y-6 sm:space-y-8 p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-secondary/20 to-background border border-border">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <div className="relative">
                <div className="w-4 h-4 sm:w-6 sm:h-6 bg-primary rounded-full animate-pulse" />
                <div className="absolute inset-0 w-4 sm:w-6 h-4 sm:h-6 bg-primary rounded-full animate-ping" />
              </div>
              Contact Details
            </h3>

            <div className="space-y-4 sm:space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                    Email
                  </p>
                  <a
                    href="mailto:mansoorahmad.dev44@gmail.com"
                    className="block text-sm sm:text-base font-medium break-words"
                    target="_blank"
                  >
                    mansoorahmad.dev44@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                    Phone
                  </p>
                  <a
                    href="https://wa.me/923234466448"
                    className="block text-sm sm:text-base font-medium break-all sm:break-normal"
                    target="_blank"
                  >
                    +92 323 446 6448
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                <div className="p-2 sm:p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-xs sm:text-sm font-medium text-muted-foreground">
                    Location
                  </p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Lahore,Pakistan"
                    className="block text-sm sm:text-base font-medium"
                    target="_blank"
                  >
                    Lahore, Pakistan.
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-card border border-border shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <div className="relative">
                <div className="w-4 h-4 sm:w-6 sm:h-6 bg-primary rounded-full animate-pulse" />
                <div className="absolute inset-0 w-4 sm:w-6 h-4 sm:h-6 bg-primary rounded-full animate-ping" />
              </div>
              Send Me a Message
            </h3>

            <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="space-y-1 text-left">
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium text-muted-foreground text-left"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-input bg-background text-sm sm:text-base text-left"
                  placeholder="Khoshal Jan"
                />
              </div>

              {/* Email */}
              <div className="space-y-1 text-left">
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-muted-foreground text-left"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-input bg-background text-sm sm:text-base text-left"
                  placeholder="khoshaljan@example.com"
                />
              </div>

              {/* Message */}
              <div className="space-y-1 text-left">
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium text-muted-foreground text-left"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl border border-input bg-background resize-none text-sm sm:text-base text-left"
                  placeholder="Hey, I'd love to collaborate on..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full flex items-center justify-center gap-2 py-2 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary to-purple-600 text-white font-medium text-sm sm:text-base",
                  isSubmitting && "opacity-80 cursor-not-allowed"
                )}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 sm:h-5 sm:w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={16} className="sm:size-[18px]" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
