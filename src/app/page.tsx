"use client"; 
import Image from "next/image";
import { useEffect, useState } from "react"; 
import { Search, Home as HomeIcon, FolderKanban, Settings } from "lucide-react";




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
        return "bg-emerald-500/15 text-emerald-500";
      case "In Progress":
        return "bg-amber-500/15 text-amber-500";
      default:
        return "bg-blue-500/15 text-blue-500";
    }
  };

  return (
    <div className="flex h-screen bg-zinc-100 dark:bg-zinc-950">

      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
            TaskFlow
          </h1>
        </div>

        <nav className="space-y-2 px-4">
          <button className="flex w-full items-center gap-3 rounded-xl bg-zinc-100 px-4 py-3 text-left transition hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700">
            <HomeIcon size={18} />
            Dashboard
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <FolderKanban size={18} />
            Projects
          </button>

          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 transition hover:bg-zinc-100 dark:hover:bg-zinc-800">
            <Settings size={18} />
            Settings
          </button>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex flex-1 flex-col overflow-hidden">

        {/* Header */}
        <header className="border-b border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* Search */}
            <div className="relative w-full max-w-md">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400"
                size={18}
              />

              <input
                type="text"
                placeholder="Search tasks..."
                className="w-full rounded-xl border border-zinc-200 bg-zinc-100 py-3 pl-10 pr-4 outline-none transition focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-800"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3">

              {/* Topic */}
              <select className="rounded-xl border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm outline-none transition focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-800" value={topicFilter}
                onChange={(e) => setTopicFilter(e.target.value)}>
                <option>All Topics</option>
                <option>University</option>
                <option>Portfolio</option>
                <option>Database</option>
                <option>Personal</option>
              </select>

              {/* Status */}
              <select className="rounded-xl border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm outline-none transition focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-800"  value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}>
                <option>All Statuses</option>
                <option>To Do</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>

              {/* Due Date */}
              <input
                type="date"
                className="rounded-xl border border-zinc-200 bg-zinc-100 px-4 py-3 text-sm outline-none transition focus:border-blue-500 dark:border-zinc-700 dark:bg-zinc-800"
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              />

            </div>

          </div>

        </header>

        {/* Content */}
        <section className="flex-1 overflow-y-auto p-8">

          <h2 className="mb-6 text-3xl font-bold dark:text-white">
            My Tasks
          </h2>

          <div className="space-y-5">

            {tasks.filter((task) => {
              const matchesSearch =
                task.title.toLowerCase().includes(search.toLowerCase());

              const matchesTopic =
                topicFilter === "All Topics" || task.topic === topicFilter;

              const matchesStatus =
                statusFilter === "All Statuses" || task.status === statusFilter;

              const matchesDate =
                !dateFilter ||
                new Date(task.due).toISOString().split("T")[0] === dateFilter;

              return (
                matchesSearch &&
                matchesTopic &&
                matchesStatus &&
                matchesDate
              );
            }).map((task, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex items-start justify-between">

                  <div>
                    <h3 className="text-lg font-semibold dark:text-white">
                      {task.title}
                    </h3>

                    <p className="mt-2 text-sm text-zinc-500">
                      Topic:{" "}
                      <span className="font-medium text-zinc-700 dark:text-zinc-300">
                        {task.topic}
                      </span>
                    </p>

                    <p className="mt-1 text-sm text-zinc-500">
                      Due Date:{" "}
                      <span className="font-medium text-zinc-700 dark:text-zinc-300">
                        {task.due}
                      </span>
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${statusColor(
                      task.status
                    )}`}
                  >
                    {task.status}
                  </span>
                </div>
              </div>
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