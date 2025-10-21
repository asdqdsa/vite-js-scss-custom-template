### 📦 Template Overview

A custom **Vite** + **JS** + **SASS** starter template that loosely follows FSD methodology.

`app` - application entry point (`index.js`, `style.sccs`)
`page` - page indexes/view composition (_e.g. home, profile_, etc.)
`feature` - isolated application features (_e.g theme-switcher_)
`shared` - general utilities, UI kit, infrastructer

The `shared` layer inludes (`uikit`, `utils`, `storage`):

- Modular SCSS architecture [**components**]
- Draft typography tokens and theme colors [**theme**]
- Reusable mixins and helper utilities [**core**]
- Atomic styles (Tailwind-like) [**atomic**]
- LocalStorage API for state persistence [**storage**]
- General helpers and constants [**utils**]

### 📦 Start

```bash
pnpm install # install
pnpm dev # dev → http://localhost:4444
pnpm build # build → dist
pnpm preview # preview → http://localhost:5555
```
