import React, { useContext } from "react";
import HeaderOutput from "./HeaderOutput";
import "./CvOutput.css";
import SaveCV from "./SaveCV";

export default function CvOutput() {
  return (
    <>
    <div className="Output" id="cv-report">
      <HeaderOutput />
    </div>
    </>
  );
}
