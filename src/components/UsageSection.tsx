import { Monitor, Smartphone, Share2, Facebook, Instagram, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";

const UsageSection = () => {
    const cards = [
        {
            icon: Monitor,
            title: "Akili sur le web",
            description: "Vérifiez une information directement via le chatbot en ligne.",
            buttonText: "Vérifier sur le web",
            buttonHref: "https://ai.akilicheck.com",
            bgClass: "bg-secondary/20",
            iconClass: "text-primary",
        },
        {
            icon: FaWhatsapp,
            title: "Akili sur WhatsApp",
            description: "Envoyez un message, un lien ou une image à notre bot pour vérification.",
            buttonText: "Vérifier sur WhatsApp",
            buttonHref: "https://wa.me/2250173820625",
            bgClass: "bg-white",
            iconClass: "text-[#25D366]",
            isWhatsApp: true,
        },
        {
            icon: Smartphone,
            title: "Application mobile Akili",
            description: "Vérifiez textes, images et vidéos depuis votre téléphone.",
            buttonText: "Télécharger l’application",
            buttonHref: "#download",
            bgClass: "bg-white",
            iconClass: "text-primary",
            isDownload: true,
        },
        {
            icon: Share2,
            title: "Akili sur les réseaux",
            description: "Suivez-nous et vérifiez les infos sur Facebook, Instagram et X.",
            buttonText: "Nos réseaux sociaux",
            buttonHref: "#footer",
            bgClass: "bg-secondary/20",
            iconClass: "text-primary",
            isSocial: true,
            socials: [
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61576184382062" },
                { icon: Instagram, href: "https://www.instagram.com/akilicheck?igsh=M2V0OXZ3eTFmaDcw" },
                { icon: Twitter, href: "https://x.com/akilicheck" }
            ]
        }
    ];

    return (
        <section id="usage" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="mb-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Comment utiliser Akili
                    </h2>
                </div>

                {/* Mobile Carousel */}
                <div className="md:hidden">
                    <Carousel opts={{ align: "start" }} className="w-full">
                        <CarouselContent>
                            {cards.map((card, index) => (
                                <CarouselItem key={index}>
                                    <div className={`flex flex-col h-full ${card.bgClass} rounded-3xl p-6 border border-border shadow-sm min-h-[250px]`}>
                                        <div className="flex items-center gap-3 mb-4">
                                            <card.icon className={`w-6 h-6 ${card.iconClass}`} />
                                            <h3 className="font-bold text-xl text-foreground">{card.title}</h3>
                                        </div>
                                        <p className="text-muted-foreground mb-6 flex-grow">
                                            {card.description}
                                        </p>

                                        {card.isSocial && (
                                            <div className="flex gap-4 mb-6">
                                                {card.socials?.map((social, i) => (
                                                    <a
                                                        key={i}
                                                        href={social.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                                                    >
                                                        <social.icon className="w-5 h-5" />
                                                    </a>
                                                ))}
                                            </div>
                                        )}

                                        <Button
                                            variant={card.isWhatsApp ? "default" : (card.isDownload || card.isSocial ? "default" : "outline")}
                                            className={`w-full justify-between group ${card.isWhatsApp ? "bg-[#25D366] hover:bg-[#20bd5a] text-white" : ""}`}
                                            asChild
                                        >
                                            <a
                                                href={card.buttonHref}
                                                target={card.buttonHref.startsWith('http') ? "_blank" : undefined}
                                                rel={card.buttonHref.startsWith('http') ? "noopener noreferrer" : undefined}
                                                onClick={(e) => {
                                                    if (card.isDownload) {
                                                        e.preventDefault();
                                                        document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                                                    } else if (card.isSocial) {
                                                        e.preventDefault();
                                                        document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' });
                                                    }
                                                }}
                                            >
                                                {card.buttonText}
                                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                                            </a>
                                        </Button>
                                    </div>
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
                    {cards.map((card, index) => (
                        <div key={index} className={`flex flex-col h-full ${card.bgClass} rounded-3xl p-6 border border-border shadow-sm relative overflow-hidden group/card`}>
                            {card.isWhatsApp && (
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                            )}
                            {(card.icon === Smartphone || card.isSocial) && (
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                            )}
                            <div className="flex items-center gap-3 mb-4">
                                <card.icon className={`w-6 h-6 ${card.iconClass}`} />
                                <h3 className="font-bold text-xl text-foreground">{card.title}</h3>
                            </div>
                            <p className="text-muted-foreground mb-6 flex-grow">
                                {card.description}
                            </p>

                            {card.isSocial && (
                                <div className="flex gap-4 mb-6">
                                    {card.socials?.map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-xl bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
                                        >
                                            <social.icon className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            )}

                            <Button
                                variant={card.isWhatsApp ? "default" : (card.isDownload || card.isSocial ? "default" : "outline")}
                                className={`w-full justify-between group ${card.isWhatsApp ? "bg-[#25D366] hover:bg-[#20bd5a] text-white" : ""}`}
                                asChild
                            >
                                <a
                                    href={card.buttonHref}
                                    target={card.buttonHref.startsWith('http') ? "_blank" : undefined}
                                    rel={card.buttonHref.startsWith('http') ? "noopener noreferrer" : undefined}
                                    onClick={(e) => {
                                        if (card.isDownload) {
                                            e.preventDefault();
                                            document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                                        } else if (card.isSocial) {
                                            e.preventDefault();
                                            document.querySelector('footer')?.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    {card.buttonText}
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </a>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UsageSection;
