import { Monitor, Smartphone, Download, Instagram, Facebook, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const AvailabilitySection = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-8">
                <div className="mb-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Comment utiliser Akili
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Choisissez le canal qui vous convient pour vérifier une information.
                    </p>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-6 pb-4">
                        {/* Card 1: Web */}
                        <CarouselItem className="pl-6 md:basis-1/2 lg:basis-1/3 h-full">
                            <div className="flex flex-col h-full bg-secondary/20 rounded-3xl p-6 border border-border">
                                <div className="flex items-center gap-3 mb-4">
                                    <Monitor className="w-6 h-6 text-primary" />
                                    <h3 className="font-bold text-xl text-foreground">Akili sur le web</h3>
                                </div>
                                <p className="text-muted-foreground mb-8 flex-grow">
                                    Vérifiez une information directement via le chatbot en ligne.
                                </p>
                                <a href="https://ai.akilicheck.com" target="_blank" rel="noopener noreferrer" className="bg-accent/30 text-accent-foreground font-medium py-3 px-4 rounded-xl flex items-center justify-between hover:bg-accent/50 transition-colors mt-auto">
                                    <span>Vérifier une information sur le web</span>
                                    <span>→</span>
                                </a>
                            </div>
                        </CarouselItem>

                        {/* Card 2: WhatsApp */}
                        <CarouselItem className="pl-6 md:basis-1/2 lg:basis-1/3 h-full">
                            <div className="flex flex-col h-full bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
                                    <h3 className="font-bold text-xl text-foreground">Akili sur WhatsApp</h3>
                                </div>
                                <p className="text-muted-foreground mb-4">
                                    Envoyez un message, un lien, une image ou une vidéo à Akili.
                                </p>
                                <div className="space-y-2 mb-6 font-medium text-foreground flex-grow"> </div>
                                <a href="https://wa.me/2250173820625" target="_blank" rel="noopener noreferrer" className="border border-border text-foreground font-medium py-3 px-4 rounded-xl flex items-center justify-between hover:bg-gray-50 transition-colors mt-auto">
                                    <span>Vérifier une information sur WhatsApp</span>
                                    <span>→</span>
                                </a>
                            </div>
                        </CarouselItem>

                        {/* Card 3: Mobile App */}
                        <CarouselItem className="pl-6 md:basis-1/2 lg:basis-1/3 h-full">
                            <div className="flex flex-col h-full bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <Smartphone className="w-6 h-6 text-primary" />
                                    <h3 className="font-bold text-xl text-foreground">Application mobile Akili</h3>
                                </div>
                                <p className="text-muted-foreground mb-6 flex-grow">
                                    Accédez à Akili via l'application mobile.
                                </p>
                                <div className="space-y-3 mt-auto">
                                    <a href="https://play.google.com/store/apps/details?id=com.litekev.akili&hl=fr" target="_blank" rel="noopener noreferrer" className="w-full bg-slate-900 text-white py-3 px-4 rounded-xl flex items-center gap-3 hover:bg-slate-800 transition-colors">
                                        <Download className="w-5 h-5" />
                                        <div className="text-left leading-none">
                                            <div className="text-[10px] uppercase opacity-80">Telecharger sur</div>
                                            <div className="font-bold text-sm">Google Play</div>
                                        </div>
                                    </a>
                                    <a href="https://apps.apple.com/us/app/akili-ai/id6738965572" target="_blank" rel="noopener noreferrer" className="w-full bg-slate-900 text-white py-3 px-4 rounded-xl flex items-center gap-3 hover:bg-slate-800 transition-colors">
                                        <div className="w-5 h-5 flex items-center justify-center"></div>
                                        <div className="text-left leading-none">
                                            <div className="text-[10px] uppercase opacity-80">Telecharger sur</div>
                                            <div className="font-bold text-sm">l'App Store</div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </CarouselItem>

                        {/* Card 4: Socials */}
                        <CarouselItem className="pl-6 md:basis-1/2 lg:basis-1/3 h-full">
                            <div className="flex flex-col h-full bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
                                <div className="flex items-center gap-3 mb-4">
                                    <Instagram className="w-6 h-6 text-pink-600" />
                                    <h3 className="font-bold text-xl text-foreground">Akili sur les réseaux sociaux</h3>
                                </div>

                                <div className="space-y-3 mt-auto pt-10">
                                    <a href="#" className="border border-border text-foreground font-medium py-3 px-4 rounded-xl flex items-center gap-3 hover:bg-gray-50 transition-colors">
                                        <Instagram className="w-5 h-5" />
                                        <span>Ouvrir Instagram</span>
                                    </a>
                                    <a href="#" className="border border-border text-foreground font-medium py-3 px-4 rounded-xl flex items-center gap-3 hover:bg-gray-50 transition-colors">
                                        <Facebook className="w-5 h-5" />
                                        <span>Ouvrir Facebook</span>
                                    </a>
                                    <a href="https://www.facebook.com/messages/t/643172972215391" target="_blank" rel="noopener noreferrer" className="border border-border text-foreground font-medium py-3 px-4 rounded-xl flex items-center gap-3 hover:bg-gray-50 transition-colors">
                                        <MessageCircle className="w-5 h-5" />
                                        <span>Ouvrir Messenger</span>
                                    </a>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <div className="hidden md:block">
                        <CarouselPrevious className="-left-4" />
                        <CarouselNext className="-right-4" />
                    </div>
                </Carousel>

                {/* Bottom Section */}
                <div className="mt-12 p-8 bg-muted/20 rounded-3xl border border-border">
                    <h3 className="font-display text-2xl font-bold mb-2">Une information complexe ou très virale ?</h3>
                    <p className="text-muted-foreground">Nous avons une équipe dédiée pour les investigations approfondies.</p>
                </div>
            </div >
        </section >
    );
};

export default AvailabilitySection;
