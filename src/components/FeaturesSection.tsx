import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, Users, MessageCircle, Search } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Vérification instantanée",
    description:
      "Vérifiez n'importe quelle information en quelques secondes grâce à notre IA avancée.",
  },
  {
    icon: Shield,
    title: "Sources fiables",
    description:
      "Accédez à des sources vérifiées et des analyses approfondies pour chaque vérification.",
  },
  {
    icon: MessageCircle,
    title: "Assistant IA",
    description:
      "Posez vos questions directement à notre bot intelligent pour des réponses personnalisées.",
  },
  {
    icon: Users,
    title: "Communauté engagée",
    description:
      "Rejoignez une communauté active qui lutte ensemble contre la désinformation.",
  },
  {
    icon: Zap,
    title: "Alertes en temps réel",
    description:
      "Recevez des notifications sur les fake news qui circulent dans votre région.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-sky-deep/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Fonctionnalités
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Plus rapide. Plus fluide.{" "}
            <span className="gradient-text">Plus intuitif.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un design qui vous comprend et des outils puissants pour combattre
            la désinformation au quotidien.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative"
            >
              <div className="glass-card p-8 rounded-3xl h-full transition-all duration-500 hover:shadow-glow relative overflow-hidden">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300"
                >
                  <feature.icon className="w-7 h-7 text-primary" />
                </motion.div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-gold rounded-b-3xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
