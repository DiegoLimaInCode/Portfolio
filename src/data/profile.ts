export interface ProfileStat {
  value: string;
  label: string;
}

export const profile = {
  name: "Diego Lima",
  role: "Desenvolvedor Full Stack .NET",
  location: "Rio de Janeiro e remoto",
  email: "diegolimabarenco@gmail.com",
  headline: "Sou Diego Lima e construo aplicações .NET do banco de dados até a tela.",
  tagline: "No estágio na Saturnia Tecnologia entreguei 9 módulos do CRM comercial, do frontend em React à API em C#/.NET.",
  bio: "Trabalho nas duas pontas: modelo o banco, escrevo a API em C# e construo a interface que consome ela. Fora do trabalho mantenho um sistema de ponto de venda em C# e WPF com o código aberto, onde treino arquitetura em camadas e Entity Framework Core. Curso Engenharia de Software na UVA e estou aberto a vagas de estágio, júnior e trainee.",
  stats: [
    { value: "9", label: "módulos no CRM" },
    { value: "4", label: "camadas no PDV" },
    { value: "6", label: "migrations" },
  ] satisfies readonly ProfileStat[],
  focus: ["API em C#/.NET", "Interface em React", "PostgreSQL e SQL", "Arquitetura em camadas"],
  stack: [
    "C#",
    ".NET",
    "ASP.NET MVC",
    "React",
    "TypeScript",
    "PostgreSQL",
    "SQL",
    "Entity Framework Core",
    "WPF",
    "Git/GitHub",
  ],
} as const;
