import type { Project } from "./project.js";

export const projectsList: Project[] = [
  {
    id: 1,
    title: "ULPAN.EXE",
    description:
      "Plataforma para gestionar cursos de hebreo, profesores, inscripciones, calificaciones y pagos. Centraliza la administración académica e integra Mercado Pago y PayPal para facilitar la experiencia de alumnos.",
    isPublic: false,
    demoUrl: "https://ulpanim.org/",
    tags: [
      "React",
      "Laravel",
      "PHP",
      "PostgreSQL",
      "SCSS",
      "Bootstrap"
    ]
  },
  {
    id: 2,
    title: "AMIA.EXE",
    description:
      "Sistema de bolsa de trabajo con gestión de postulaciones, ofertas, usuarios y roles. Unifica procesos existentes e incorpora formularios dinámicos, encuestas y múltiples pasarelas de pago.",
    isPublic: false,
    demoUrl: "https://amia.forit.ar/",
    tags: [
      "React",
      "TypeScript",
      "Express",
      "MySQL",
      "Tailwind",
      "Docker"
    ]
  },
  {
    id: 3,
    title: "RECONOCIMIENTO_FORIT.EXE",
    description:
      "Plataforma interna para reconocer aportes de equipos de desarrollo, promoviendo colaboración, feedback positivo y métricas de reconocimiento para fortalecer la cultura organizacional y la mejora continua.",
    isPublic: false,
    demoUrl: "https://recognitions-app-1.onrender.com/",
    tags: [
      "Next",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Tailwind"
    ]
  }
];