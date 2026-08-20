export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  arrangement: string;
  summary: string;
  achievements: readonly string[];
  technologies: readonly string[];
}

export const experienceEntries: readonly ExperienceEntry[] = [
  {
    id: "saturnia",
    company: "Saturnia Tecnologia",
    role: "Desenvolvedor Full Stack · Estágio",
    period: "Maio de 2026 – Agosto de 2026 · 4 meses",
    arrangement: "Remoto · empresa em São Paulo",
    summary:
      "Evoluí o CRM comercial da empresa atuando nas duas pontas: interface em React com TypeScript e API em C#/.NET com PostgreSQL. O produto saiu de uma versão inicial e chegou a plataforma pronta para venda.",
    achievements: [
      "Entreguei 9 módulos completos do CRM, do frontend à API.",
      "Construí telas em React e TypeScript consumindo endpoints próprios em C#/.NET.",
      "Modelei e consultei dados em PostgreSQL para sustentar os módulos entregues.",
      "Acompanhei o produto de uma versão inicial até ficar pronto para comercialização.",
    ],
    technologies: ["React", "TypeScript", "C#", ".NET", "PostgreSQL", "API REST", "Git/GitHub"],
  },
];
