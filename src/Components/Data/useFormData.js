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

// Done OK Working

export default function useFormData(x, type) {
    const [educationData, setEducationData] = useState([]);
    const [experienceData, setExperienceData] = useState([]);

    
    
    // if (type === 'Education') {
    //     console.log(type)
    //     const data = {
    //         [x[0].id]:x[0].value,
    //         [x[0].id]:x[0].value,
    //         [x[0].id]:x[0].value,
    //         [x[0].id]:x[0].value,
    //         [x[0].id]:x[0].value,
    //         [x[0].id]:x[0].value,
    //     }
    //     console.log(data)
    //     console.log("educationData", educationData)

    // } else if (type === 'Experience') {
        
    // }

    // const [value, dispatch] = useReducer(render, {
    //     name: "",
    //     email: "",
    //     phone: "",
    //     location: "",
    // });

    return [setEducationData, setExperienceData, educationData, experienceData]
    
}

