import React from "react";
import { Card, CardContent } from '@mui/material';

const Country = (props) => {
    const { country } = props;
    return (
        <Card>
            <CardContent>{country.name}</CardContent>
        </Card>
    )
};

export default Country;