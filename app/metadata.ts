import { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadataKeywords = [
    "Blog",
    "React",
    "Rznish Blog",
    "Rznish Blog Template",
    "Rznish Blog Template Next.js",
    "Rznish Blog Template Tailwind",
    "Rznish Blog Template Shadcn",
    "Next.js Blog",
    "React Blog",
    "Web Development",
    "Tutorials",
    "MDX Blog",
    "Modern Blog Template",
]

export const metadata: Metadata = {
    title: siteConfig.name,
    description: siteConfig.description,
    keywords: metadataKeywords,
    authors: [
        {
            name: "rznish Team",
            url: "",
        },
    ],
    creator: "rznish",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: siteConfig.url,
        title: siteConfig.name,
        description: siteConfig.description,
        siteName: siteConfig.name,
    },
    twitter: {
        card: "summary_large_image",
        title: siteConfig.name,
        description: siteConfig.description,
        creator: "@rznish",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
};