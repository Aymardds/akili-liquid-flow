import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import phoneMockup1 from "@/assets/phone-mockup-1.png";
import phoneMockup2 from "@/assets/phone-mockup-2.png";
import phoneMockup3 from "@/assets/phone-mockup-3.png";

const screenshots = [
  {
    image: phoneMockup1,
    title: "Vérification facile",
    description: "Soumettez n'importe quelle information pour vérification",
  },
  {
    image: phoneMockup2,
    title: "Résultats détaillés",
    description: "Obtenez des analyses complètes avec sources",
  },
  {
    image: phoneMockup3,
    title: "Communauté active",
    description: "Discutez et partagez avec d'autres utilisateurs",
  },
];

const ScreenshotsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    );
  };

  return (
    <section
      id="screenshots"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background - subtle */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            L'application
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Découvrez <span className="gradient-text">Akili</span> en action
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une interface élégante et intuitive conçue pour une expérience
            fluide
          </p>
        </motion.div>

        {/* Screenshots Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground hover:bg-card transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 w-12 h-12 rounded-full glass-card flex items-center justify-center text-foreground hover:bg-card transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div className="flex items-center justify-center gap-4 lg:gap-8 overflow-hidden py-8">
            {screenshots.map((screenshot, index) => {
              const isActive = index === activeIndex;
              const isPrev =
                index ===
                (activeIndex - 1 + screenshots.length) % screenshots.length;
              const isNext = index === (activeIndex + 1) % screenshots.length;

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    scale: isActive ? 1 : 0.75,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.5 : 0,
                    x: isActive
                      ? 0
                      : isPrev
                      ? -100
                      : isNext
                      ? 100
                      : 0,
                    zIndex: isActive ? 10 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="flex-shrink-0 cursor-pointer"
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="relative group">
                    {/* Glow effect */}
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-3xl -z-10"
                      />
                    )}

                    {/* Phone */}
                    <motion.img
                      src={screenshot.image}
                      alt={screenshot.title}
                      className="w-52 md:w-64 lg:w-72 drop-shadow-2xl"
                      whileHover={isActive ? { scale: 1.02 } : {}}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Caption */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mt-8"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              {screenshots[activeIndex].title}
            </h3>
            <p className="text-muted-foreground">
              {screenshots[activeIndex].description}
            </p>
          </motion.div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
