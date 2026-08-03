"use client";
import { useMemo, useState } from "react";
import { Search,  Home as HomeIcon, FolderKanban, Settings, } from "lucide-react";

import "./globals.css";

import { useTodos } from "@/hooks/useTodos";
import TaskCard from "@/components/TaskCard";
import TaskForm from "@/components/TaskForm";
import EditTaskModal from "@/components/EditTaskModal";
import { Todo } from "@/types/todo";

export default function Home() {
  const { todos, loading, addTodo, editTodo, archive } = useTodos();
  const [showTaskForm, setShowTaskForm] = useState(false);

  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [archiveFilter, setArchiveFilter] = useState<"active" | "archived" | "all">("active");

  const [search, setSearch] = useState("");
  const [topicFilter, setTopicFilter] = useState("All Topics");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [dateFilter, setDateFilter] = useState("");

  const topics = [...new Set(todos.map((todo) => todo.topic))];
  const filteredTodos = useMemo(() => {
    return todos.filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesTopic =
        topicFilter === "All Topics" || task.topic === topicFilter;

      const matchesStatus =
        statusFilter === "All Statuses" || task.status === statusFilter;

      const matchesDate =
        !dateFilter ||
        (task.dueDate && task.dueDate.slice(0, 10) === dateFilter);

      const matchesArchive = archiveFilter === "all" ||
      (archiveFilter === "active" && !task.archived) ||
      (archiveFilter === "archived" && task.archived);

      return (
        matchesSearch &&
        matchesTopic &&
        matchesStatus &&
        matchesDate &&
        matchesArchive
      );
    });
  }, [todos, search, topicFilter, statusFilter, dateFilter]);

  return (
    <div className="app-layout">
    
      {/* Main */}
      <main className="main-content">

        {/* Header */}
        <header className="topbar">
        
          <div className="toolbar">

            <div className="sidebar-header">
              <h1>TaskFlow</h1>
            </div>

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

            <div className="archive-toggle">

              <button
                  className={`archive-btn ${archiveFilter === "active" ? "active" : ""}`}
                  onClick={() => setArchiveFilter("active")}
              >
                  Active
              </button>

              <button
                  className={`archive-btn ${archiveFilter === "archived" ? "active" : ""}`}
                  onClick={() => setArchiveFilter("archived")}
              >
                  Archived
              </button>

              <button
                  className={`archive-btn ${archiveFilter === "all" ? "active" : ""}`}
                  onClick={() => setArchiveFilter("all")}
              >
                  All
              </button>

          </div>

            <div className="filters">

              <select
                className="filter-select"
                value={topicFilter}
                onChange={(e) => setTopicFilter(e.target.value)}
              >

                <option value="All Topics">
                  All Topics
                </option>

                {topics.map((topic) => (

                  <option
                    key={topic}
                    value={topic}
                  >
                    {topic}
                  </option>

                ))}

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

          <div className="page-header">

              <h2 className="page-title">
                  My Tasks
              </h2>

              <button
                  className="new-task-btn"
                  onClick={() => setShowTaskForm(true)}
              >
                  + New Task
              </button>

          </div>
          {showTaskForm && (

              <TaskForm
                  onSubmit={async (data) => {

                      await addTodo(data);

                      setShowTaskForm(false);

                  }}
                  onCancel={() => setShowTaskForm(false)}
              />

          )}
        
          {loading ? (

            <p className="empty-state">
              Loading tasks...
            </p>

          ) : filteredTodos.length === 0 ? (

            <p className="empty-state">
              No tasks found.
            </p>

          ) : (

            <div className="task-list">

              {filteredTodos.map((todo) => (

                <TaskCard
                  key={todo.id}
                  todo={todo}
                  onEdit={(task) => {
                    setEditingTodo(task);
                    setShowEditModal(true);
                  }}
                  onArchive={archive}
                />

              ))}

            </div>

          )}

        </section>

        <EditTaskModal
          open={showEditModal}
          todo={editingTodo}
          onClose={() => {
            setShowEditModal(false);
            setEditingTodo(null);
          }}
          onSave={async (data) => {

            if (!editingTodo) return;

            await editTodo(editingTodo.id, data);

            setShowEditModal(false);
            setEditingTodo(null);

          }}
        />

      </main>

    </div>
  );
}