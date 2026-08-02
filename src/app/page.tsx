"use client"; 
import Image from "next/image";
import { useEffect, useState } from "react"; 
import { Search, Home as HomeIcon, FolderKanban, Settings } from "lucide-react";
import "./globals.css";
import { useTodos } from "@/hooks/useTodos";  

export default function Home() {

  const {todos, loading, addTodo, editTodo, archive, loadTodos, } = useTodos();
  const [title, setTitle] = useState(""); 
  const [search, setSearch] = useState("");
  const [topicFilter, setTopicFilter] = useState("All Topics");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [dateFilter, setDateFilter] = useState("");
  
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