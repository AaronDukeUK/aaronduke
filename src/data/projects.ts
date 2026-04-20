import type { ImageMetadata } from "astro"

import dwa from "../assets/images/dwa.svg"
import pass from "../assets/images/pass.jpg"
import sd from "../assets/images/sd.webp"
import spendai from "../assets/images/spendai.webp"

export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  title: string
  category: string
  badge?: string
  summary: string
  tags: string[]
  links: ProjectLink[]
  image?: ImageMetadata
  imageAlt?: string
  accent: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: "PASS",
    category: "EdTech Platform",
    summary:
      "I have worked across the PASS platform for the last 3 years, covering WordPress, PHP, JavaScript, Sass, and Docker. More recently, I built the user dashboard frontend in Nuxt as a headless experience and owned that interface end to end.",
    tags: ["Nuxt", "WordPress"],
    links: [{ label: "View Site", href: "https://pass.tech/" }],
    image: pass,
    imageAlt: "PASS platform marketing site and product interface preview",
    accent: "linear-gradient(135deg, #011627 0%, #fff 100%)",
  },
  {
    title: "Spend AI",
    category: "AI Marketing site",
    summary:
      "I built the Spend AI marketing site as the sole developer, taking it from concept through to a polished Vue-based frontend.",
    tags: ["Vue", "Vite", "GSAP"],
    links: [{ label: "View Site", href: "https://www.spendai.com/" }],
    image: spendai,
    imageAlt: "Spend AI marketing site preview",
    accent: "linear-gradient(135deg, #011627 0%, #fff 100%)",
  },
  {
    title: "Dick White Academy",
    category: "Content platform",
    summary:
      "A content-led site for a veterinary nurse training provider, built to feel polished on the frontend while staying straightforward to update day to day.",
    tags: ["Astro", "Sanity"],
    links: [
      { label: "View Site", href: "https://dickwhiteacademy.netlify.app/" },
    ],
    image: dwa,
    imageAlt: "Dick White Academy website preview",
    accent: "linear-gradient(135deg, #011627 0%, #fff 100%)",
  },
  {
    title: "Islamic Relief UK",
    category: "Donation journey",
    summary:
      "I was the frontend developer for the scheduled donation journey and still maintain it today. It is the kind of project where clarity, accessibility, and reliability really matter because every step has to earn trust.",
    tags: ["Vue", "Laravel", "Payments"],
    links: [
      {
        label: "View Site",
        href: "https://schedule.islamic-relief.org.uk/donate/scheduled",
      },
    ],
    image: sd,
    imageAlt: "Islamic Relief UK scheduled donations journey preview",
    accent: "linear-gradient(135deg, #011627 0%, #fff 100%)",
  },
  // {
  //   title: "Michael Price",
  //   category: "WordPress ecommerce",
  //   badge: "Coming Soon",
  //   summary:
  //     "Upcoming ecommerce site for composer Michael Price, built in WordPress and designed to support a more tailored sales and content experience.",
  //   tags: ["WordPress", "Ecommerce", "Coming Soon"],
  //   links: [],
  //   accent: "linear-gradient(135deg, #1b2130 0%, #7d8daa 100%)",
  // },
]
