import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Blog = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Placeholder blog posts - would be fetched from CMS/API
    const blogPosts = [
        {
            id: 1,
            title: "Comment identifier les fake news sur les réseaux sociaux",
            excerpt: "Découvrez les techniques pour repérer rapidement les fausses informations qui circulent sur Facebook, Twitter et Instagram.",
            date: "15 Décembre 2024",
            author: "Équipe Akili",
            category: "Fact-checking",
            image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop"
        },
        {
            id: 2,
            title: "L'intelligence artificielle au service du journalisme",
            excerpt: "Comment Akili utilise l'IA pour combattre la désinformation tout en préservant la rigueur journalistique.",
            date: "10 Décembre 2024",
            author: "Équipe Akili",
            category: "Technologie",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop"
        },
        {
            id: 3,
            title: "Les infox en Afrique francophone : état des lieux",
            excerpt: "Une analyse approfondie de la désinformation et de son impact sur les communautés africaines.",
            date: "5 Décembre 2024",
            author: "Équipe Akili",
            category: "Analyse",
            image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=500&fit=crop"
        },
        {
            id: 4,
            title: "Podcast : Vérifier l'info en langues locales",
            excerpt: "Notre nouvelle série de podcasts pour rendre le fact-checking accessible à tous, même aux non-lecteurs.",
            date: "1 Décembre 2024",
            author: "Équipe Akili",
            category: "Podcast",
            image: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800&h=500&fit=crop"
        },
        {
            id: 5,
            title: "Guide : Utiliser Akili efficacement",
            excerpt: "Toutes les astuces pour tirer le meilleur parti de l'application Akili et vérifier vos informations rapidement.",
            date: "28 Novembre 2024",
            author: "Équipe Akili",
            category: "Guide",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop"
        },
        {
            id: 6,
            title: "Partenariat avec l'OIF pour la francophonie",
            excerpt: "Akili s'associe à l'Organisation internationale de la Francophonie pour étendre son impact.",
            date: "20 Novembre 2024",
            author: "Équipe Akili",
            category: "Actualités",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=500&fit=crop"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Blog | Akili</title>
                <meta
                    name="description"
                    content="Découvrez nos articles, podcasts et analyses sur le fact-checking, la désinformation et l'utilisation de l'intelligence artificielle."
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
                                Blog
                            </span>
                            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                                Actualités et <span className="gradient-text">Ressources</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Découvrez nos contenus de fact-checking : podcasts en langues locales, analyses et bonnes pratiques.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="py-16 lg:py-24" ref={ref}>
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                    className="glass-card rounded-3xl overflow-hidden group cursor-pointer"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {post.date}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <User className="w-4 h-4" />
                                                {post.author}
                                            </span>
                                        </div>

                                        <h3 className="font-display text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>

                                        <p className="text-muted-foreground mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                                            Lire la suite
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>

                        {/* Load More */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="text-center mt-12"
                        >
                            <Button variant="outline" size="lg">
                                Charger plus d'articles
                            </Button>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default Blog;
