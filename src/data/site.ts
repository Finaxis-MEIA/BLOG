export const site = {
  name: "Finaxis",
  slogan: "Reasoning through finance.",
  description: "Weekly updates from six Master's in AI Engineering students working on four AI challenges in finance."
};

export const challenges = [
  {
    number: "01",
    slug: "expert-system",
    title: "Expert System",
    status: "Completed",
    description: "Development of an Expert System for the automatic approval of automotive credit.",
    topics: ["Knowledge engineering", "Drools", "Prolog"],
    art: { src: "art/expert-system.svg", alt: "A loan application passing through knock-out rules and a fuzzy score, ending in approve, manual review or reject" }
  },
  {
    number: "02",
    slug: "startup-funding",
    title: "Startup Funding",
    status: "Active",
    description: "Using funding-round data from startups worldwide to predict which ones succeed and to support investment decisions.",
    topics: ["Machine learning", "Decision making", "Venture data"],
    art: { src: "art/startup-funding.svg", alt: "Funding rounds from seed to exit, with fewer startups reaching each round" }
  },
  {
    number: "03",
    slug: "challenge-three",
    title: "Challenge Three",
    status: "Upcoming",
    description: "Not started yet.",
    topics: []
  },
  {
    number: "04",
    slug: "challenge-four",
    title: "Challenge Four",
    status: "Upcoming",
    description: "Not started yet.",
    topics: []
  }
];

export type Challenge = (typeof challenges)[number] & { art?: { src: string; alt: string } };
export const challengeBySlug = (slug: string) => challenges.find((item) => item.slug === slug) as Challenge | undefined;
