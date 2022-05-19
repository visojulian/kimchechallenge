import React from "react";
import { gql, useQuery } from "@apollo/client";
import filterCountry from "../utils/filterCountry";
import Country from "./Country";
import { Typography } from "@mui/material";

var _ = require('lodash')

const COUNTRIES_QUERY = gql`
    query SortByContinent($filter: CountryFilterInput){
        countries (filter: $filter){
            name
            code
            capital
            emoji
            native
            phone
            currency
            states{
                name
                }
            languages {
                name
            }
        }
    }
`;

const SortByContinent = (props) => {

    const { data } = useQuery(COUNTRIES_QUERY,
        {
            variables: {
                "filter":
                {
                    "continent":
                        { "eq": props.code }
                }
            }
        }
    );
    const filter = props.filter;
    let filtered;
    if (data) { filtered = filterCountry(data.countries, filter) }
    return (
        <div>
            {data && !_.isEmpty(filtered) && (
                <>
                    <Typography ml={2} mt={5} variant="h6">{props.name}</Typography>
                    {
                        filtered.map((country, index) => (
                            < Country key={index} country={country} />))
                    }
                </>
            )}

        </div>
    );
};

export default SortByContinent;