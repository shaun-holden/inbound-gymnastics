export interface Testimonial {
  quote: string;
  name: string;
  relationship: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "My daughter has grown so much since joining In Bound. The coaches truly care about each child and their individual progress.",
    name: "Happy Parent",
    relationship: "Parent of Beginners student",
  },
  {
    quote:
      "The competitive team program pushed my son to new heights. He went from beginner to state competitor in just two years.",
    name: "Proud Parent",
    relationship: "Parent of Competitive Team member",
  },
  {
    quote:
      "We hosted our daughter's birthday party here and it was amazing! The staff handled everything and the kids had a blast.",
    name: "Party Host",
    relationship: "Birthday Party customer",
  },
  {
    quote:
      "In Bound feels like family. The coaches know every child by name and celebrate every achievement, big or small.",
    name: "IBG Family",
    relationship: "Parent of Shooting Stars student",
  },
];
