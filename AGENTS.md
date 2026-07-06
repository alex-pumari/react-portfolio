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
| `npm run test:storybook` | `vitest --project storybook --run` |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run lint` | `eslint .` (chequea `.ts/.tsx`, no `.js/.jsx`) |
| `npm run storybook` | `storybook dev -p 6006 --host` |
| `npm run deploy` | `npm run build && gh-pages -d dist` |

**Importante**: `npm run test` y `test:unit` solo corren el proyecto "unit" de Vitest. `test:storybook` corre los tests browser con Playwright + Chromium.

## Toolchain quirks

- **`verbatimModuleSyntax`** + **`nodenext`**: todos los imports `.ts` usan extensión `.js` (ej: `from "./foo.js"`)
- **ESLint now covers `.ts/.tsx`**: `eslint.config.ts` usa `defineConfig` (API no-deprecated) + `typescript-eslint` recommended + `react-hooks` + `react-refresh` + `storybook` + `semi: always` + `quotes: double`. Archivos TypeScript tienen linting completo.
- **Dos proyectos Vitest**: "unit" (jsdom) y "storybook" (browser/playwright + Chromium). Config en `vite.config.ts`.
- **Dos componentes `Button`**: `components/interface/button/` (Win98-style) y `components/pages/button/` (rounded purple). No confundir.
- **Barrel exports**: `logic/index.ts` re-exporta `repository-readme-content/index.ts`, que re-exporta `parse-repository-readme-content.ts` — potencial circular dependency. Preferir imports directos.

## Arquitectura

```
index.html → src/main.tsx → App.tsx
                              ├── PageContext.Provider (page 1-4)
                              ├── ZoomContext.Provider (60/80/100/120/140)
                              ├── FullScreenContext.Provider
                              ├── Header (flaps de navegación, theme toggle, acciones)
                              ├── Viewport (switchea páginas por número)
                              │   ├── page=1 → IndexPage
                              │   ├── page=2 → AboutMePage
                              │   ├── page=3 → RepositoriesPage (hardcodeada)
                              │   └── page=4 → ContactPage
                              └── Footer (stepper, zoom slider, fullscreen)
```

- **Pages** switcheadas con `{page === N && <Page />}` en Viewport (sin lazy loading)
- **Draggable**: hook propio en `use-draggable/`, soporte touch + mouse, transform-based
- **Zoom**: hook `use-zoomable` (pinch/scroll) + Trackbar + efecto vía `fontSize` en rem
- **Tema**: CSS custom properties en `:root` / `:root[data-scheme="dark"]`, toggle con `change-theme.ts`
- **Clean-ish architecture**: `services/` → `adapters/` → `use-cases/` → `logic/` → `hooks/` → `components/`

## Known bugs / dead code

- **`logic/get-page.ts:5-7`**: `findIndex` + 1 da `0` en no-encontrado, pero el `if (page < 0)` nunca se cumple. Debería ser `page <= 0`.
- **`hooks/use-draggable/logic/create-initial-state.ts:1`**: import `./drag-state.js` debería ser `../drag-state.js`.
- **`hooks/use-draggable/index.ts.ts`**: nombre con doble extensión `.ts.ts` — renombrar a `index.ts`.
- **`contexts/repositories.jsx`** y **`hooks/useRepositories.js`**: dead code. Importan `'../services/repositories'` que no existe.
- **`components/pages/repositories-page/repositories-page.tsx`**: datos hardcodeados (líneas 9-106). Los imports de `getRepositoriesDetails` y `githubService` no se usan.

## Security gotchas

- **`window.open` sin `noopener,noreferrer`** en varios lugares (`header.tsx`, `index-page.tsx`, `contact-page.tsx`).
- **`user-scalable=no`** en `index.html:5` — rompe WCAG 1.4.4 (zoom en mobile).

## Testing

- Tests unitarios con Vitest + jsdom, co-located: `src/**/*.test.ts`
- Tests para draggable, lógica de README parsing, utilidades.
- Sin stories de Storybook todavía (solo config presente).

## Deployment

- `gh-pages` a GitHub Pages con dominio custom `www.alexpumaridev.com.ar`
- `CNAME` en raíz del repo
- `.env` en `.gitignore`
