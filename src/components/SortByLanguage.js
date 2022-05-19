import React from "react";
import filterCountry from "../utils/filterCountry";
import Country from "./Country";



var _ = require('lodash')

const SortByLanguage = (props) => {
    const { filter, countries, language } = props;
    const filtered = filterCountry(countries, filter);

    return (
        <div>
            {!_.isEmpty(filtered) && (
                <>
                    <h3>{language.name}</h3>
                    {
                        filtered.map((country, index) => (
                            < Country key={index} country={country} />))
                    }
                </>
            )}

        </div>
    );
};

export default SortByLanguage;