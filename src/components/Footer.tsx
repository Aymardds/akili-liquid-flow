import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, MapPin, Twitter } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import akiliLogo from "@/assets/akili-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    product: [
      { label: "À propos de Akili", href: "/a-propos" },
      { label: "Nos sources", href: "/nos-sources" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
    resources: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "#" },
      { label: "Aide", href: "#" },
    ],
    legal: [
      { label: "CGU", href: "/cgu" },
      { label: "Politique de confidentialité", href: "/cgu" },
      { label: "Mentions Légales", href: "#" },
    ],
  };

  const socials = [
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61576184382062", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/akilicheck?igsh=M2V0OXZ3eTFmaDcw", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/akilicheck", label: "X" },
    { icon: FaWhatsapp, href: "https://wa.me/2250173820625", label: "WhatsApp" },
  ];

  return (
    <footer className="bg-card border-t border-border py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <motion.a
              href="#"
              className="flex items-center gap-3 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <img src={akiliLogo} alt="Akili" className="w-10 h-10" />
              <span className="font-display text-2xl font-bold text-foreground">
                Akili
              </span>
            </motion.a>
            <p className="text-muted-foreground mb-6 max-w-sm">
              La première application mobile dédiée à la lutte contre les infox
              en Afrique francophone.
            </p>
            <div className="flex items-center gap-4">
              {socials.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Produit
            </h4>
            <ul className="space-y-3">
              {links.product.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Ressources
            </h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">
              Légal
            </h4>
            <ul className="space-y-3">
              {links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact & Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              contact@akilicheck.com
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Abidjan, Côte d'Ivoire
            </span>
          </div>
          <div className="flex flex-col md:items-end gap-1">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Akili. Tous droits réservés.
            </p>
            <p className="text-xs text-muted-foreground">
              Développée avec le ❤️ par <a href="https://www.inexiumus.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">INEXIUMUS</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
