import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      style={{
        background: theme === "light" ? "#f4f4f4" : "#333",
        padding: "10px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        <Link
          to="/"
          style={{
            color: theme === "light" ? "#333" : "#fff",
            marginRight: "20px",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
        <Link
          to="/tasks"
          style={{
            color: theme === "light" ? "#333" : "#fff",
            textDecoration: "none",
          }}
        >
          Tasks
        </Link>
      </div>

      <button onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
};

export default Navbar;
