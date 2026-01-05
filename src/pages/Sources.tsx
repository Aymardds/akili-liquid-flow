import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Database, Brain, Bell, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Sources = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const steps = [
        {
            number: "1",
            icon: Database,
            title: "Base de données fiable",
            description: "Akili est doté d'une base de données dans laquelle il puise son savoir. Cette base de données est constituée de dizaines de sites médias fiables que nous avons sélectionnés."
        },
        {
            number: "2",
            icon: Brain,
            title: "Intelligence artificielle",
            description: "Grâce à son intelligence artificielle, quand un utilisateur pose une question, Akili répond instantanément en allant chercher la réponse dans sa base de données. Mais quand la question nécessite une réponse plus sophistiquée, Akili envoie automatiquement une alerte aux journalistes fact-checkeurs."
        },
        {
            number: "3",
            icon: Bell,
            title: "Notification et partage",
            description: "Une fois que le résultat du fact-checking est prêt, l'utilisateur reçoit une notification sur l'application ou sur WhatsApp pour le prévenir que le résultat est disponible, l'utilisateur a alors la possibilité de partager ce résultat."
        },
        {
            number: "4",
            icon: BookOpen,
            title: "Contenus enrichis",
            description: "Sur le blog de l'application, les utilisateurs peuvent également trouver tous nos contenus de fact-checking : podcasts en langues locales, émission de télé consacrée à la vérification des déclarations des dirigeants politiques, notes d'analyse et bonnes pratiques."
        }
    ];

    return (
        <>
            <Helmet>
                <title>Nos sources | Akili</title>
                <meta
                    name="description"
                    content="Découvrez comment Akili vérifie les informations grâce à sa base de données de sources fiables et son intelligence artificielle."
                />
            </Helmet>

            <div className="min-h-screen bg-background">
                <Navbar />

                {/* Hero Section */}
                <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
                    </div>

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                                Nos sources
                            </span>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                                Comment fonctionne <span className="gradient-text">Akili</span> ?
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Découvrez notre processus de vérification des informations et les sources fiables sur lesquelles nous nous appuyons.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Steps Section */}
                <section className="py-16 lg:py-24" ref={ref}>
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="max-w-5xl mx-auto space-y-8">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.8, delay: index * 0.1 }}
                                    className="glass-card p-8 lg:p-12 rounded-3xl"
                                >
                                    <div className="flex flex-col md:flex-row gap-6 items-start">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground font-display font-bold text-2xl">
                                                {step.number}
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                                    <step.icon className="w-6 h-6 text-primary" />
                                                </div>
                                                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                                                    {step.title}
                                                </h3>
                                            </div>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-center mt-16"
                        >
                            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                                Téléchargez AKILI dès maintenant
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button variant="hero" size="lg" asChild>
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.litekev.akili&hl=fr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Google Play
                                    </a>
                                </Button>
                                <Button variant="outline" size="lg" asChild>
                                    <a
                                        href="https://apps.apple.com/us/app/akili-ai/id6738965572"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        App Store
                                    </a>
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default Sources;
