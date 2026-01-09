import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const CGU = () => {
    return (
        <div className="min-h-screen bg-background">
            <Helmet>
                <title>CGU | Akili - Conditions Générales d'Utilisation</title>
                <meta name="description" content="Conditions Générales d'Utilisation de l'application mobile Akili." />
            </Helmet>

            <Navbar />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
                            Conditions Générales d'Utilisation
                        </h1>

                        <div className="prose prose-blue max-w-none text-muted-foreground space-y-8">
                            <section>
                                <p className="text-lg font-medium text-foreground italic">
                                    Dernière mise à jour : 06/11/2024
                                </p>
                                <p>
                                    Bienvenue sur l’application mobile Akili, développée et éditée par Tama Média. Ces Conditions Générales d'Utilisation (CGU) régissent l’accès et l’utilisation de l’application mobile Akili, de ses fonctionnalités et services, ainsi que l’interaction avec le chatbot Akili.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">1. Informations générales</h2>
                                <p>
                                    L’application Akili est éditée par Tama Média, un média édité par l’association “Tama Média”. Son siège social est situé au 18 Quai de la Marne, Paris, France. Numéro d’enregistrement de l’association : W751276883.
                                </p>
                                <p>
                                    Tama Média est une organisation à but non lucratif dédiée à la lutte contre la désinformation, notamment en Afrique francophone. Akili propose un service d’information et de vérification des faits.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">2. Accès à l’application</h2>
                                <p>
                                    L’accès à l’application Akili est gratuit. Certaines fonctionnalités peuvent nécessiter la création d'un compte utilisateur. L’utilisateur s’engage à fournir des informations exactes et à jour.
                                </p>
                                <p>
                                    L’application est disponible sur iOS et Android. Tama Média se réserve le droit de suspendre l’accès pour des raisons techniques ou de maintenance.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">3. Utilisation de l’application</h2>
                                <p>L’application Akili permet de :</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Accéder à des contenus de vérification d’informations.</li>
                                    <li>Utiliser le chatbot Akili pour répondre aux questions sur la véracité des informations.</li>
                                    <li>Participer à des initiatives de sensibilisation aux enjeux de la désinformation.</li>
                                </ul>
                                <p>
                                    L’utilisateur s’engage à ne pas utiliser l’application à des fins illégales ou pour diffuser des informations erronées ou diffamatoires.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">4. Propriété intellectuelle</h2>
                                <p>
                                    L’ensemble du contenu (textes, images, logos, etc.) est la propriété exclusive de Tama Média ou de ses partenaires. Toute reproduction sans autorisation préalable est interdite.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">5. Responsabilités de l’utilisateur</h2>
                                <p>
                                    L’utilisateur est responsable de son utilisation de l’application. Il s’engage à ne pas perturber le fonctionnement du service ni à utiliser des outils automatisés pour accéder aux contenus.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">6. Protection des données personnelles</h2>
                                <p>
                                    Tama Média respecte la confidentialité. Les données collectées (notamment via le chatbot) sont traitées conformément à notre Politique de confidentialité. L’utilisateur peut à tout moment exercer ses droits d’accès et de rectification.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation de responsabilité</h2>
                                <p>
                                    Bien que Tama Média s’efforce d’assurer la fiabilité des informations, l’application est un outil informatif. Tama Média ne pourra être tenue responsable des conséquences directes ou indirectes des décisions prises sur la base des informations fournies.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">8. Droit applicable</h2>
                                <p>
                                    Les présentes CGU sont régies par la loi française. En cas de litige, les tribunaux de Paris seront compétents.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact</h2>
                                <p>
                                    Pour toute question : <strong>redaction@tamamedia.com</strong>
                                </p>
                                <p>
                                    Tama Média<br />
                                    18 Quai de la Marne, Paris, France
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default CGU;
