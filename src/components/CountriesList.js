import React from "react";
import Country from "./Country";
import { useQuery, gql } from "@apollo/client";

const COUNTRIES_QUERY = gql`
    {
        countries {
            name
        }
    }
`;

const CountriesList = () => {
    const { data } = useQuery(COUNTRIES_QUERY);

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

export default CountriesList;