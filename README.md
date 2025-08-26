**26 August, 2025**

- [Build a React app from Scratch](https://react.dev/learn/build-a-react-app-from-scratch)
- Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.

```bash
npm create vite@latest my-app -- --template react
```

- The build tools listed above start off with a client-only, single-page app (SPA), but don’t include any further solutions for common functionality like routing, data fetching, or styling.

### Routing

<details>
  <summary>Routing</summary>

- Routing determines what content or pages to display when a user visits a particular URL.
- handle
  - nested routes
  - route parameters
  - query parameters
- Routers are a core part of modern applications, and are usually integrated with data fetching (including `prefetching` data for a whole page for faster loading), `code splitting` (to minimize client bundle sizes), and page rendering approaches (to decide how each page gets generated).

- Using: 1. React Router and 2. Tanstack Router
</details>

<details>
<summary>React State & Lifecycle in Class Component</summary>

- class component vs function component
- class components are stateful component that means class component has its own class.
- State - data of the component (that changes) - a js object
- state vs props
- never ever change props inside the component
- never change state directly (use setState method in case of class component)
- [React Doc](https://legacy.reactjs.org/docs/state-and-lifecycle.html)
</details>
