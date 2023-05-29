import dwa from "../assets/images/dwa.svg"
import clock from "../assets/images/clock.webp"
import audio from "../assets/images/audio.webp"
import ono from "../assets/images/ono.webp"

export const projects = [
  {
    title: "Audiophile",
    link: "https://adaudiophile.netlify.app/",
    github: "https://github.com/AaronDukeUK/ad-audiophile",
    image: audio,
    text: "Audiophile is a website specialising in high-end audio equipment.",
    completed: true,
    tags: ["#React", "#Stripe", "#Sanity"],
  },
  {
    title: "Onoglams",
    link: "https://onoglams.myshopify.com",
    image: ono,
    text: "Onoglams is a custom Shopify Website created with Shopify Liquid",
    completed: true,
    tags: ["#Shopify", "#Liquid", "#Sass"],
  },
  {
    title: "Clock App",
    link: "https://ad-clock-app.netlify.app/",
    github: "https://github.com/AaronDukeUK/clockapp",
    image: clock,
    text: "A clock app displaying the current time, date and day of the week.",
    completed: true,
    tags: ["#React", "#Sass"],
  },
  {
    title: "Dick White Academy",
    link: "https://dickwhiteacademy.netlify.app/",
    github: "https://github.com/AaronDukeUK/DickWhiteAcademy",
    image: dwa,
    text: "Dick White Academy is a website for a local veterinary nurse college.",
    completed: true,
    tags: ["#Astro", "#Sanity", "#Sass"],
  },
]
