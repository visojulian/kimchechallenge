import React from "react";
import { Box, Card, CardContent, Divider, Typography } from '@mui/material';




const Country = (props) => {
    const { country } = props;


    return (
        <Card variant="outlined" sx={{ display: "inline-block", width: 380, height: 200, margin: 2 }} >
            <Box ml={2} mt={2} mb={0}>
                {country.emoji}
                <Typography
                    ml={2}
                    mb={0}
                    sx={{ display: "inline-block" }}
                    variant='h6'>
                    {country.name}
                </Typography>
            </Box>
            <CardContent>
                <Divider />
                <Typography color="text.secondary" mt={1} mb={1}>{country.native}</Typography>
                <Typography color="text.primary">{country.capital}</Typography>
                <Typography color="text.primary">Currency: {country.currency}</Typography>
                <Typography color="text.primary">Phone: +{country.phone}</Typography>
            </CardContent>
        </Card >
    )
};

export default Country;