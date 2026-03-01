export interface IBGEvent {
  title: string;
  date: string;
  description: string;
  type: "meet" | "camp" | "clinic" | "event";
}

export const events: IBGEvent[] = [
  {
    title: "Spring Break Camp",
    date: "March 17–21, 2026",
    description:
      "A week of gymnastics fun during spring break! Open to all skill levels, ages 4 and up.",
    type: "camp",
  },
  {
    title: "Parents Night Out",
    date: "April 12, 2026",
    description:
      "Drop off your kids for an evening of gymnastics, games, and pizza while you enjoy a night out!",
    type: "event",
  },
  {
    title: "Summer Camp Session 1",
    date: "June 2–6, 2026",
    description:
      "Our most popular camp! Full days of gymnastics instruction, games, crafts, and fun.",
    type: "camp",
  },
  {
    title: "Back Handspring Clinic",
    date: "June 14, 2026",
    description:
      "Intensive one-day clinic focused on perfecting your back handspring technique.",
    type: "clinic",
  },
];
