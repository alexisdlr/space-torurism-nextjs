export type CrewMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
};

export const crewMembers: CrewMember[] = [
  {
    name: "Douglas Hurley",
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: "/assets/crew/image-douglas-hurley.webp",
    imageWidth: 524,
    imageHeight: 604,
  },
  {
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. He became the first citizen of an independent African country to travel to space.",
    image: "/assets/crew/image-mark-shuttleworth.webp",
    imageWidth: 524,
    imageHeight: 604,
  },
  {
    name: "Victor Glover",
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18 fighter jet.",
    image: "/assets/crew/image-victor-glover.webp",
    imageWidth: 524,
    imageHeight: 654,
  },
  {
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist and the first self-funded woman to fly to the International Space Station.",
    image: "/assets/crew/image-anousheh-ansari.webp",
    imageWidth: 524,
    imageHeight: 604,
  },
];
