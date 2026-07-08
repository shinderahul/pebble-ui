# UI Component Library (Storybook)

A reusable React component library built with **React**, **TypeScript**, **Vite**, **Storybook 10**, and **SCSS**.

---

## 🚀 Tech Stack

- React
- TypeScript
- Vite
- Storybook 10
- SCSS (Sass)
- ESLint
- Jest

---

## 📦 Installation

Clone the repository:

```bash
git clone <repository-url>
cd pebble-ui
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Development

Start the Vite development server:

```bash
npm run dev
```

---

## 📖 Storybook

Start Storybook:

```bash
npm run storybook
```

Build Storybook:

```bash
npm run build-storybook
```

---

## 📁 Project Structure

```
src
│
├── components
│   ├── Button
│   ├── Badge
│   ├── Card
│   ├── Avatar
│   └── Input
│
├── styles
│   ├── _variables.scss
│   └── globals.scss
│
└── index.ts
```

---

## 🎨 Styling

All components use **SCSS**.

Shared styles are available in:

```
src/styles
```

Example:

```scss
@use "../styles/variables" as *;
```

---

## 🧩 Components

| Component | Description |
|-----------|-------------|
| Button | Primary, Secondary, Danger buttons |
| Badge | Status badges |
| Card | Generic content container |
| Avatar | User profile image |
| Input | Text input |

---

## 🛠 Scripts

| Command | Description |
|---------|-------------|
| npm run dev | Start Vite |
| npm run build | Build library |
| npm run storybook | Start Storybook |
| npm run build-storybook | Build Storybook |
| npm run lint | Run ESLint |

---

## 📚 Creating a New Component

Example:

```
Button/
├── Button.tsx
├── Button.scss
├── Button.stories.tsx
└── index.ts
```

Export it:

```ts
export * from "./Button";
```

---

## ✨ Storybook

Each component should include:

- Stories
- Controls
- Documentation
- Accessibility support

Example:

```tsx
export default {
  title: "Components/Button",
  component: Button,
};
```

---

## 📐 Naming Convention

Component:

```
Button.tsx
```

Styles:

```
Button.scss
```

Stories:

```
Button.stories.tsx
```

## ✅ Import to other REPO
```
import { Badge } from 'shinderahul-pebble-ui'
import 'shinderahul-pebble-ui/styles.css'; // For now you can use direct style import. I am working on it where user don't need to add style import
```

---

## ✅ Best Practices

- Keep components small and reusable.
- Write TypeScript interfaces for all props.
- Use SCSS variables instead of hardcoded values.
- Export components from an `index.ts` file.
- Add Storybook stories for every component.
- Keep components accessible (ARIA attributes where applicable).

---

## 📄 License

MIT