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
        <section id="how-it-works" className="py-24 bg-muted/30 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 md:px-8" ref={ref}>
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Comment fonctionne Akili
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Le processus de vérification
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-12 relative">
                    {/* Vertical Line */}
                    <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />
                    <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 md:hidden" />


                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            <div className="flex-1 md:w-1/2" />

                            {/* Icon Bubble */}
                            <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-background border-4 border-muted flex items-center justify-center shadow-sm">
                                <step.icon className="w-6 h-6 text-primary" />
                            </div>

                            {/* Content Card */}
                            <div className="flex-1 md:w-1/2 md:px-12 pt-2 md:pt-0">
                                <div className={`flex flex-col ${index % 2 === 0 ? "md:items-start md:text-left" : "md:items-end md:text-right"}`}>
                                    <h3 className="font-bold text-xl text-foreground mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksSection;
