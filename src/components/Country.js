import React from "react";
import { Card, CardContent } from '@mui/material';

const Country = (props) => {
    const { country } = props;
    return (
        <Card>
            <CardContent>
                <div>{country.name}</div>
                <div>{country.code}</div>
            </CardContent>
        </Card>
    )
};

export default Country;