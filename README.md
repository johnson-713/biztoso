# Biztoso - Business Networking & Marketplace 🚀  

Biztoso is a **React & TypeScript** application designed for business networking and marketplace functionality.  
It allows businesses to create profiles, generate leads, manage listings, and chat in real time.  

---

## **🌟 Features**
### 🔹 **Business Profiles & Messaging**
- Create and edit business profiles with image uploads and real-time validation.  
- Live chat using **WebSockets**, with support for network interruptions.  

### 🔹 **Marketplace Listings**
- CRUD operations for product/service listings.  
- Multiple image uploads with client-side validations.  
- Lead generation with filtering and claiming functionality.  

### 🔹 **Lead Generation Module**
- Form for capturing business leads with **name, company, email, status, and purpose**.  
- Uses **React Query** & **Axios** to interact with a mock API.  
- **Status options:** New, Contacted, and Closed.  

### 🔹 **Advanced React Concepts**
- **TypeScript support** for better maintainability.  
- **React Query** for efficient data fetching and caching.  
- **React Context API** for global state management.  
- **Lazy Loading & Suspense** to optimize performance.  
- **Custom Hooks & Higher-Order Components** for modularity.  

---

## **🛠️ Tech Stack**
- **Frontend:** React.js (TypeScript), Tailwind CSS  
- **State Management:** React Query, Context API  
- **Networking:** Axios, WebSockets  
- **Routing:** React Router  
- **Performance:** Code Splitting, Memoization  

---

## **📦 Installation & Setup**
### **1️⃣ Clone the repository**
```sh
git clone https://github.com/yourusername/biztoso.git
cd biztoso



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
