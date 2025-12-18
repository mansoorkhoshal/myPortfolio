import {
  ArrowUp,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Mail,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/mansoorkhoshal", label: "LinkedIn" },
    { icon: <Instagram size={18} />, href: "https://instagram.com/mansoorkhoshal", label: "Instagram" },
    { icon: <Youtube size={18} />, href: "https://youtube.com/@mansoorahmadkhoshal", label: "YouTube" },
    { icon: <Github size={18} />, href: "https://github.com/mansoorkhoshal", label: "GitHub" },
  ];

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    {
      icon: <Mail size={16} />,
      text: "mansoorahmad.dev44@gmail.com",
      href: "mailto:mansoorahmad.dev44@gmail.com",
    },
    {
      icon: <Phone size={16} />,
      text: "+92 323 446 6448",
      href: "tel:+923234466448",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="px-7 py-12 mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 rounded-xl p-8 border border-white/20 dark:border-gray-700/50 shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {/* TOP GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-left">
            {/* Branding */}
            <motion.div variants={itemVariants} className="space-y-4 text-left">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                MANSOOR AHMAD
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Digital designer & developer creating meaningful experiences.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors duration-300 border rounded-lg p-2"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={itemVariants} className="text-left">
              <h4 className="text-gray-900 dark:text-white font-medium mb-4 text-sm uppercase tracking-wider">
                Navigation
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={link.href}
                      className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants} className="text-left">
              <h4 className="text-gray-900 dark:text-white font-medium mb-4 text-sm uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-3">
                {contactInfo.map((info, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3 text-sm min-w-0"
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="text-gray-600 dark:text-gray-400 mt-0.5 shrink-0">
                      {info.icon}
                    </span>
                    <a
                      href={info.href}
                      className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 break-all sm:break-normal"
                    >
                      {info.text}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={itemVariants} className="space-y-4 text-left">
              <h4 className="text-gray-900 dark:text-white font-medium text-sm uppercase tracking-wider">
                Newsletter
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Subscribe to get updates on my latest work.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 dark:bg-gray-800/50 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900 dark:focus:ring-gray-300"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 dark:text-gray-900 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </div>

          {/* BOTTOM BAR */}
          <motion.div
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700/50 flex flex-col items-start sm:flex-row sm:items-center sm:justify-between text-xs text-gray-600 dark:text-gray-400 space-y-4 sm:space-y-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p>© {currentYear} Mansoor Ahmad. All rights reserved.</p>

            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-gray-900 dark:hover:text-white transition-colors">
                Cookies
              </a>
              <motion.a
                href="#hero"
                aria-label="Back to top"
                className="p-2 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp size={16} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};
