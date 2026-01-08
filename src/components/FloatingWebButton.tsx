import { Monitor } from "lucide-react";

const FloatingWebButton = () => {
    return (
        <a
            href="https://ai.akilicheck.com"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 floating-subtle"
            aria-label="Accéder à la version web"
        >
            <Monitor className="w-5 h-5" />
            <span className="font-medium hidden md:inline">Version Web</span>
        </a>
    );
};

export default FloatingWebButton;
