import React, { useContext } from "react";
import HeaderOutput from "./HeaderOutput";
import "./CvOutput.css";
import MainOutput from "./MainOutput";


export default function CvOutput() {
  return (
    <>
    <div className="Output" id="cv-report">
        <HeaderOutput />
        <MainOutput />
    </div>
    </>
  );
}
