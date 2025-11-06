import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Vishal Kapur",
  EMAIL: "",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Posts",
};

export const BLOG: Metadata = {
  TITLE: "Vishal Kapur",
  DESCRIPTION: "Posts",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://twitter.com/figelwump",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/figelwump"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/vishalkapur4",
  }
];
