import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import blogElectionImage from "@/assets/blog-election-fake-news.png";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

const articles = [
    {
        category: "Vérification",
        title: "Cette vidéo attribuée à un ministre est-elle authentique ?",
        excerpt: "Une vidéo circulant sur les réseaux sociaux prétend montrer un ministre en situation délicate. Notre analyse.",
        image: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
        category: "Faux",
        title: "Non, cette image ne montre pas des violences récentes à Bamako",
        excerpt: "L'image partagée massivement date en réalité de 2018 et a été prise dans un autre pays.",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    },
    {
        category: "Analyse",
        title: "Élections en Afrique de l’Ouest : comment circulent les fausses informations",
        excerpt: "Décryptage des mécanismes de désinformation observés lors des dernières campagnes électorales.",
        image: blogElectionImage,
    },
    {
        category: "Économie",
        title: "Dette cachée du Sénégal : ce que disent vraiment les chiffres",
        excerpt: "Analyse des rapports officiels pour démêler le vrai du faux sur la situation économique.",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    }
];

const BlogSection = () => {
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

                {/* Mobile Carousel */}
                <div className="md:hidden">
                    <Carousel opts={{ align: "start" }} className="w-full">
                        <CarouselContent>
                            {articles.map((article, index) => (
                                <CarouselItem key={index}>
                                    <a href="/blog" className="group block bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300">
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
                    </Carousel>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {articles.map((article, index) => (
                        <a key={index} href="/blog" className="group block bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300">
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
            </div>
        </section>
    );
};

export default BlogSection;
