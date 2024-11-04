import React, { createContext, useContext } from "react";
import "./Cvmain.css";
import CvInput from "./CvInput/CvInput.jsx";
import CvOutput from "./CVOutput/CvOutput.jsx";
import useHeaderData from "../Data/useHeaderData.js";

export const Data = createContext();

export default function Cvmain() {
    const [headerValue, dispatch] = useHeaderData();

    return (
        <main>
            <Data.Provider value={{ headerValue, dispatch }}>
                <CvInput />
                <CvOutput />
            </Data.Provider>
        </main>
    );
}
