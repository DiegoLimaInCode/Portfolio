import apiProjectImage from "../assets/projects/project-apis-integration.jpg";
import n8nProjectImage from "../assets/projects/project-n8n-automation.jpg";

export interface Project {
  id: string;
  title: string;
  type: string;
  status: string;
  context: string;
  solution: string;
  technologies: readonly string[];
  image: string;
  imageAlt: string;
  featured?: boolean;
  icon: "automation" | "api";
}

export const projects: readonly Project[] = [
  {
    id: "n8n-automation",
    title: "Automações com n8n",
    type: "Workflows e integrações",
    status: "em evolução",
    context: "Fluxos criados para reduzir tarefas manuais, conectar sistemas, organizar dados e acelerar processos repetitivos.",
    solution: "Automatizar etapas operacionais com webhooks, APIs e JavaScript, mantendo previsibilidade e leitura clara do fluxo.",
    technologies: ["n8n", "APIs", "Webhooks", "JavaScript"],
    image: n8nProjectImage,
    imageAlt: "Visual de fluxos de automação com n8n conectando webhooks, APIs e rotinas",
    featured: true,
    icon: "automation",
  },
  {
    id: "apis-integration",
    title: "APIs e Integrações",
    type: "Backend e comunicação",
    status: "em construção",
    context: "Estudos e implementações focadas em integração entre sistemas, organização de dados, backend e comunicação via APIs.",
    solution: "Construir endpoints e rotinas de integração com contratos claros, SQL organizado e código preparado para manutenção.",
    technologies: ["C#", ".NET", "SQL", "APIs REST"],
    image: apiProjectImage,
    imageAlt: "Visual de APIs REST e integração entre serviços backend",
    icon: "api",
  },
];


