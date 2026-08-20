export interface EducationEntry {
  id: string;
  institution: string;
  course: string;
  status: string;
  description: string;
  subjects: readonly string[];
}

export const educationEntries: readonly EducationEntry[] = [
  {
    id: "uva",
    institution: "Universidade Veiga de Almeida (UVA)",
    course: "Engenharia de Software",
    status: "Graduação em andamento · conclusão prevista em 2030",
    description:
      "Formação voltada à construção e evolução de sistemas, conectando fundamentos de engenharia, programação, modelagem de dados e arquitetura à prática que exerço com .NET.",
    subjects: ["Engenharia de Software", "Estruturas de Dados", "Banco de Dados", "Arquitetura de Sistemas"],
  },
];
