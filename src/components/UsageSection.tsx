import { Monitor, Smartphone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
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
                                        <p className="text-muted-foreground mb-8 flex-grow">
                                            {card.description}
                                        </p>
                                        <Button
                                            variant={card.isWhatsApp ? "default" : "outline"}
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
                    </Carousel>
                </div>

                {/* Desktop Grid */}
                <div className="hidden md:grid md:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div key={index} className={`flex flex-col h-full ${card.bgClass} rounded-3xl p-6 border border-border shadow-sm relative overflow-hidden`}>
                            {card.isWhatsApp && (
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                            )}
                            {card.icon === Smartphone && (
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                            )}
                            <div className="flex items-center gap-3 mb-4">
                                <card.icon className={`w-6 h-6 ${card.iconClass}`} />
                                <h3 className="font-bold text-xl text-foreground">{card.title}</h3>
                            </div>
                            <p className="text-muted-foreground mb-8 flex-grow">
                                {card.description}
                            </p>
                            <Button
                                variant={card.isWhatsApp ? "default" : (card.icon === Smartphone ? "default" : "outline")}
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
