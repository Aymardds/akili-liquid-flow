import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import akiliLogo from "@/assets/akili-logo.png";
import Footer from "@/components/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

/* ── Navbar Europe ───────────────────────────────────────────── */
const EuropeNav = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleNotify = () => {
    if (email) setSubmitted(true);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass-nav"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img src={akiliLogo} alt="Akili" className="h-10 w-10" />
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-bold text-foreground">
                Akili Check
              </span>
              <span className="text-xs font-bold text-white bg-[#E8590C] px-2 py-0.5 rounded-full tracking-wider">
                EUROPE
              </span>
            </div>
          </Link>

          {/* Afrique link */}
          <Link
            to="/"
            className="hidden sm:flex text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
          >
            Akili Check Afrique →
          </Link>

          {/* Être notifié button */}
          <a
            href="#notify"
            className="border border-foreground text-foreground text-sm font-medium px-4 py-2 rounded-full hover:bg-foreground hover:text-background transition-colors whitespace-nowrap"
          >
            Être notifié
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

/* ── Hero ────────────────────────────────────────────────────── */
const EuropeHero = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  const langs = [
    { flag: "🇫🇷", name: "Français" },
    { flag: "🇬🇧", name: "English" },
    { flag: "🇪🇸", name: "Español" },
    { flag: "🇵🇹", name: "Português" },
    { flag: "🇩🇪", name: "Deutsch" },
    { flag: "🇮🇹", name: "Italiano" },
    { flag: "🇸🇦", name: "العربية" },
  ];

  return (
    <section className="relative flex items-center justify-center hero-gradient pt-32 lg:pt-48 pb-16 lg:pb-24 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-sky-deep/30 rounded-full blur-3xl animate-blob-delayed" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gold/10 rounded-full blur-3xl animate-blob" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center max-w-3xl">
        {/* Pill */}
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-4 py-2 bg-card/70 backdrop-blur-lg rounded-full border border-border/50 mb-6">
          <img src={akiliLogo} alt="" className="w-5 h-5" />
          <span className="text-sm font-medium text-muted-foreground">La vérité au bout des doigts</span>
        </motion.div>

        {/* H1 */}
        <motion.h1 {...fadeUp(0.2)} className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
          Vérifie avant de{" "}
          <span className="relative">
            <span className="gradient-text">partager</span>
            <motion.span
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            />
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p {...fadeUp(0.3)} className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
          Avant de relayer une information, Akili Check Europe vous aide à vérifier ce qui est vrai, trompeur ou faux — en quelques secondes, dans votre langue.
        </motion.p>

        {/* Email inline */}
        <motion.form {...fadeUp(0.4)} onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Votre adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-3 rounded-full border border-border focus:outline-none focus:ring-2 focus:ring-primary bg-white text-foreground placeholder:text-muted-foreground"
            required
          />
          {submitted ? (
            <span className="rounded-full bg-green-600 text-white font-semibold px-8 py-3 text-sm flex items-center justify-center shadow-md">✓ Inscrit !</span>
          ) : (
            <button type="submit" className="rounded-full bg-primary text-primary-foreground font-semibold px-8 py-3 text-sm hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 whitespace-nowrap">
              M'avertir du lancement
            </button>
          )}
        </motion.form>

        {/* Language chips */}
        <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-2 justify-center mb-8">
          {langs.map((l) => (
            <span
              key={l.name}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border bg-white/70 text-sm font-medium text-foreground"
            >
              {l.flag} {l.name}
            </span>
          ))}
        </motion.div>

        {/* Secondary CTA */}
        <motion.div {...fadeUp(0.6)}>
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 rounded-full border-2 border-foreground text-foreground font-semibold text-sm hover:bg-foreground hover:text-background transition-colors"
          >
            Utiliser Akili Check Afrique en attendant →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

/* ── Stats band ──────────────────────────────────────────────── */
const AnimatedNumber = ({ value }: { value: string }) => {
  const numValue = parseInt(value, 10);
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(numValue);
    }
  }, [motionValue, isInView, numValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("fr-FR").format(Math.floor(latest));
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
};

const StatsBand = () => (
  <motion.section
    {...fadeUp(0)}
    className="bg-card border-y border-border py-10"
  >
    <div className="container mx-auto px-4 lg:px-8">
      <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-24">
        {[
          { num: "7", sym: "+", label: "Langues" },
          { num: "20", sym: "s", label: "Réponse max" },
          { num: "4", sym: "", label: "Canaux" },
        ].map(({ num, sym, label }) => (
          <div key={label} className="text-center">
            <div className="font-display text-4xl md:text-5xl font-[900] text-foreground tracking-tight">
              <AnimatedNumber value={num} />
              {sym && (
                <span className="text-[#E8590C]">{sym}</span>
              )}
            </div>
            <div className="text-muted-foreground text-sm font-medium mt-1 uppercase tracking-widest">{label}</div>
          </div>
        ))}
      </div>
    </div>
  </motion.section>
);

/* ── Qui est derrière Akili ──────────────────────────────────── */
const AboutSection = () => (
  <section className="bg-primary py-20">
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
      <motion.h2 {...fadeUp(0)} className="font-display text-3xl md:text-4xl font-bold text-white mb-8">
        Qui est derrière Akili ?
      </motion.h2>
      <motion.div {...fadeUp(0.1)} className="text-white/90 text-base md:text-lg leading-relaxed space-y-5 text-left">
        <p>
          <strong>Akili est une initiative de Tama Media</strong>, média panafricain animé par un collectif de journalistes de la diaspora africaine en France et de journalistes locaux africains, qui produit des reportages au long format, des enquêtes et du fact-checking.
        </p>
        <p>
          Akili Check est d'abord né de la volonté de lutter contre la désinformation en Afrique. Face à la nécessité croissante de mener ce même combat en Europe,{" "}
          <strong>Akili Check Europe est désormais en cours de développement</strong>. En attendant son lancement, vous pouvez dès aujourd'hui utiliser{" "}
          <strong>Akili Check Afrique</strong>.
        </p>
      </motion.div>
      <motion.div {...fadeUp(0.2)} className="mt-10">
        <Link
          to="/"
          className="inline-flex items-center px-8 py-4 rounded-full bg-[#E8590C] text-white font-semibold hover:bg-[#d14e0b] transition-colors"
        >
          Utiliser Akili Check Afrique →
        </Link>
      </motion.div>
    </div>
  </section>
);

/* ── Ce qu'Akili peut vérifier ───────────────────────────────── */
const CanVerifySection = () => {
  const items = [
    { icon: "🎬", label: "Vidéos virales" },
    { icon: "🖼️", label: "Images hors contexte" },
    { icon: "💬", label: "Rumeurs WhatsApp" },
    { icon: "📊", label: "Chiffres trompeurs" },
    { icon: "🗣️", label: "Citations attribuées à tort" },
    { icon: "📰", label: "Titres manipulés" },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <motion.h2 {...fadeUp(0)} className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Ce qu'Akili Check Europe peut vérifier
        </motion.h2>
        <div className="space-y-3">
          {items.map(({ icon, label }, i) => (
            <motion.div
              key={label}
              {...fadeUp(i * 0.07)}
              className="flex items-center gap-4 p-4 bg-card rounded-2xl border border-border shadow-sm"
            >
              <span className="text-2xl w-10 h-10 flex items-center justify-center bg-secondary rounded-xl flex-shrink-0">
                {icon}
              </span>
              <span className="font-medium text-foreground">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Comment fonctionne ──────────────────────────────────────── */
const HowItWorksSection = () => {
  const steps = [
    {
      num: "01",
      icon: "📤",
      title: "Envoyez",
      desc: "Copiez-collez une affirmation, un titre ou une capture sur WhatsApp ou via l'interface web.",
    },
    {
      num: "02",
      icon: "🔍",
      title: "Recherche",
      desc: "Notre pipeline interroge les sources fiables validées par notre équipe de journalistes.",
    },
    {
      num: "03",
      icon: "🧠",
      title: "Analyse IA",
      desc: "L'IA formule un verdict argumenté, appuyé sur les sources — sans inventer ni extrapoler.",
    },
    {
      num: "04",
      icon: "✅",
      title: "Verdict",
      desc: "Vous recevez une réponse claire avec verdict, raisonnement et sources consultables.",
    },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <motion.div {...fadeUp(0)} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Comment fonctionne Akili Check
          </h2>
          <p className="text-muted-foreground">
            Un processus de vérification rigoureux combinant technologie de pointe et expertise humaine.
          </p>
        </motion.div>

        <div className="space-y-4">
          {steps.map(({ num, icon, title, desc }, i) => (
            <motion.div
              key={num}
              {...fadeUp(i * 0.1)}
              className="p-5 bg-card rounded-2xl border border-border shadow-sm"
            >
              <p className="text-xs font-bold text-[#E8590C] tracking-widest mb-2">ÉTAPE {num}</p>
              <p className="font-display font-bold text-foreground text-lg mb-1">
                <span className="mr-2">{icon}</span> {title}
              </p>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </motion.div>
          ))}

          {/* Human intervention card */}
          <motion.div {...fadeUp(0.45)} className="p-5 bg-card rounded-2xl border border-border shadow-sm">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-[#FFF3E0] text-[#E8590C] px-3 py-1 rounded-full mb-3">
              ✍️ INTERVENTION HUMAINE
            </span>
            <p className="font-display font-bold text-foreground text-lg mb-2">Un vrai journaliste peut intervenir</p>
            <p className="text-muted-foreground text-sm">
              Quand l'IA atteint ses limites — sujet trop complexe, contexte ambigu, information sensible — un journaliste de l'équipe Tama Media peut prendre le relais directement et répondre à l'utilisateur. L'humain reste au cœur du processus de vérification.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

/* ── Exemples de verdicts ────────────────────────────────────── */
const VerdictsSection = () => {
  const verdicts = [
    {
      badge: "❌ FAUX",
      badgeColor: "bg-red-100 text-red-700",
      quote: "« L'UE a interdit la vente de voitures thermiques dès 2030. »",
      sources: ["Parlement européen", "EUR-Lex"],
    },
    {
      badge: "✓ VRAI",
      badgeColor: "bg-green-100 text-green-700",
      quote: "« La France est le premier exportateur mondial de vin en valeur. »",
      sources: ["OIV", "Ministère de l'Agriculture"],
    },
    {
      badge: "⚠ TROMPEUR",
      badgeColor: "bg-yellow-100 text-yellow-800",
      quote: "« L'immigration a fait doubler la criminalité en Allemagne. »",
      sources: ["Bundeskriminalamt", "Destatis"],
    },
    {
      badge: "? IMPOSSIBLE À VÉRIFIER",
      badgeColor: "bg-gray-100 text-gray-600",
      quote: "« 80 % des médecins recommandent ce complément alimentaire. »",
      sources: ["Aucune source primaire identifiable"],
    },
  ];

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
        <motion.h2 {...fadeUp(0)} className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
          Exemples de verdicts
        </motion.h2>
        <div className="space-y-4">
          {verdicts.map(({ badge, badgeColor, quote, sources }, i) => (
            <motion.div key={badge} {...fadeUp(i * 0.1)} className="p-5 bg-card rounded-2xl border border-border shadow-sm">
              <span className={`inline-flex items-center text-xs font-bold px-3 py-1 rounded-full mb-3 ${badgeColor}`}>
                • {badge.replace(/^[^\s]+\s/, "")}
              </span>
              <p className="text-foreground font-medium italic mb-3">{quote}</p>
              <div>
                <p className="text-xs text-muted-foreground font-semibold mb-1">Sources</p>
                <div className="flex flex-wrap gap-2">
                  {sources.map((s) => (
                    <span key={s} className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Notification section ────────────────────────────────────── */
const NotifySection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section id="notify" className="bg-primary py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-xl text-center">
        <motion.h2 {...fadeUp(0)} className="font-display text-2xl md:text-3xl font-bold text-white mb-3">
          Akili Check Europe — bientôt disponible
        </motion.h2>
        <motion.p {...fadeUp(0.1)} className="text-white/80 mb-8">
          Soyez parmi les premiers à tester Akili Check Europe dès son lancement.
        </motion.p>
        <motion.form {...fadeUp(0.2)} onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Votre adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-5 py-3 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-white/50 bg-white text-foreground placeholder:text-muted-foreground shadow-inner"
            required
          />
          {submitted ? (
            <span className="rounded-full bg-green-500 text-white font-semibold px-8 py-3 text-sm flex items-center justify-center shadow-md">
              ✓ Inscrit !
            </span>
          ) : (
            <button type="submit" className="rounded-full bg-[#E8590C] text-white font-semibold px-8 py-3 text-sm hover:bg-[#d14e0b] shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 whitespace-nowrap">
              M'avertir du lancement
            </button>
          )}
        </motion.form>
      </div>
    </section>
  );
};

/* ── Main page ───────────────────────────────────────────────── */
const AkiliEurope = () => (
  <>
    <Helmet>
      <title>Akili Check Europe | Bientôt disponible</title>
      <meta name="description" content="Akili Check Europe est en cours de développement. Inscrivez-vous pour être notifié dès le lancement." />
      <link rel="canonical" href="https://akilicheck.com/europe" />
    </Helmet>
    <div className="min-h-screen bg-background overflow-x-hidden">
      <EuropeNav />
      <main>
        <EuropeHero />
        <StatsBand />
        <AboutSection />
        <CanVerifySection />
        <HowItWorksSection />
        <VerdictsSection />
        <NotifySection />
      </main>
      <Footer />
    </div>
  </>
);

export default AkiliEurope;
