# Third-Party Code

This project uses the following third-party libraries and packages. Each package has been included either as a direct project dependency, a development dependency, or as a transitive dependency installed automatically by another package.

| **Library / Package**         | **Purpose**                                                                                                                            |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `@emnapi/core`                | Transitive dependency installed automatically by another package. It is not used directly within this project.                         |
| `@emnapi/runtime`             | Transitive dependency installed automatically by another package. It is not used directly within this project.                         |
| `@emnapi/wasi-threads`        | Transitive dependency installed automatically by another package. It is not used directly within this project.                         |
| `@napi-rs/wasm-runtime`       | Transitive dependency installed automatically by another package. It is not used directly within this project.                         |
| `@prisma/client`              | Provides the generated Prisma Client used to communicate with the SQLite database.                                                     |
| `@tailwindcss/postcss`        | Integrates Tailwind CSS with PostCSS during the build process.                                                                         |
| `@testing-library/jest-dom`   | Extends Jest/Vitest with additional assertions for testing rendered React components.                                                  |
| `@testing-library/react`      | Provides utilities for rendering and testing React components.                                                                         |
| `@testing-library/user-event` | Simulates realistic user interactions during component testing.                                                                        |
| `@tybys/wasm-util`            | Transitive dependency installed automatically by another package. It is not used directly within this project.                         |
| `@types/node`                 | Provides TypeScript type definitions for Node.js. Installed by the `create-next-app` project template.                                 |
| `@types/react`                | Provides TypeScript type definitions for React. Installed by the `create-next-app` project template.                                   |
| `@types/react-dom`            | Provides TypeScript type definitions for React DOM. Installed by the `create-next-app` project template.                               |
| `@vitejs/plugin-react`        | Enables React support within Vite for running Vitest.                                                                                  |
| `@vitest/ui`                  | Provides a graphical interface for running and viewing Vitest test results.                                                            |
| `babel-plugin-react-compiler` | Optimizes React components during compilation.                                                                                         |
| `eslint`                      | Performs static code analysis to detect errors and enforce coding standards. Installed by the `create-next-app` project template.      |
| `eslint-config-next`          | Provides the recommended ESLint configuration for Next.js applications. Installed by the `create-next-app` project template.           |
| `jsdom`                       | Simulates a browser environment for frontend testing.                                                                                  |
| `lucide-react`                | Supplies customizable SVG icons for the application's user interface.                                                                  |
| `next`                        | React framework used to build the application. Installed using `npx create-next-app@latest`.                                           |
| `prisma`                      | Object-Relational Mapping (ORM) tool used to model and access the SQLite database.                                                     |
| `react`                       | JavaScript library used to build the application's user interface. Installed using `npx create-next-app@latest`.                       |
| `react-dom`                   | Renders React components into the browser DOM. Installed using `npx create-next-app@latest`.                                           |
| `tailwindcss`                 | Utility-first CSS framework used for application styling.                                                                              |
| `typescript`                  | Adds static typing to improve code quality, maintainability, and developer productivity. Installed using `npx create-next-app@latest`. |
| `vitest`                      | Fast unit testing framework used to test application functionality.                                                                    |

---

## Notes

* **Direct dependencies** are packages intentionally installed for application development.
* **Transitive dependencies** are packages automatically installed because they are required by other dependencies. They are not imported or used directly in the project code.

---

## Document Revision

**Document Status:** Reviewed and edited.

This document was reviewed and reformatted by **OpenAI ChatGPT** using the **GPT-5.5** model on **3 August 2026**. The review focused on improving readability, consistency, formatting, and documentation quality without changing the underlying technical information.
