import React from "react";

const TaskList = () => {
  return (
    <div className="task-grid">
      <div className="task-card" style={{ position: "relative" }}>
        <h3>complete react assignment</h3>
        <p>finish task manager UI and styling</p>

        <div className="task-meta">
          <span>Due:2026-02-10</span>
          <span className="priority-badge priority-high">High</span>
        </div>

        <div className="task-action">
          <button
            className="btn-icon"
            style={{ background: "#00d2ff" }}
            title="Edit task"
          >
            ✏️
          </button>
          
          <button
            className="btn-icon"
            style={{ background: "#00b894" }}
            title="Mark complete"
          >
            ✔️
          </button>

          <button
            className="btn-icon"
            style={{ background: "#ff416c" }}
            title="Delete task"
          >🗑️</button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
