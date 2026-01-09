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
      className="py-32 lg:py-40 relative overflow-hidden bg-gradient-to-br from-background via-card/30 to-background"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/3 w-[30rem] h-[30rem] bg-gold/15 rounded-full blur-3xl"
        />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-5 py-2.5 bg-gradient-to-r from-primary/20 to-gold/20 text-primary rounded-full text-sm font-semibold mb-6 border border-primary/20"
          >
            L'application
          </motion.span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Akili en <span className="gradient-text">action</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Une interface simple et intuitive conçue pour vérifier l’information en quelques secondes.
          </p>
        </motion.div>

        {/* Screenshots Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows - Enhanced */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-20 w-14 h-14 rounded-full bg-card/80 backdrop-blur-xl border border-border/50 flex items-center justify-center text-foreground hover:bg-card hover:border-primary/50 transition-all shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1, x: 4 }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-20 w-14 h-14 rounded-full bg-card/80 backdrop-blur-xl border border-border/50 flex items-center justify-center text-foreground hover:bg-card hover:border-primary/50 transition-all shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Carousel Container - Enhanced */}
          <div className="relative flex items-center justify-center overflow-visible py-16 min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
            {screenshots.map((screenshot, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.div
                  key={index}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0.85,
                    zIndex: isActive ? 10 : 0,
                    rotateY: isActive ? 0 : 20,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    opacity: { duration: 0.5 },
                  }}
                  className="absolute"
                  style={{ perspective: 1000 }}
                >
                  <div className="relative group">
                    {/* Enhanced Multi-layer Glow */}
                    {isActive && (
                      <>
                        <motion.div
                          animate={{
                            opacity: [0.3, 0.5, 0.3],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          className="absolute inset-0 bg-gradient-to-br from-primary/40 via-primary/30 to-gold/40 rounded-[3.5rem] blur-[60px] -z-10"
                        />
                        <motion.div
                          animate={{
                            opacity: [0.2, 0.35, 0.2],
                            scale: [1.1, 1.2, 1.1],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5,
                          }}
                          className="absolute inset-0 bg-primary/20 rounded-[4rem] blur-[80px] -z-20"
                        />
                      </>
                    )}

                    {/* Phone with Enhanced Shadow */}
                    <motion.div
                      whileHover={{ scale: 1.03, y: -8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative"
                    >
                      <motion.img
                        src={screenshot.image}
                        alt={screenshot.title}
                        className="w-64 md:w-80 lg:w-96 drop-shadow-[0_20px_60px_rgba(0,0,0,0.3)] rounded-[2.5rem]"
                        initial={false}
                        animate={isActive ? { y: [0, -5, 0] } : {}}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      {/* Reflection effect */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent rounded-[2.5rem] pointer-events-none" />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Caption - Enhanced */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mt-8"
          >
            <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 tracking-tight">
              {screenshots[activeIndex].title}
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
              {screenshots[activeIndex].description}
            </p>
          </motion.div>

          {/* Dots - Enhanced */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {screenshots.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`h-3 rounded-full transition-all duration-500 ${index === activeIndex
                  ? "bg-gradient-to-r from-primary to-gold w-12 shadow-lg shadow-primary/50"
                  : "bg-border/60 w-3 hover:bg-muted-foreground/60"
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
