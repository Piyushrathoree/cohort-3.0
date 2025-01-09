import { useState, useEffect } from "react";

const useCurrencyRates = (currency) => {
    const [currencies, setCurrencies] = useState([]); // Available currencies

    const apiUrl = `https://v6.exchangerate-api.com/v6/d3b443627accc8394b79c786/latest/${currency}`; // API URL

    useEffect(() => {
        async function fetchData() {
            // Fetch the data when the baseCurrency changes
            const response =await fetch(apiUrl);
            const data = await response.json(); // Parse the response
            setCurrencies(data.conversion_rates); // Set the currencies
        } // Re-run effect if the baseCurrency changes

        fetchData(); // Fetch the data
    }, [apiUrl, currency]); // Return the currencies

    return currencies;
};

export default useCurrencyRates;
