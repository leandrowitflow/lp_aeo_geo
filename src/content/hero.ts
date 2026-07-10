export const heroContent = {
  h1: "Why Isn't AI Recommending Your Business?",
  subtitle:
    "Discover how to prepare your website to be found, understood and recommended by search engines and AI-powered platforms.",
  eventInformation: {
    heading: "Event Information",
    items: [
      { icon: "calendar", label: "22 July 2026" },
      { icon: "clock", label: "3:00 PM" },
      { icon: "location", label: "UAlg TEC Campus" },
    ],
  },
  cta: "Reserve your place",
} as const;

export type HeroEventIcon =
  (typeof heroContent.eventInformation.items)[number]["icon"];
