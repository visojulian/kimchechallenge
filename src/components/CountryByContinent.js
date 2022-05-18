import { gql, useQuery } from '@apollo/client';
import React from 'react';
import SortedByContinent from './SortedByContinent';

const CONTINENTS = gql`
  query allContinents {
    continents {
      name
      code
    }

  }
`;


const CountryByContinent = () => {
    const { data } = useQuery(CONTINENTS);
    return (
        <>
            {data && (
                <div>
                    {data.continents.map((continent, index) => <div key={index}>
                        <h3>
                            {continent.name}
                        </h3>
                        <SortedByContinent code={continent.code} />
                    </div>)}
                </div>
            )}
        </>
    )
}


export default CountryByContinent;