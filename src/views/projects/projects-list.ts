import type { Project } from "./project.js";

export const projectsList: Project[] = [
  {
    id: 1,
    title: "ULPAN.EXE",
    description:
      "Plataforma para gestionar cursos de hebreo, profesores, inscripciones, calificaciones y pagos. Centraliza la administración académica e integra Mercado Pago y PayPal para facilitar la experiencia de alumnos.",
    isPublic: false,
    demoUrl: "https://ulpanim.org/",
    responsibilities: [
      "Participé en el desarrollo frontend y backend de nuevas funcionalidades dentro de la plataforma.",
      "Realicé testing manual y automatizado usando PHPUnit para validar el correcto funcionamiento de las funcionalidades.",
      "Creé documentación técnica y manuales de usuario para facilitar el uso y mantenimiento del sistema."
    ],
    learnings: [
      "Fue mi primer proyecto profesional usando PHP, Laravel y Blade.",
      "Aprendí a trabajar con Bootstrap y Sass para desarrollar estilos más organizados y escalables.",
      "Entendí cómo funcionan los ORM a partir del ORM de Laravel y cómo facilitan la comunicación con la base de datos.",
      "Pude aplicar conceptos de programación orientada a objetos en un proyecto real.",
      "Gané experiencia usando PostgreSQL, React y JavaScript.",
      "Trabajé bajo las metodologías ágiles y dentro de un equipo de desarrollo."
    ],
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
    responsibilities: [
      "Desarrollé funcionalidades completas tanto del lado frontend como backend.",
      "Participé en el desarrollo de nuevas features y mejoras sobre funcionalidades existentes.",
      "Realicé testing manual y automatizado usando Storybook, Vitest y Cypress.",
      "Trabajé en la documentación técnica y en manuales de usuario para acompañar las nuevas funcionalidades.",
      "Trabajé con TypeORM para definir y gestionar los modelos de datos de la aplicación.",
      "Usamos Claude Code y OpenCode para agilizar el desarrollo, corregir PRs y encontrar vulnerabilidades."
    ],
    learnings: [
      "Aprendí a usar Docker para crear y administrar entornos de desarrollo.",
      "Me capacité más en React, Express y TypeScript trabajando sobre un proyecto real.",
      "Aprendí a usar Tailwind CSS para construir interfaces de forma más eficiente.",
      "Adquirí experiencia usando bases de datos como MySQL y SQLite.",
      "Incorporé buenas prácticas de Clean Code y arquitectura limpia.",
      "Aprendí sobre integración de pasarelas de pago y manejo de webhooks.",
      "Conocí nuevas herramientas de productividad como skills, comandos y MCPs aplicados al desarrollo con IA."
    ],
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
    responsibilities: [
      "Diseñé interfaces y experiencias de usuario usando Figma como herramienta de diseño.",
      "Pasé diseños UI/UX a código creando componentes funcionales dentro de la aplicación."
    ],
    learnings: [
      "Aprendí a desarrollar aplicaciones usando Next.js.",
      "Me familiaricé mucho más con Tailwind CSS para crear interfaces a partir de diseños definidos.",
      "Incorporé el uso de Vitest para realizar pruebas automatizadas.",
      "Aprendí más sobre arquitectura limpia y organización de proyectos."
    ],
    tags: [
      "Next",
      "TypeScript",
      "Express",
      "PostgreSQL",
      "Tailwind"
    ]
  }
];