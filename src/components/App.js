import { Box, Button, Container, Stack, TextField, Typography, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import './../styles/App.css'
import CountryByContinent from './CountryByContinent';
import { CountryByLanguage } from './CountryByLanguage';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    white: "#ffffff",
  },
});



const App = () => {

  const [order, setOrder] = useState(true);
  const [searchFilter, setSearchFilter] = useState('');

  return (
    <ThemeProvider theme={theme} >
      <Container fixed >
        <Box m={4}>
          <Typography variant='h3' ml={0}>Country Search</Typography>
          <Typography variant='subtitle1' color="#bcbfbf" >Just find countries in Trevor Blades API</Typography>
        </Box>
        <Box>
          <TextField id='searchFilter' variant='filled'
            sx={{
              backgroundColor: "#eef2f2"
            }}
            label='Search...' fullWidth
            onChange={
              (e) => { setSearchFilter(e.target.value) }
            } />
        </Box>
        <Container>
          <Stack spacing={5} direction="row" mt={4} sx={{ display: "inline-block" }}>
            <Typography variant='h5' mr={30} sx={{ display: "inline-block" }}>Group by:</Typography>
            <Button variant='contained' color={order ? "primary" : "white"} onClick={() => { setOrder(true) }}>CONTINENT</Button>
            <Button variant='contained' color={order ? "white" : "primary"} onClick={() => { setOrder(false) }}>LANGUAGE</Button>
          </Stack>
        </Container>
        {order && (<CountryByContinent filter={searchFilter} />)}
        {!order && (<CountryByLanguage filter={searchFilter} />)}
      </Container>
    </ThemeProvider>
  );

}

export default App;