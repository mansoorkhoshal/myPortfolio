"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

export const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const testimonials = [
    {
      id: 1,
      name: "Saad Ahmad",
      role: "CEO at KhoshalTech Company",
      content:
        "Working with Mansoor Ahmad was seamless from day one. Not only did they deliver a full-stack solution ahead of schedule, but they also communicated clearly throughout the project.",
      rating: 5,
      image: "/testimonials/saadahmad.png",
    },
    {
      id: 2,
      name: "Sajida Ahmad",
      role: "Senior UX Designer at DesignHub",
      content:
        "I've reviewed hundreds of portfolios, and his work is truly exceptional. The animations guide attention while maintaining performance.",
      rating: 5,
      image: "/testimonials/sajidaAhmad.png",
    },
    {
      id: 3,
      name: "Zakir Ullah",
      role: "Cyber Security Engineer at HaxorHouse",
      content:
        "From wireframes to deployment, Mansoor owned the entire stack with confidence and creativity. The final product is fast and reliable.",
      rating: 5,
      image: "/testimonials/zakirUllah.jpg",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
      setCurrentIndex(0);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-16 md:py-24 bg-gradient-to-b from-primary/5 via-background to-background overflow-x-hidden"
    >
      {/* FLOATING DOTS */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: Math.random() * 10 + 4,
              height: Math.random() * 10 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 30 - 15, 0],
              y: [0, Math.random() * 40 - 20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* CONTENT WRAPPER (FIXED WIDTH) */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-12 relative">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Star className="h-5 w-5 text-primary" />
            <span className="text-lg font-medium text-primary">
              Client Feedback
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            What People Say
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Real feedback from people I’ve worked with.
          </p>
        </motion.div>

        {/* TESTIMONIAL CARDS */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {visibleTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="w-full bg-background/80 border rounded-2xl p-6 sm:p-8 shadow-md flex flex-col"
              >
                <Quote className="h-8 w-8 text-primary/30 mb-4" />

                <p className="text-lg sm:text-xl text-muted-foreground mb-6 flex-1">
                  “{testimonial.content}”
                </p>

                <div>
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden border">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-base sm:text-lg font-semibold">
                        {testimonial.name}
                      </p>
                      <p className="text-sm sm:text-base text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* DESKTOP NAV */}
          {totalPages > 1 && (
            <>
              <button
                onClick={() =>
                  setCurrentIndex((p) => (p - 1 + totalPages) % totalPages)
                }
                className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 p-3 rounded-full bg-background border hover:scale-110 transition"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={() =>
                  setCurrentIndex((p) => (p + 1) % totalPages)
                }
                className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 p-3 rounded-full bg-background border hover:scale-110 transition"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}
        </div>

        {/* MOBILE NAV */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-4 mt-8 sm:hidden">
            <button
              onClick={() =>
                setCurrentIndex((p) => (p - 1 + totalPages) % totalPages)
              }
              className="p-2 border rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              onClick={() =>
                setCurrentIndex((p) => (p + 1) % totalPages)
              }
              className="p-2 border rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
