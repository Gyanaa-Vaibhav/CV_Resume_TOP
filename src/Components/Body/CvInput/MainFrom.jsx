import React, { useContext, useState } from "react";
import './MainForm.css'
import useFromFilter from "../../Data/useFormFilter";
import { Data } from "../Cvmain";

function dataProcessing(x, type) {

  if (type === 'Education') {
    const data = [x[0].value,{
      [x[0].id]: x[0].value,
      [x[1].id]: x[1].value,
      [x[2].id]: x[2].value,
      [x[3].id]: x[3].value,
      [x[4].id]: x[4].value,
      [x[0].id]: x[0].value,
    }]
    return [data]
    
  } else if (type === 'Experience') {
    const data = [x[0].value, {
      [x[0].id]: x[0].value,
      [x[1].id]: x[1].value,
      [x[2].id]: x[2].value,
      [x[3].id]: x[3].value,
      [x[4].id]: x[4].value,
      [x[5].id]: x[5].value,
    }]
    return [data]
  }
}

// Done OK Working

export default function MainForm({ title, list_data, set , data }) {
  const { value1, value2 } = useContext(Data)
  const { setEducation, setExperience, education, experience } = value2
  
  const [open, setOpen] = useState(false)
  const [onEdit, setOnEdit] = useState(true)


  // Rendering Data for Form Titles
  let schoolTitle
  if (data && data.length >= 1) {
    schoolTitle = data.map(x => x.map(a => a[0]))
  }
  
  // Taking Props from user for inputs and Optionals
  const formListToRendered = list_data.map((x) => useFromFilter(x))


  return (
    <form
      className="main-from"
      onSubmit={(e) => {
        // Prevents Default
        e.preventDefault();

        // Processed Data into Objects
        const d = dataProcessing(e.target, title)

        // Checks for Type of Data Input
        set(prev => [...prev,d]) 
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

      
      {open && data && data.length < 1 &&
        <div>
          {formListToRendered}
          <div className="btn">
            <button type="reset">Reset</button>
            <button type="submit">Save</button>
          </div>
        </div>
      }

      {open && data.length >= 1 &&
        <div>
          {schoolTitle}
        </div>
      }
    </form>
  );
}