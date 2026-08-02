"use client";

interface Props {
    search: string;
    setSearch: (v: string) => void;

    topicFilter: string;
    setTopicFilter: (v: string) => void;

    statusFilter: string;
    setStatusFilter: (v: string) => void;

    dateFilter: string;
    setDateFilter: (v: string) => void;
}

export default function FilterBar({

    search,
    setSearch,

    topicFilter,
    setTopicFilter,

    statusFilter,
    setStatusFilter,

    dateFilter,
    setDateFilter,

}: Props) {

    return (

        <>

            <input
                placeholder="Search"
                value={search}
                onChange={(e) =>
                    setSearch(e.target.value)
                }
            />

            <select
                value={topicFilter}
                onChange={(e) =>
                    setTopicFilter(e.target.value)
                }
            >
                <option>All Topics</option>
                <option>University</option>
                <option>Portfolio</option>
                <option>Database</option>
                <option>Personal</option>
            </select>

            <select
                value={statusFilter}
                onChange={(e) =>
                    setStatusFilter(e.target.value)
                }
            >
                <option>All Statuses</option>
                <option>To Do</option>
                <option>In Progress</option>
                <option>Completed</option>
            </select>

            <input
                type="date"
                value={dateFilter}
                onChange={(e) =>
                    setDateFilter(e.target.value)
                }
            />

        </>

    );
}