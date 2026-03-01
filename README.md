<p align="center">
  <h1 align="center">TikTiktoast 🔔 — Dynamic Island–Style Toast Notifications for Web Apps</h1>
  <p align="center">
    <strong>Dynamic Island–style toast notifications for web applications. Zero dependencies · Lightweight (~5KB gzipped) · Accessible · SSR-safe</strong>
  </p>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/tiktiktoast"><img src="https://img.shields.io/npm/v/tiktiktoast?style=flat-square&color=6366f1" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/tiktiktoast"><img src="https://img.shields.io/npm/dm/tiktiktoast?style=flat-square&color=22c55e" alt="npm downloads"></a>
  <a href="https://bundlephobia.com/package/tiktiktoast"><img src="https://img.shields.io/bundlephobia/minzip/tiktiktoast?style=flat-square&color=3b82f6&label=gzip" alt="bundle size"></a>
  <a href="https://github.com/ianpurifying/Tiktik"><img src="https://img.shields.io/github/stars/ianpurifying/Tiktik?style=flat-square&color=f59e0b" alt="GitHub stars"></a>
  <a href="https://github.com/ianpurifying/Tiktik"><img src="https://img.shields.io/github/forks/ianpurifying/Tiktik?style=flat-square&color=6366f1" alt="GitHub forks"></a>
  <a href="https://tiktiktoast.vercel.app"><img src="https://img.shields.io/website?down_color=red&down_message=offline&up_color=green&up_message=online&url=https%3A%2F%2Ftiktiktoast.vercel.app" alt="Live demo"></a>
</p>

---

## 🌟 Overview

TikTiktoast is a **Dynamic Island–style toast/notification library for web applications**.  
It is **lightweight (~5KB gzipped), zero dependencies, accessible, and SSR-safe**, built with **Vanilla JS + TypeScript + Web Animations API**.  

Perfect for **vanilla JavaScript, TypeScript, React, Next.js, Nuxt, or any modern framework**.

---

## ✨ Features

- **🏝️ Dynamic Island morphing** — Pill-to-card transitions with spring easing  
- **📚 Stacking & queue** — Max 5 visible, rest queued with animated reflow  
- **🔄 Promise tracking** — `loading → success/error` transitions in one API call  
- **🔁 Deduplication** — Same `id` updates toast in place with morph animation  
- **📊 Progress bar** — 2px WAAPI-animated countdown bar  
- **👆 Swipe to dismiss** — Rubber-band gesture (lazy-loaded module)  
- **🌐 RTL support** — Auto-detected, flips icons, text, and swipe direction  
- **♿ Accessible** — `role="alert"`, `aria-live`, keyboard navigation, `Alt+T` focus  
- **🖥️ SSR safe** — No `window`/`document` access at import time  
- **🎯 Zero dependencies** — Pure Vanilla JS + TypeScript + Web Animations API  
- **🎬 Reduced motion** — Respects `prefers-reduced-motion: reduce`  
- **🎨 Customizable** — CSS variables, custom icons, custom renderers  

---

## 📦 Installation

```bash
npm install tiktiktoast
```

```bash
yarn add tiktiktoast
```

```bash
pnpm add tiktiktoast
```

### CDN (No bundler)

```html
<script src="https://unpkg.com/tiktiktoast/dist/tiktik.umd.js"></script>
<script>
  Tiktik.success('Hello from CDN!')
</script>
```

---

## 🚀 Quick Start

```typescript
import { Tiktik } from 'tiktiktoast'

// One line. That's it.
Tiktik.success('Changes saved!')
Tiktik.error('Something went wrong.')
Tiktik.warning('Disk space running low.')
Tiktik.info('New update available.')
```

---

## 📖 API

### Type Shortcuts

```typescript
Tiktik.success(message, options?)  // ✓ green accent
Tiktik.error(message, options?)    // ✕ red accent
Tiktik.info(message, options?)     // ℹ blue accent
Tiktik.warning(message, options?)  // ⚠ orange accent
```

### `Tiktik.showToast(options)`

```typescript
Tiktik.showToast({
  message: 'Hello world',
  type: 'success',        // 'success' | 'error' | 'info' | 'warning'
  duration: 3000,         // ms, default: 3000. Use Infinity for persistent
  position: 'top',        // 'top' | 'bottom'
  icon: '<svg>...</svg>', // custom SVG string or SVGElement
  progress: true,         // show countdown progress bar
  id: 'unique-key',       // dedup key — same id updates in place
  onClick: () => {},
  onDismiss: () => {}
})
```

### `Tiktik.promise(promise, options)`

```typescript
Tiktik.promise(fetch('/api/save'), {
  loading: 'Saving...',
  success: (data) => `Saved! ${data.name}`,
  error:   (err) => `Failed: ${err.message}`,
  duration: 3000,
})
```

### `Tiktik.dismiss(id?)`

```typescript
const id = Tiktik.success('Dismissible')
Tiktik.dismiss(id)   // dismiss one
Tiktik.dismiss()     // dismiss all
```

### `Tiktik.configure(defaults)`

```typescript
Tiktik.configure({
  type: 'info',
  duration: 5000,
  position: 'bottom',
  progress: true,
})
```

### `Tiktik.onStackChange(listener)`

```typescript
Tiktik.onStackChange((visible, queued) => {
  console.log(`Visible: ${visible}, Queued: ${queued}`)
})
```

---

## 🎨 CSS Customization

Override CSS variables on `:root`:

```css
:root {
  --tiktik-bg: #1a1a2e;
  --tiktik-text: #ffffff;
  --tiktik-radius-pill: 9999px;
  --tiktik-radius-card: 24px;
  --tiktik-shadow: 0 4px 16px rgba(0,0,0,0.3);
  --tiktik-z-index: 999999;
  --tiktik-font-size: 14px;
  --tiktik-duration: 320ms;
}
```

---

## 📏 Bundle Size

| Chunk           | Size (gzip) |
| --------------- | ----------- |
| **Base**        | ~5 KB       |
| Gestures (lazy) | ~0.75 KB    |
| Promise (lazy)  | ~0.5 KB     |

> Gesture and promise modules are **lazy-loaded**. Initial bundle stays lean.

---

## 🌐 Browser Support

All modern browsers with [Web Animations API](https://caniuse.com/web-animation) support:

| Chrome | Firefox | Safari | Edge |
| ------ | ------- | ------ | ---- |
| 36+    | 48+     | 13.1+  | 79+  |

---

## 🤝 Contributing

Contributions welcome! Open an issue or submit a pull request.

---

## 📄 License

[MIT](LICENSE) — Free for personal and commercial use.

---

## 📌 Links

* **NPM:** [https://www.npmjs.com/package/tiktiktoast](https://www.npmjs.com/package/tiktiktoast)
* **Homepage / Live Demo:** [https://tiktiktoast.vercel.app](https://tiktiktoast.vercel.app)
* **Documentation:** [https://tiktiktoast.vercel.app/docs](https://tiktiktoast.vercel.app/docs)
* **Repository:** [https://github.com/ianpurifying/Tiktik](https://github.com/ianpurifying/Tiktik)
