import React, { useContext } from "react";
import { Data } from "../Cvmain";
import "./HeaderInput.css";

export default function HeaderInput() {
    const { value, dispatch } = useContext(Data);

    return (
        <form className="headerform" onSubmit={(e) => e.preventDefault()}>
            <h2>Personal Details</h2>
            <label htmlFor="name">
                Full Name <br />
                <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={(e) => {
                        dispatch({
                            type: "name",
                            payload: e.target.value,
                        });
                    }}
                />
            </label>
            <label htmlFor="email">
                {" "}
                Email <br />
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => {
                        dispatch({
                            type: "email",
                            payload: e.target.value,
                        });
                    }}
                />
            </label>
            <label htmlFor="phone">
                Phone <br />
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    onChange={(e) => {
                        dispatch({
                            type: "phone",
                            payload: e.target.value,
                        });
                    }}
                />
            </label>
            <label htmlFor="">
                Location <br />
                <input
                    type="location"
                    name="location"
                    id="location"
                    onChange={(e) => {
                        dispatch({
                            type: "location",
                            payload: e.target.value,
                        });
                    }}
                />
            </label>
            <br />
        </form>
    );
}
