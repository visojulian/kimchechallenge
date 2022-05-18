import React, { useState } from "react";
import { TextField } from "@mui/material";
import Country from "./Country";
import { gql, useQuery } from "@apollo/client";
import filterCountry from "../utils/filterCountry";

const COUNTRIES_QUERY = gql`
    {
        countries {
            name
            code
        }
    }
`;

const CountriesList = () => {
    const [searchFilter, setSearchFilter] = useState('');
    const { data } = useQuery(COUNTRIES_QUERY);

    return (
        <div>
            <div>
                <TextField id="searchField" label="Search..." variant="filled"
                    onChange={(e) => setSearchFilter(e.target.value)} />
            </div>
            {data && (
                <>
                    {filterCountry(data.countries, searchFilter).map((country, index) => (
                        < Country key={index} country={country} />
                    ))}
                </>
            )}

        </div>
    );
};

export default CountriesList;