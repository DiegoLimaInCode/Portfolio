export type SkillIcon = "dotnet" | "react" | "database" | "architecture" | "git" | "maintenance";

export interface SkillGroup {
  id: string;
  index: string;
  kicker: string;
  title: string;
  description: string;
  technologies: readonly string[];
  icon: SkillIcon;
}

export const skillGroups: readonly SkillGroup[] = [
  {
    id: "backend-dotnet",
    index: "01",
    kicker: "Onde eu sou mais forte",
    title: "Backend em C# e .NET",
    description:
      "Construção de APIs e regras de negócio em C#, com endpoints de contrato claro e código organizado para sustentar o que a aplicação promete.",
    technologies: ["C#", ".NET", "ASP.NET MVC", "APIs REST"],
    icon: "dotnet",
  },
  {
    id: "frontend-react",
    index: "02",
    kicker: "A outra ponta",
    title: "Frontend em React e TypeScript",
    description:
      "Telas construídas em React com TypeScript, consumindo as próprias APIs que escrevo. Foi assim que entreguei os módulos do CRM na Saturnia.",
    technologies: ["React", "TypeScript", "Vite", "HTML e CSS"],
    icon: "react",
  },
  {
    id: "dados",
    index: "03",
    kicker: "Base de tudo",
    title: "Modelagem e banco de dados",
    description:
      "Modelagem relacional, consultas e persistência com PostgreSQL e SQL. No .NET uso Entity Framework Core com migrations para evoluir schema sem perder histórico.",
    technologies: ["PostgreSQL", "SQL", "Entity Framework Core", "Modelagem"],
    icon: "database",
  },
  {
    id: "arquitetura",
    index: "04",
    kicker: "Como eu organizo",
    title: "Arquitetura em camadas",
    description:
      "Separação entre domínio, dados, aplicação e interface, para que a regra de negócio não dependa da tela nem do banco. Repository Pattern, injeção de dependência e MVVM.",
    technologies: ["Camadas", "Repository", "Injeção de dependência", "MVVM"],
    icon: "architecture",
  },
  {
    id: "git",
    index: "05",
    kicker: "Trabalho em equipe",
    title: "Git e GitHub",
    description:
      "Versionamento com histórico legível, uso de branches para separar frentes de trabalho e commits que explicam a intenção da mudança.",
    technologies: ["Git", "GitHub", "Branches", "Pull requests"],
    icon: "git",
  },
  {
    id: "manutencao",
    index: "06",
    kicker: "Depois da entrega",
    title: "Manutenção e evolução",
    description:
      "Melhoria incremental de sistema que já está rodando, com documentação e código claro para que a próxima pessoa entenda sem precisar perguntar.",
    technologies: ["Refatoração", "Documentação", "Correções", "Evolução"],
    icon: "maintenance",
  },
];
