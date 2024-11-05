import React, { useRef, useState } from "react";
import './MainForm.css'
import useFromFilter from "../../Data/useFormFilter";
import useFormData from "../../Data/useFormData";

export default function MainForm({ title, list_data }) {
  const [open, setOpen] = useState(false)
  const formListToRendered = list_data.map((x) => useFromFilter(x))
  useFormData()

  return (
    <form
      className="main-from"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div
        className="title"
        style={{
          height: !open && "30px"
        }}
      >
        <h2>{title}</h2>
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

      {open &&
        <div>
          {formListToRendered}
          <div className="btn">
            <button type="reset">Reset</button>
            <button type="submit">Save</button>
          </div>
        </div>
      }
    </form>
  );
}