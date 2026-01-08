import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Calendar, User, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    image: string;
    link: string;
}

const Blog = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Fetch the HTML page via corsproxy.io
                // This is often more reliable than allorigins for simple HTML fetching
                const response = await fetch(
                    `https://corsproxy.io/?${encodeURIComponent(
                        "https://tamamedia.com/verificateurs"
                    )}`
                );

                if (!response.ok) throw new Error("Erreur réseau");

                // corsproxy returns the raw content directly
                const htmlString = await response.text();

                if (!htmlString) throw new Error("Aucun contenu récupéré");

                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlString, "text/html");

                // Heuristic: Try to find article containers.
                // 1. Look for <article> tags first
                let items = Array.from(doc.querySelectorAll("article"));

                // 2. If no articles, look for divs with likely class names or structure
                if (items.length === 0) {
                    // Fallback: look for divs that contain an H2 or H3 and an IMG, closely related
                    const candidates = Array.from(doc.querySelectorAll("div"));
                    items = candidates.filter(div => {
                        const hasTitle = div.querySelector("h2, h3, h4");
                        const hasImg = div.querySelector("img");
                        const hasLink = div.querySelector("a");
                        // Simple filter to avoid header/footer noise, assumed articles have some text length
                        return hasTitle && hasImg && hasLink && (div.textContent?.length || 0) > 50;
                    }).slice(0, 20); // Limit to potential real articles
                }

                // Deduplicate and clean up
                const articles: BlogPost[] = [];
                const seenTitles = new Set();

                items.forEach((item, index) => {
                    // Title
                    const titleElement = item.querySelector("h1, h2, h3, h4, .title");
                    const title = titleElement?.textContent?.trim() || "";
                    if (!title || seenTitles.has(title)) return;
                    seenTitles.add(title);

                    // Link
                    let link = "#";
                    // Try to find a link covering the card or the title link
                    const anchor = item.querySelector("a");
                    if (anchor && anchor.href) {
                        // Resolve relative absolute URLs if proxy mess up usually keeps them relative
                        // But since we are parsing string, the href might be relative string
                        const href = anchor.getAttribute("href");
                        if (href) {
                            if (href.startsWith("http")) link = href;
                            else link = `https://tamamedia.com${href.startsWith("/") ? "" : "/"}${href}`;
                        }
                    }

                    // Image
                    const img = item.querySelector("img");
                    let image = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop";
                    if (img) {
                        const src = img.getAttribute("src") || img.getAttribute("data-src");
                        if (src) {
                            if (src.startsWith("http")) image = src;
                            else image = `https://tamamedia.com${src.startsWith("/") ? "" : "/"}${src}`;
                        }
                    }

                    // Excerpt
                    const paragraphs = item.querySelectorAll("p");
                    let excerpt = "";
                    for (const p of paragraphs) {
                        const text = p.textContent?.trim();
                        if (text && text.length > 20) {
                            excerpt = text.slice(0, 160) + "...";
                            break;
                        }
                    }
                    if (!excerpt) {
                        // Fallback try to use any text content other than title
                        const allText = item.textContent?.trim() || "";
                        excerpt = allText.replace(title, "").slice(0, 100) + "...";
                    }

                    // Date & Category (often hard to scrape generically, set defaults)
                    const date = "Récent";
                    const category = "Fact-checking";
                    const author = "Les Vérificateurs";

                    articles.push({
                        id: `scraped-${index}`,
                        title,
                        excerpt,
                        date,
                        author,
                        category,
                        image,
                        link
                    });
                });

                if (articles.length === 0) throw new Error("Aucun article trouvé (structure inconnue)");

                setPosts(articles);
                setLoading(false);
            } catch (err) {
                console.error("Scraping Fetch Error:", err);

                // Fallback to hardcoded posts if scraping fails
                const fallbackPosts: BlogPost[] = [
                    {
                        id: "1",
                        title: "Comment identifier les fake news sur les réseaux sociaux",
                        excerpt: "Découvrez les techniques pour repérer rapidement les fausses informations qui circulent sur Facebook, Twitter et Instagram.",
                        date: "15 Décembre 2024",
                        author: "Équipe Akili",
                        category: "Fact-checking",
                        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop",
                        link: "#"
                    },
                    {
                        id: "2",
                        title: "L'intelligence artificielle au service du journalisme",
                        excerpt: "Comment Akili utilise l'IA pour combattre la désinformation tout en préservant la rigueur journalistique.",
                        date: "10 Décembre 2024",
                        author: "Équipe Akili",
                        category: "Technologie",
                        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
                        link: "#"
                    },
                    {
                        id: "3",
                        title: "Les infox en Afrique francophone : état des lieux",
                        excerpt: "Une analyse approfondie de la désinformation et de son impact sur les communautés africaines.",
                        date: "5 Décembre 2024",
                        author: "Équipe Akili",
                        category: "Analyse",
                        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=500&fit=crop",
                        link: "#"
                    }
                ];

                setPosts(fallbackPosts);
                // Don't show critical error, just log it. Maybe set a flag if we want to show a small toast.
                setError(null);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

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
