export interface SocialLink {
  label: string;
  url: string;
}

export const socialLinks = {
  github: { label: "GitHub", url: "https://github.com/DiegoLimaInCode" },
  linkedin: { label: "LinkedIn", url: "https://www.linkedin.com/in/diego-lima-118556288/" },
} as const satisfies Record<string, SocialLink>;
