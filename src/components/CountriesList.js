import React from "react";
import Country from "./Country";

const CountriesList = () => {
    const countriesToRender = [
        {
            "name": "Andorra"
        },
        {
            "name": "United Arab Emirates"
        },
        {
            "name": "Afghanistan"
        },
        {
            "name": "Antigua and Barbuda"
        }
    ];

    return (
        <div>
            {countriesToRender.map((country, index) => (
                < Country key={index} country={country} />
            ))}
        </div>
    );
};

export default CountriesList;