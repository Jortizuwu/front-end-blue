# Prueba Técnica de Frontend

## 🚀 Cómo usar la aplicación

### 1. Configuración previa

Antes de iniciar el frontend, asegúrate de tener el **backend en funcionamiento**.

* Clona y configura el backend siguiendo las instrucciones de su repositorio:
  👉 **[backend](https://github.com/Jortizuwu/bank-end-blue)**
* Sigue los pasos indicados tanto en el `README` de este repositorio como en el del backend.

---

### 3. Uso de la aplicación

Al iniciar la aplicación verás una **tarjeta de personaje**.

* Desliza la tarjeta hacia:

  * **Izquierda** → Dislike
  * **Derecha** → Like

> ⚠️ **Importante:**
> Debes **iniciar sesión** para poder reaccionar a los personajes.

---

### 4. Navegación y funcionalidades

Desde la **barra de navegación** puedes explorar las siguientes opciones:

* 📋 Ver los personajes a los que ya has reaccionado
* 🔍 Buscar personajes existentes en la base de datos
* 👍 Ver el personaje con más *Likes*
* 👎 Ver el personaje con más *Dislikes*

---

## 🚀 Primeros pasos

Estas instrucciones te ayudarán a ejecutar el proyecto localmente para desarrollo y pruebas.

---

## 📋 Prerrequisitos

Para ejecutar este proyecto necesitas tener instalado uno de los siguientes:

* **[Node.js](https://nodejs.org/es/download)** ( >= 18)
* **[npm](https://nodejs.org/es/download)** (viene por defecto con node)
* **[yarn](https://yarnpkg.com/getting-started/install)** (opcional)
* **[visual studio](https://code.visualstudio.com/)** (opcional)
---

## ⚙️ Instalación y ejecución del proyecto

### Configuración local (Node.js >= 18)

Instala las dependencias:

```bash
yarn install
# o
npm install
```

---

## 🔐 Variables de entorno

Este proyecto utiliza variables de entorno para configurar servicios externos.

Crea un archivo `.env` en la raíz del proyecto y agrega la siguiente variable:

```env
VITE_API_URL="http://localhost:3000/api"
```

> ⚠️ **Importante:**
> Como este proyecto utiliza **Vite**, todas las variables de entorno deben comenzar con el prefijo `VITE_` para que sean accesibles desde el frontend.

Puedes acceder a esta variable en el código usando:

```ts
import.meta.env.VITE_API_URL;
```

---

Inicia el servidor de desarrollo:

```bash
yarn dev
# o
npm run dev
```

La aplicación estará disponible en:

```
http://localhost:5173/
```

---

## 🦴 Estructura de carpetas

```
.
├── src                         # Código fuente de la aplicación
│   ├── assets                  # Iconos, imágenes y fuentes
│   ├── core                    # Rutas y páginas
│   ├── lib                     # Funciones utilitarias
│   ├── store                   # Configuración del estado global
│   ├── shared                  # Componentes reutilizables, hooks y lógica de negocio
│   └── test-utils              # Utilidades y configuración de pruebas
├── public                      # Recursos públicos
└── README.md
```

---

## ⌨️ Estilo de código y guías

Por favor, sigue los estándares de codificación definidos en:

* **[shadcn/ui](https://ui.shadcn.com/)**
  Un conjunto de componentes bellamente diseñados que puedes personalizar, extender y adaptar a tus necesidades. Código abierto.

---

## 🛠️ Construido con

* **[Node.js](https://nodejs.org/es)**
  Entorno de ejecución JavaScript gratuito, open source y multiplataforma.

* **[Vite](https://vite.dev/)**
  Herramienta de construcción para frontend extremadamente rápida.

* **[React](https://reactjs.org/docs/getting-started.html)**
  Librería de JavaScript para construir interfaces de usuario.

* **[shadcn/ui](https://ui.shadcn.com/)**
  Componentes reutilizables y altamente personalizables.

* **[Yarn](https://yarnpkg.com/)**
  Gestor de paquetes por defecto.

* **[React Query](https://react-query.tanstack.com/overview)**
  Librería para obtención y cacheo de datos en React.

* **[Zustand](https://zustand.docs.pmnd.rs/getting-started/introduction)**
  Librería para manejo de estado global.

---

## ✒️ Autor

* **Jose Ortiz**
