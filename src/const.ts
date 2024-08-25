
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
        id: "snapmenu",
        title: "SnapMenu",
        description: "SnapMenu es una aplicación web que permite a los restaurantes publicar sus menús de forma digital y a los clientes acceder a ellos de forma rápida y sencilla.",
        urlImage: "https://cdn.snapmenu.online/og.webp",
        web: "https://www.snapmenu.online",
        tags: ["#nodejs", "#astro", "#reactjs", "#html", "#js"]
    },
    {
        id: "aicvanalizer",
        title: "AI CV Analizer",
        description: "AI CV Analizer es una aplicación web que permite analizar los CVs con la IA de Gemini y obtener una puntuacion.",
        urlImage: "https://cdn.snapmenu.online/103_1x_shots_so.png",
        tags: ["#astro", "#nodejs", "#gemini", "#html", "#js"],
        web: "https://www.aicvanalizer.online"
    }
    // Puedes añadir más objetos de proyecto aquí
];