import React, { useContext } from "react";
import "./CvInput.css";
import HeaderInput from "./HeaderInput";
import MainForm from "./MainFrom";
import { Data } from "../Cvmain";

// Done Ok Working

export default function CvInput() {
  const { value1, value2 } = useContext(Data)
  const { setEducation, setExperience, education, experience } = value2

  console.log("Experience",experience)

  return (
    <div className="form-container">

      <HeaderInput />
      <MainForm
        key={'Education'}
        title={"Education"}
        list_data={
          ['School',
            'Degree',
            'Start Date',
            'End Date',
            ['Location', 'Optional']
          ]
        }
        set={setEducation}
        data={education}
      />

      <MainForm
        key={'Experience'}
        title={"Experience"}
        list_data={
          ['Company Name',
            'Position',
            'Start Date',
            'End Date',
            ['Location', 'Optional'],
            ['Description','Optional']
          ]
        }
        set={setExperience}
        data={experience}
      />

    </div>
  );
}