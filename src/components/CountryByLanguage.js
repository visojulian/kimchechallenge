import React from 'react';
import { gql, useQuery } from '@apollo/client';
import filterByLanguage from '../utils/filterByLanguage';
import SortByLanguage from './SortByLanguage';

const LANGUAGES_COUNTRIES = gql`
    query allLanguagesAndCountries {
        languages {
            name
        }
        countries {
            code
            emoji
            capital
            name
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

export const CountryByLanguage = (props) => {
    const { data } = useQuery(LANGUAGES_COUNTRIES);

    return (
        <>
            {data && (
                <div>
                    {data.languages.map((language, index) => <div key={index}>
                        <SortByLanguage filter={props.filter} language={language} countries={filterByLanguage(data.countries, language)} />
                    </div>)}
                </div>
            )}
        </>
    )
}
