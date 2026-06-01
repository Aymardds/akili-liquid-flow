import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import akiliLogo from "@/assets/akili-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    const targetId = href.replace("#", "");

    if (location.pathname === "/") {
      const element = document.getElementById(targetId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/${href}`);
    }
  };

  const navLinks = [
    { href: "#usage", label: "Vérifier une info" },
    { href: "#how-it-works", label: "Comment ça marche" },
    { href: "#blog-section", label: "Articles" },
    { href: "/a-propos", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];

  const LinkItem = ({
    link,
    mobile = false,
  }: {
    link: (typeof navLinks)[0];
    mobile?: boolean;
  }) => {
    const baseClass = mobile
      ? "flex items-center min-h-[52px] px-4 text-lg font-semibold text-foreground/80 hover:text-foreground border-b border-border/30 transition-colors active:bg-secondary/30"
      : "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative group cursor-pointer whitespace-nowrap";

    if (link.href.startsWith("#")) {
      return (
        <a
          href={link.href}
          onClick={(e) => handleScroll(e, link.href)}
          className={baseClass}
        >
          {link.label}
          {!mobile && (
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
          )}
        </a>
      );
    }
    return (
      <Link
        to={link.href}
        onClick={() => setIsOpen(false)}
        className={baseClass}
      >
        {link.label}
        {!mobile && (
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
        )}
      </Link>
    );
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 glass-nav"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group shrink-0">
              <motion.img
                src={akiliLogo}
                alt="Akili"
                className="h-10 w-10"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              />
              <span className="font-display text-xl font-bold text-foreground">
                Akili
              </span>
            </Link>

            {/* Desktop Navigation — only on lg+ (≥1024px) */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <LinkItem key={link.href} link={link} />
              ))}
            </div>

            {/* Desktop CTA — only on lg+ */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
              <Link
                to="/europe"
                className="px-3 py-2 text-sm font-medium text-foreground bg-secondary/50 hover:bg-secondary rounded-full border border-border transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                Akili Check
                <span className="text-[10px] font-bold text-white bg-[#E8590C] px-1.5 py-0.5 rounded-full tracking-wider leading-none">
                  EUROPE
                </span>
              </Link>

              <Button variant="hero" size="default" asChild>
                <a
                  href="#download"
                  onClick={(e) => handleScroll(e, "#download")}
                >
                  <Download className="w-4 h-4" />
                  Télécharger
                </a>
              </Button>
            </div>

            {/* Mobile / Tablet: right-side CTA chip + hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              {/* Compact "Akili Check EUROPE" chip visible on md+ tablets */}
              <Link
                to="/europe"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-foreground bg-secondary/50 hover:bg-secondary rounded-full border border-border transition-colors shrink-0"
              >
                Akili Check
                <span className="text-[9px] font-bold text-white bg-[#E8590C] px-1.5 py-0.5 rounded-full tracking-wider leading-none">
                  EUROPE
                </span>
              </Link>

              {/* Hamburger button — min 44×44 touch target */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isOpen}
                className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-secondary/40 hover:bg-secondary/70 text-foreground transition-colors"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <X className="w-5 h-5" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Menu className="w-5 h-5" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Full-screen Mobile / Tablet Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-in panel from the right */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-background/95 backdrop-blur-xl border-l border-border/50 shadow-2xl flex flex-col lg:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 h-16 border-b border-border/30 shrink-0">
                <Link
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2"
                >
                  <img src={akiliLogo} alt="Akili" className="h-9 w-9" />
                  <span className="font-display text-xl font-bold text-foreground">
                    Akili
                  </span>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Fermer le menu"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-secondary/40 hover:bg-secondary/70 text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links — scrollable if many items */}
              <nav className="flex-1 overflow-y-auto py-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.06, duration: 0.25 }}
                  >
                    <LinkItem link={link} mobile />
                  </motion.div>
                ))}

                {/* Akili Check EUROPE — visible on small phones too */}
                <motion.div
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + navLinks.length * 0.06, duration: 0.25 }}
                  className="px-4 pt-4"
                >
                  <Link
                    to="/europe"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 min-h-[52px] px-4 py-3 text-base font-semibold text-foreground bg-secondary/40 hover:bg-secondary/60 rounded-xl border border-border/40 transition-colors"
                  >
                    Akili Check
                    <span className="text-[10px] font-bold text-white bg-[#E8590C] px-1.5 py-0.5 rounded-full tracking-wider leading-none">
                      EUROPE
                    </span>
                  </Link>
                </motion.div>
              </nav>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.25 }}
                className="shrink-0 px-4 py-5 border-t border-border/30"
              >
                <Button
                  variant="hero"
                  size="default"
                  className="w-full h-12 text-base"
                  asChild
                >
                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsOpen(false);
                      document
                        .getElementById("download")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <Download className="w-4 h-4" />
                    Télécharger l'application
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
