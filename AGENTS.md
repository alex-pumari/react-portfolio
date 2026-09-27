# react-portfolio

Portfolio personal tipo PowerPoint. React 19 + Vite 6 + SCSS + SWC.

## Comandos

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Docker Compose up (Vite en :5173) |
| `npm run dev:container` | `vite --host` (dentro del contenedor) |
| `npm run build` | `vite build` |
| `npm run test` | `vitest --project unit --run` |
| `npm run test:unit` | `vitest --project unit --run` (alias) |
| `npm run test:storybook` | `vitest --project storybook --run` (requiere `npx playwright install chromium`) |
| `npm run check:types` | `tsc --noEmit` |
| `npm run check:code` | `eslint .` (chequea `.ts/.tsx`, no `.js/.jsx`) |
| `npm run storybook` | `storybook dev -p 6006 --host localhost --no-open` |
| `npm run deploy` | `npm run build && gh-pages -d dist` |

**Importante**: `npm run test` y `test:unit` solo corren el proyecto "unit" de Vitest. `test:storybook` corre los tests browser con Playwright + Chromium.

## Toolchain quirks

- **`verbatimModuleSyntax`** + **`nodenext`**: todos los imports relativos de `.ts` usan extensión `.js` (ej: `from "./foo.js"`)
- **`exactOptionalPropertyTypes: true`**: pasar `undefined` explícito a un prop opcional es error de tipos. Condicionalizá el prop o declaralo como `prop?: T | undefined`.
- **`noUncheckedIndexedAccess: true`**: indexar arrays devuelve `T | undefined` — usar `noUncheckedIndexedAccess`-safe (`!`, optional chaining, defaults).
- **`noUnusedLocals` / `noUnusedParameters`**: activos. Un import o prop type que solo se usa en su propio archivo va sin `export`.
- **ESLint cubre `.ts/.tsx`**: `eslint.config.ts` usa `defineConfig` (API no-deprecated) + `typescript-eslint` recommended + `react-hooks` + `react-refresh` + `storybook` + `semi: always` + `quotes: double`.
- **Dos proyectos Vitest**: "unit" (happy-dom) y "storybook" (browser/playwright + Chromium). Config en `vite.config.ts`.
- **Barrel exports**: existen solo donde se usan. `logic/index.ts`, `types/index.ts` y `contexts/index.ts` — preferir imports directos a los barrels de `logic/` para evitar el ciclo con `repository-readme-content/index.ts`.
- **`allowJs` está apagado**: los archivos `.js`/`.jsx` no entran al typecheck. No confiar en que un import roto en un `.js` sea detectado.

## Arquitectura

```
index.html → src/main.tsx → app.tsx
                              ├── ViewContext.Provider (home | about-me | projects | contact)
                              ├── ZoomContext.Provider (%)
                              ├── FullScreenContext.Provider
                              └── Layout
                                  ├── Header (nav por íconos, theme toggle, acciones)
                                  ├── main#viewport > div#viewport-content  ← la view activa
                                  │   ├── home     → Home      (src/views/home)
                                  │   ├── about-me → AboutMe   (src/views/about-me)
                                  │   ├── projects → Projects  (src/views/projects, datos hardcodeados)
                                  │   └── contact  → Contact   (src/views/contact)
                                  ├── Footer (stepper de views, zoom, fullscreen, CV)
                                  └── IconButton de salida de fullscreen (condicional)
```

- **Views**: `app.tsx` resuelve `views[view]` del record en `layout/views.ts` y lo pasa como `children` de `Layout` (sin lazy loading)
- **Teclado**: `ArrowLeft`/`ArrowRight` navegan entre views, ignorando el input cuando estás escribiendo (`layout.tsx:42-64`)
- **Draggable**: hook propio en `hooks/use-draggable/`, soporte touch + mouse, transform-based
- **Zoom**: `ZoomContext` + `Trackbar`/`DropdownButton` en el footer, efecto vía `logic/set-element-zoom.ts` (fontSize en rem, origen `center` salvo en projects que usa `top`)
- **Tema**: CSS custom properties en `:root[data-scheme="light"|"dark"]` (`styles/global.scss`), toggle con `logic/change-theme.ts`
- **Componentes de UI**: `components/` — `button`, `dropdown-button`, `icon-button`, `panel`, `text-input`, `trackbar`, `window-card`, `modal`, `icons/`. Cada componente tiene su `.scss` sibling.
- **Clean-ish architecture**: `services/` → `adapters/` → `use-cases/` → `logic/` → `hooks/` → `components/`

### Pipeline de datos (aún no cableado)

`services/github-service.ts` + `use-cases/get-repository-details.ts` + `logic/repository-readme-content/` están implementados y testeados, pero **ningún componente los consume**: `views/projects/projects.tsx` usa `views/projects/projects-list.ts` (datos hardcodeados). Es una isla de código alcanzable solo desde sus propios tests. La intención es integrarlo a la view de projects; no borrar sin decidirlo.

## Known bugs / debt

- **`components/modal/modal.tsx:46`**: error de tipos por `exactOptionalPropertyTypes` al pasar `className` a `WindowCard`.
- **`components/modal/*.stories.tsx`**: 4 errores de tipos por `args` faltante en stories con `render`.
- **`views/home/home.stories.tsx`**: el test de `Playground` falla — `Home` usa `useViewContext` y la story no monta el `ViewContext.Provider`.
- **`types/repository-details.ts`**: importa `./index.js`, que re-exporta `repository-details.js` — ciclo dentro de `types/`.
- **`logic/index.ts` ↔ `logic/repository-readme-content/index.ts`**: ciclo mutuo (`parse-repository-readme-content.ts` importa `../index.js`, que lo re-exporta).
- **`views/projects/project-card.tsx:30`**: un `Button` por proyecto, con `window.open` sin `noopener,noreferrer`.

## Security gotchas

- **`window.open` sin `noopener,noreferrer`** en `views/contact/contact.tsx:18,23,28,33,48`, `views/projects/project-card.tsx:30` y `layout/footer/footer.tsx:59`.
- **`user-scalable=no`** en `index.html:5` — rompe WCAG 1.4.4 (zoom en mobile).

## Testing

- Tests unitarios con Vitest + happy-dom, co-located: `src/**/*.test.ts` (28 archivos)
- Tests para draggable, lógica de README parsing, y utilidades de `logic/`
- 13 stories de Storybook en `components/`, `layout/` y `views/`, corridas como tests browser con a11y assertions

## Deployment

- `gh-pages` a GitHub Pages con dominio custom `www.alexpumaridev.com.ar`
- `CNAME` en raíz del repo
- `.env` en `.gitignore`
