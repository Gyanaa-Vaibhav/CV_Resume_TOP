import React, { createContext, useContext } from "react";
import "./Cvmain.css";
import CvInput from "./CvInput/CvInput.jsx";
import CvOutput from "./CVOutput/CvOutput.jsx";
import useHeaderData from "../Data/useHeaderData.js";
import useFormData from "../Data/useFormData";

export const Data = createContext();

export default function Cvmain() {
    const [setEducation, setExperience, education, experience] = useFormData()
    const [headerValue, dispatch] = useHeaderData();

    return (
        <main>

            <Data.Provider
                value={{
                    header: {
                        headerValue,
                        dispatch
                    },
                    
                    value2: {
                        setEducation,
                        setExperience,
                        education,
                        experience
                    }
                }}
            >
                <CvInput />
                <CvOutput />

            </Data.Provider>
            
        </main>
    );
}
