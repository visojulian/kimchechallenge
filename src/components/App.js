import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './../styles/App.css'
import CountryByContinent from './CountryByContinent';




const App = () => {

  const [order, setOrder] = useState(true);
  const [searchFilter, setSearchFilter] = useState('');

  return (
    <>
      <div>
        <TextField id='searchFilter' variant='filled' label='Search...'
          onChange={
            (e) => { setSearchFilter(e.target.value) }
          } />
      </div>
      <div>
        <Button variant='primary' onClick={() => { setOrder(true) }}>CONTINENT</Button>
        <Button variant='primary' onClick={() => { setOrder(false) }}>LANGUAGE</Button>
      </div>
      {order && (<CountryByContinent filter={searchFilter} />)}
    </>
  );

}

export default App;