import React from "react";
import { gql, useQuery } from "@apollo/client";
import filterCountry from "../utils/filterCountry";
import { ContinentName } from "./ContinentName";
import Country from "./Country";

var _ = require('lodash')

const COUNTRIES_QUERY = gql`
    query SortByContinent($filter: CountryFilterInput){
        countries (filter: $filter){
            name
            code
            capital
            emojiU
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
                    <ContinentName name={props.name} />
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