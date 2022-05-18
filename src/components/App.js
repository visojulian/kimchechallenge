import { TextField } from '@mui/material';
import React, { useState } from 'react';
import './../styles/App.css'
import CountryByContinent from './CountryByContinent';




const App = () => {
  const [searchFilter, setSearchFilter] = useState('');


  return (
    <>
      <div>
        <TextField id='searchFilter' variant='filled' label='Search...'
          onChange={
            (e) => { setSearchFilter(e.target.value) }
          } />
      </div>
      <CountryByContinent filter={searchFilter} />
    </>
  );

}

export default App;