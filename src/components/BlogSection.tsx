import { ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import { useBlogPosts } from "@/hooks/useBlogPosts";

const BlogSection = () => {
    const { posts, loading, error } = useBlogPosts();

    // Take only the first 4 articles for the homepage
    const articles = posts.slice(0, 4).map(post => ({
        category: post.category,
        title: post.title,
        excerpt: post.excerpt,
        image: post.image,
        link: post.link,
    }));

    return (
        <section id="blog-section" className="py-24 bg-background">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Explorer nos articles
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Analyses, décryptages et vérifications.
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <a href="/blog">
                            Voir tous les articles
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </a>
                    </Button>
                </div>

                {/* Loading State */}
                {loading && (
                    <div className="flex justify-center items-center py-20">
                        <Loader2 className="w-8 h-8 animate-spin text-primary" />
                        <span className="ml-3 text-muted-foreground">Chargement des articles...</span>
                    </div>
                )}

                {/* Error State - Show message if scraping failed */}
                {error && !loading && (
                    <div className="mb-4 p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                        <p className="text-sm text-amber-800 dark:text-amber-200">
                            {error}
                        </p>
                    </div>
                )}

                {/* Articles Display */}
                {!loading && (
                    <>
                        {/* Mobile Carousel */}
                        <div className="md:hidden">
                            <Carousel opts={{ align: "start" }} className="w-full">
                                <CarouselContent>
                                    {articles.map((article, index) => (
                                        <CarouselItem key={index}>
                                            <a href={article.link} className="group block bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300">
                                                <div className="aspect-video overflow-hidden">
                                                    <img
                                                        src={article.image}
                                                        alt={article.title}
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                                <div className="p-6">
                                                    <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 block">
                                                        {article.category}
                                                    </span>
                                                    <h3 className="font-bold text-lg text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                                        {article.title}
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground line-clamp-3 font-normal">
                                                        {article.excerpt}
                                                    </p>
                                                </div>
                                            </a>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <div className="flex justify-center gap-4 mt-8">
                                    <CarouselPrevious className="relative inset-0 translate-y-0 h-10 w-10 border-primary/20 text-primary hover:bg-primary/10 hover:text-primary" />
                                    <CarouselNext className="relative inset-0 translate-y-0 h-10 w-10 border-primary/20 text-primary hover:bg-primary/10 hover:text-primary" />
                                </div>
                            </Carousel>
                        </div>

                        {/* Desktop Grid */}
                        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {articles.map((article, index) => (
                                <a key={index} href={article.link} className="group block bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300">
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-2 block">
                                            {article.category}
                                        </span>
                                        <h3 className="font-bold text-lg text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground line-clamp-3">
                                            {article.excerpt}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
};

export default BlogSection;

