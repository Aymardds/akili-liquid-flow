import { useState, useEffect } from "react";

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    category: string;
    image: string;
    link: string;
}

// Fallback posts if scraping fails
const fallbackPosts: BlogPost[] = [
    {
        id: "1",
        title: "Comment identifier les fake news sur les réseaux sociaux",
        excerpt: "Découvrez les techniques pour repérer rapidement les fausses informations qui circulent sur Facebook, Twitter et Instagram.",
        date: "15 Décembre 2024",
        author: "Équipe Akili",
        category: "Fact-checking",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop",
        link: "#"
    },
    {
        id: "2",
        title: "L'intelligence artificielle au service du journalisme",
        excerpt: "Comment Akili utilise l'IA pour combattre la désinformation tout en préservant la rigueur journalistique.",
        date: "10 Décembre 2024",
        author: "Équipe Akili",
        category: "Technologie",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
        link: "#"
    },
    {
        id: "3",
        title: "Les infox en Afrique francophone : état des lieux",
        excerpt: "Une analyse approfondie de la désinformation et de son impact sur les communautés africaines.",
        date: "5 Décembre 2024",
        author: "Équipe Akili",
        category: "Analyse",
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=500&fit=crop",
        link: "#"
    },
    {
        id: "4",
        title: "Vérification des faits : méthodologie et bonnes pratiques",
        excerpt: "Guide complet sur les méthodes de fact-checking utilisées par les professionnels.",
        date: "1 Décembre 2024",
        author: "Équipe Akili",
        category: "Méthodologie",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
        link: "#"
    }
];

export const useBlogPosts = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Fetch the HTML page via allorigins.win (more reliable for production)
                const response = await fetch(
                    `https://api.allorigins.win/get?url=${encodeURIComponent(
                        "https://tamamedia.com/verificateurs"
                    )}`
                );

                if (!response.ok) throw new Error("Erreur réseau");

                const data = await response.json();
                const htmlString = data.contents;

                if (!htmlString) throw new Error("Aucun contenu récupéré");

                const parser = new DOMParser();
                const doc = parser.parseFromString(htmlString, "text/html");

                // Try to find article containers
                let items = Array.from(doc.querySelectorAll("article"));

                // Fallback: look for divs that contain an H2 or H3 and an IMG
                if (items.length === 0) {
                    const candidates = Array.from(doc.querySelectorAll("div"));
                    items = candidates.filter(div => {
                        const hasTitle = div.querySelector("h2, h3, h4");
                        const hasImg = div.querySelector("img");
                        const hasLink = div.querySelector("a");
                        return hasTitle && hasImg && hasLink && (div.textContent?.length || 0) > 50;
                    }).slice(0, 20);
                }

                // Parse articles
                const articles: BlogPost[] = [];
                const seenTitles = new Set();

                items.forEach((item, index) => {
                    // Title
                    const titleElement = item.querySelector("h1, h2, h3, h4, .title");
                    const title = titleElement?.textContent?.trim() || "";
                    if (!title || seenTitles.has(title)) return;
                    seenTitles.add(title);

                    // Link
                    let link = "#";
                    const anchor = item.querySelector("a");
                    if (anchor && anchor.href) {
                        const href = anchor.getAttribute("href");
                        if (href) {
                            if (href.startsWith("http")) link = href;
                            else link = `https://tamamedia.com${href.startsWith("/") ? "" : "/"}${href}`;
                        }
                    }

                    // Image
                    const img = item.querySelector("img");
                    let image = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop";
                    if (img) {
                        const src = img.getAttribute("src") || img.getAttribute("data-src");
                        if (src) {
                            if (src.startsWith("http")) image = src;
                            else image = `https://tamamedia.com${src.startsWith("/") ? "" : "/"}${src}`;
                        }
                    }

                    // Excerpt
                    const paragraphs = item.querySelectorAll("p");
                    let excerpt = "";
                    for (const p of paragraphs) {
                        const text = p.textContent?.trim();
                        if (text && text.length > 20) {
                            excerpt = text.slice(0, 160) + "...";
                            break;
                        }
                    }
                    if (!excerpt) {
                        const allText = item.textContent?.trim() || "";
                        excerpt = allText.replace(title, "").slice(0, 100) + "...";
                    }

                    // Date & Category
                    const date = "Récent";
                    const category = "Fact-checking";
                    const author = "Les Vérificateurs";

                    articles.push({
                        id: `scraped-${index}`,
                        title,
                        excerpt,
                        date,
                        author,
                        category,
                        image,
                        link
                    });
                });

                if (articles.length === 0) throw new Error("Aucun article trouvé");

                setPosts(articles);
                setLoading(false);
            } catch (err) {
                console.error("Scraping Fetch Error:", err);
                setPosts(fallbackPosts);
                setError(null); // Don't show error, just use fallback
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return { posts, loading, error };
};
