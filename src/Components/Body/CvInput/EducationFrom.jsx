import React, { useState } from "react";
import './EducationFrom.css'

export default function EducationFrom() {

  const [open,setOpen] = useState(false)

    return (
      <form
        className="education-from"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="title">
          <h2>Education </h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
            fill="#00000"
            style={{ transform: open && "rotate(90deg)" }}
            onClick={() => setOpen((prev) => !prev)}
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </div>
        {open && (
          <div>
            <h1 className="Test">Test</h1>
          </div>
        )}
      </form>
    );
}