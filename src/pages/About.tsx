import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Target, Users, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const objectives = [
        {
            icon: Target,
            title: "Faciliter",
            description: "Un accès rapide aux contenus de fact-checking à tous et à toutes et même à ceux et celles qui ne savent ni lire ni écrire, tout en rendant la vérification des faits ludique et \"fun\" grâce au chatbot Akili."
        },
        {
            icon: Lightbulb,
            title: "Innover",
            description: "Dans la lutte contre la désinformation en utilisant l'intelligence artificielle. L'IA ne remplace pas le travail journalistique mais nous en faisons un allié dans la vérification des faits."
        },
        {
            icon: Users,
            title: "Sensibiliser",
            description: "Les communautés locales en Afrique francophone aux dangers de la désinformation et renforcer leur capacité à identifier et à contrer les fausses informations."
        }
    ];

    return (
        <>
            <Helmet>
                <title>À propos de Akili | Qui sommes-nous ?</title>
                <meta
                    name="description"
                    content="Akili est la première application mobile dédiée à la lutte contre les infox en Afrique francophone. Découvrez notre mission et nos objectifs."
                />
            </Helmet>

            <div className="min-h-screen bg-background">
                <Navbar />

                {/* Hero Section */}
                <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
                    </div>

                    <div className="container mx-auto px-4 lg:px-8 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                                À propos
                            </span>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                                Qui sommes-nous ?
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Akili est un site internet et une application mobile disponible sur iOS et Android qui aide à lutter contre la désinformation notamment en Afrique francophone.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Main Content */}
                <section className="py-16 lg:py-24" ref={ref}>
                    <div className="container mx-auto px-4 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="max-w-4xl mx-auto"
                        >
                            <div className="glass-card p-8 lg:p-12 rounded-3xl mb-12">
                                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                                    Notre Mission
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        Akili est doté d'un chatbot qui permet aux utilisateurs de vérifier en quelques clics une information et d'avoir une réponse simultanée, grâce à l'utilisation d'une intelligence artificielle. Mais rassurez-vous, Akili n'utilise pas juste de l'intelligence artificielle pour générer des résultats aléatoires, nous allions rigueur journalistique et l'utilisation de la technologie IA.
                                    </p>
                                    <p>
                                        Si le chatbot n'est pas en mesure de répondre à votre question, il vous mettra en relation avec un vrai journaliste.
                                    </p>
                                    <p className="font-semibold text-foreground">
                                        Akili est la première application mobile dédiée à la lutte contre les infox en Afrique francophone.
                                    </p>
                                </div>
                            </div>

                            {/* Partners Section */}
                            <div className="glass-card p-8 lg:p-12 rounded-3xl mb-16">
                                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                                    Nos Partenaires
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        L'application est réalisée par <strong>Tama Média</strong>, <strong>La Voix de Mopti</strong> et <strong>Sétanal Média</strong>, avec le soutien de <strong>l'Organisation internationale de la Francophonie (OIF)</strong> et de <strong>JournalismAI</strong>, un think-tank dédié au journalisme à la <strong>London School of Economics and Political Science</strong>, et soutenu par <strong>Google News Initiative</strong>.
                                    </p>
                                    <p>
                                        Le développement technique de Akili est réalisé par <strong>InexiumusGroup</strong>, une agence créative et technologique basée à Abidjan, en Côte d'Ivoire.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Objectives Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="max-w-6xl mx-auto"
                        >
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
                                Nos Objectifs
                            </h2>

                            <div className="grid md:grid-cols-3 gap-8">
                                {objectives.map((objective, index) => (
                                    <motion.div
                                        key={objective.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                                        whileHover={{ y: -8 }}
                                        className="glass-card p-8 rounded-3xl"
                                    >
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                                            <objective.icon className="w-7 h-7 text-primary" />
                                        </div>
                                        <h3 className="font-display text-xl font-bold text-foreground mb-4">
                                            {objective.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {objective.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

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

export default About;
