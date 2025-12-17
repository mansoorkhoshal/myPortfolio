import { useEffect, useState, useRef } from "react";
import {
  Home,
  User,
  Code,
  Briefcase,
  MessageSquare,
  Mail,
  Sun,
  Moon,
  Youtube,
  Github,
  Linkedin,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Testimonials", href: "#testimonials", icon: MessageSquare },
  { name: "Contact", href: "#contact", icon: Mail },
];

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState("#hero");
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      lastScrollYRef.current = currentScrollY;

      const sections = navItems.map((item) => item.href);
      const scrollPosition = currentScrollY + 120;

      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Right Social Buttons */}
      <motion.div
        className="fixed top-4 right-4 z-50 flex gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <motion.a
          href="https://mansoor-landing-page.vercel.app"
          target="_blank"
          className="p-2 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md border shadow-sm"
          whileHover={{ scale: 1.05 }}
        >
          <Globe className="w-5 h-5 text-green-600" />
        </motion.a>

        <motion.a
          href="https://github.com/mansoorkhoshal"
          target="_blank"
          className="p-2 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md border shadow-sm"
          whileHover={{ scale: 1.05 }}
        >
          <Github className="w-5 h-5" />
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/mansoorkhoshal"
          target="_blank"
          className="p-2 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md border shadow-sm"
          whileHover={{ scale: 1.05 }}
        >
          <Linkedin className="w-5 h-5 text-blue-600" />
        </motion.a>

        <motion.a
          href="https://www.youtube.com/@mansoorahmadkhoshal"
          target="_blank"
          className="p-2 rounded-full bg-white/80 dark:bg-black/80 backdrop-blur-md border shadow-sm"
          whileHover={{ scale: 1.05 }}
        >
          <Youtube className="w-5 h-5 text-red-600" />
        </motion.a>
      </motion.div>

      {/* Sticky Bottom Navbar */}
      <motion.div
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className="flex items-center bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full shadow-lg p-2 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "p-2 rounded-full flex flex-col items-center transition-colors",
                  activeSection === item.href
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:text-primary dark:text-gray-300"
                )}
              >
                <item.icon className="w-5 h-5" />
                <span className="text-xs mt-1 hidden md:block">
                  {item.name}
                </span>
              </a>
            ))}

            <div className="px-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};
