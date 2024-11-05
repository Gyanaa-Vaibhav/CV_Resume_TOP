import { useReducer, useState } from "react";

function render(value, action) {

    switch (action.type) {
        case "name":
            return {
                ...value,
                name: action.payload,
            };
        case "email":
            return {
                ...value,
                email: action.payload,
            };
        case "phone":
            return {
                ...value,
                phone: action.payload,
            };
        case "location":
            return {
                ...value,
                location: action.payload,
            };

        default:
            console.warn(`Unhandled action type: ${action.type}`);
            return value;
    }
}


export default function useFormData(x, type) {
    const educationData = []
    const experienceData = [];
    
    
    if (type === 'Education') {
        console.log(type)
        const data = {
            [x[0].id]:x[0].value,
            [x[0].id]:x[0].value,
            [x[0].id]:x[0].value,
            [x[0].id]:x[0].value,
            [x[0].id]:x[0].value,
            [x[0].id]:x[0].value,
        }
        console.log(data)
    } else if (type === 'Experience') {
        
    }

    // const [value, dispatch] = useReducer(render, {
    //     name: "",
    //     email: "",
    //     phone: "",
    //     location: "",
    // });

    return [educationData, experienceData]
}

// const [educationData, setEducationData] = [];