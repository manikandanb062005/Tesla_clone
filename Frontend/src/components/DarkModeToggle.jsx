import React, { useState, useEffect } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <button
      className="btn-toggle"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}

export default DarkModeToggle;
