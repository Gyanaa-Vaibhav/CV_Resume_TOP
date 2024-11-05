import React, { useContext } from "react";
import { Data } from "../Cvmain";
import './MainOutput.css'

export default function MainOutput() {
    const { value1, value2 } = useContext(Data)
    const { setEducation, setExperience, education, experience } = value2

    const educationData = education.map(x => {
        return x.map(a => {
            return (
                <div className="data">
                    <div className="container">

                        <div className="date&city">
                            <p>{a[1].startdate} - {a[1].enddate}</p>
                            <p>{a[1].location}</p>
                        </div>

                        <div className="info">
                            <p className="place">{a[1].school}</p>
                            <p className="desc">{a[1].degree}</p>
                        </div>
                    </div>
                </div>
            )
        })
    })

    const experienceData = experience.map(x => {
        return x.map(a => {
            console.log("A", a)

            return (
                <div className="data">
                    <div className="container">
                        <div className="date&city">
                            <p>{a[1].startdate} - {a[1].enddate}</p>
                            <p>{a[1].location}</p>
                        </div>

                        <div className="info">
                            <p className="place">{a[1].companyname}</p>
                            <p className="position">{a[1].position}</p>
                            <p className="desc">{a[1].description}</p>
                        </div>
                    </div>
                </div>
            )
        })
    })
    console.log(experienceData.length)
    console.log(0)


    return (
        <div className="body">

            <div className="data">
                {!!educationData.length &&
                    <div>
                        <h3 className="output_title">Education</h3>
                        {educationData}
                    </div>
                }

                {!!experienceData.length &&
                    <div>
                        <h3 className="output_title">Experience</h3>
                        {experienceData}
                    </div>
                }
            </div>

        </div>
    )
}
