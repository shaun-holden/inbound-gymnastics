export interface StaffMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

export const staff: StaffMember[] = [
  {
    name: "Staff Member",
    role: "Owner / Head Coach",
    bio: "Leading In Bound Gymnastics since 2005 with a passion for developing young athletes and building champions.",
  },
  {
    name: "Coach",
    role: "Competitive Team Coach",
    bio: "Experienced coach specializing in competitive gymnastics training and meet preparation.",
  },
  {
    name: "Coach",
    role: "Recreational Coach",
    bio: "Dedicated to making gymnastics fun and accessible for athletes of all ages and skill levels.",
  },
];
