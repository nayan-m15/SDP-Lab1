# Todo Application

A modern task management application built with **Next.js**, **React**, **Prisma**, and **SQLite**. The application allows users to create, organize, and manage their tasks while ensuring that all data is persisted between application restarts.

The project demonstrates a full-stack web application with a responsive user interface, persistent storage, filtering and sorting capabilities, and automated testing.

---

# Features

The application provides the following functionality:

* Create new tasks.
* Edit existing tasks.
* Archive tasks instead of permanently deleting them.
* View archived tasks at any time.
* Store the following information for each task:

  * Title
  * Description
  * Due Date
  * Topic
* Assign one of three fixed task statuses:

  * **Todo**
  * **In-Progress**
  * **Complete**
* Automatically indicate when a task is overdue.
* View tasks in a sortable and filterable list.
* Sort and filter tasks by:

  * Topic
  * Status
  * Due Date
* Persist all task information using an SQLite database, ensuring data remains available after restarting the application.

---

# Technology Stack

* Next.js
* React
* TypeScript
* Prisma ORM
* SQLite
* Tailwind CSS
* Vitest
* ESLint

---

# Prerequisites

Before running the project, ensure the following software is installed:

* **Node.js:** `v24.13.1`
* **npm:** Included with the Node.js installation

---

# Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/nayan-m15/SDP-Lab1
cd SDP-Lab1
```

---

## 2. Install Dependencies

```bash
npm install
```
```bash
npm install prisma@6 @prisma/client@6
```

```bash
copy .env.example .env
```
---

## 3. Generate the Prisma Client

```bash
npx prisma generate
```

---

## 4. Create the Database 

If the SQLite database file is **not** included in the repository, create it by running the Prisma migrations:

```bash
npx prisma migrate dev
```

---

## 5. Start the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

---

# Building the Application

Create an optimized production build:

```bash
npm run build
```

Run the production build:

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

Run ESLint to check the project for style and programming errors:

```bash
npm run lint
```

---

# Data Persistence

Task information is stored using an SQLite database managed through Prisma ORM.

All tasks persist between application restarts, ensuring that previously created or modified tasks remain available.

---

# AI Disclosure

This repository contains code that was developed with the assistance of generative Artificial Intelligence (AI) tools. All AI-generated content has been reviewed, tested, and, where necessary, modified by the project author before inclusion in the repository.

---

# Documentation Notice

This README was generated and reviewed with the assistance of **ChatGPT (GPT-5.5)** on **3 August 2026**. 
