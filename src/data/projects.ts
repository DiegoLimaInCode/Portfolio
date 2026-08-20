export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  status: string;
  repoUrl: string;
  context: string;
  solution: string;
  features: readonly string[];
  metrics: readonly ProjectMetric[];
  technologies: readonly string[];
  featured?: boolean;
  icon: "pos" | "api";
}

export const projects: readonly Project[] = [
  {
    id: "pdv-csharp",
    title: "Sistema PDV",
    type: "Ponto de venda desktop · C# e WPF",
    status: "funcional",
    repoUrl: "https://github.com/DiegoLimaInCode/PDV-CSharp",
    context:
      "Um ponto de venda precisa fechar o dia sem furo: quem abriu o caixa, o que saiu do estoque, como cada venda foi paga e quanto deveria ter na gaveta no fim do turno.",
    solution:
      "Construí a aplicação em quatro camadas — domínio, dados, aplicação e interface — para que as regras de negócio não dependessem da tela nem do banco. A persistência usa Entity Framework Core com migrations, e o acesso aos dados fica atrás de interfaces com Repository Pattern e injeção de dependência.",
    features: [
      "Login de operador com cargo",
      "Abertura e fechamento de caixa",
      "Venda com itens e cálculo de total",
      "Movimentação de estoque por venda",
      "Pagamento em cartão",
      "Resumo de fechamento por operador",
    ],
    metrics: [
      { value: "4", label: "camadas independentes" },
      { value: "11", label: "entidades modeladas" },
      { value: "6", label: "migrations aplicadas" },
    ],
    technologies: ["C#", ".NET", "WPF", "Entity Framework Core", "SQL", "MVVM"],
    featured: true,
    icon: "pos",
  },
];
