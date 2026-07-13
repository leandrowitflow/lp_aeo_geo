export const panelContent = {
  heading: "Panel Discussion",
  description:
    "This won't be another one-hour PowerPoint presentation. Instead, we're bringing together industry specialists for an open discussion where you'll be encouraged to ask questions, share your perspective and explore real website examples.",
  host: {
    label: "Host",
    note: "Jessica will guide the conversation, moderate questions, and keep the discussion open for the audience.",
    name: "Jessica Costa",
    role: "Executive Director",
    company: "Algarve STP",
    photo: "/images/panel/jessica.jpeg",
  },
  speakers: {
    label: "Speakers",
    people: [
      {
        name: "Carlos Justino",
        role: "Head of AI & Growth",
        company: "Flow Productions",
        photo: "/images/panel/carlos.png",
      },
      {
        name: "José Carvalho",
        role: "CXO & UI Designer",
        company: "Flow Productions",
        photo: "/images/panel/jose.jpeg",
      },
      {
        name: "Mariana Rocha",
        role: "Head of Marketing & Communications",
        company: "Flow Productions",
        photo: "/images/panel/mariana.jpeg",
      },
    ],
  },
} as const;

export type PanelPerson =
  | typeof panelContent.host
  | (typeof panelContent.speakers.people)[number];
