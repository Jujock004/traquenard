export type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  rotation: number;
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Jazzy Vic",
    role: "DJ",
    image: "/images/jazzy.jpg",
    rotation: -1.5,
  },
  {
    id: 2,
    name: "SFK",
    role: "DJ",
    image: "/images/sfk.jpg",
    rotation: 1.5,
  },
  {
    id: 3,
    name: "Tsong",
    role: "DJ",
    image: "/images/tsong.jpg",
    rotation: -1,
  },
  {
    id: 4,
    name: "Paulo",
    role: "DJ",
    image: "/images/paulo.jpg",
    rotation: 2,
  },
];
