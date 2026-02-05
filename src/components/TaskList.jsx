import React from "react";

const TaskList = ({ tasks}) => {
  return (
    <div className="task-grid">
      {tasks.map((task)=>(
        

        <div className="task-card" style={{ position: "relative" }}>
          <h3>{tasks.title}</h3>
          <p>{tasks.description}</p>

          <div className="task-meta">
            <span>{tasks.dueDate}</span>
            <span className="priority-badge priority-high">{tasks.priority}</span>
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
            >
              🗑️
            </button>
          </div>
        </div>
               ))}

    </div>
  );
};

export default TaskList;
