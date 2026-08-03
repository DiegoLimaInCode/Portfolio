export type SkillIcon = "dotnet" | "api" | "database" | "automation" | "git" | "maintenance";

export interface SkillGroup {
  id: string;
  index: string;
  kicker: string;
  title: string;
  description: string;
  technologies: readonly string[];
  icon: SkillIcon;
  hasTilt: boolean;
}

export const skillGroups: readonly SkillGroup[] = [
  { id: "web-dotnet", index: "01", kicker: "Aplicações corporativas", title: "Sistemas Web .NET", description: "Construção de aplicações web com C#, ASP.NET MVC, Blazor e estrutura organizada para sustentar regras de negócio e interfaces claras.", technologies: ["C#", ".NET", "ASP.NET MVC", "Blazor"], icon: "dotnet", hasTilt: true },
  { id: "backend-apis", index: "02", kicker: "Contratos e integrações", title: "Backend e APIs", description: "Organização de regras de negócio, endpoints e integrações para conectar sistemas com contratos claros e manutenção previsível.", technologies: ["APIs", "ASP.NET", "Integrações", "Serviços"], icon: "api", hasTilt: true },
  { id: "sql", index: "03", kicker: "Base para decisões", title: "Banco de Dados SQL", description: "Modelagem, consultas e organização de dados relacionais para sustentar aplicações com informação consistente e fácil de evoluir.", technologies: ["SQL", "Modelagem", "Consultas", "Persistência"], icon: "database", hasTilt: false },
  { id: "n8n", index: "04", kicker: "Fluxos operacionais", title: "Automações com n8n", description: "Criação de fluxos automatizados para reduzir tarefas manuais, conectar webhooks, APIs e rotinas recorrentes com previsibilidade.", technologies: ["n8n", "Webhooks", "Workflows", "APIs"], icon: "automation", hasTilt: true },
  { id: "git", index: "05", kicker: "Evolução rastreável", title: "Git/GitHub e organização", description: "Versionamento, histórico de evolução e organização do código para facilitar colaboração, revisão e continuidade técnica.", technologies: ["Git", "GitHub", "Branches", "Revisão"], icon: "git", hasTilt: false },
  { id: "maintenance", index: "06", kicker: "Software sustentável", title: "Manutenção e evolução", description: "Melhorias incrementais, documentação e código claro para que sistemas continuem compreensíveis depois da primeira entrega.", technologies: ["Manutenção", "Documentação", "Clareza", "Evolução"], icon: "maintenance", hasTilt: true },
];
