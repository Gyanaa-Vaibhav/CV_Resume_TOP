import React, { createContext, useContext } from "react";
import "./Cvmain.css";
import CvInput from "./CvInput/CvInput.jsx";
import CvOutput from "./CVOutput/CvOutput.jsx";
import useHeaderData from "../Data/useHeaderData.js";

export const Data = createContext();

export default function Cvmain() {
    const a = "Hello"
    const [headerValue, dispatch] = useHeaderData();

    return (
        <main>

            <Data.Provider
                value={{
                    header: { headerValue, dispatch },
                    value2: { a }
                }}
            >
                <CvInput />
                <CvOutput />

            </Data.Provider>
            
        </main>
    );
}
