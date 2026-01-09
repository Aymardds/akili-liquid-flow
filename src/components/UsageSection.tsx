import { Monitor, Smartphone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const UsageSection = () => {
    return (
        <section id="usage" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="mb-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Comment utiliser Akili
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Card 1: Web */}
                    <div className="flex flex-col h-full bg-secondary/20 rounded-3xl p-6 border border-border">
                        <div className="flex items-center gap-3 mb-4">
                            <Monitor className="w-6 h-6 text-primary" />
                            <h3 className="font-bold text-xl text-foreground">Akili sur le web</h3>
                        </div>
                        <p className="text-muted-foreground mb-8 flex-grow">
                            Vérifiez une information directement via le chatbot en ligne.
                        </p>
                        <Button variant="outline" className="w-full justify-between group" asChild>
                            <a href="https://ai.akilicheck.com" target="_blank" rel="noopener noreferrer">
                                Vérifier sur le web
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </Button>
                    </div>

                    {/* Card 2: WhatsApp */}
                    <div className="flex flex-col h-full bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                        <div className="flex items-center gap-3 mb-4">
                            <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
                            <h3 className="font-bold text-xl text-foreground">Akili sur WhatsApp</h3>
                        </div>
                        <p className="text-muted-foreground mb-4 flex-grow">
                            Envoyez un message, un lien ou une image à notre bot pour vérification.
                        </p>
                        <Button className="w-full justify-between bg-[#25D366] hover:bg-[#20bd5a] text-white group" asChild>
                            <a href="https://wa.me/2250173820625" target="_blank" rel="noopener noreferrer">
                                Vérifier sur WhatsApp
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </Button>
                    </div>

                    {/* Card 3: Mobile App */}
                    <div className="flex flex-col h-full bg-white rounded-3xl p-6 border border-gray-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                        <div className="flex items-center gap-3 mb-4">
                            <Smartphone className="w-6 h-6 text-primary" />
                            <h3 className="font-bold text-xl text-foreground">Application mobile Akili</h3>
                        </div>
                        <p className="text-muted-foreground mb-6 flex-grow">
                            Vérifiez textes, images et vidéos depuis votre téléphone.
                        </p>
                        <Button variant="default" className="w-full justify-between group" asChild>
                            <a href="#download" onClick={(e) => {
                                e.preventDefault();
                                document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                Télécharger l’application
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UsageSection;
