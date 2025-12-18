import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your images
import htmlIcon from "@/assets/icons/html.png";
import cssIcon from "@/assets/icons/css.png";
import jsIcon from "@/assets/icons/javascript.png";
import reactIcon from "@/assets/icons/react.png";
import nextjsIcon from "@/assets/icons/nextjs.png";
import nodejsIcon from "@/assets/icons/node.png";
import expressIcon from "@/assets/icons/express.png";
import mongodbIcon from "@/assets/icons/mongodb.png";
import tailwindIcon from "@/assets/icons/tailwind.png";
import bootstrapIcon from "@/assets/icons/bootstrap.png";
import gitIcon from "@/assets/icons/git.png";
import githubIcon from "@/assets/icons/github.png";
import vscodeIcon from "@/assets/icons/vscode.png";
import apisIcon from "@/assets/icons/apis.png";
import databaseIcon from "@/assets/icons/database.png";

const skills = [
  { name: "HTML5", level: 95, category: "frontend", icon: "html" },
  { name: "CSS3", level: 90, category: "frontend", icon: "css" },
  { name: "Tailwind CSS", level: 95, category: "frontend", icon: "tailwind" },
  { name: "Bootstrap", level: 95, category: "frontend", icon: "bootstrap" },
  { name: "JavaScript", level: 90, category: "frontend", icon: "javascript" },
  { name: "React", level: 90, category: "frontend", icon: "react" },
  { name: "Next.js", level: 75, category: "frontend", icon: "nextjs" },

  { name: "MongoDB", level: 90, category: "backend", icon: "mongodb" },
  { name: "Node.js", level: 90, category: "backend", icon: "nodejs" },
  { name: "Express", level: 85, category: "backend", icon: "express" },
  { name: "Rest APIs", level: 80, category: "backend", icon: "apis" },
  { name: "Data Base", level: 75, category: "backend", icon: "database" },

  { name: "Git", level: 90, category: "tools", icon: "git" },
  { name: "GitHub", level: 90, category: "tools", icon: "github" },
  { name: "VS Code", level: 95, category: "tools", icon: "vscode" },
];

const categories = [
  { id: "all", label: "All Skills", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { id: "frontend", label: "Frontend", color: "bg-gradient-to-r from-blue-500 to-cyan-500" },
  { id: "backend", label: "Backend", color: "bg-gradient-to-r from-green-500 to-emerald-500" },
  { id: "tools", label: "Tools", color: "bg-gradient-to-r from-orange-500 to-yellow-500" },
];

const iconImages = {
  html: htmlIcon,
  css: cssIcon,
  javascript: jsIcon,
  react: reactIcon,
  nextjs: nextjsIcon,
  nodejs: nodejsIcon,
  express: expressIcon,
  mongodb: mongodbIcon,
  git: gitIcon,
  github: githubIcon,
  tailwind: tailwindIcon,
  bootstrap: bootstrapIcon,
  vscode: vscodeIcon,
  apis: apisIcon,
  database: databaseIcon,
};

const SkillBar = ({ level }) => (
  <div className="w-full h-3 bg-secondary/20 rounded-full overflow-hidden">
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${level}%` }}
      transition={{ duration: 1.5, delay: 0.2 }}
      className={`h-full rounded-full ${level > 75
          ? "bg-gradient-to-r from-green-400 to-emerald-500"
          : level > 50
            ? "bg-gradient-to-r from-yellow-400 to-amber-500"
            : "bg-gradient-to-r from-red-400 to-pink-500"
        }`}
    />
  </div>
);

const InfiniteScrollSkills = ({ skills }) => {
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="overflow-x-hidden py-8">
      <motion.div
        className="flex gap-8 mb-8"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {duplicatedSkills.map((skill, index) => (
          <div
            key={`${skill.name}-${index}`}
            className="flex-shrink-0 flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <img
                src={iconImages[skill.icon]}
                alt={skill.name}
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-base sm:text-sm font-medium text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="flex gap-8"
        animate={{ x: ["-100%", "0%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...duplicatedSkills].reverse().map((skill, index) => (
          <div
            key={`${skill.name}-reverse-${index}`}
            className="flex-shrink-0 flex flex-col items-center gap-2"
          >
            <div className="w-16 h-16 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <img
                src={iconImages[skill.icon]}
                alt={skill.name}
                className="w-8 h-8 object-contain"
              />
            </div>
            <span className="text-base sm:text-sm font-medium text-center">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-24 md:py-28 bg-gradient-to-br from-background via-secondary/5 to-background overflow-x-hidden"
    >
      {/* WIDTH FIXED WRAPPER */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            My Skills
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I've mastered and my proficiency levels
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium border border-transparent hover:shadow-lg ${activeCategory === category.id
                  ? `${category.color} text-white shadow-md`
                  : "bg-secondary/50 text-foreground hover:bg-secondary/70"
                }`}
            >
              {category.label}
            </motion.button>
          ))}
        </div>

        {activeCategory === "all" ? (
          <InfiniteScrollSkills skills={skills} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="w-full bg-card p-6 rounded-2xl border border-border/30 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg group"
                >
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-full bg-card border-2 border-primary/50 flex items-center justify-center">
                      <img
                        src={iconImages[skill.icon]}
                        alt={skill.name}
                        className="w-8 h-8 object-contain"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold text-lg sm:text-xl group-hover:text-primary transition-colors">
                          {skill.name}
                        </h3>
                        <span className="text-base sm:text-sm font-medium px-2 py-1 rounded-full">
                          {skill.level}%
                        </span>
                      </div>

                      <SkillBar level={skill.level} />

                      <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                        <span>Basic</span>
                        <span>Advanced</span>
                        <span>Expert</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};
