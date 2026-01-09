import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import partnerFrancophonie from "@/assets/partner-francophonie.png";
import partnerGoogleNews from "@/assets/partner-google-news.png";
import partnerJournalismAi from "@/assets/partner-journalism-ai.png";
import partnerSetanal from "@/assets/partner-setanal.png";
import partnerLse from "@/assets/partner-lse.png";
import partnerTamaMedia from "@/assets/partner-tama-media.png";

const testimonials = [
  {
    name: "Aminata Diallo",
    role: "Journaliste, Dakar",
    content:
      "Un outil indispensable pour les professionnels des médias.",
    rating: 5,
  },
  {
    name: "Kouassi Emmanuel",
    role: "Enseignant, Abidjan",
    content:
      "J’utilise Akili avec mes étudiants pour apprendre à distinguer le vrai du faux.",
    rating: 5,
  },
  {
    name: "Fatou Ndiaye",
    role: "Activiste, Bamako",
    content:
      "Un véritable outil de protection citoyenne.",
    rating: 5,
  },
];

const partners = [
  { name: "Organisation Internationale de la Francophonie", logo: partnerFrancophonie },
  { name: "Google News Initiative", logo: partnerGoogleNews },
  { name: "JournalismAi", logo: partnerJournalismAi },
  { name: "Sètanal Media", logo: partnerSetanal },
  { name: "Tama Media", logo: partnerTamaMedia },
  { name: "The London School of Economics and Political Science", logo: partnerLse },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-sky-deep/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
            Témoignages
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ils utilisent <span className="gradient-text">Akili</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card p-8 rounded-3xl relative"
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-8">
            Nos partenaires et mentions médias
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 md:h-14 lg:h-16 w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
