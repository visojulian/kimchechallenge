import { gql, useQuery } from '@apollo/client';
import React from 'react';
import SortByContinent from './SortByContinent';

const CONTINENTS = gql`
  query allContinents {
    continents {
      name
      code
    }

  }
`;


const CountryByContinent = (props) => {
    const { data } = useQuery(CONTINENTS);

    return (
        <>
            {data && (
                <div>
                    {data.continents.map((continent, index) => <div key={index}>
                        <SortByContinent code={continent.code} filter={props.filter} name={continent.name} />
                    </div>)}
                </div>
            )}
        </>
    )
}


export default CountryByContinent;