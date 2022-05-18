import React from "react";
import Country from "./Country";
import { gql, useQuery } from "@apollo/client";

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

    return (
        <div>

            {data && (
                <>
                    {data.countries.map((country, index) => (
                        < Country key={index} country={country} />
                    ))}
                </>
            )}

        </div>
    );
};

export default SortedByContinent;