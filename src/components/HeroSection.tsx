import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import phoneMockup1 from "@/assets/phone-mockup-1.png";
import akiliLogo from "@/assets/akili-logo.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-sky-deep/50 rounded-full blur-3xl animate-blob-delayed" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-blob" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-card/70 backdrop-blur-lg rounded-full border border-border/50 mb-6"
            >
              <img src={akiliLogo} alt="" className="w-6 h-6" />
              <span className="text-sm font-medium text-muted-foreground">
                La vérité au bout des doigts
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight mb-6"
            >
              Vérifie avant de{" "}
              <span className="relative">
                <span className="gradient-text">partager</span>
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Avant de relayer une information, Akili vous aide
              à vérifier ce qui est vrai, trompeur ou faux, en un seul clic.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start"
            >
              <Button variant="hero" size="xl" asChild>
                <a href="#download">
                  <Download className="w-5 h-5" />
                  Télécharger l’application
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="https://ai.akilicheck.com" target="_blank" rel="noopener noreferrer">
                  Vérifier une information maintenant
                </a>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="mt-6 flex justify-center lg:justify-start"
            >
              <Link
                 to="/europe"
                 className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 hover:bg-white backdrop-blur-md rounded-full border border-border/50 text-foreground font-semibold shadow-sm transition-all hover:-translate-y-1 hover:shadow-md group"
              >
                Akili Check
                <span className="text-[11px] font-bold text-white bg-[#E8590C] px-2 py-0.5 rounded-full tracking-wider group-hover:scale-105 transition-transform">
                  EUROPE
                </span>
                <span className="text-muted-foreground ml-1">→</span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex items-center justify-center lg:justify-start gap-8 mt-12"
            >
              {[
                { value: "", label: "" },
                { value: "", label: "" },
                { value: "", label: "" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow effect behind phone */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            </div>

            {/* Phone */}
            <motion.div
              className="relative z-10 floating"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <img
                  src={phoneMockup1}
                  alt="Akili App"
                  className="w-64 md:w-80 lg:w-96 drop-shadow-[0_20px_60px_rgba(0,0,0,0.3)] rounded-[2.5rem]"
                />
                {/* Reflection effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent rounded-[2.5rem] pointer-events-none" />
              </div>

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                className="absolute -left-8 top-1/4 glass-card px-4 py-2 rounded-2xl"
              >
                <span className="text-sm font-medium">✓ Vérifié</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, type: "spring" }}
                className="absolute -right-4 bottom-1/3 glass-card px-4 py-2 rounded-2xl"
              >
                <span className="text-sm font-medium">🛡️ Fiable</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Découvrir</span>
            <ChevronDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
