import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Calendar, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useBlogPosts } from "@/hooks/useBlogPosts";

const Blog = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { posts, loading, error } = useBlogPosts();

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
                                Découvrez nos contenus de fact-checking en provenance de Tama Media.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Blog Grid */}
                <section className="py-16 lg:py-24" ref={ref}>
                    <div className="container mx-auto px-4 lg:px-8">

                        {loading ? (
                            <div className="flex flex-col items-center justify-center py-20">
                                <Loader2 className="w-10 h-10 text-primary animate-spin mb-4" />
                                <p className="text-muted-foreground">Chargement des articles...</p>
                            </div>
                        ) : error ? (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <AlertCircle className="w-10 h-10 text-destructive mb-4" />
                                <p className="text-lg font-medium text-foreground mb-2">Oups !</p>
                                <p className="text-muted-foreground">{error}</p>
                            </div>
                        ) : (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {posts.map((post, index) => (
                                    <motion.article
                                        key={post.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        whileHover={{ y: -8 }}
                                        className="glass-card rounded-3xl overflow-hidden group cursor-pointer flex flex-col"
                                        onClick={() => window.open(post.link, '_blank')}
                                    >
                                        <div className="relative h-48 overflow-hidden shrink-0">
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

                                        <div className="p-6 flex flex-col flex-grow">
                                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-4 h-4" />
                                                    {post.date}
                                                </span>
                                            </div>

                                            <h3 className="font-display text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                                {post.title}
                                            </h3>

                                            <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all mt-auto">
                                                Lire la suite
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </motion.article>
                                ))}
                            </div>
                        )}

                        {/* Load More (Optional, hidden if loading/error or empty) */}
                        {!loading && !error && posts.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                className="text-center mt-12"
                            >
                                <Button variant="outline" size="lg" asChild>
                                    <a href="https://tamamedia.com/category/les-verificateurs/" target="_blank" rel="noopener noreferrer">
                                        Voir plus sur Tama Media
                                    </a>
                                </Button>
                            </motion.div>
                        )}
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
};

export default Blog;
