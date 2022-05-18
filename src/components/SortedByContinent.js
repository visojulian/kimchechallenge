import React from "react";
import Country from "./Country";
import { gql, useQuery } from "@apollo/client";
import filterCountry from "../utils/filterCountry";

const COUNTRIES_QUERY = gql`
    query SortedByContinent($filter: CountryFilterInput){
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

const SortedByContinent = (props) => {

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
    return (
        <div>

            {data && (
                <>
                    {filterCountry(data.countries, filter).map((country, index) => (
                        < Country key={index} country={country} />
                    ))}
                </>
            )}

        </div>
    );
};

export default SortedByContinent;