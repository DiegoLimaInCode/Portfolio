import { profile } from "./profile";

export interface SocialLink {
  label: string;
  url: string;
}

export const socialLinks = {
  github: { label: "GitHub", url: "https://github.com/DiegoLimaInCode" },
  linkedin: { label: "LinkedIn", url: "https://www.linkedin.com/in/diego-lima-118556288/" },
  email: { label: "E-mail", url: `mailto:${profile.email}` },
} as const satisfies Record<string, SocialLink>;
