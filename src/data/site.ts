export type CallToAction = {
  label: string
  href: string
  external?: boolean
  variant?: "primary" | "secondary"
}

export type ContentStrip = {
  id: string
  text: string
  cta: CallToAction
}

export const site = {
  name: "Aaron Duke",
  initials: "AD",
  role: "Full-Stack Developer",
  location: "Frontend enthusiast",
  title: "Aaron Duke • Full-Stack Developer with a Frontend Focus",
  description:
    "Full-stack developer with a frontend focus, building accessible, performant products and maintainable CMS-driven platforms.",
  email: "hello@aaronduke.co.uk",
  social: {
    github: "https://github.com/AaronDukeUK",
    linkedin: "https://www.linkedin.com/in/aduke-dev/",
  },
  hero: {
    eyebrow: "Available for permanent roles and select client projects",
    summary:
      "I am a full-stack developer who naturally leans toward frontend work. I enjoy turning ideas, designs, and product requirements into interfaces that feel fast, accessible, and easy to use, while still being solid behind the scenes.",
    skillsLabel: "Core strengths",
    skillsIntro:
      "The sweet spot for me is frontend craft backed by enough full-stack experience to take features from idea to production with confidence.",
    actions: [
      { label: "View Work", href: "#projects", variant: "primary" },
      { label: "Contact", href: "#contact", variant: "secondary" },
    ],
  },
  skills: [
    "TypeScript",
    "Nuxt",
    "Vue",
    "Astro",
    "CSS",
    "WP",
    "PHP",
    "Laravel",
    "Docker",
    "Nginx",
    "Node.js",
    "A11y",
    "Security",
    "Figma",
    "Jira",
    "Git",
  ],
  strips: [
    {
      id: "about",
      text: "A lot of my work lives in that space between product thinking, frontend detail, and practical delivery. I am mainly looking for permanent frontend or full-stack roles, but I am always open to the right client project if it is a good fit.",
      cta: {
        label: "Get in touch",
        href: "#contact",
      },
    },
    {
      id: "experience",
      text: "Over the last few years I have worked across WordPress, Laravel, Nuxt, Astro, accessibility, performance, and secure modern workflows - often owning the frontend from design handoff through to launch and ongoing maintenance.",
      cta: {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/aduke-dev/",
        external: true,
      },
    },
  ] satisfies ContentStrip[],
  projectSection: {
    eyebrow: "Professional experience",
    heading: "Selected Work",
    summary:
      "Here are a few examples of the kind of work I enjoy most: product-focused frontend, content-led platforms, and projects where performance, accessibility, and maintainability all matter.",
    githubLabel: "GitHub",
    githubUrl: "https://github.com/AaronDukeUK",
  },
  contact: {
    heading: "Let's Work Together",
    ctaLabel: "Email Me",
    formName: "Contact Form",
  },
  footer: {
    text: "Currently open to permanent frontend or full-stack roles, and the occasional client project.",
  },
} as const;
