# Database Schema

## Overview

This database currently consists of a single table:

- `Todo`

Since there is only one table, there are **no foreign key relationships**.

---

# Entity Relationship Diagram (ERD)

```text
+------------------------------------------------------+
|                      Todo                            |
+------------------------------------------------------+
| PK  id          : Int                                |
|     title       : String                             |
|     description : String?                            |
|     dueDate     : DateTime?                          |
|     topic       : String                             |
|     category    : String?                            |
|     status      : String                             |
|     createdAt   : DateTime                           |
|     archived    : Boolean                            |
|     updatedAt   : DateTime                           |
+------------------------------------------------------+
```

---

# Tables

## Todo

Stores all tasks created by users.

| Column | Type | Nullable | Default | Description |
|---------|------|----------|---------|-------------|
| `id` | Int | No | Auto Increment | Primary key |
| `title` | String | No | - | Task title |
| `description` | String | Yes | `NULL` | Optional task description |
| `dueDate` | DateTime | Yes | `NULL` | Due date of the task |
| `topic` | String | No | - | Topic the task belongs to |
| `category` | String | Yes | `NULL` | Optional category |
| `status` | String | No | - | Current task status |
| `createdAt` | DateTime | No | `now()` | Date the task was created |
| `archived` | Boolean | No | `false` | Indicates whether the task is archived |
| `updatedAt` | DateTime | No | Auto Updated | Last modification timestamp |

---

# Primary Keys

| Table | Primary Key |
|---------|-------------|
| Todo | `id` |

---

# Foreign Keys

There are currently **no foreign keys** defined in the schema.

---

# Relationships

```text
No relationships exist.

Todo
```

---

# Notes

- Every task is uniquely identified by `id`.
- `description`, `dueDate`, and `category` are optional fields.
- `createdAt` is automatically populated when a task is created.
- `updatedAt` is automatically updated whenever the record changes.
- `archived` defaults to `false`.
- This document was AI generated from the provided database schema. Model used to generate it: Chatgpt Web Gpt-5.5. 