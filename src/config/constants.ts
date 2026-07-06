export const PAGE_NAMES = ["Inicio", "Sobre mi", "Proyectos", "Contacto"] as const;
export const THEMES = ["Light", "Dark"] as const;
export const ZOOM_VALUES = [60, 80, 100, 120, 140] as const;

export const GITHUB_USERNAME = "AlexRubenPumari";
export const GITHUB_API_BASE = "https://api.github.com";
export const REPOSITORIES_URL = `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos`;
export const GITHUB_IMAGE_BASE_URL = "https://raw.githubusercontent.com";