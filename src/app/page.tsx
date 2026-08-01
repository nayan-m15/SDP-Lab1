"use client"; 
import Image from "next/image";
import { useEffect, useState } from "react"; 
import { Search, Home as HomeIcon, FolderKanban, Settings } from "lucide-react";
import "./globals.css";

export default function Home() {

  const [todos, setTodos] = useState([]); 
  const [title, setTitle] = useState(""); 
  const [search, setSearch] = useState("");
  const [topicFilter, setTopicFilter] = useState("All Topics");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [dateFilter, setDateFilter] = useState("");
  
  async function loadTodos() {

    const res = await fetch("/src/api/todos"); 
    const data = await res.json(); 
    setTodos(data); 
    
  }

  async function addTodo() {
    await fetch("src/api/todos", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify({
        title,
      }), 
    }); 

    setTitle(""); 
    loadTodos(); 
  }

  useEffect(() => {
    loadTodos(); 
  }, []); 

  //test tasks
  const tasks = [
    {
      title: "Finish Next.js Assignment",
      topic: "University",
      status: "To Do",
      due: "2 Aug 2026",
    },
    {
      title: "Design Portfolio Landing Page",
      topic: "Portfolio",
      status: "In Progress",
      due: "5 Aug 2026",
    },
    {
      title: "Submit Database Project",
      topic: "Database",
      status: "Completed",
      due: "30 Jul 2026",
    },
  ];

  const statusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "status-completed";
      case "In Progress":
        return "status-progress";
      default:
        return "status-todo";
    }
};

  return (
  <div className="app-layout">

    {/* Sidebar */}
    <aside className="sidebar">

      <div className="sidebar-header">
        <h1>TaskFlow</h1>
      </div>

      <nav className="sidebar-nav">

        <button className="nav-item active">
          <HomeIcon size={18} />
          <span>Dashboard</span>
        </button>

        <button className="nav-item">
          <FolderKanban size={18} />
          <span>Projects</span>
        </button>

        <button className="nav-item">
          <Settings size={18} />
          <span>Settings</span>
        </button>

      </nav>

    </aside>

    {/* Main */}
    <main className="main-content">

      {/* Header */}

      <header className="topbar">

        <div className="toolbar">

          {/* Search */}

          <div className="search-box">

            <Search size={18} className="search-icon" />

            <input
              type="text"
              placeholder="Search tasks..."
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>

          {/* Filters */}

          <div className="filters">

            <select
              className="filter-select"
              value={topicFilter}
              onChange={(e) => setTopicFilter(e.target.value)}
            >
              <option>All Topics</option>
              <option>University</option>
              <option>Portfolio</option>
              <option>Database</option>
              <option>Personal</option>
            </select>

            <select
              className="filter-select"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option>All Statuses</option>
              <option>To Do</option>
              <option>In Progress</option>
              <option>Completed</option>
            </select>

            <input
              type="date"
              className="filter-date"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
            />

          </div>

        </div>

      </header>

      {/* Content */}

      <section className="content">

        <h2 className="page-title">
          My Tasks
        </h2>

        <div className="task-list">

          {tasks
            .filter((task) => {
              const matchesSearch =
                task.title.toLowerCase().includes(search.toLowerCase());

              const matchesTopic =
                topicFilter === "All Topics" ||
                task.topic === topicFilter;

              const matchesStatus =
                statusFilter === "All Statuses" ||
                task.status === statusFilter;

              const matchesDate =
                !dateFilter ||
                new Date(task.due).toISOString().split("T")[0] === dateFilter;

              return (
                matchesSearch &&
                matchesTopic &&
                matchesStatus &&
                matchesDate
              );
            })
            .map((task, index) => (

              <article
                key={index}
                className="task-card"
              >

                <div className="task-header">

                  <div>

                    <h3 className="task-title">
                      {task.title}
                    </h3>

                    <p className="task-meta">
                      Topic:
                      <span>{task.topic}</span>
                    </p>

                    <p className="task-meta">
                      Due:
                      <span>{task.due}</span>
                    </p>

                  </div>

                  <span
                    className={`status-badge ${statusColor(task.status)}`}
                  >
                    {task.status}
                  </span>

                </div>

              </article>

            ))}

        </div>

      </section>

    </main>

  </div>
);
}

/* 
return (
        <main className="p-10">
            {todos.map((todo: any) => (
                <div key={todo.id}>
                    {todo.title}
                </div>
            ))}
        </main>
    );

*/