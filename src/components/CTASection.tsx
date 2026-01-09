import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Apple, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import akiliLogo from "@/assets/akili-logo.png";

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="download" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-gold/20 rounded-full blur-3xl animate-blob-delayed" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="mb-8"
          >
            <motion.img
              src={akiliLogo}
              alt="Akili"
              className="w-24 h-24 mx-auto"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-3xl md:text-4xl lg:text-6xl font-bold text-primary-foreground mb-6"
          >
            Téléchargez Akili et commencez à vérifier l’information dès maintenant.
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          >
            <Button
              variant="cta"
              size="xl"
              className="w-full sm:w-auto"
            >
              <Apple className="w-6 h-6" />
              <div className="text-left">
                <span className="text-xs block opacity-70">Télécharger sur</span>
                <span className="font-bold">App Store</span>
              </div>
            </Button>
            <Button
              variant="glass"
              size="xl"
              className="w-full sm:w-auto"
            >
              <PlayCircle className="w-6 h-6" />
              <div className="text-left">
                <span className="text-xs block opacity-70">Disponible sur</span>
                <span className="font-bold">Google Play</span>
              </div>
            </Button>
          </motion.div>

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 flex items-center justify-center gap-6 text-primary-foreground/50"
          >
            <span className="flex items-center gap-2">
              Gratuit
            </span>
            <span className="w-1 h-1 rounded-full bg-current" />
            <span>Sans publicité</span>
            <span className="w-1 h-1 rounded-full bg-current" />
            <span>100% sécurisé</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
