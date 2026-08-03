export interface NavigationItem {
  label: string;
  href: `#${string}`;
}

export const navigationItems: readonly NavigationItem[] = [
  { label: "Perfil", href: "#perfil" },
  { label: "Skills", href: "#competencias" },
  { label: "Cases", href: "#cases" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Disponível", href: "#disponibilidade" },
  { label: "Contato", href: "#contato" },
];
