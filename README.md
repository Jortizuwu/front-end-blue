# Frontend Technical Test

## 🚀 Getting Started

These instructions will help you run the project locally for development and testing purposes.

For deployment instructions, please refer to the **Deployment** section.

---

## 📋 Prerequisites

To run this project, you need one of the following installed:

- **Node.js** (recommended)

---

## ⚙️ Installation & Running the Project

### Local setup (Node.js >= 18)

Install dependencies:

```bash
yarn install
# or
npm install
```

---

## 🔐 Environment Variables

This project uses environment variables to configure external services.

Create a `.env` file in the root of the project and add the following variable:

```env
VITE_API_URL=value-env
```

> ⚠️ **Important**: Since this project uses **Vite**, all environment variables must be prefixed with `VITE_` to be accessible in the frontend.

You can access this variable in the code using:

```ts
import.meta.env.VITE_API_URL;
```

---

Start the development server:

```bash
yarn dev
# or
npm run dev
```

---

## 🦴 Folder Structure

```
.
├── src                         # Application source code
│   ├── assets                  # Icons, images, fonts
│   ├── core                    # router and pages
│   ├── lib                     # utils funtions
│   ├── store                   # Global state configuration
│   ├── shared                  # Reusable components, hooks and business logic
│   └── test-utils              # Testing utilities and configuration
├── public                      # Public assets and utilities
└── README.md
```

---

## ⌨️ Code Style & Guidelines

Please follow the coding standards defined in:

- **[shadcn](https://ui.shadcn.com/)**
  A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code.

---

## 🛠️ Built With

- **[React](https://nodejs.org/es)**
  Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.

- **[vite](https://vite.dev/)**
  Vite is a blazing fast frontend build tool powering the next generation of web applications.
  
- **[React](https://reactjs.org/docs/getting-started.html)**
  JavaScript library for building user interfaces

- **[shadcn](https://ui.shadcn.com/)**
  A set of beautifully designed components that you can customize, extend, and build on. Start here then make it your own. Open Source. Open Code.

- **[Yarn](https://yarnpkg.com/)**
  Default package manager

- **[React Query](https://react-query.tanstack.com/overview)**
  Data fetching and caching library for React

- **[zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)**
  State management library

---

## ✒️ Author

- **Jose Ortiz**
