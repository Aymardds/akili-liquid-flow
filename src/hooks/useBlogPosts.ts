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

// Tama Media RSS feed URL (proxied via Vite/Netlify/Vercel)
const TAMA_MEDIA_RSS = "/api/rss";

// Fallback posts if RSS feed is unavailable
const fallbackPosts: BlogPost[] = [
    {
        id: "1",
        title: "Comment identifier les fake news sur les réseaux sociaux",
        excerpt: "Découvrez les techniques pour repérer rapidement les fausses informations qui circulent sur Facebook, Twitter et Instagram.",
        date: "15 Décembre 2024",
        author: "Équipe Akili",
        category: "Fact-checking",
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop",
        link: "https://tamamedia.com/category/les-verificateurs/"
    },
    {
        id: "2",
        title: "L'intelligence artificielle au service du journalisme",
        excerpt: "Comment Akili utilise l'IA pour combattre la désinformation tout en préservant la rigueur journalistique.",
        date: "10 Décembre 2024",
        author: "Équipe Akili",
        category: "Technologie",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
        link: "https://tamamedia.com/category/les-verificateurs/"
    },
    {
        id: "3",
        title: "Les infox en Afrique francophone : état des lieux",
        excerpt: "Une analyse approfondie de la désinformation et de son impact sur les communautés africaines.",
        date: "5 Décembre 2024",
        author: "Équipe Akili",
        category: "Analyse",
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&h=500&fit=crop",
        link: "https://tamamedia.com/category/les-verificateurs/"
    },
    {
        id: "4",
        title: "Vérification des faits : méthodologie et bonnes pratiques",
        excerpt: "Guide complet sur les méthodes de fact-checking utilisées par les professionnels.",
        date: "1 Décembre 2024",
        author: "Équipe Akili",
        category: "Méthodologie",
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=500&fit=crop",
        link: "https://tamamedia.com/category/les-verificateurs/"
    }
];

/**
 * Format an RSS pubDate string into a human-readable French date.
 */
const formatDate = (pubDate: string): string => {
    if (!pubDate) return "Récent";
    try {
        return new Date(pubDate).toLocaleDateString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });
    } catch {
        return "Récent";
    }
};

/**
 * Fetch and parse the Tama Media RSS feed, returning BlogPost objects.
 */
const fetchRssPosts = async (): Promise<BlogPost[]> => {
    const fetchUrl = TAMA_MEDIA_RSS;

    const response = await fetch(fetchUrl);
    if (!response.ok) {
        throw new Error(`Erreur réseau : ${response.statusText}`);
    }

    const text = await response.text();

    // Guard against the proxy returning HTML instead of XML
    const trimmed = text.trim().toLowerCase();
    if (trimmed.startsWith("<!doctype html") || trimmed.startsWith("<html")) {
        throw new Error("Le proxy a retourné du HTML au lieu du flux RSS XML.");
    }

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "text/xml");

    const parserError = xmlDoc.querySelector("parsererror");
    if (parserError) {
        throw new Error(`Erreur de parsing XML : ${parserError.textContent}`);
    }

    const items = Array.from(xmlDoc.querySelectorAll("item"));
    if (items.length === 0) {
        throw new Error("Aucun article trouvé dans le flux RSS.");
    }

    const allPosts = items.map((item, index) => {
        const title = item.querySelector("title")?.textContent?.trim() || "";
        const link = item.querySelector("link")?.textContent?.trim() || "https://tamamedia.com/category/les-verificateurs/";
        const description = item.querySelector("description")?.textContent || "";
        const pubDate = item.querySelector("pubDate")?.textContent || "";

        // Extract all categories to ensure we don't miss any
        const categoryNodes = Array.from(item.querySelectorAll("category"));
        const categories = categoryNodes.map(node => node.textContent?.trim() || "");
        const mainCategory = categories.length > 0 ? categories[0] : "Fact-checking";

        // Clean description from HTML tags for excerpt
        const excerpt = description.replace(/<[^>]*>/g, "").trim().slice(0, 180) + "...";

        // Try to extract image from various RSS fields
        let image = "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=500&fit=crop";

        const resolveUrl = (url: string) => url.startsWith("http") ? url : `https://tamamedia.com${url.startsWith('/') ? '' : '/'}${url}`;

        // 1. media:content or media:thumbnail
        const mediaContent = item.querySelector("content, thumbnail");
        if (mediaContent) {
            const url = mediaContent.getAttribute("url");
            if (url) image = resolveUrl(url);
        }

        // 2. enclosure (image attachment)
        if (image.includes("unsplash")) {
            const enclosure = item.querySelector("enclosure");
            if (enclosure && enclosure.getAttribute("type")?.startsWith("image/")) {
                const url = enclosure.getAttribute("url");
                if (url) image = resolveUrl(url);
            }
        }

        // 3. <img> inside description HTML
        if (image.includes("unsplash") && description) {
            const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
            if (imgMatch) image = resolveUrl(imgMatch[1]);
        }

        return {
            id: `rss-${index}`,
            title,
            excerpt,
            date: formatDate(pubDate),
            author: "Les Vérificateurs",
            category: mainCategory,
            image,
            link,
            _rawCategories: categories
        };
    });

    // Filter to only include "Les vérificateurs" articles
    const verificateursPosts = allPosts.filter(post => {
        const isVerificateursCategory = post._rawCategories.some(cat => {
            const normalized = cat.toLowerCase().replace(/[-_ ]/g, "");
            return normalized.includes("lesverificateurs") ||
                normalized.includes("lesvérificateurs");
        });

        const isVerificateursLink = post.link.toLowerCase().includes("les-verificateurs");

        return isVerificateursCategory || isVerificateursLink;
    });

    if (verificateursPosts.length === 0) {
        throw new Error("Aucun article 'Les vérificateurs' trouvé dans le flux RSS.");
    }

    // Remove the temporary _rawCategories field before returning
    return verificateursPosts.map(({ _rawCategories, ...post }) => ({
        ...post,
        category: "Les Vérificateurs" // Force a consistent category name
    })) as BlogPost[];
};

export const useBlogPosts = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        const load = async () => {
            try {
                const rssPosts = await fetchRssPosts();
                if (!cancelled) {
                    setPosts(rssPosts);
                    setLoading(false);
                }
            } catch (err) {
                console.error("RSS Feed Error:", err);
                if (!cancelled) {
                    // Silently fall back to static posts
                    setPosts(fallbackPosts);
                    setError(null);
                    setLoading(false);
                }
            }
        };

        load();

        return () => { cancelled = true; };
    }, []);

    return { posts, loading, error };
};
