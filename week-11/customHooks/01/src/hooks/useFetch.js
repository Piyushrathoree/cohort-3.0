import { useState, useEffect } from "react";
export const useFetch = (url) => {
    const [value, setValue] = useState("");

    async function getData() {
        const response = await fetch(url);
        const data = await response.json();
        setValue(data);
    }

    useEffect(() => {
        getData();
    }, [url]);

    return value;
};
