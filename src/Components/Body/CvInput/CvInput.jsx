import React, { useReducer, useRef } from "react";
import "./CvInput.css";
import HeaderInput from "./HeaderInput";
import MainForm from "./MainFrom";

export default function CvInput() {

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
      />

    </div>
  );
}