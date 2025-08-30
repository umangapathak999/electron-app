# Electron App Template

This is a starter Electron app with React, Vite, and TypeScript.

---

## Overview

This project provides a ready-to-use Electron + React + Vite + TypeScript setup. It helps developers quickly bootstrap desktop applications without worrying about the initial configuration.

**Features:**

- Electron for cross-platform desktop apps
- React for UI components
- Vite for fast development and HMR
- TypeScript for type safety
- Preconfigured scripts for development and production builds

---

## Getting Started

### 1. Create a new project

```bash
npx github:umangapathak999/electron-app <project-name>
cd <project-name>
````

### 2. Install dependencies

```bash
npm install
```

### 3. Run the app in development mode

```bash
npm run dev
```

* Launches Vite for React frontend
* Electron opens the desktop app automatically

### 4. Build for production

```bash
npm run build
```

* Generates `dist` for frontend
* Compiles Electron code to `dist-electron`

### 5. Run Electron app directly

```bash
npm run electron
```

---

## Project Structure

```
<project-name>/
├── package.json         # Project metadata and scripts
├── src/                 # React frontend source code
├── electron/            # Electron main and preload scripts
├── public/              # Static assets
├── tsconfig.*.json      # TypeScript configurations
├── vite.config.ts       # Vite configuration
└── README.md            # This file
```

---

## Scripts

| Script             | Description                                         |
| ------------------ | --------------------------------------------------- |
| `npm run dev`      | Run React + Electron in development with hot reload |
| `npm run build`    | Build frontend and Electron for production          |
| `npm run electron` | Start Electron directly without dev server          |
| `npm run lint`     | Lint the project using ESLint                       |
| `npm run preview`  | Preview the production build of the frontend        |

---

## Contributing

Feel free to fork, create issues, or submit pull requests to improve this starter template.

---

## License

MIT License

