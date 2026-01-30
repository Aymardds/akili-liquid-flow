import { useQuery } from "@tanstack/react-query";

export interface RssArticle {
    title: string;
    link: string;
    description: string;
    pubDate: string;
    category?: string;
    image?: string;
    guid?: string;
}

const parseRssFeed = async (url: string): Promise<RssArticle[]> => {
    try {
        // Use CORS proxy for external feeds to avoid CORS issues in development
        // In production, this should be handled by a backend proxy
        const corsProxy = "https://api.allorigins.win/raw?url=";

        // Check if the URL is a local file (starts with / or ./or ../)
        const isLocalFile = url.startsWith("/") || url.startsWith("./") || url.startsWith("../");
        const fetchUrl = isLocalFile ? url : (url.startsWith("http") ? `${corsProxy}${encodeURIComponent(url)}` : url);

        // Fetch the RSS feed
        const response = await fetch(fetchUrl);
        if (!response.ok) {
            throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
        }

        const text = await response.text();

        // Check if the response is HTML instead of XML
        if (text.trim().toLowerCase().startsWith("<!doctype html") || text.trim().toLowerCase().startsWith("<html")) {
            throw new Error("RSS feed URL returned HTML content instead of XML. Please check the RSS feed URL configuration.");
        }

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, "text/xml");

        // Check for parsing errors
        const parserError = xmlDoc.querySelector("parsererror");
        if (parserError) {
            throw new Error(`Failed to parse RSS feed: ${parserError.textContent}`);
        }

        // Extract items from the RSS feed
        const items = xmlDoc.querySelectorAll("item");
        const articles: RssArticle[] = [];

        items.forEach((item) => {
            const title = item.querySelector("title")?.textContent || "";
            const link = item.querySelector("link")?.textContent || "";
            const description = item.querySelector("description")?.textContent || "";
            const pubDate = item.querySelector("pubDate")?.textContent || "";
            const category = item.querySelector("category")?.textContent || undefined;
            const guid = item.querySelector("guid")?.textContent || undefined;

            // Try to extract image from various possible locations
            let image: string | undefined;

            // Check for media:content or media:thumbnail
            const mediaContent = item.querySelector("content, thumbnail");
            if (mediaContent) {
                image = mediaContent.getAttribute("url") || undefined;
            }

            // Check for enclosure tag
            if (!image) {
                const enclosure = item.querySelector("enclosure");
                if (enclosure && enclosure.getAttribute("type")?.startsWith("image/")) {
                    image = enclosure.getAttribute("url") || undefined;
                }
            }

            // Check for image in description
            if (!image && description) {
                const imgMatch = description.match(/<img[^>]+src="([^">]+)"/);
                if (imgMatch) {
                    image = imgMatch[1];
                }
            }

            articles.push({
                title,
                link,
                description: description.replace(/<[^>]*>/g, ""), // Strip HTML tags
                pubDate,
                category,
                image,
                guid,
            });
        });

        return articles;
    } catch (error) {
        console.error("Error parsing RSS feed:", error);
        throw error;
    }
};

export const useRssFeed = (feedUrl?: string, limit?: number) => {
    return useQuery({
        queryKey: ["rssFeed", feedUrl],
        queryFn: async () => {
            if (!feedUrl) {
                throw new Error("RSS feed URL is not configured");
            }
            const articles = await parseRssFeed(feedUrl);
            return limit ? articles.slice(0, limit) : articles;
        },
        enabled: !!feedUrl,
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000, // 10 minutes
        retry: 2,
    });
};
