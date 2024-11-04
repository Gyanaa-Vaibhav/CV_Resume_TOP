import { useReducer } from "react";

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

export default function useHeaderData() {
    
    const [value, dispatch] = useReducer(render, {
        name: "",
        email: "",
        phone: "",
        location: "",
    });

    return [value,dispatch]
}
