export interface IBGEvent {
  title: string;
  date: string;
  startDate: string;
  endDate: string;
  description: string;
  type: "meet" | "camp" | "clinic" | "event";
  location: string;
}

export const events: IBGEvent[] = [
  {
    title: "Spring Break Camp",
    date: "March 17–21, 2026",
    startDate: "2026-03-17",
    endDate: "2026-03-21",
    description:
      "A week of gymnastics fun during spring break! Open to all skill levels, ages 4 and up.",
    type: "camp",
    location: "In Bound Gymnastics, 1908 North Slappey Blvd, Albany, GA 31701",
  },
  {
    title: "Parents Night Out",
    date: "April 12, 2026",
    startDate: "2026-04-12",
    endDate: "2026-04-12",
    description:
      "Drop off your kids for an evening of gymnastics, games, and pizza while you enjoy a night out!",
    type: "event",
    location: "In Bound Gymnastics, 1908 North Slappey Blvd, Albany, GA 31701",
  },
  {
    title: "Summer Camp Session 1",
    date: "June 2–6, 2026",
    startDate: "2026-06-02",
    endDate: "2026-06-06",
    description:
      "Our most popular camp! Full days of gymnastics instruction, games, crafts, and fun.",
    type: "camp",
    location: "In Bound Gymnastics, 1908 North Slappey Blvd, Albany, GA 31701",
  },
  {
    title: "Back Handspring Clinic",
    date: "June 14, 2026",
    startDate: "2026-06-14",
    endDate: "2026-06-14",
    description:
      "Intensive one-day clinic focused on perfecting your back handspring technique.",
    type: "clinic",
    location: "In Bound Gymnastics, 1908 North Slappey Blvd, Albany, GA 31701",
  },
];
