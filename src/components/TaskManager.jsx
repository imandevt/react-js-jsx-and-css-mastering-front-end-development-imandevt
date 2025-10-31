import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import Card from "./Card";

const TaskManager = () => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  // Add new task
  const addTask = () => {
    if (input.trim() === "") return;
    const newTask = { id: Date.now(), text: input, completed: false };
    setTasks([...tasks, newTask]);
    setInput("");
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle completion
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div
      style={{
        minHeight: "100vh", // ✅ full page height
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        background: "linear-gradient(to bottom right, #f0f4f8, #dfe7ec)", // soft background
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          backgroundColor: "white",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          minHeight: "90vh", // ensures inner card also expands
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "20px",
            textAlign: "center",
            color: "#333",
          }}
        >
          📝 Task Manager
        </h2>

        {/* Input Section */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a new task..."
            style={{
              flex: "1 1 60%",
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "1rem",
            }}
          />
          <button
            onClick={addTask}
            style={{
              flex: "1 1 30%",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "6px",
              padding: "10px",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            Add
          </button>
        </div>

        {/* Filter Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          {["all", "active", "completed"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              style={{
                flex: "1 1 30%",
                padding: "8px",
                backgroundColor: filter === type ? "#007bff" : "#f0f0f0",
                color: filter === type ? "white" : "black",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "0.95rem",
              }}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Task List */}
        <div style={{ flexGrow: 1, overflowY: "auto" }}>
          {filteredTasks.length === 0 ? (
            <p
              style={{
                textAlign: "center",
                color: "#666",
                fontSize: "1rem",
                marginTop: "50px",
              }}
            >
              No tasks found.
            </p>
          ) : (
            filteredTasks.map((task) => (
              <Card
                key={task.id}
                title={task.text}
                content={
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: "10px",
                    }}
                  >
                    <span
                      onClick={() => toggleComplete(task.id)}
                      style={{
                        cursor: "pointer",
                        textDecoration: task.completed
                          ? "line-through"
                          : "none",
                        color: task.completed ? "#888" : "#000",
                        flex: "1 1 auto",
                        wordBreak: "break-word",
                      }}
                    >
                      {task.text}
                    </span>
                    <button
                      onClick={() => deleteTask(task.id)}
                      style={{
                        backgroundColor: "#dc3545",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                        padding: "6px 12px",
                        cursor: "pointer",
                        fontSize: "0.9rem",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                }
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
