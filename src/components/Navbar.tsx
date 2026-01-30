import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import akiliLogo from "@/assets/akili-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    // Extract target id from href (remove #)
    const targetId = href.replace('#', '');

    if (location.pathname === "/") {
      // If we are already on home page, prompt smooth scroll
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we are on another page, navigate to home with hash
      // We use a timeout to allow navigation to occur, then scroll if possible
      // But standard way is navigate("/"); setTimeout -> scroll. 
      // A better way with React Router is navigating to "/" and detecting hash in Index page useEffect.
      // But for simplicity, let's navigate to home then scroll.
      navigate(`/${href}`);
      // Navigate to /#hash works but we need to ensure the element exists after render.
      // For now let's just use navigate to the anchor path.
    }
  };

  const navLinks = [
    { href: "#usage", label: "Vérifier une info" },
    { href: "#how-it-works", label: "Comment ça marche" },
    { href: "#blog-section", label: "Articles" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <motion.img
              src={akiliLogo}
              alt="Akili"
              className="h-10 w-10 lg:h-12 lg:w-12"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
            <span className="font-display text-xl lg:text-2xl font-bold text-foreground">
              Akili
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              if (link.href.startsWith("#")) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-300 relative group cursor-pointer"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                );
              }
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-muted-foreground hover:text-foreground font-medium transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}

          {/* CTA Button */}

          <div className="hidden md:block">
            <Button
              variant="hero"
              size="default"
              asChild
            >
              <a
                href="#download"
                onClick={(e) => handleScroll(e, "#download")}
              >
                <Download className="w-4 h-4" />
                Télécharger
              </a>
            </Button>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            <a
              href="#usage"
              onClick={(e) => handleScroll(e, "#usage")}
              className="block text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              Vérifier une info
            </a>

            <a
              href="#download"
              onClick={(e) => handleScroll(e, "#download")}
              className="block text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              Télécharger l’application
            </a>

            <a
              href="#how-it-works"
              onClick={(e) => handleScroll(e, "#how-it-works")}
              className="block text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              Comment ça marche
            </a>

            <a
              href="#blog-section"
              onClick={(e) => handleScroll(e, "#blog-section")}
              className="block text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              Articles
            </a>

            <Link
              to="/a-propos"
              onClick={() => setIsOpen(false)}
              className="block text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              À propos
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block text-muted-foreground hover:text-foreground font-medium transition-colors"
            >
              Contact
            </Link>

            <Button variant="hero" size="default" className="w-full" asChild>
              <a
                href="#download"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Download className="w-4 h-4" />
                Télécharger
              </a>
            </Button>
          </div>
        </motion.div>
      </div >
    </motion.nav >
  );
};

export default Navbar;
