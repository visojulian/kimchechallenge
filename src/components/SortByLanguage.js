import { Typography } from "@mui/material";
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
                    <Typography ml={2} mt={5} variant="h6">{language.name}</Typography>
                    {
                        filtered.map((country, index) => (
                            < Country key={index} country={country} />))
                    }
                </>
            )
            }

        </div >
    );
};

export default SortByLanguage;