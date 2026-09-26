# 📋 Portafolio web personal
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![Sass](https://img.shields.io/badge/Sass-1.89.2-cc6699?style=for-the-badge&logo=sass&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)

![Imagen del Proyecto](readme/img1.jpg)

Un portafolio interactivo con una interfaz de usuario inspirada en PowerPoint. Desarrollado con HTML, Sass para estilos, JavaScript para la lógica y React para la estructura dinámica.

  <div align="center">
    <a href="https://youtu.be/RaP0u8aqNzc" target="_blank">
      <img src="https://img.shields.io/badge/Ver_demo-red?style=for-the-badge&logo=youtube&logoColor=white&color=FF0000&labelColor=FF0000" alt="Ver demo">
    </a>
    <a href="https://www.alexpumaridev.com.ar/" target="_blank">
      <img src="https://img.shields.io/badge/Probar_demo-blue?style=for-the-badge&logo=rotaryinternational&logoColor=white&color=0078D6&labelColor=0078D6" alt="Probar demo">
    </a>
  </div>  
  <br>

  📚 Cosas que aprendí
- Bases de React: Me introduje en la creación de componentes y el uso de JSX. Aprendí a manejar estado y props para construir interfaces dinámicas.
- Preprocesador de CSS: Usé Sass para organizar estilos de forma más eficiente. Apliqué variables, anidación y mixins para evitar repetición.
- Estilos en proyectos: Me di cuenta de que, aunque Sass agiliza el trabajo, no es suficiente para proyectos más complejos. Necesito probar otros métodos más escalables y modernos.
---

## 📁 Estructura del Proyecto

```
react-portfolio/
├── 📁 public/                  
│   └── 📁 favicons/             # Conjunto de Favicons
├── 📁 src/
│   ├── 📁 adapters/             # Adaptadores de información
│   ├── 📁 assets/               # Imagenes y PDFs
│   ├── 📁 components/           # Componentes de React
│   ├── 📁 config/               # Ajustes y constantes
│   ├── 📁 contexts/             # Contextos de React
│   ├── 📁 hooks/                # Customs Hooks de React
│   ├── 📁 layout/               # Header, Footer y el switch de vistas
│   ├── 📁 logic/                # Lógica de negocio
│   ├── 📁 services/             # Servicios de datos
│   ├── 📁 styles/               # Estilos y configuraciones del mismo
│   ├── 📁 types/                # Tipos compartidos
│   ├── 📁 use-cases/            # Casos de uso
│   ├── 📁 views/                # Vistas (home, about-me, projects, contact)
│   ├── app.tsx 
│   └── main.tsx 
└── README.md
```

---

## 🚀 Instalación

### Requisitos previos
- Node.js 18+ 
- npm or yarn

### 1. Clonar este repositorio
```bash
git clone https://github.com/AlexRubenPumari/react-portfolio.git
cd react-portfolio
```

### 2. Instalar dependencias
```bash
npm install
```

---

## 🚀 Ejecutando el proyecto

### Inicializar el Servidor de Desarrollo
```bash
npm run dev
```
El servidor se aloja por defecto en: `http://localhost:5173`

### Inicializar el Servidor de Desarrollo fuera del contenedor
```bash
npm run dev:container
```
El servidor se aloja por defecto en: `http://localhost:5173`

### Inicializar Storybook
```bash
npm run storybook
```
Storybook se aloja en: `http://localhost:6006`