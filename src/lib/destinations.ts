export type Destination = {
  name: string;
  modelPath: string;
  description: string;
  distance: string;
  travel: string;
};

export const destinations: Destination[] = [
  {
    name: "Moon",
    modelPath: "/models/moon-v3.glb",
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    modelPath: "/models/mars.glb",
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    modelPath: "/models/europa-v1.glb",
    description:
      "The smallest of the four Galilean moons and the second-closest to Jupiter, Europa is about 90% the size of Earth's Moon. Its subsurface ocean makes it one of the most promising places to look for life beyond Earth.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    modelPath: "/models/titan-v2.glb",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). A perfect place to take a long vacation and enjoy the lakes and dunes.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];
