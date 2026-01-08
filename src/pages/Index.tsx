import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AvailabilitySection from "@/components/AvailabilitySection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Akili | Vérifie avant de partager</title>
        <meta
          name="description"
          content="Akili est la première application mobile dédiée à la lutte contre les infox en Afrique francophone. Vérifiez l'information en un seul clic."
        />
        <meta
          name="keywords"
          content="fact-checking, vérification, infox, fake news, Afrique, francophone, désinformation"
        />
        <meta property="og:title" content="Akili — Là où le doute disparaît" />
        <meta
          property="og:description"
          content="La première application mobile de vérification des informations en Afrique francophone."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://akilicheck.com" />
        <link rel="canonical" href="https://akilicheck.com" />
      </Helmet>

      <div className="min-h-screen bg-background overflow-x-hidden">
        <Navbar />
        <main>
          <HeroSection />
          <FeaturesSection />
          <AvailabilitySection />
          <ScreenshotsSection />
          <TestimonialsSection />
          <CTASection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
