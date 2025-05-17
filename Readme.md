# 🎉 LC Waikiki Clone Project 🎉

Welcome to my **LC Waikiki** clone—a fully responsive, modern e-commerce site built with **HTML**, **CSS**, **JavaScript(React)**, and **SCSS/Sass**! 💙🛍️

---

## 🚀 Features

- **Responsive Design** using dynamic `@include respond(...)` media mixins 🖥️📱  
- **Fluid Typography** with a custom `clamp()`-based **fluid-text** mixin for perfect scaling 📐🔠  
- **SCSS/Sass Mixins & Functions** for DRY, maintainable styles ✨  
- **Dynamic Sass Functions** for color manipulation, spacing, and more 🎨🔧  
- **BEM Methodology** for clear, modular CSS architecture 🏗️  

---

## 🛠️ Tech Stack

- **HTML5/CSS**  
- **JavaScript (ES6+)**
- **React**
- **SCSS/Sass**  
  - ✨ Custom Mixins (responsive grids, fluid text, theme variables)  
  - ⚙️ Functions for calculations (e.g., `rem()`, color lighten/darken)  
  - 📱 Dynamic media queries via `respond()` mixin  

---

## 🔍 Highlights

1. **Dynamic Breakpoints**  
   ```scss
   @include respond('max', $tablet) { ... }
   @include respond('min', $desktop) { ... }
   @include fluid-text(...)
   ...