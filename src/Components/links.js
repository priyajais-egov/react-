import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import { CardContent } from '@material-ui/core';

export default class Links extends Component {
render() {
    return (
        <Card>
            <CardContent>
                <b>Links Works:</b><br></br>
                https://egov-micro-dev.egovernments.org/citizen/<br></br>
            </CardContent>
        </Card>
    );
    }
}