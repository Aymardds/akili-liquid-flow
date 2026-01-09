import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Globe2, ShieldCheck } from "lucide-react";

const TrustSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-8" ref={ref}>
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Pourquoi faire confiance à Akili
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0, duration: 0.6 }}
                        className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/10 hover:bg-secondary/20 transition-colors"
                    >
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                            <Users className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg mb-3">Une communauté large</h3>
                        <p className="text-muted-foreground">
                            Utilisé par des journalistes, enseignants et citoyens engagés pour la vérité.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/10 hover:bg-secondary/20 transition-colors"
                    >
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                            <Globe2 className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg mb-3">Accessible à tous</h3>
                        <p className="text-muted-foreground">
                            Disponible en français, anglais et langues locales pour toucher le plus grand nombre.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/10 hover:bg-secondary/20 transition-colors"
                    >
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                            <ShieldCheck className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg mb-3">100% Sûr</h3>
                        <p className="text-muted-foreground">
                            Gratuit, sans publicité et 100 % sécurisé. Vos données restent confidentielles.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
