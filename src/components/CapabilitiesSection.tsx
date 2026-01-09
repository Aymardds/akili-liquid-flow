import { Video, Image, MessageCircle, BarChart, Quote } from "lucide-react";

const capabilities = [
    { icon: Video, label: "Vidéos virales" },
    { icon: Image, label: "Images sorties de leur contexte" },
    { icon: MessageCircle, label: "Rumeurs WhatsApp" },
    { icon: BarChart, label: "Chiffres et graphiques trompeurs" },
    { icon: Quote, label: "Citations attribuées à tort" },
];

const CapabilitiesSection = () => {
    return (
        <section className="py-20 bg-muted/30 border-y border-border/50">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                        Ce qu’Akili peut vérifier
                    </h2>
                </div>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {capabilities.map((cap, index) => (
                        <div key={index} className="flex items-center gap-3 bg-background px-6 py-4 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                            <cap.icon className="w-5 h-5 text-primary" />
                            <span className="font-medium text-foreground">{cap.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CapabilitiesSection;
