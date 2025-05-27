interface ProjectData {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  web?: string;
  urlImage: string;
}
export const projectsData: ProjectData[] = [
  {
    id: "aicvanalizer",
    title: "AI CV Analizer",
    description:
      "AI CV Analizer es una aplicación web que permite analizar los CVs con la IA de Gemini y obtener una puntuacion.",
    urlImage:
      "https://pub-73fb1a1714204ef38ed19ef2f83d89a9.r2.dev/103_1x_shots_so.png",
    tags: ["#astro", "#nodejs", "#gemini", "#html", "#js"],
    github: "https://github.com/farfandavid/aicvanalizer",
  },
  {
    id: "ai_gemini_html_generator",
    title: "AI Gemini HTML Generator",
    description:
      "AI Gemini HTML Generator es una aplicación web que permite generar el HTML con la IA de Gemini.",
    urlImage:
      "https://pub-73fb1a1714204ef38ed19ef2f83d89a9.r2.dev/aihtmlgenerator.jpeg",
    tags: ["#astro", "#nodejs", "#gemini", "#html", "#js"],
    github: "https://github.com/farfandavid/ai_gemini_html_generator",
  },
  {
    id: "xintheria_ai",
    title: "Xintheria Hackathon Clerk",
    description:
      "Xintheria AI es una aplicación web que permite Crear un sition web utilizando la IA de Gemini",
    urlImage:
      "https://pub-73fb1a1714204ef38ed19ef2f83d89a9.r2.dev/xintheria-en.jpg",
    tags: ["#astro", "#nodejs", "gemini", "deepseek", "#react", "#html", "#js"],
    web: "https://xintheria-hackathon-clerk.onrender.com/",
    github: "https://github.com/farfandavid/xintheria-hackathon-clerk",
  },
  // Puedes añadir más objetos de proyecto aquí
];
