import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Database, Users } from "lucide-react";

const steps = [
    {
        icon: Sparkles,
        title: "IA",
        description:
            "Akili analyse automatiquement l’information que vous soumettez afin d’en identifier les éléments clés.",
    },
    {
        icon: Database,
        title: "Sources fiables",
        description:
            "Les résultats sont croisés avec une base de sources fiables constituée par nos équipes, issue de médias vérifiés, d’organisations reconnues et de sources officielles.",
    },
    {
        icon: Users,
        title: "Équipe éditoriale",
        description:
            "Lorsque nécessaire, des journalistes interviennent pour approfondir, vérifier et contextualiser l’information.",
    },
];

const HowItWorksSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="how-it-works" className="py-24 bg-background relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-8" ref={ref}>
                <div className="text-center mb-20">
                    <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                        Comment fonctionne Akili
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Un processus de vérification rigoureux combinant technologie de pointe et expertise humaine.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto relative">
                    {/* Progress Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -translate-x-1/2" />

                    <div className="space-y-20">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: index * 0.2, duration: 0.8 }}
                                className={`relative flex items-center gap-12 md:gap-0 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                                    }`}
                            >
                                {/* Content Wrapper */}
                                <div className="hidden md:block md:w-1/2" />

                                {/* Icon Bubble (Center) */}
                                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex-shrink-0 w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shadow-lg backdrop-blur-sm z-10 transition-transform hover:scale-110 duration-300">
                                    <step.icon className="w-8 h-8 text-primary" />
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 md:w-1/2 pl-20 md:pl-0">
                                    <div className={`p-8 rounded-3xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors duration-300 ${index % 2 === 0 ? "md:mr-16 md:text-right" : "md:ml-16 md:text-left"
                                        }`}>
                                        <span className="text-primary/60 font-mono text-sm mb-2 block">Étape 0{index + 1}</span>
                                        <h3 className="font-bold text-2xl text-foreground mb-3">{step.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
