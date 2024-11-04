import React, { useReducer, useRef } from "react";
import "./CvInput.css";
import HeaderInput from "./HeaderInput";
import EducationFrom from "./EducationFrom";

export default function CvInput() {

  return (
    <div className="form-container">
      <HeaderInput />
      <EducationFrom />
    </div>
  );
}
