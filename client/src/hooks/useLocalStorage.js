import { useState } from "react"

export const useLocalStorage = (key, initialValue) => {

    const [state, setState] = useState(() => {

        const userData = localStorage.getItem(key);

        if (userData) {
            const getUserData = JSON.parse(userData);
            return getUserData;
        }
        return initialValue;
    });

    const setLocalStorage = (value) => {

        setState(value);

        localStorage.setItem(key, JSON.stringify(value));
    }
    return [
        state,
        setLocalStorage
    ]
}