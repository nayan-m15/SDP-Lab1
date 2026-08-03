# Running the Todo Application

This document explains how to install, configure, run, test, and build the Todo application for local development.

---

# Prerequisites

Before you begin, ensure the following software is installed:

* **Node.js:** `v24.13.1`
* **npm:** Included with the Node.js installation

---

# Installation

## 1. Clone the Repository

```bash
git clone https://github.com/nayan-m15/SDP-Lab1
cd SDP-Lab1
```

## 2. Install Dependencies

Install all required project dependencies:

```bash
npm install
```

## 3. Generate the Prisma Client

Generate the Prisma client before running the application, ensure it is version 6 of prisma:

```bash
npx prisma generate
```

> **Note**
>
> If the SQLite database file (`dev.db`) is **not** included in the repository, create it by running the database migrations:

```bash
npx prisma migrate dev
```

---

# Running the Application

Start the development server:

```bash
npm run dev
```

Once the server has started, open your browser and navigate to:

```
http://localhost:3000
```

---

# Building for Production

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

---

# Running Tests

Run all unit tests:

```bash
npm run test
```

Run tests in watch mode:

```bash
npm run test:watch
```

Launch the Vitest graphical interface:

```bash
npm run test:ui
```

Generate a code coverage report:

```bash
npm run coverage
```

---

# Linting

Run ESLint to check for code quality issues and style violations:

```bash
npm run lint
```

---

# Documentation

This document was reviewed and edited with the assistance of **ChatGPT (GPT-5.5)** on **3 August 2026**. The review focused on improving readability, consistency, formatting, and overall documentation quality while preserving the original technical content.
